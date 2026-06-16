'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { staggerContainerVariant, cardVariant, fadeUpVariant } from '@/lib/motion'

const MANIFESTO_ITEMS = [
  {
    id: 1,
    promise: "We won't move a puppy before it's legally and physically ready.",
    detail: 'No "just this once."',
  },
  {
    id: 2,
    promise: "We won't overload a van to make a journey pay.",
    detail: 'Every dog gets its own secure crate with room to settle.',
  },
  {
    id: 3,
    promise: "We won't drive through to hit a deadline.",
    detail: 'Every route is planned around welfare stops, not the clock.',
  },
  {
    id: 4,
    promise: "We won't travel on paperwork that isn't right.",
    detail: "If the documents aren't clean, the dog doesn't move.",
  },
  {
    id: 5,
    promise: "We won't leave you wondering.",
    detail: 'Photos, updates and a real person on WhatsApp the whole way.',
  },
]

export default function ManifestoSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="bg-brand-dark py-16 md:py-24 relative overflow-hidden">

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section header */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-2xl mb-14"
        >
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Our Standards
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            The lines we won&apos;t cross
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mb-6" />
          <p className="text-gray-400 text-base leading-relaxed">
            Plenty of people will move your dog. Here is what makes us different. These are the promises we keep no matter the route, the deadline, or the money.
          </p>
        </motion.div>

        {/* Manifesto items */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-4"
        >
          {MANIFESTO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariant}
              className="group flex items-start gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-brand-gold/30 transition-all duration-300"
            >
              {/* Number */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-gold/10 group-hover:bg-brand-gold/20 group-hover:border-brand-gold/60 transition-all duration-300">
                <span className="text-brand-gold font-playfair font-bold text-sm">
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <p className="text-white text-base md:text-lg font-semibold leading-snug mb-1">
                  {item.promise}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {/* Gold accent line on hover */}
              <div className="hidden md:block w-0.5 h-full bg-brand-gold/0 group-hover:bg-brand-gold/40 transition-all duration-300 self-stretch rounded-full flex-shrink-0" />

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
