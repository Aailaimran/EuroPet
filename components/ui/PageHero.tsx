'use client'

import { motion } from 'framer-motion'
import SplitText from '@/components/ui/SplitText'
import { fadeUpVariant, easeOutExpo } from '@/lib/motion'

interface PageHeroProps {
  title: string
  subtitle: string
  breadcrumb?: string
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="bg-[#0a0e1a] py-14 md:py-20 relative overflow-hidden">
      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: easeOutExpo }}
          className="text-gray-500 text-xs tracking-wider mb-4"
        >
          {breadcrumb || 'Home / ' + title}
        </motion.div>

        <h1 className="font-display text-4xl md:text-5xl font-bold">
          <SplitText text={title} delay={0.1} />
        </h1>

        <motion.p
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="text-gold text-lg mt-3 max-w-2xl"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: easeOutExpo }}
          className="w-16 h-0.5 bg-gold mt-6 origin-left"
        />
      </div>
    </section>
  )
}
