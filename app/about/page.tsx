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
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'About Euro Pet Express | DEFRA Authorised Pet Transport Founded by Tarik',
  description: 'Euro Pet Express was founded by Tarik, a 20-year dog transport professional who decided the industry had to be done better. DEFRA authorised pet transport between the UK and Europe. Welfare first. Paperwork right. No corners cut.',
  keywords: 'Euro Pet Express about, DEFRA authorised pet transport, pet transport UK Europe, dog transport founder, trusted pet courier UK, animal welfare transport, pet transport Romania UK Serbia Germany France',
  openGraph: {
    title: 'About Euro Pet Express | DEFRA Authorised Pet Transport',
    description: 'Founded by Tarik — 20 years of professional dog transport experience. We built Euro Pet Express to prove there is a better way. DEFRA authorised. Welfare first.',
    url: 'https://europetexpress.co.uk/about',
    siteName: 'Euro Pet Express',
    images: [
      {
        url: 'https://europetexpress.co.uk/images/about/owner.png',
        width: 1200,
        height: 630,
        alt: 'Tarik — Founder of Euro Pet Express, DEFRA Authorised Pet Transport',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Euro Pet Express | DEFRA Authorised Pet Transport',
    description: 'Founded by Tarik — 20 years of professional dog transport experience. Welfare first. Paperwork right. No corners cut.',
    images: [
      'https://europetexpress.co.uk/images/about/owner.png'
    ],
  },
  alternates: {
    canonical: 'https://europetexpress.co.uk/about',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function About() {
  return (
    <div>
      <>
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Euro Pet Express",
              "url": "https://europetexpress.co.uk",
              "logo": "https://europetexpress.co.uk/logo.png",
              "description": "DEFRA authorised premium pet transport service operating between the UK and Europe. Safe, compliant, scheduled departures for dogs, cats and small animals.",
              "foundingDate": "2023",
              "founder": {
                "@type": "Person",
                "name": "Tarik",
                "jobTitle": "Founder",
                "description": "20-year dog transport industry professional who founded Euro Pet Express to provide welfare-first pet transport between the UK and Europe."
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44-7853-147342",
                "contactType": "customer service",
                "availableLanguage": "English",
                "areaServed": ["GB", "EU"]
              },
              "sameAs": [
                "https://www.facebook.com/share/18HAUnUYuM/?mibextid=wwXIfr",
                "https://www.instagram.com/europet26",
                "https://www.tiktok.com/@europet.express"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GB"
              },
              "areaServed": [
                "United Kingdom",
                "Romania",
                "Serbia",
                "Hungary",
                "Croatia",
                "France",
                "Spain",
                "Germany",
                "Netherlands",
                "Czech Republic"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "DEFRA Type 2 Authorised Transporter",
                  "credentialCategory": "licence",
                  "recognizedBy": {
                    "@type": "GovernmentOrganization",
                    "name": "Department for Environment Food and Rural Affairs (DEFRA)",
                    "url": "https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs"
                  }
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "TRACES NT Registered",
                  "credentialCategory": "licence"
                }
              ],
              "serviceType": [
                "Pet Transport",
                "Dog Transport",
                "Cat Transport",
                "DEFRA Authorised Transport",
                "International Pet Relocation",
                "Rescue Transport",
                "Breeder Transport"
              ]
            })
          }}
        />
        <Script
          id="schema-founder"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tarik",
              "jobTitle": "Founder",
              "worksFor": {
                "@type": "Organization",
                "name": "Euro Pet Express",
                "url": "https://europetexpress.co.uk"
              },
              "description": "Founder of Euro Pet Express. Professional with two decades of experience in dog and pet transport across Europe and the UK. Founded Euro Pet Express to establish welfare-first standards in the pet transport industry.",
              "knowsAbout": [
                "Pet Transport",
                "DEFRA Regulations",
                "Animal Welfare",
                "EU Pet Import Requirements",
                "UK Pet Import Requirements",
                "TRACES NT Documentation",
                "Long-distance Animal Transport"
              ],
              "image": "https://europetexpress.co.uk/images/about/owner.png",
              "url": "https://europetexpress.co.uk/about"
            })
          }}
        />
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What documents does my pet need to travel to the UK?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "All pets (dogs, cats, and ferrets) entering Great Britain must have a valid microchip, an up-to-date rabies vaccination administered after microchipping, and an Animal Health Certificate (AHC) or valid pet passport issued by an official vet within the required timeframe before travel. Dogs entering Great Britain also require a tapeworm treatment administered 24–120 hours before arrival — this requirement does not currently apply to cats or ferrets. Euro Pet Express will guide you through the exact requirements for your specific pet and route when you request a quote."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does the pet transport journey take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Journey duration varies based on weather, traffic, border crossings, welfare stops, and ferry or tunnel schedules. Please contact Euro Pet Express for current estimates on your specific route."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I track my pet during the transport journey?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Euro Pet Express provides regular WhatsApp updates throughout the journey including welfare check photos and location updates at key stages, so you always know how your pet is doing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What size transport crates do you use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Euro Pet Express carries crates suitable for pets from small breeds up to large breeds. Please state your pet's breed, weight, and height when requesting a quote so we can confirm crate availability for your pet."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you transport cats and other animals as well as dogs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Euro Pet Express transports dogs, cats, ferrets, and other small animals between the UK and Europe. For bespoke or exotic pet transport requirements, please contact us to discuss your specific needs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How far in advance should I book pet transport?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We recommend booking at least 3 to 4 weeks in advance of your preferred departure date, as spaces on each scheduled run are limited. Contact Euro Pet Express as early as possible to secure your slot."
                  }
                }
              ]
            })
          }}
        />
        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://europetexpress.co.uk"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About Euro Pet Express",
                  "item": "https://europetexpress.co.uk/about"
                }
              ]
            })
          }}
        />
      </>

      <PageHero
        title="About Euro Pet Express"
        subtitle="DEFRA authorised pet transport between the UK and Europe — founded by a 20-year industry professional who decided it had to be done better."
        breadcrumb="Home / About Euro Pet Express"
      />

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
                    alt="Tarik, Founder of Euro Pet Express — DEFRA authorised pet transport UK Europe"
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

              <p className="text-brand-gold text-sm font-medium leading-relaxed mb-6 border-l-2 border-brand-gold/30 pl-4">
                Euro Pet Express is a DEFRA Type 2 authorised pet transport service operating scheduled routes between the United Kingdom and destinations across Europe — including Romania, Serbia, Hungary, Croatia, France, Spain, Germany, the Netherlands, and Czech Republic. We transport dogs, cats, ferrets, and small animals with welfare, documentation, and transparency at the centre of everything we do.
              </p>

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
              <article
                itemScope
                itemType="https://schema.org/Article"
                className="space-y-6"
              >
                <meta itemProp="author" content="Tarik" />
                <meta itemProp="publisher" content="Euro Pet Express" />

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

              </article>

              {/* Founder attribution line */}
              <div
                itemScope
                itemType="https://schema.org/Person"
                className="mt-10 pt-8 border-t border-gray-200"
              >
                <span itemProp="name" className="sr-only">
                  Tarik
                </span>
                <span itemProp="jobTitle" className="sr-only">
                  Founder, Euro Pet Express
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-brand-gold" />
                  <p className="text-gray-400 text-sm italic">
                    Tarik, Founder
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
                  desc: (
                    <>
                      Fully authorised Type 2 long-journey pet transporter — certified under{' '}
                      <a
                        href="https://www.gov.uk/guidance/moving-pets-to-great-britain"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-gold hover:underline"
                      >
                        UK Government pet travel regulations
                      </a>
                    </>
                  )
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
                  <div className="text-gray-400 text-xs leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section id="faq" className="py-16 bg-off-white" aria-label="Frequently Asked Questions about Euro Pet Express pet transport">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-2xl text-navy font-bold mb-6">Frequently Asked Questions</h3>

          <div className="space-y-4">
            {[
              {
                q: 'What documents does my pet need to travel?',
                a: (
                  <>
                    All pets (dogs, cats, and ferrets) entering Great Britain must have a valid microchip, an up-to-date rabies vaccination administered after microchipping, and an Animal Health Certificate (AHC) or valid pet passport issued by an official vet within the required timeframe before travel. Dogs entering Great Britain also require a tapeworm treatment administered 24–120 hours before arrival — this requirement does not currently apply to cats or ferrets. Euro Pet Express will guide you through the exact requirements for your specific pet and route when you request a quote. For full official guidance, visit the{' '}
                    <a
                      href="https://www.gov.uk/bring-pet-to-great-britain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-gold hover:underline"
                    >
                      UK Government&apos;s pet travel page
                    </a>.
                  </>
                )
              },
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
