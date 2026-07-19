'use client'
import { useEffect } from 'react'

/**
 * isIOS — Detects iOS devices including iPadOS 13+ (which reports MacIntel).
 *
 * CRITICAL: Lenis smooth scroll overrides native iOS momentum scrolling.
 * This causes the entire page to become unresponsive to touch events on
 * iPhone and iPad. We detect iOS and skip Lenis initialisation entirely.
 * iOS has superior built-in momentum scrolling that doesn't need enhancement.
 */
function isIOS(): boolean {
  if (typeof window === 'undefined') return false
  // Classic iOS UA check
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) return true
  // iPadOS 13+ presents as MacIntel but has touch support
  if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) return true
  return false
}

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Do NOT initialise Lenis on iOS devices.
    // iOS native momentum scrolling is far superior and Lenis will freeze the page.
    if (isIOS()) {
      if (process.env.NODE_ENV === 'development') {
        console.log('[SmoothScrollProvider] iOS detected — using native momentum scroll, Lenis disabled.')
      }
      return
    }

    let lenis: any = null
    let rafId: number | null = null

    const initLenis = async () => {
      try {
        const LenisModule = await import('@studio-freight/lenis')
        const Lenis = LenisModule.default

        lenis = new Lenis({
          // Scroll duration — higher = slower and more luxurious feeling
          duration: 1.2,
          // Smooth easing curve — exponential ease-out for premium feel
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          // Smooth wheel scrolling on desktop
          smoothWheel: true,
          // Wheel scroll speed multiplier — natural speed
          wheelMultiplier: 1.0,
          // Disable touch scroll on mobile (let native handle it)
          touchMultiplier: 0,
        })

        // Connect Lenis to requestAnimationFrame
        function raf(time: number) {
          lenis.raf(time)
          rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)
      } catch (error) {
        console.warn('[SmoothScrollProvider] Failed to initialise Lenis:', error)
        // Fail silently — native scroll will be used as fallback
      }
    }

    initLenis()

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      if (lenis) lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
