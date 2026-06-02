import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const features = [
  'Climate-controlled transport area',
  'Secure fixed crate system',
  'Regular welfare inspection stops',
  'Eurotunnel crossings for reduced transit time',
  'DEFRA-compliant long-journey vehicle',
]

export default function VehicleSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left — Features */}
          <div className="lg:col-span-4">
            <h2 className="font-display text-navy text-2xl font-bold mb-4">
              Purpose-Built for Long Journeys
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our long-wheelbase Peugeot Boxer is configured for the safe and comfortable transport of up to 18 dogs in individual secure crates.
            </p>

            <ul className="space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Centre — Van placeholder */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="bg-off-white rounded-2xl p-8 w-full aspect-[4/3] flex items-center justify-center border border-gray-100">
              <div className="text-center space-y-3">
                <div className="text-6xl">🚐</div>
                <div className="text-gold font-bold text-sm tracking-wider">EURO PET EXPRESS</div>
              </div>
            </div>
          </div>

          {/* Right — Welfare Box */}
          <div className="lg:col-span-4">
            <div className="bg-navy rounded-xl p-8 text-white h-full flex flex-col">
              <div className="mb-4">
                <span className="text-2xl">🐾</span>
                <h3 className="font-display text-xl font-bold text-white mt-2">Our Priority: Animal Welfare</h3>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                All journeys are carried out in accordance with UK and EU animal welfare transport regulations. Dogs travel in individual secured crates and are monitored throughout the journey with scheduled welfare checks and rest stops.
              </p>

              <Link href="/compliance#welfare" className="mt-6 block text-center border border-gold text-gold text-sm uppercase tracking-wider font-semibold py-3 rounded hover:bg-gold hover:text-navy transition-all">
                READ OUR WELFARE POLICY
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
