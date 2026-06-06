'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import SplitText from '@/components/ui/SplitText'
import MagneticButton from '@/components/ui/MagneticButton'
import CountryFlag from '@/components/CountryFlag'
import { ROUTES, Route } from '@/lib/routesData'
import {
  fadeUpVariant,
  cardVariant,
  staggerContainerVariant,
  springGentle,
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activeRoutes.map((route: Route) => (
            <motion.div
              key={route.id}
              variants={cardVariant}
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: springGentle,
              }}
              className="group relative rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                boxShadow: 'var(--shadow-md)',
                transition: 'box-shadow 0.4s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-gold-intense)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)'
              }}
            >
              {/* Shimmer overlay */}
              <div
                className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, rgba(201,168,76,0.08) 50%, transparent 60%)',
                  backgroundSize: '300% 100%',
                  animation: 'shimmer 0.6s linear forwards',
                }}
              />

              {/* Flag banner header */}
              <div className="h-28 flex items-center justify-center gap-4 bg-gradient-to-br from-navy to-navy-light relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="relative z-10 flex items-center gap-3">
                  <CountryFlag countryCode={route.originCode} className="w-10 h-auto rounded shadow-sm" />
                  <span className="text-brand-gold text-xl font-bold">→</span>
                  <CountryFlag countryCode={route.destinationCode} className="w-10 h-auto rounded shadow-sm" />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 relative z-20">
                <h3 className="font-display text-navy font-bold text-lg mb-1">
                  {route.name}
                </h3>
                <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-3">
                  {route.departureFrequency}
                </p>

                <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-1">
                  {route.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {route.pickupCities.slice(0, 4).map((city) => (
                    <span key={city} className="text-[11px] bg-off-white text-gray-600 px-2 py-0.5 rounded-full border border-gray-200">
                      {city}
                    </span>
                  ))}
                  {route.pickupCities.length > 4 && (
                    <span className="text-[11px] text-gold font-medium px-2 py-0.5">
                      +{route.pickupCities.length - 4} more
                    </span>
                  )}
                </div>

                <MagneticButton>
                  <Link
                    href={`/routes#${route.slug}`}
                    data-cursor="hover"
                    className="block text-center bg-navy text-white text-xs uppercase tracking-wider font-semibold py-3 rounded hover:bg-gold hover:text-navy transition-all"
                  >
                    View Details
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
