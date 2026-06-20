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
import ManifestoSection from '@/components/home/ManifestoSection'
import { PET_IMAGES } from '@/lib/petImages'
import PhotoCarousel from '@/components/ui/PhotoCarousel'

export const metadata: Metadata = {
  title: 'About Us | Euro Pet Express',
  description: 'Learn about Euro Pet Express, our commitment to animal welfare, and our DEFRA-authorised pet transport service.',
}

export default function About() {
  return (
    <div>
      <PageHero title="About Euro Pet Express" subtitle="A dedicated, compliant, and compassionate pet transport service." />

      {/* Change 2: Founder Story — FIRST section after PageHero */}
      <section
        id="founder-story"
        className="bg-brand-cream py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

            {/* Left column — Founder photo */}
            <div className="lg:col-span-1">
              <div className="relative">

                {/* Main founder photo */}
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/20">
                  <Image
                    src="/images/about/owner.png"
                    alt="Tarik — Founder of Euro Pet Express"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    priority={true}
                  />
                </div>

                {/* Gold accent corner decoration */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-gold/40 rounded-br-2xl pointer-events-none" />
                
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-gold/40 rounded-tl-2xl pointer-events-none" />

                {/* Founder name badge overlaid at bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-dark/85 backdrop-blur-sm rounded-xl p-4 border border-brand-gold/20">
                  <p className="font-playfair text-white font-bold text-lg">
                    Tarik
                  </p>
                  <p className="text-brand-gold text-xs font-semibold uppercase tracking-wider mt-0.5">
                    Founder, Euro Pet Express
                  </p>
                </div>

              </div>

            </div>

            {/* Right column — Story text */}
            <div className="lg:col-span-2">

              {/* Section label */}
              <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Our Story
              </p>

              {/* Main heading */}
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                Why Euro Pet Express Exists
              </h2>

              {/* Gold divider */}
              <div className="w-16 h-0.5 bg-brand-gold mb-10" />

              {/* Story paragraphs */}
              <div className="space-y-6">

                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                  I&apos;ve been around dogs my whole life, and for the last 20 years I&apos;ve been moving them across Europe and into the UK.
                </p>

                <p className="text-gray-600 text-base leading-relaxed">
                  I&apos;ve seen puppies put on the road before they were ready. I&apos;ve seen vans packed too tight and journeys running too long with no proper stops. And gosh, I&apos;ve seen people taking paperwork for granted which gives troubles later. Consequently, I&apos;ve watched dogs arrive frightened and shut down, and watched people sign for them anyway, because there was money to be made and a schedule to keep.
                </p>

                <p className="text-gray-600 text-base leading-relaxed">
                  For years I told myself it was just how things were done. Then I decided I didn&apos;t want to be part of how things were done anymore.
                </p>

                <p className="text-brand-dark text-base leading-relaxed font-semibold border-l-4 border-brand-gold pl-5 py-2 bg-brand-gold/5 rounded-r-lg">
                  That&apos;s why Euro Pet Express exists. I know every shortcut in this trade, because I&apos;ve witnessed them firsthand. That&apos;s exactly why I can avoid them.
                </p>

                <p className="text-gray-600 text-base leading-relaxed">
                  When you hand us your dog, you&apos;re handing it to someone who spent 20 years learning what not to do, and built a company to prove there&apos;s a better way.
                </p>

              </div>

              {/* Founder attribution line */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-brand-gold" />
                  <p className="text-gray-400 text-sm italic">
                    Founder&apos;s personal account
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Change 3: Manifesto Section — after Founder Story */}
      <ManifestoSection />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Our World
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Life at Euro Pet Express
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-4" />
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              Real journeys. Real pets. Real care.
              A look behind the scenes at how we work.
            </p>
          </div>

          {/* Photo carousel */}
          <div className="max-w-4xl mx-auto">
            <PhotoCarousel />
          </div>

        </div>
      </section>

      <section id="welfare" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-2xl text-navy font-bold mb-4">Our Animal Welfare Commitment</h3>
          <p className="text-gray-700 mb-6">We prioritise animal welfare across every aspect of our operation. From vehicle standards to rest stops and monitoring, our procedures are designed to keep pets safe, comfortable, and calm throughout their journey.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Climate Controlled', desc: 'Temperature is maintained throughout the journey to ensure comfort in all weather conditions.' },
              { title: 'Regular Rest Stops', desc: 'We stop every 4-5 hours for welfare checks, water, feeding if required, and cage cleaning.' },
              { title: 'Individual Secure Crates', desc: 'Every dog travels in its own IATA-standard crate, sized appropriately for their breed and weight.' },
            ].map((item) => (
              <div key={item.title} className="bg-off-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-display text-lg font-bold text-navy mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

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
                  desc: "Stay connected throughout your pet's journey with regular photo and video updates sent directly via WhatsApp."
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

        </div>
      </section>

      <section id="faq" className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-2xl text-navy font-bold mb-6">Frequently Asked Questions</h3>

          <div className="space-y-4">
            {[
              { q: 'What documents does my pet need to travel?', a: 'All pets (dogs, cats, and ferrets) entering Great Britain must have a valid microchip, an up-to-date rabies vaccination administered after microchipping, and an Animal Health Certificate (AHC) or valid pet passport issued by an official vet within the required timeframe before travel. Dogs entering Great Britain also require a tapeworm treatment administered 24–120 hours before arrival — this requirement does not currently apply to cats or ferrets. We will guide you through the exact requirements for your specific pet and route when you request a quote.' },
              { q: 'How long does the journey take?', a: 'Journey duration varies based on weather, traffic, border crossings, welfare stops, and ferry/tunnel schedules. Please contact us for current estimates.' },
              { q: 'Can I track my pet during the journey?', a: 'We provide regular WhatsApp updates throughout the journey including welfare check photos and location updates at key stages.' },
              { q: 'What size are the transport crates?', a: "We carry crates suitable for pets from small breeds up to large breeds. Please state your pet's breed, weight, and height when requesting a quote so we can confirm crate availability." },
              { q: 'Do you transport cats or other animals?', a: 'Yes, we transport dogs, cats, ferrets, and other small animals. For bespoke or exotic pet transport, please contact us to discuss your requirements.' },
              { q: 'How far in advance should I book?', a: 'We recommend booking at least 3–4 weeks in advance of your preferred departure date, as spaces on each run are limited. Contact us as early as possible to secure your slot.' },
            ].map((item) => (
              <details key={item.q} className="bg-white border border-gray-200 rounded-xl p-4 group">
                <summary className="flex justify-between items-center cursor-pointer font-medium text-navy">{item.q}</summary>
                <div className="mt-3 text-sm text-gray-700 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
