'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  strength?: number
  className?: string
}

/**
 * isTouchDevice — Detects whether the device uses touch input.
 *
 * On iOS, mouse events (onMouseMove, onMouseEnter, onMouseLeave) do NOT
 * behave the same way as on desktop. The magnetic cursor-tracking effect:
 *   1. Has no cursor to track on touch screens
 *   2. The mouse event listeners interfere with native touch handling
 *   3. Can completely block tap detection on iOS WebKit
 *
 * We bypass the entire magnetic wrapper on touch devices and render
 * children directly to ensure clean, reliable tap events on iOS.
 */
function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

export default function MagneticButton({
  children,
  strength = 0.4,
  className = '',
}: MagneticButtonProps) {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch(isTouchDevice())
  }, [])

  // On touch devices (iOS, Android) — render children directly with NO wrapper.
  // This ensures clean tap detection: no motion.div, no event listeners.
  if (isTouch) {
    return <>{children}</>
  }

  // Desktop only — full magnetic spring effect
  return (
    <MagneticDesktop strength={strength} className={className}>
      {children}
    </MagneticDesktop>
  )
}

/**
 * MagneticDesktop — The actual magnetic effect, rendered only on non-touch devices.
 * Extracted to a separate component so hooks (useMotionValue, useSpring) are
 * only called on desktop, avoiding any touch-device interference.
 */
function MagneticDesktop({
  children,
  strength,
  className,
}: {
  children: React.ReactNode
  strength: number
  className: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      x.set((e.clientX - centerX) * strength)
      y.set((e.clientY - centerY) * strength)
    },
    [x, y, strength]
  )

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}
