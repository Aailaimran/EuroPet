import Image from 'next/image'
import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import VehicleSection from '@/components/home/VehicleSection'
import { PET_IMAGES } from '@/lib/petImages'

export const metadata: Metadata = {
  title: 'About Us | Euro Pet Express',
  description: 'Learn about Euro Pet Express — a dedicated, DEFRA-authorised, and compassionate pet transport service between the UK and Europe.',
}

export default function About() {
  return (
    <div>
      <PageHero title="About Euro Pet Express" subtitle="A dedicated, compliant, and compassionate pet transport service." />

      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="font-display text-2xl text-navy font-bold mb-4">Our Story</h3>
            <p className="text-gray-700 mb-4">Euro Pet Express was founded with a single purpose: to provide safe, compliant, and stress-free transport for pets travelling between Europe and the United Kingdom. We understand that your pet is family — and we treat every animal in our care with the same respect and attention we would give our own.</p>
            <p className="text-gray-700 mb-6">Our service is fully DEFRA Type 2 Authorised, TRACES NT Registered, and operates in full compliance with UK and EU animal welfare transport legislation.</p>

            {/* Story image */}
            <div className="relative h-64 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src={PET_IMAGES.dogFamily}
                alt="Happy dog family — the reason we do what we do"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: 'Europe-Wide', label: 'Coverage' },
              { stat: '30+', label: 'Years of Professional Dog Handling Experience' },
              { stat: '100%', label: 'DEFRA Compliant' },
              { stat: '24/7', label: 'Live Vehicle Tracking with Customer Access' },
            ].map((item) => (
              <div key={item.label} className="bg-navy text-white rounded-xl p-6 text-center flex flex-col justify-center items-center">
                <div className="font-display text-2xl sm:text-3xl text-gold font-bold">{item.stat}</div>
                <div className="text-gray-400 text-xs leading-relaxed text-center mt-1 max-w-[120px] mx-auto">{item.label}</div>
              </div>
            ))}

            {/* Travel image */}
            <div className="col-span-2 relative h-48 rounded-xl overflow-hidden border border-gray-200 shadow-sm mt-2">
              <Image
                src={PET_IMAGES.dogTravel}
                alt="Dog travelling comfortably — safe journey with Euro Pet Express"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="vehicle">
        <VehicleSection />
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
                  title: '24/7 Live Tracking',
                  desc: 'Real-time vehicle tracking accessible by pet owners throughout journey'
                },
                {
                  title: '30+ Years Experience',
                  desc: 'Professional pet handling experience across Europe and beyond'
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
              { q: 'What documents does my dog need to travel to the UK?', a: 'Dogs entering Great Britain must have: a valid microchip, a rabies vaccination (after microchipping), and a health certificate issued by an official vet within 10 days of travel. Dogs must also have had a tapeworm treatment 24–120 hours before arrival in Great Britain.' },
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
