import Image from 'next/image'
import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { Heart, Shield, Award, FileText } from 'lucide-react'
import { PET_IMAGES } from '@/lib/petImages'

export const metadata: Metadata = {
  title: 'Our Services | Euro Pet Express',
  description: 'Tailored dog transport services for rescues, breeders, shelters and private owners. DEFRA authorised, TRACES compliant.',
}

export default function Services() {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Private Owner Transport',
      desc: "You're moving to the UK or reuniting with your dog. We provide door-to-door or collection-point transport for privately owned dogs with full welfare documentation support.",
      features: ['Flexible collection points', 'Welfare updates during journey', 'TRACES documentation support', 'Microchip & vaccination verification'],
      image: PET_IMAGES.dogHappy,
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Rescue & Shelter Transport',
      desc: 'We work directly with registered rescue organisations to transport rehomed dogs from European shelters to their UK foster or forever homes.',
      features: ['Volume discount for registered rescues', 'Coordination with shelter staff', 'Full EU/UK import compliance', 'DEFRA-authorised journey documentation'],
      image: PET_IMAGES.dogFamily,
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Breeder Transport',
      desc: 'Trusted by registered breeders across Romania and Poland to transport puppies and adult dogs to new owners in the UK safely and in compliance with all regulations.',
      features: ['Age-verified puppy transport (min. 15 weeks)', 'Health certificate coordination', 'Rabies titre test verification', 'Microchip & passport checking'],
      image: PET_IMAGES.dogCute1,
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Documentation Assistance',
      desc: 'Navigating UK pet import rules post-Brexit is complex. We guide owners and organisations through the required paperwork.',
      features: ['TRACES NT movement document guidance', 'Health certificate requirements', 'Rabies vaccination timing', 'Tapeworm treatment guidance'],
      image: PET_IMAGES.dogSmall,
    }
  ]

  return (
    <div>
      <PageHero title="Our Services" subtitle="Tailored dog transport for rescues, breeders, shelters and private owners." />

      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                {/* Service image banner */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-gold">{s.icon}</div>
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="font-display text-xl font-bold text-navy mb-2">{s.title}</h4>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{s.desc}</p>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                    {s.features.map((f) => (<li key={f}>{f}</li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
