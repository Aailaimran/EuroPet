'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react'
import CountryFlag from '@/components/CountryFlag'
import MagneticButton from '@/components/ui/MagneticButton'
import { cardVariant, springGentle } from '@/lib/motion'
import type { Route } from '@/lib/routesData'

interface RouteCardProps {
  route: Route
  index: number
}

export default function RouteCard({ route, index }: RouteCardProps) {
  return (
    <motion.article
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.12 }}
      whileHover={{
        scale: 1.02,
        y: -8,
        transition: springGentle,
      }}
      className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-brand-gold transition-all duration-300 overflow-hidden flex flex-col w-full"
    >
      <div className="bg-brand-dark p-5 md:p-6 relative flex flex-col items-center justify-center gap-2 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.18),transparent_55%)]" />
        <div className="relative z-10 flex items-center gap-4">
          <CountryFlag countryCode={route.originCode} className="w-12 h-auto rounded shadow-lg ring-1 ring-white/15" />
          <ArrowRight className="w-5 h-5 text-brand-gold" />
          <CountryFlag countryCode={route.destinationCode} className="w-12 h-auto rounded shadow-lg ring-1 ring-white/15" />
        </div>
        <h3 className="relative z-10 font-display text-base md:text-lg font-bold text-white text-center mt-1 leading-tight">
          {route.name}
        </h3>
        <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
          {route.departureFrequency}
        </p>
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-1">
        <p className="text-sm leading-relaxed text-gray-600">
          {route.shortDescription}
        </p>

        <div className="mt-4 flex items-center gap-2 text-gray-400 text-xs italic">
          <Clock className="h-4 w-4 text-brand-gold shrink-0" />
          <span>Journey duration varies — contact us for current estimates</span>
        </div>

        <div className="mt-4">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
            Pickup Cities
          </div>
          <div className="flex flex-wrap gap-2">
            {route.pickupCities.map((city) => (
              <span key={city} className="rounded-full border border-gray-200 bg-[#F8F6F1] px-2.5 py-1 text-xs md:text-sm text-gray-600">
                {city}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 border-t border-gray-200 pt-4">
          <ul className="space-y-2">
            {route.routeHighlights.slice(0, 4).map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-sm text-gray-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <MagneticButton className="mt-5">
          <Link
            href={`/contact?route=${route.slug}`}
            data-cursor="hover"
            className="block w-full rounded bg-navy py-3 text-center text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-gold hover:text-navy"
          >
            Request Quote
          </Link>
        </MagneticButton>
      </div>
    </motion.article>
  )
}
