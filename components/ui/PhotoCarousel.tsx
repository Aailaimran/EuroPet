'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselImage {
  src: string
  alt: string
  exists: boolean
}

const CAROUSEL_IMAGES: CarouselImage[] = [
  {
    src: '/images/about/image1.jpg',
    alt: 'Euro Pet Express — professional pet transport service UK to Europe',
    exists: true,
  },
  {
    src: '/images/about/image2.jpg',
    alt: 'Euro Pet Express — dogs safely transported in individual crates',
    exists: true,
  },
  {
    src: '/images/about/image3.jpg',
    alt: 'Euro Pet Express — DEFRA authorised transport vehicle for pet relocation',
    exists: true,
  },
  {
    src: '/images/about/image4.png',
    alt: 'Euro Pet Express — welfare-first pet transport with regular stops',
    exists: true,
  },
  {
    src: '/images/about/image5.png',
    alt: 'Euro Pet Express — trusted pet courier service UK Romania Serbia Germany',
    exists: true,
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

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex(prev => 
      prev === CAROUSEL_IMAGES.length - 1 ? 0 : prev + 1
    )
  }, [])

  const goToPrev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex(prev => 
      prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1
    )
  }, [])

  const goToIndex = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [isPaused, goToNext])

  // Touch/swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext()
      else goToPrev()
    }
    setTouchStart(null)
  }

  const currentImage = CAROUSEL_IMAGES[currentIndex]

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main image container */}
      <div 
        className="relative w-full h-[400px] md:h-[500px] lg:h-[560px] rounded-2xl overflow-hidden bg-brand-darkSecondary shadow-2xl border border-brand-gold/20"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence 
          initial={false} 
          custom={direction}
          mode="popLayout"
        >
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { 
                type: 'spring', 
                stiffness: 300, 
                damping: 35 
              },
              opacity: { duration: 0.3 },
            }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority={currentIndex === 0}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Image counter badge — top right */}
        <div className="absolute top-4 right-4 bg-brand-dark/70 backdrop-blur-sm rounded-full px-3 py-1 z-10">
          <span className="text-white text-xs font-medium">
            {currentIndex + 1} / {CAROUSEL_IMAGES.length}
          </span>
        </div>

        {/* Left arrow */}
        <button
          onClick={goToPrev}
          aria-label="Previous photo"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-brand-dark/70 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right arrow */}
        <button
          onClick={goToNext}
          aria-label="Next photo"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-brand-dark/70 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-dark hover:border-brand-gold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-brand-dark/60 to-transparent pointer-events-none z-[5]" />

      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            aria-label={`Go to photo ${index + 1}`}
            className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-gold ${
              index === currentIndex
                ? 'w-8 h-2 bg-brand-gold'
                : 'w-2 h-2 bg-gray-300 hover:bg-brand-gold/50'
            }`}
          />
        ))}
      </div>

    </div>
  )
}
