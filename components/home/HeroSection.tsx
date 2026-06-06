'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ShieldCheck, Clock, PawPrint } from 'lucide-react'
import { PET_IMAGES } from '@/lib/petImages'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import MeshGradient from '@/components/ui/MeshGradient'
import FloatingOrbs from '@/components/ui/FloatingOrbs'
import SplitText from '@/components/ui/SplitText'
import MagneticButton from '@/components/ui/MagneticButton'
import {
  fadeUpVariant,
  fadeUpFastVariant,
  scaleInVariant,
  slideInRightVariant,
  staggerContainerVariant,
  easeOutExpo,
  springSnappy,
} from '@/lib/motion'

const badges = [
  'DEFRA Type 2\nAuthorised',
  'TRACES\nRegistered',
  '18-Crate\nVehicle',
  'Scheduled Eastern\nEurope Routes',
]

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center bg-[#0a0e1a] overflow-hidden">
      {/* Layer 1: Base color is set by bg class */}

      {/* Layer 2: Animated mesh gradient */}
      <MeshGradient />

      {/* Layer 3: Floating orbs */}
      <FloatingOrbs />

      {/* Layer 4: Noise texture overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Layer 5: Radial gradient vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(10,14,26,0.6) 100%)',
        }}
      />

      {/* Layer 6: All hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-24 pt-32">

          {/* Left Content */}
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
              className="inline-block text-gold uppercase tracking-[0.2em] text-xs font-bold mb-6 border border-gold/30 px-4 py-1.5 rounded-full backdrop-blur-sm bg-gold/5"
            >
              DEFRA Authorised Transport
            </motion.span>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-2 text-white">
              <SplitText text="Premium Dog Transport" delay={0.3} />
            </h1>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-gold">
              <SplitText text="Between the UK and Europe" delay={0.7} />
            </h1>

            <motion.p
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.0 }}
              className="text-gray-300 text-lg leading-relaxed mb-10 max-w-lg"
            >
              DEFRA authorised long-distance journeys supporting rescues, breeders, shelters and private owners across Romania, Poland and Bulgaria.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              variants={staggerContainerVariant}
              initial="hidden"
              animate="visible"
              custom={{ delayChildren: 1.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
            >
              {badges.map((badge, i) => (
                <motion.div
                  key={i}
                  variants={scaleInVariant}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center gap-2 p-3 rounded-xl border border-gold/15 bg-white/[0.04] backdrop-blur-xl"
                  style={{ boxShadow: '0 2px 12px rgba(201, 168, 76, 0.1)' }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, transition: springSnappy }}
                    className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center"
                  >
                    <ShieldCheck className="w-4 h-4 text-gold" />
                  </motion.div>
                  <span className="text-white text-[10px] font-medium leading-tight whitespace-pre-line">{badge}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5, ease: easeOutExpo }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton>
                <Link
                  href="/contact"
                  data-cursor="hover"
                  className="bg-gold text-navy font-bold px-8 py-4 rounded hover:bg-gold-light transition-all uppercase tracking-wider text-sm text-center flex items-center justify-center gap-2"
                  style={{ boxShadow: 'var(--shadow-gold)' }}
                >
                  REQUEST TRANSPORT QUOTE <PawPrint className="w-4 h-4" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/routes"
                  data-cursor="hover"
                  className="block border-2 border-white/30 text-white px-8 py-4 rounded hover:bg-white/10 transition-all uppercase tracking-wider text-sm text-center"
                >
                  VIEW UPCOMING ROUTES
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Response time */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.7, ease: easeOutExpo }}
              className="flex items-center gap-2 text-gray-400 text-sm mt-6"
            >
              <Clock className="w-4 h-4" />
              Typical response time: within 12–24 hours
            </motion.div>
          </div>

          {/* Right: Image frame */}
          <motion.div
            variants={slideInRightVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="hidden lg:block"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative w-full h-[500px] rounded-2xl border-2 border-gold/20 overflow-hidden bg-navy-light gpu"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              data-cursor="view"
            >
              <div
                className="absolute inset-0"
                style={{ boxShadow: 'var(--shadow-gold)' }}
              />
              <Image
                src={PET_IMAGES.hero}
                alt="Happy golden retriever travelling safely with Euro Pet Express"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />

              {/* Floating glassmorphism badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6, ease: easeOutExpo }}
                className="absolute bottom-6 left-6 right-6 flex justify-center"
              >
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-5 py-3 flex items-center gap-3 shadow-lg">
                  <PawPrint className="w-6 h-6 text-gold flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-semibold">Safe &amp; Comfortable</p>
                    <p className="text-gray-300 text-xs">Climate-controlled • Individual crates</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
