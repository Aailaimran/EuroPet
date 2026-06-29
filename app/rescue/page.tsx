import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { MapPin, Heart, ArrowLeftRight } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Rescue a Dog | Euro Pet Express',
  description:
    'Euro Pet Express supports rescue dog rehoming by providing safe, DEFRA-authorised transport between Europe and the UK. Find dogs needing transport to their forever homes.',
  openGraph: {
    title: 'Rescue a Dog | Euro Pet Express',
    description:
      'Euro Pet Express supports rescue dog rehoming by providing safe, DEFRA-authorised transport between Europe and the UK.',
    url: 'https://europetexpress.co.uk/rescue',
    siteName: 'Euro Pet Express',
    locale: 'en_GB',
    type: 'website',
  },
  alternates: {
    canonical: 'https://europetexpress.co.uk/rescue',
  },
}

const RESCUE_DOGS = [
  {
    id: 1,
    name: 'Luna',
    breed: 'Romanian Mioritic Mix',
    age: '2 years',
    location: 'Bucharest, Romania',
    rescue: 'Save the Dogs Romania',
    status: 'Transported',
    description:
      'Luna was rescued from the streets of Bucharest and is now living happily with her forever family in Manchester. Euro Pet Express arranged her safe transport in compliance with all UK import requirements.',
    image:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
  },
  {
    id: 2,
    name: 'Bruno',
    breed: 'Serbian Shepherd Mix',
    age: '3 years',
    location: 'Belgrade, Serbia',
    rescue: 'Paws of Serbia',
    status: 'Needs Transport',
    description:
      'Bruno has been rehomed by a wonderful family in Edinburgh. He is fully vaccinated, microchipped, and has his animal health certificate ready. He is awaiting transport on the next UK-Serbia run.',
    image:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&q=80',
  },
  {
    id: 3,
    name: 'Bella',
    breed: 'Hungarian Vizsla Mix',
    age: '18 months',
    location: 'Budapest, Hungary',
    rescue: 'Hungarian Dog Rescue',
    status: 'Transported',
    description:
      'Bella was transported from Budapest to her new home in London. She travelled comfortably with Euro Pet Express and arrived safe, happy and ready to start her new life.',
    image:
      'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&q=80',
  },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Contact Us',
    desc: 'Get in touch with Euro Pet Express with details of your rescue dog and intended UK destination.',
  },
  {
    step: '02',
    title: 'Documentation',
    desc: 'We guide you through the required microchip, vaccination, health certificate and tapeworm treatment requirements.',
  },
  {
    step: '03',
    title: 'Book a Slot',
    desc: "Secure a crate space on the next scheduled departure from your rescue dog's country.",
  },
  {
    step: '04',
    title: 'Safe Arrival',
    desc: 'Your rescue dog travels safely with regular photo updates throughout the journey to their forever home.',
  },
]

export default function RescuePage() {
  return (
    <div>
      <Script
        id="schema-rescue-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Can Euro Pet Express transport rescue dogs from Europe to the UK?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Euro Pet Express is DEFRA Type 2 authorised and provides scheduled transport for rescue dogs from Romania, Serbia, Hungary, Croatia and other European countries to destinations throughout the UK. We work with rescue organisations and individual adopters.',
                },
              },
              {
                '@type': 'Question',
                name: 'What documents does a rescue dog need to enter the UK?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Rescue dogs entering Great Britain require a valid microchip, an up-to-date rabies vaccination administered after microchipping, an Animal Health Certificate (AHC) issued by an official vet within 10 days of travel, and a tapeworm treatment administered 24–120 hours before arrival at a UK port. Euro Pet Express can guide you through all documentation requirements.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer discounts for rescue organisations?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We offer volume pricing for registered rescue organisations running regular transport arrangements. Contact us to discuss a rescue transport agreement.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does rescue dog transport take from Romania?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our UK–Romania route typically takes approximately 36–48 hours, with scheduled welfare stops every 4–5 hours. Exact times depend on pickup location, traffic and border conditions.',
                },
              },
            ],
          }),
        }}
      />

      <PageHero
        title="Rescue a Dog"
        subtitle="We help rescue organisations transport rehomed dogs safely from Europe to their forever homes in the UK."
        breadcrumb="Home / Rescue a Dog"
      />

      {/* Intro Statement */}
      <section className="bg-brand-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Transport Support
            </p>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4">
              Every dog deserves a safe journey to their forever home
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6" />
            <p className="text-gray-400 text-base leading-relaxed">
              Euro Pet Express partners with rescue organisations across Eastern Europe to provide
              DEFRA-authorised, welfare-first transport for rehomed dogs entering the UK. If you are
              a rescue organisation or have adopted a rescue dog abroad, we can help arrange safe
              transport.
            </p>
          </div>
        </div>
      </section>

      {/* Rescue Dog Profiles */}
      <section className="bg-brand-cream py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Dogs Needing Transport
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Meet Some of Our Recent Passengers
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-4" />
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              These dogs have been transported safely to their forever homes with the help of Euro Pet
              Express. We work with rescue organisations across Romania, Serbia, Hungary and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {RESCUE_DOGS.map((dog) => (
              <div
                key={dog.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300 flex flex-col"
              >
                {/* Dog photo */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={dog.image}
                    alt={`${dog.name} — rescue dog available for transport`}
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Status badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        dog.status === 'Needs Transport'
                          ? 'bg-amber-400 text-amber-900'
                          : dog.status === 'Transported'
                          ? 'bg-green-400 text-green-900'
                          : 'bg-brand-gold text-brand-dark'
                      }`}
                    >
                      {dog.status}
                    </span>
                  </div>
                </div>

                {/* Dog info */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-brand-dark">
                        {dog.name}
                      </h3>
                      <p className="text-brand-gold text-sm font-semibold mt-0.5">{dog.breed}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-xs">Age</p>
                      <p className="text-gray-700 text-sm font-semibold">{dog.age}</p>
                    </div>
                  </div>

                  {/* Details row */}
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-gray-500 text-xs">{dog.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-gray-500 text-xs">{dog.rescue}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                    {dog.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={`/contact?rescue=true&dog=${dog.name}`}
                    className="block w-full text-center bg-brand-dark text-white font-semibold text-xs px-4 py-3 rounded-lg hover:bg-brand-gold hover:text-brand-dark transition-colors uppercase tracking-wider"
                  >
                    Arrange Transport
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-center text-gray-400 text-sm mt-10 max-w-2xl mx-auto">
            * Dog profiles shown are examples of rescue dogs we have helped transport. We work with
            registered rescue organisations across Europe. Contact us to discuss transport for a
            specific rescue dog.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              The Process
            </p>
            <h2 className="font-playfair text-3xl font-bold text-brand-dark mb-4">
              How Rescue Transport Works
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((item) => (
              <div
                key={item.step}
                className="text-center p-6 rounded-2xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-md transition-all duration-300"
              >
                <div className="font-playfair text-4xl font-bold text-brand-gold/30 mb-3">
                  {item.step}
                </div>
                <h3 className="font-playfair text-lg font-bold text-brand-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold text-white mb-4">
            Are you a rescue organisation?
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto mb-8">
            We offer volume pricing for registered rescue organisations. Get in touch to discuss a
            transport agreement for regular rescue runs.
          </p>
          <Link
            href="/contact?type=rescue-organisation"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-bold text-sm px-8 py-4 rounded-xl hover:bg-brand-goldHover transition-colors uppercase tracking-wider"
          >
            <ArrowLeftRight className="w-4 h-4" />
            Contact Us About Rescue Transport
          </Link>
        </div>
      </section>
    </div>
  )
}
