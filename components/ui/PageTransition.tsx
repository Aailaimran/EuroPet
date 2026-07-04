'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { easeOutExpo } from '@/lib/motion'
import { useEffect, useState } from 'react'

/**
 * PageTransition — wrapped in iOS detection.
 *
 * On iOS, complex AnimatePresence transitions can:
 * 1. Block touch events during the exit animation
 * 2. Cause the page to appear unresponsive/frozen
 * 3. Conflict with Framer Motion internal state on WebKit
 *
 * On iOS (or when reduced motion is preferred), we render children
 * directly without any page transition animation.
 */

function isIOSClient(): boolean {
  if (typeof window === 'undefined') return false
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  )
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    setIsIOS(isIOSClient())

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', listener)
    } else {
      mediaQuery.addListener(listener)
    }
    
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', listener)
      } else {
        mediaQuery.removeListener(listener)
      }
    }
  }, [])

  // Skip transitions on iOS or when OS reduces motion preference is set
  if (prefersReducedMotion || isIOS) {
    return <>{children}</>
  }

  return (
    // mode="wait" ensures exit animation fully completes before entering the
    // next page — prevents DOM overlap that blocks touch events on iOS
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #0a0e1a, rgba(201,168,76,0.2))',
            transformOrigin: 'top',
          }}
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: easeOutExpo }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

