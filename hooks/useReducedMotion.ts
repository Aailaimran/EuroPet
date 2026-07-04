'use client'
import { useState, useEffect } from 'react'

/**
 * useIsIOS — Detects iOS devices on the client side.
 *
 * This hook is safe to use in SSR/Next.js because it initialises to false
 * (the safe default for server rendering) and updates on mount.
 *
 * Returns true for: iPhone, iPod, iPad, and iPadOS 13+ (which uses MacIntel UA).
 */
export function useIsIOS(): boolean {
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    const iOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    setIsIOS(iOS)
  }, [])

  return isIOS
}

/**
 * useReducedMotion — Respects the user's prefers-reduced-motion OS setting.
 *
 * On iOS, this can be toggled via: Settings → Accessibility → Reduce Motion.
 * When true, all heavy animations should be simplified or disabled.
 *
 * Framer Motion's LazyMotion supports reducedMotion="user" which uses this
 * media query automatically, but this hook is useful for manual checks.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => {
      setReduced(e.matches)
    }

    mediaQuery.addEventListener('change', handler)
    return () => {
      mediaQuery.removeEventListener('change', handler)
    }
  }, [])

  return reduced
}
