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
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 0.8,
          // touchMultiplier: 0 disables touch-based smooth scroll on non-iOS
          // touch devices (e.g. Android tablets with desktop UA) for safety
          touchMultiplier: 0,
        })

        function raf(time: number) {
          lenis.raf(time)
          rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)
      } catch (error) {
        console.warn('[SmoothScrollProvider] Failed to initialise Lenis:', error)
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
