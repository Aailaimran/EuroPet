'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Clock, ArrowRight, PawPrint } from 'lucide-react'
import { PET_IMAGES } from '@/lib/petImages'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import MeshGradient from '@/components/ui/MeshGradient'
import FloatingOrbs from '@/components/ui/FloatingOrbs'
import MagneticButton from '@/components/ui/MagneticButton'
import {
  fadeUpVariant,
  slideInRightVariant,
  easeOutExpo,
} from '@/lib/motion'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section ref={sectionRef} className="relative min-h-screen [min-height:100dvh] flex items-center bg-[#0a0e1a] overflow-hidden">
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
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] py-24 pt-32">

          {/* Left Content */}
          <div className="w-full max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeOutExpo }}
              className="inline-block text-gold uppercase tracking-[0.2em] text-xs font-bold mb-6 border border-gold/30 px-4 py-1.5 rounded-full backdrop-blur-sm bg-gold/5"
            >
              DEFRA Authorised Transport
            </motion.span>

            {/* 1A: Updated headline */}
            <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              <span className="text-white block">
                Your dog is family.
              </span>
              <span className="text-brand-gold block mt-2">
                Every journey treats it that way.
              </span>
            </h1>

            {/* 1B: Updated subheadline */}
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Euro Pet Express was founded by someone who spent twenty years moving dogs across Europe the way this industry does it, and decided it had to be done better. Welfare first. Paperwork right. No corners cut, ever.
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: easeOutExpo }}
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
              transition={{ duration: 0.5, delay: 1.2, ease: easeOutExpo }}
              className="flex items-center gap-2 text-gray-400 text-sm mt-6"
            >
              <Clock className="w-4 h-4" />
              Typical response time: within 12–24 hours
            </motion.div>

            {/* Trust badge strip removed — content covered by TrustBar component below hero */}

            {/* 1D: Founder teaser */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6, ease: easeOutExpo }}
              className="mt-6 flex items-start gap-3"
            >
              <div className="w-0.5 h-12 bg-brand-gold/40 shrink-0 mt-1" />
              <div>
                <p className="text-gray-400 text-sm leading-relaxed italic max-w-sm">
                  &ldquo;I&apos;ve been around dogs my whole life, and for the last 20 years I&apos;ve been moving them across Europe and into the UK.&rdquo;
                </p>
                <a
                  href="/about#founder-story"
                  className="text-brand-gold text-xs font-semibold uppercase tracking-wider hover:underline mt-2 inline-flex items-center gap-1"
                >
                  Read our story <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Image frame */}
          <motion.div
            variants={slideInRightVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="w-full relative"
          >
            <motion.div
              style={{ y: imageY }}
              className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full min-h-[250px] lg:min-h-[500px] rounded-2xl border-2 border-gold/20 overflow-hidden bg-navy-light gpu"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: easeOutExpo }}
              data-cursor="view"
            >
              <div
                className="absolute inset-0"
                style={{ boxShadow: 'var(--shadow-gold)' }}
              />
              <Image
                src="/images/heroimage.png"
                alt="Happy golden retriever travelling safely with Euro Pet Express"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />

              {/* Floating glassmorphism badge */}
              <div
                className="absolute bottom-4 left-4 z-20 bg-brand-dark/80 backdrop-blur-sm rounded-xl px-3 py-2 md:px-4 md:py-3 border border-brand-gold/20 flex items-center gap-2 md:gap-3"
              >
                <PawPrint className="w-4 h-4 md:w-5 md:h-5 text-brand-gold shrink-0" />
                <div>
                  <p className="text-white text-xs md:text-sm font-semibold">Safe &amp; Comfortable</p>
                  <p className="text-gray-300 text-[10px] md:text-xs">Climate-controlled • Individual crates</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
