// TODO — CONFIRM WITH CLIENT: "Live Vehicle 
// Tracking" claims have been changed to "Regular 
// Photo & Video Updates via WhatsApp" across the 
// site to match the FAQ description and avoid 
// contradictory claims. If the business does have 
// real GPS live tracking technology available to 
// customers, please confirm and we will reinstate 
// this claim consistently with proper implementation 
// details (e.g. tracking link format, app used, etc).

import Image from 'next/image'
import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import Link from 'next/link'
import { Heart, Shield, Award, FileText, Star, Users } from 'lucide-react'
import { PET_IMAGES } from '@/lib/petImages'

export const metadata: Metadata = {
  title: 'Our Services | Euro Pet Express',
  description: 'Premium pet transport services including scheduled European routes, rescue and breeder transport, family relocation, and bespoke transport options.',
}

const SERVICES = [
  {
    id: 1,
    icon: <Heart className="w-5 h-5 text-brand-gold" />,
    title: 'Private Owner Transport',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80',
    alt: 'Happy dog ready for private owner transport',
    description: 'You are moving to the UK or reuniting with your pet. We provide door-to-door or collection-point transport for privately owned pets with full welfare documentation support.',
    features: [
      'Flexible collection points across Europe',
      'Welfare updates during journey',
      'TRACES documentation support',
      'Microchip and vaccination verification',
      'Door-to-door delivery in the UK',
    ],
  },
  {
    id: 2,
    icon: <Shield className="w-5 h-5 text-brand-gold" />,
    title: 'Rescue & Shelter Transport',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80',
    alt: 'Rescue dogs being cared for at shelter',
    description: 'We work directly with registered rescue organisations to transport rehomed pets from European shelters to their UK foster or forever homes.',
    features: [
      'Volume discount for registered rescues',
      'Coordination with shelter staff',
      'Full EU and UK import compliance',
      'DEFRA-authorised journey documentation',
      'Regular welfare photo updates',
    ],
  },
  {
    id: 3,
    icon: <Award className="w-5 h-5 text-brand-gold" />,
    title: 'Breeder Transport',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&q=80',
    alt: 'Pedigree dog for breeder transport service',
    description: 'Trusted by registered breeders across Romania and Poland to transport puppies and adult pets to new owners in the UK safely and in compliance with all regulations.',
    features: [
      'Age-verified puppy transport (min. 15 weeks)',
      'Health certificate coordination',
      'Rabies titre test verification',
      'Microchip and passport checking',
      'Breeder to buyer documentation',
    ],
  },
  {
    id: 4,
    icon: <FileText className="w-5 h-5 text-brand-gold" />,
    title: 'Documentation Assistance',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80', // Unsplash fallback as public/images/assistancedoc.png is not present
    alt: 'Pet transport documentation assistance',
    description: 'Navigating UK pet import rules post-Brexit is complex. We guide owners and organisations through the required paperwork to ensure a smooth and compliant journey.',
    features: [
      'TRACES NT movement document guidance',
      'Health certificate requirements',
      'Rabies vaccination timing advice',
      'Tapeworm treatment for Great Britain entry',
      'Full compliance checklist provided',
    ],
  },
  {
    id: 5,
    icon: <Star className="w-5 h-5 text-brand-gold" />,
    title: 'Bespoke Pet Transport',
    subtitle: 'Price on Application',
    image: 'https://images.unsplash.com/photo-1583511655826-05700442b31b?w=600&q=80',
    alt: 'Premium bespoke pet transport service',
    isPOA: true,
    description: 'For unique or complex transport requirements, we offer fully bespoke pet transport solutions tailored to your specific needs. Whether transporting multiple pets or requiring specialist handling, we can accommodate.',
    features: [
      'Fully tailored transport solution',
      'Specialist handling available',
      'Flexible scheduling and routing',
      'Multi-pet transport solutions',
      'Price on application — contact us to discuss',
    ],
  },
  {
    id: 6,
    icon: <Users className="w-5 h-5 text-brand-gold" />,
    title: 'Owner Accompanied Travel',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    alt: 'Owner travelling with their pet',
    description: 'Would you like to travel with your pet? Euro Pet Express offers owner accompanied travel options on selected routes, allowing you to stay with your pet throughout the journey for complete peace of mind.',
    features: [
      'Available on selected European routes',
      'Shared transport with your pet',
      'Full welfare standards maintained',
      'Contact us for route availability',
      'Pricing discussed on enquiry',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div>
      <PageHero title="Our Services" subtitle="Tailored pet transport for rescues, breeders, shelters and private owners." />

      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full">
                {/* Service image banner */}
                <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
                  <Image
                    src={s.image}
                    alt={s.alt || s.title}
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Icon overlay */}
                  <div className="absolute bottom-3 left-3 bg-brand-dark/70 backdrop-blur-sm rounded-lg p-2">
                    {s.icon}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="font-display text-xl font-bold text-navy mb-2">{s.title}</h4>
                  
                  {s.isPOA && (
                    <span className="inline-block bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 w-max">
                      Price on Application
                    </span>
                  )}
                  
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed flex-1">{s.description}</p>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 mt-auto">
                    {s.features.map((f) => (<li key={f}>{f}</li>))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Change 13: Owner Accompanied Travel Callout */}
          <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-2xl p-6 mt-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-brand-gold font-semibold text-lg font-playfair mb-2">
                  Owner Accompanied Travel Available
                </h3>
                <p className="text-navy text-sm leading-relaxed">
                  Would you like to travel with your pet? Euro Pet Express offers owner accompanied travel options on selected routes, allowing you to stay with your pet throughout the journey for complete peace of mind. Contact us to discuss availability and pricing for your route.
                </p>
                <Link href="/contact" className="inline-block mt-4 text-brand-gold text-sm font-semibold hover:underline">
                  Enquire about accompanied travel →
                </Link>
              </div>
            </div>
          </div>

          {/* Change 10: Standards section */}
          <div className="mt-16 bg-brand-dark rounded-2xl p-8 border border-brand-gold/20">
            <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold mb-6 text-center">
              Our Standards
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: 'Animal First Aid Trained',
                  desc: 'All drivers certified in animal first aid and welfare response'
                },
                {
                  title: 'DEFRA Authorised',
                  desc: 'Fully authorised Type 2 long-journey pet transporter'
                },
                {
                  title: 'Regular Photo & Video Updates Throughout the Journey',
                  desc: 'Stay connected throughout your pet\'s journey with regular photo and video updates sent directly via WhatsApp.'
                },
                {
                  title: 'Founder-Led',
                  desc: 'Decades of hands-on dog-industry experience'
                },
              ].map((item) => (
                <div key={item.title} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-brand-gold mx-auto mb-3" />
                  <p className="text-white text-sm font-semibold mb-2">{item.title}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Change 11: Official Services List */}
          <div className="mt-16 bg-brand-dark rounded-2xl p-8 border border-brand-gold/20">
            <p className="text-brand-gold text-xs uppercase tracking-widest font-semibold mb-6 text-center">
              Our Services Directory
            </p>
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-2">
                {SERVICES.map((service) => (
                  <li key={service.id} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    {service.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
