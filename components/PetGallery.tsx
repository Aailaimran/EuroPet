import React from 'react'
import { PawPrint } from 'lucide-react'
import Image from 'next/image'
import { PET_IMAGES } from '@/lib/petImages'

export default function PetGallery() {
  const travelers = [
    {
      name: "Max",
      image: PET_IMAGES.dogCute1,
      route: "London → Bucharest",
      quote: "Arrived safe and happy!"
    },
    {
      name: "Bella",
      image: PET_IMAGES.dogHappy,
      route: "Manchester → Belgrade",
      quote: "Excellent care throughout the trip."
    },
    {
      name: "Luna",
      image: PET_IMAGES.dogCute3,
      route: "Bristol → Paris",
      quote: "Highly recommend Euro Pet Express!"
    }
  ]

  return (
    <section className="bg-brand-cream py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
            <span className="flex items-center justify-center gap-2">
              HAPPY TRAVELLERS <PawPrint className="w-4 h-4 text-brand-gold" />
            </span>
          </span>
          <h2 className="font-display text-navy text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">
            Recent Furry Passengers
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mt-4 mb-12 mx-auto" />
          <p className="text-gray-500 max-w-2xl mx-auto -mt-6">
            Some of our recent furry passengers and their journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-center max-w-5xl mx-auto">
          {travelers.map((t) => (
            <div key={t.name} className="text-center group">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-brand-gold/30 shadow-lg mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width: 768px) 96px, 128px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-navy font-bold text-lg mb-1">{t.name}</h3>
              <p className="text-brand-gold text-xs uppercase tracking-wider mb-2 font-medium">{t.route}</p>
              <p className="text-gray-500 text-sm italic">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
