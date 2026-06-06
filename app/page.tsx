import Link from 'next/link'
import { Calendar } from 'lucide-react'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import RoutesSection from '@/components/home/RoutesSection'
import VehicleSection from '@/components/home/VehicleSection'
import CtaStrip from '@/components/home/CtaStrip'
import PetGallery from '@/components/PetGallery'
import { ROUTES } from '@/lib/routesData'

// Static upcoming departures data — no CMS needed
const UPCOMING_DEPARTURES = [
  {
    id: 'dep-1',
    routeName: 'UK → Romania',
    routeSlug: 'uk-romania',
    departureDate: '2026-07-05',
    arrivalDate: '2026-07-07',
    availableSpaces: 4,
    status: 'available' as const,
  },
  {
    id: 'dep-2',
    routeName: 'UK → Serbia',
    routeSlug: 'uk-serbia',
    departureDate: '2026-07-12',
    arrivalDate: '2026-07-14',
    availableSpaces: 2,
    status: 'limited' as const,
  },
  {
    id: 'dep-3',
    routeName: 'UK → Germany',
    routeSlug: 'uk-germany',
    departureDate: '2026-07-20',
    arrivalDate: '2026-07-21',
    availableSpaces: 0,
    status: 'full' as const,
  },
]

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
              Secure your dog&apos;s space on the next scheduled run.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {UPCOMING_DEPARTURES.map((dep) => {
              const dateObj = new Date(dep.departureDate)
              const dateStr = dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
              const arrObj = new Date(dep.arrivalDate)
              const arrStr = arrObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
              const isFull = dep.status === 'full'

              return (
                <div key={dep.id} className="bg-off-white border border-gray-200 rounded-xl p-6 hover:border-gold transition-all flex flex-col hover:shadow-lg">
                  <div className="mb-4">
                    <h3 className="text-navy font-bold text-lg font-display">
                      {dep.routeName}
                    </h3>
                  </div>
                  
                  <div className="flex items-center text-gold font-semibold text-base mb-1">
                    <Calendar className="w-5 h-5 mr-2" />
                    {dateStr}
                  </div>
                  
                  <p className="text-gray-500 text-sm mb-4">
                    Est. UK arrival: {arrStr}
                  </p>

                  <div className="mb-6">
                    {dep.status === 'available' && (
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider rounded-full">
                        {dep.availableSpaces} spaces available
                      </span>
                    )}
                    {dep.status === 'limited' && (
                      <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider rounded-full">
                        Only {dep.availableSpaces} spaces left!
                      </span>
                    )}
                  </div>

                  <div className="mt-auto pt-4">
                    <Link 
                      href={isFull ? `/contact?waitlist=true&route=${dep.routeSlug}` : `/contact?route=${dep.routeSlug}&date=${dep.departureDate}`}
                      className="block w-full text-center bg-navy text-white text-xs uppercase tracking-wider font-semibold py-3 rounded hover:bg-gold hover:text-navy transition-all"
                    >
                      {isFull ? 'JOIN WAITLIST' : 'REQUEST THIS DEPARTURE'}
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <Link href="/routes" className="text-gold text-sm font-semibold underline hover:text-navy transition-colors">
              View all routes
            </Link>
          </div>
        </div>
      </section>

      <PetGallery />
      <VehicleSection />
      <CtaStrip />
    </>
  )
}
