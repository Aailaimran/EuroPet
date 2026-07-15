import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Heart, Shield, Award, FileText, 
  Star, Users, Globe, CheckCircle,
  ArrowRight, Phone, MapPin
} from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Our Services | Euro Pet Express',
  description: 'Premium pet transport services including scheduled European routes, rescue and breeder transport, family relocation, owner accompanied travel, and bespoke transport options.',
}

const SERVICES = [
  {
    id: 1,
    icon: Heart,
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
    icon: Shield,
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
    icon: Award,
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
    icon: FileText,
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
    icon: Star,
    title: 'Bespoke Pet Transport',
    subtitle: 'Price on Application',
    image: 'https://images.unsplash.com/photo-1583511655826-05700442b31b?w=600&q=80',
    alt: 'Premium bespoke pet transport service',
    isPOA: true,
    description: 'For unique or complex transport requirements, we offer fully bespoke pet transport solutions tailored to your specific needs. Whether transporting multiple pets, exotic animals, or requiring specialist handling, we can accommodate.',
    features: [
      'Fully tailored transport solution',
      'Specialist handling available',
      'Flexible scheduling and routing',
      'Multi-pet and exotic animal transport',
      'Price on application — contact us to discuss',
    ],
  },
  {
    id: 6,
    icon: Users,
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
      {/* Page Hero */}
      <PageHero
        title="Our Services"
        subtitle="Tailored pet transport for rescues, breeders, shelters and private owners across Europe."
        breadcrumb="Home / Our Services"
      />

      {/* Services Grid */}
      <section className="bg-brand-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-14">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              What We Offer
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Services Built Around Your Pet
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-5" />
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Every service we offer is built around one principle — your pet travels safely, comfortably, and in full compliance with UK and EU regulations.
            </p>
          </div>

          {/* Services cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Card image */}
                <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Icon overlay */}
                  <div className="absolute bottom-3 left-3 bg-brand-dark/70 backdrop-blur-sm rounded-lg p-2">
                    <service.icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  {/* POA badge */}
                  {service.isPOA && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-brand-gold text-brand-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        Price on Application
                      </span>
                    </div>
                  )}
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-playfair text-xl font-bold text-brand-dark mb-1">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <p className="text-brand-gold text-xs font-semibold uppercase tracking-wider mb-3">
                      {service.subtitle}
                    </p>
                  )}
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li 
                        key={feature}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-brand-dark text-white font-semibold text-xs px-4 py-3 rounded-xl hover:bg-brand-gold hover:text-brand-dark transition-colors uppercase tracking-wider"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Driver Qualifications Section */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Our Standards
            </p>
            <h2 className="font-playfair text-3xl font-bold text-white mb-4">
              Why Choose Euro Pet Express
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: 'Animal First Aid Trained',
                desc: 'All drivers certified in animal first aid and welfare response',
              },
              {
                title: 'Pending DEFRA Type 2 Approval',
                desc: 'Type 2 long-journey pet transporter authorisation pending — expected end August 2026',
              },
              {
                title: 'Regular Photo Updates',
                desc: 'Photos and videos sent via WhatsApp throughout the journey',
              },
              {
                title: '30+ Years Experience',
                desc: 'Professional pet handling experience across Europe and beyond',
              },
            ].map((item) => (
              <div 
                key={item.title}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/30 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-brand-gold mx-auto mb-4" />
                <p className="text-white text-sm font-semibold font-playfair mb-2">
                  {item.title}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Services List */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            <div>
              <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Full Service List
              </p>
              <h2 className="font-playfair text-3xl font-bold text-brand-dark mb-4">
                Everything we do
              </h2>
              <div className="w-16 h-0.5 bg-brand-gold mb-8" />

              <ul className="space-y-3">
                {[
                  'Scheduled European Pet Transport',
                  'UK to Europe Pet Transport',
                  'Europe to UK Pet Transport',
                  'Shelter Transport',
                  'Breeder Transport',
                  'Family Pet Relocation',
                  'Owner Accompanied Travel',
                  'Transatlantic Pet Transport',
                  'Bespoke Transport Services (POA)',
                  'Door-to-Door Collection & Delivery',
                ].map((service) => (
                  <li 
                    key={service}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <div className="w-5 h-5 rounded-full bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center shrink-0">
                      <svg 
                        className="w-3 h-3 text-brand-gold" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2.5} 
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Owner Accompanied Travel Highlight */}
            <div>
              <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-2xl p-8">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-brand-gold" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-brand-dark mb-3">
                  Owner Accompanied Travel Available
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Would you like to travel with your pet? Euro Pet Express offers owner accompanied travel options on selected routes, allowing you to stay with your pet throughout the journey for complete peace of mind. Contact us to discuss availability and pricing for your route.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-brand-gold text-sm font-semibold hover:underline"
                >
                  Enquire about accompanied travel
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Contact sidebar */}
              <div className="mt-6 bg-brand-dark rounded-2xl p-6">
                <p className="text-brand-gold text-xs font-semibold uppercase tracking-wider mb-4">
                  Get in Touch
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  Not sure which service is right for you? Contact us and we will help find the best solution for your pet and journey.
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:+441524959304"
                    className="flex items-center gap-3 text-gray-400 hover:text-brand-gold transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4 text-brand-gold" />
                    +44 1524 959304
                  </a>
                  <a 
                    href="https://wa.me/447853147342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-brand-gold hover:underline text-sm font-medium"
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      className="w-4 h-4 fill-brand-gold"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
                <Link
                  href="/contact"
                  className="mt-5 block w-full text-center bg-brand-gold text-brand-dark font-bold text-xs px-4 py-3 rounded-xl hover:bg-brand-goldHover transition-colors uppercase tracking-wider"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to arrange transport for your pet?
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Get in touch today for a personalised quote. We respond to all enquiries within 12–24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-bold text-sm px-10 py-4 rounded-xl hover:bg-brand-goldHover transition-all duration-200 uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/routes"
              className="inline-flex items-center gap-2 border border-brand-gold/40 text-brand-gold font-semibold text-sm px-8 py-4 rounded-xl hover:bg-brand-gold/10 transition-all duration-200 uppercase tracking-wider"
            >
              View Our Routes
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
