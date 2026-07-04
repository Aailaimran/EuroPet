'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { springGentle } from '@/lib/motion'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setIsVisible(true)
      else setIsVisible(false)
    }

    // passive: true is required for iOS scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    // Standard smooth scroll
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // iOS fallback: if smooth scroll behaviour is not supported,
    // directly set scrollTop on both documentElement and body
    if (
      typeof CSS !== 'undefined' &&
      !CSS.supports('scroll-behavior', 'smooth')
    ) {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
  }

  return (
    // AnimatePresence mode="wait" prevents overlapping enter/exit animations
    // that can block iOS touch events by keeping stale DOM nodes alive
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.1, transition: springGentle }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          // iOS safe area: positioned above the WhatsApp button, which itself
          // sits above the home indicator bar.
          // bottom value: safe-area-inset-bottom + WhatsApp button (56px) + gap (28px)
          className="fixed right-4 sm:right-6 z-[998] w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center hover:bg-gold-light transition-colors"
          style={{
            bottom: 'max(env(safe-area-inset-bottom) + 88px, 96px)',
            // Force iOS tap recognition via GPU layer
            WebkitTransform: 'translateZ(0)',
            transform: 'translateZ(0)',
            // Apple minimum tap target
            minWidth: '44px',
            minHeight: '44px',
            // Remove 300ms tap delay
            touchAction: 'manipulation',
            // Remove grey tap highlight on iOS
            WebkitTapHighlightColor: 'transparent',
            boxShadow: 'var(--shadow-gold)',
          }}
          aria-label="Back to top"
          data-cursor="hover"
          type="button"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
