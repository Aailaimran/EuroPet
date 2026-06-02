import Link from 'next/link'
import routes from '@/data/routes.json'

export default function RoutesSection() {
  return (
    <section className="bg-off-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-display text-navy text-3xl md:text-4xl font-bold uppercase tracking-wider mb-3">
            Our Routes
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Regular scheduled transport routes between Eastern Europe and the United Kingdom.
          </p>
        </div>

        {/* Route Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route) => (
            <div key={route.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col border border-gray-100">
              {/* Flag Banner */}
              <div className="h-32 flex items-center justify-center text-5xl" style={{ backgroundColor: route.color + '15' }}>
                {route.flag}
              </div>
              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-navy font-bold text-lg mb-1">
                  {route.title}
                </h3>
                <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-4">{route.frequency}</p>

                <div className="space-y-1 mb-6 flex-1">
                  {route.cities.map((city: string, i: number) => <p key={i} className="text-gray-500 text-sm">{city}</p>)}
                </div>

                <Link href={`/routes#${route.slug}`} className="block text-center bg-navy text-white text-xs uppercase tracking-wider font-semibold py-3 rounded hover:bg-gold hover:text-navy transition-all">
                  View {route.slug === 'combined' ? 'Full Route Map' : `${route.cities[0].split(' ')[0]} Routes`}
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
