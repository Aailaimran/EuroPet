import Link from 'next/link'
import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import RouteCard from '@/components/ui/RouteCard'
import { ROUTES } from '@/lib/routesData'

export const metadata: Metadata = {
  title: 'Routes & Schedule | Euro Pet Express',
  description: 'Explore our scheduled pet transport routes connecting the UK with Romania, Serbia, Hungary, Croatia, France, Spain, Germany, Netherlands, Czech Republic, and beyond.',
}

export default function RoutesPage() {
  const activeRoutes = ROUTES.filter(r => r.isActive).sort((a, b) => a.displayOrder - b.displayOrder)

  return (
    <div>
      <PageHero title="Routes & Schedule" subtitle="Regular scheduled departures between the United Kingdom and Europe." />

      <section className="bg-off-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">All Routes</span>
            <h2 className="mb-3 font-display text-2xl font-bold text-navy md:text-3xl">Scheduled Routes</h2>
            <div className="mx-auto mb-4 h-0.5 w-12 bg-brand-gold" />
            <p className="text-sm text-gray-600 md:text-base max-w-2xl mx-auto">
              Browse our complete network of scheduled pet transport routes connecting the UK with destinations across Europe and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {activeRoutes.map((route, index) => (
              <div key={route.id} id={route.slug}>
                <RouteCard route={route} index={index} />
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-navy p-10 text-center text-white">
            <h4 className="mb-4 font-display text-xl font-bold">Ready to book?</h4>
            <p className="mb-6 text-gray-300">Request a transport quote today.</p>
            <Link href="/contact" className="inline-block rounded bg-gold px-8 py-3 text-sm font-bold uppercase tracking-wider text-navy transition-colors hover:bg-gold-light">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
