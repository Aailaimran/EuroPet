'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// UPDATE THESE PATHS with exact filenames found in Step 1A
const VAN_IMAGES = [
  {
    src: '/images/Euro Pet Van 2.png',
    alt: 'Euro Pet Express transport van — exterior view',
  },
  {
    src: '/images/Euro Pet Van 5.png',
    alt: 'Euro Pet Express transport van — interior crates',
  },
  {
    src: '/images/Euro Pet Van 6.png',
    alt: 'Euro Pet Express transport van — rear loading',
  },
  {
    src: '/images/Euro Pet Van 7.jpg',
    alt: 'Euro Pet Express transport van — side view',
  },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
}

export default function VanCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex(prev =>
      prev === VAN_IMAGES.length - 1 ? 0 : prev + 1
    )
  }, [])

  const goToPrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex(prev =>
      prev === 0 ? VAN_IMAGES.length - 1 : prev - 1
    )
  }, [])

  // Auto advance every 4 seconds
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(goToNext, 4000)
    return () => clearInterval(interval)
  }, [isPaused, goToNext])

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? goToNext() : goToPrev()
    }
    setTouchStart(null)
  }

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden 
      shadow-2xl border border-brand-gold/20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image container */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 35 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <Image
              src={VAN_IMAGES[currentIndex].src}
              alt={VAN_IMAGES[currentIndex].alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 
        bg-gradient-to-t from-brand-dark/60 to-transparent 
        pointer-events-none z-10" />

        {/* Image counter */}
        <div className="absolute top-3 right-3 z-20 
        bg-brand-dark/70 backdrop-blur-sm rounded-full 
        px-3 py-1">
          <span className="text-white text-xs font-medium">
            {currentIndex + 1} / {VAN_IMAGES.length}
          </span>
        </div>

        {/* Left arrow */}
        <button
          onClick={goToPrev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 
          z-20 w-9 h-9 rounded-full bg-brand-dark/70 
          backdrop-blur-sm border border-white/10 
          flex items-center justify-center text-white 
          hover:bg-brand-gold hover:text-brand-dark 
          hover:border-brand-gold transition-all duration-200"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Right arrow */}
        <button
          onClick={goToNext}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 
          z-20 w-9 h-9 rounded-full bg-brand-dark/70 
          backdrop-blur-sm border border-white/10 
          flex items-center justify-center text-white 
          hover:bg-brand-gold hover:text-brand-dark 
          hover:border-brand-gold transition-all duration-200"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 
      z-20 flex items-center gap-2">
        {VAN_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            aria-label={`Go to image ${index + 1}`}
            className={`transition-all duration-300 rounded-full
            ${index === currentIndex
              ? 'w-6 h-2 bg-brand-gold'
              : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
