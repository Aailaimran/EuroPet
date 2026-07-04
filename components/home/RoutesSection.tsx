'use client'

import Link from 'next/link'
import { ArrowLeftRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { staggerContainerVariant, fadeUpVariant, cardVariant, easeOutExpo } from '@/lib/motion'
import CountryFlag from '@/components/CountryFlag'
import SplitText from '@/components/ui/SplitText'
import { ROUTES } from '@/lib/routesData'



export default function RoutesSection() {
  const { ref, isInView } = useScrollAnimation()

  const activeRoutes = ROUTES
    .filter(r => r.isActive)
    .sort((a, b) => a.displayOrder - b.displayOrder)

  return (
    <section className="relative bg-off-white py-20 overflow-hidden">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(201,168,76,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header — kept identical to original */}
        <div className="text-center mb-14">
          <h2 className="font-display text-navy text-3xl md:text-4xl font-bold uppercase tracking-wider mb-3">
            <SplitText text="Our Routes" />
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: easeOutExpo }}
            className="w-16 h-0.5 bg-gold mx-auto mb-4 origin-left"
          />
          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Regular scheduled transport routes between the UK and Europe.
          </motion.p>
        </div>

        {/* Clean minimal route rows — 2-column grid */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-10 md:mb-12"
        >
          {activeRoutes.map((route) => (
            <motion.div
              key={route.id}
              variants={cardVariant}
              className="flex items-center gap-4 p-4 md:p-5 rounded-xl border border-gray-100 bg-white hover:border-brand-gold/40 hover:bg-brand-gold/[0.02] hover:shadow-md transition-all duration-200 group"
            >
              {/* Flags */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <CountryFlag
                  countryCode="GB"
                  className="w-7 h-auto rounded-sm shadow-sm"
                />
                <ArrowLeftRight className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <CountryFlag
                  countryCode={route.destinationCode}
                  className="w-7 h-auto rounded-sm shadow-sm"
                />
              </div>

              {/* Route name + frequency */}
              <div className="flex-1 min-w-0">
                <p className="font-display font-bold text-brand-dark text-sm md:text-base truncate">
                  {route.name}
                </p>
                <p className="text-gray-400 text-xs mt-0.5">
                  {route.departureFrequency}
                </p>
              </div>

              {/* Status indicator */}
              <div className="flex-shrink-0">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400 shadow-sm shadow-green-400/50" />
                  <span className="text-gray-400 text-[10px] uppercase tracking-wider hidden sm:block">
                    Active
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Single CTA */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col items-center gap-3"
        >
          <Link
            href="/routes"
            className="inline-flex items-center gap-3 bg-brand-gold text-brand-dark font-bold text-sm px-10 py-4 rounded-xl hover:bg-brand-goldHover transition-all duration-200 uppercase tracking-widest shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            View Details
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <p className="text-gray-400 text-xs text-center">
            Full route details, pickup cities and scheduling available on the routes page
          </p>
        </motion.div>

      </div>
    </section>
  )
}
