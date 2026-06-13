import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarDays } from 'lucide-react'
import NewsletterSignup from '@/components/ui/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Euro Pet Express | Premium Pet Transport UK & Europe',
  description: 'DEFRA authorised premium pet transport between the UK and Europe. Safe, compliant, scheduled departures for dogs, cats and small animals.',
}
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import RoutesSection from '@/components/home/RoutesSection'
import VehicleSection from '@/components/home/VehicleSection'
import CtaStrip from '@/components/home/CtaStrip'
import { ROUTES } from '@/lib/routesData'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <RoutesSection routes={ROUTES} />

      {/* UPCOMING DEPARTURES SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
              SCHEDULE
            </span>
            <h2 className="font-display text-navy text-3xl md:text-4xl font-bold uppercase tracking-wider mb-3">
              Upcoming Departures
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mt-2 mb-4 mx-auto" />
            <p className="text-gray-500 max-w-2xl mx-auto">
              Secure your pet&apos;s space on the next scheduled run.
            </p>
          </div>

          {/* Honest availability card — no fake dates or false scarcity */}
          <div className="bg-brand-dark rounded-2xl border border-brand-gold/20 p-10 text-center max-w-3xl mx-auto">
            <CalendarDays className="w-12 h-12 text-brand-gold mx-auto mb-4" />
            <h3 className="font-display text-2xl text-white font-bold mb-3">
              Scheduled Departures Available
            </h3>
            <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
              We run regular scheduled departures across all our European routes. Contact us to find the next available departure for your chosen route and secure your pet&apos;s space.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-brand-gold text-navy font-bold px-8 py-3 rounded uppercase tracking-wider text-sm hover:bg-gold-light transition-colors"
              >
                CHECK AVAILABILITY
              </Link>
              <Link
                href="/routes"
                className="border border-white/30 text-white px-8 py-3 rounded uppercase tracking-wider text-sm hover:bg-white/10 transition-colors"
              >
                VIEW ALL ROUTES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PetGallery section temporarily removed — awaiting real customer photos and testimonials from client to replace stock imagery */}
      <VehicleSection />
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
      <CtaStrip />
    </>
  )
}
