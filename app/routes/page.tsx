import PageHero from '@/components/ui/PageHero'
import ScheduleTable from '@/components/ui/ScheduleTable'
import dynamic from 'next/dynamic'

const RouteMap = dynamic(() => import('@/components/ui/RouteMap'), { ssr: false })

export default function RoutesPage() {
  return (
    <div>
      <PageHero title="Routes & Schedule" subtitle="Regular scheduled departures between Eastern Europe and the United Kingdom." />

      <section className="bg-off-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-display text-2xl font-bold text-navy mb-6">Upcoming Departures</h2>
            <ScheduleTable />
          </div>

          <div className="mb-16">
            <h2 className="font-display text-2xl font-bold text-navy mb-6">Route Map</h2>
            <RouteMap />
          </div>

          <p className="text-gray-500 mb-8">We run regular scheduled routes and occasional multi-country collections. See below for details.</p>

          <div id="romania" className="border-b border-gray-200 py-12">
            <h3 className="font-display text-2xl text-navy font-bold mb-2">🇷🇴 ROMANIA → UK</h3>
            <div className="text-gold text-xs font-semibold uppercase tracking-wider mb-4">Twice monthly (approximately every 14 days)</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Bucharest</li>
                  <li>Brașov</li>
                  <li>Cluj-Napoca</li>
                  <li>Sibiu</li>
                  <li>Timișoara</li>
                  <li>Constanța</li>
                  <li>Iași</li>
                  <li>and all surrounding areas on request</li>
                </ul>
              </div>
              <div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-2">
                  <div className="text-sm text-gray-700"><strong>Frequency:</strong> Twice monthly</div>
                  <div className="text-sm text-gray-700"><strong>Travel time:</strong> Approximately 36–48 hours</div>
                  <div className="text-sm text-gray-700"><strong>Collection areas:</strong> Major cities and surrounding regions</div>
                  <div className="text-sm text-gray-700"><strong>Next departures:</strong> Contact us for current schedule</div>
                </div>
              </div>
            </div>
          </div>

          <div id="poland" className="border-b border-gray-200 py-12">
            <h3 className="font-display text-2xl text-navy font-bold mb-2">🇵🇱 POLAND → UK</h3>
            <div className="text-gold text-xs font-semibold uppercase tracking-wider mb-4">Monthly departures</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Warsaw</li>
                  <li>Katowice</li>
                  <li>Wrocław</li>
                  <li>Poznań</li>
                  <li>Kraków</li>
                  <li>Gdańsk</li>
                  <li>and surrounding areas</li>
                </ul>
              </div>
              <div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-2">
                  <div className="text-sm text-gray-700"><strong>Frequency:</strong> Monthly departures</div>
                  <div className="text-sm text-gray-700"><strong>Travel time:</strong> Approximately 24–32 hours</div>
                  <div className="text-sm text-gray-700"><strong>Collection areas:</strong> Major cities and surrounding regions</div>
                  <div className="text-sm text-gray-700"><strong>Next departures:</strong> Contact us for current schedule</div>
                </div>
              </div>
            </div>
          </div>

          <div id="bulgaria" className="border-b border-gray-200 py-12">
            <h3 className="font-display text-2xl text-navy font-bold mb-2">🇧🇬 BULGARIA → UK</h3>
            <div className="text-gold text-xs font-semibold uppercase tracking-wider mb-4">Combined route departures</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Sofia</li>
                  <li>and surrounding areas</li>
                  <li>Note: Bulgaria pickups travel via the Romania corridor</li>
                </ul>
              </div>
              <div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-2">
                  <div className="text-sm text-gray-700"><strong>Frequency:</strong> Combined route departures</div>
                  <div className="text-sm text-gray-700"><strong>Travel time:</strong> Approximately 48–60 hours</div>
                  <div className="text-sm text-gray-700"><strong>Next departures:</strong> Contact us for current schedule</div>
                </div>
              </div>
            </div>
          </div>

          <div id="combined" className="border-b border-gray-200 py-12">
            <h3 className="font-display text-2xl text-navy font-bold mb-2">🇪🇺 COMBINED ROUTE → UK</h3>
            <div className="text-gold text-xs font-semibold uppercase tracking-wider mb-4">Multi-country collections run on request</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-700">Countries: Romania, Bulgaria, Poland, Germany, France (as transit), UK</p>
              </div>
              <div>
                <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-2">
                  <div className="text-sm text-gray-700"><strong>Frequency:</strong> On request</div>
                  <div className="text-sm text-gray-700"><strong>Travel time:</strong> Varies by collection points</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy rounded-xl text-white p-10 mt-12 text-center">
            <h4 className="font-display text-xl font-bold mb-4">Ready to book?</h4>
            <p className="text-gray-300 mb-6">Request a transport quote today.</p>
            <a href="/contact" className="inline-block bg-gold text-navy font-bold px-8 py-3 rounded hover:bg-gold-light transition-colors uppercase tracking-wider text-sm">REQUEST A QUOTE</a>
          </div>
        </div>
      </section>
    </div>
  )
}
