'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import SplitText from '@/components/ui/SplitText'
import RouteCard from '@/components/ui/RouteCard'
import { ROUTES, Route } from '@/lib/routesData'
import {
  fadeUpVariant,
  staggerContainerVariant,
  easeOutExpo,
} from '@/lib/motion'

interface RoutesSectionProps {
  routes?: Route[]
}

export default function RoutesSection({ routes = ROUTES }: RoutesSectionProps) {
  const { ref, isInView } = useScrollAnimation()

  const activeRoutes = routes.filter(r => r.isActive).sort((a, b) => a.displayOrder - b.displayOrder)

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

        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {activeRoutes.slice(0, 4).map((route: Route, index: number) => (
            <RouteCard key={route.id} route={route} index={index} />
          ))}
        </motion.div>

        {/* View All Routes Button */}
        <div className="flex justify-center mt-10">
          <Link
            href="/routes"
            className="inline-flex items-center gap-2 
            bg-brand-gold text-brand-dark font-bold 
            text-sm px-8 py-4 rounded-lg 
            hover:bg-brand-goldHover transition-colors 
            uppercase tracking-wider shadow-md
            hover:shadow-lg hover:scale-105 
            transition-all duration-200"
          >
            View All Routes
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
        </div>
      </div>
    </section>
  )
}
