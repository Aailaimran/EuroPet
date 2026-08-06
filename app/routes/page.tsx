import Link from 'next/link'
import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import RouteCard from '@/components/ui/RouteCard'
import { sanityFetch } from '@/sanity/sanity.client'
import { ALL_ROUTES_QUERY, ROUTES_PAGE_QUERY } from '@/sanity/queries'
import { ROUTES } from '@/lib/routesData'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Routes & Schedule | Euro Pet Express',
  description: 'Explore our scheduled pet transport routes connecting the UK with Romania, Serbia, Hungary, Croatia, France, Spain, Germany, Netherlands, Czech Republic, and beyond.',
}

export default async function RoutesPage() {
  const routesPageCms = await sanityFetch<any>(ROUTES_PAGE_QUERY)
  // Fetch from Sanity; fall back to hardcoded data if CMS is empty
  const sanityRoutes = await sanityFetch<any>(ALL_ROUTES_QUERY)

  const routes = (sanityRoutes && sanityRoutes.length > 0)
    ? sanityRoutes.map((r: {
        _id: string; name: string; slug: string; destinationCountry: string;
        destinationCode: string; departureFrequency: string; shortDescription: string;
        routeHighlights: string[]; isActive: boolean; displayOrder: number;
      }) => ({
        id: r._id,
        name: r.name,
        slug: r.slug,
        originCountry: 'United Kingdom',
        destinationCountry: r.destinationCountry,
        originCode: 'GB',
        destinationCode: r.destinationCode,
        departureFrequency: r.departureFrequency,
        shortDescription: r.shortDescription,
        routeHighlights: r.routeHighlights || [],
        pickupCities: [],
        typicalTravelTime: '',
        priceFrom: 0,
        isActive: r.isActive,
        displayOrder: r.displayOrder,
      }))
    : ROUTES

  const activeRoutes = routes.filter((r: typeof routes[0]) => r.isActive).sort((a: typeof routes[0], b: typeof routes[0]) => a.displayOrder - b.displayOrder)

  return (
    <div>
      <PageHero
        title={routesPageCms?.pageHeading || "Routes & Schedule"}
        subtitle={routesPageCms?.pageSubheading || "Regular scheduled departures between the United Kingdom and Europe."}
      />

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
            {activeRoutes.map((route: typeof routes[0], index: number) => (
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

