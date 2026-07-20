import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Heart, Calendar } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

export const metadata = {
  title: 'Rescue a Dog | Euro Pet Express',
  description: 'Meet dogs in Europe looking for their forever home in the UK. Euro Pet Express supports rescue organisations by providing DEFRA-authorised transport to bring your adopted dog safely home.',
  openGraph: {
    title: 'Rescue a Dog | Euro Pet Express',
    description: 'Give a rescued dog their forever home. We help transport adopted dogs safely from Europe to the UK.',
    url: 'https://europetexpress.co.uk/rescue',
  },
}

const RESCUE_DOGS = [
  {
    id: 1,
    name: 'Luna',
    breed: 'Romanian Mioritic Mix',
    gender: 'Female',
    age: '2 years',
    size: 'Medium',
    location: 'Bucharest, Romania',
    rescueOrg: 'Save the Dogs Romania',
    status: 'Available',
    goodWithKids: true,
    goodWithDogs: false,
    goodWithCats: false,
    needsGarden: true,
    personality: [
      'Gentle and affectionate',
      'Loves outdoor walks',
      'Calm indoors',
      'Great with adults',
    ],
    description: 'Luna was rescued from the streets of Bucharest at just six months old. Despite a difficult start, she has blossomed into a gentle, affectionate dog who loves nothing more than a long walk and an evening cuddle on the sofa. She would thrive in a calm home with access to a garden.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80',
    alt: 'Luna — Romanian rescue dog available for adoption',
  },
  {
    id: 2,
    name: 'Bruno',
    breed: 'Serbian Shepherd Mix',
    gender: 'Male',
    age: '3 years',
    size: 'Large',
    location: 'Belgrade, Serbia',
    rescueOrg: 'Paws of Serbia',
    status: 'Available',
    goodWithKids: true,
    goodWithDogs: true,
    goodWithCats: false,
    needsGarden: true,
    personality: [
      'Loyal and protective',
      'Loves to play fetch',
      'Good with children',
      'Energetic and fun',
    ],
    description: 'Bruno is a big-hearted shepherd mix who was surrendered to a Serbian shelter when his owner could no longer care for him. He is fully vaccinated, microchipped, and neutered. Bruno is brilliant with children and other dogs — he just needs a family to call his own and a garden to run around in.',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=80',
    alt: 'Bruno — Serbian shepherd mix available for adoption',
  },
  {
    id: 3,
    name: 'Mia',
    breed: 'Hungarian Vizsla Cross',
    gender: 'Female',
    age: '18 months',
    size: 'Medium',
    location: 'Budapest, Hungary',
    rescueOrg: 'Hungarian Dog Rescue',
    status: 'Reserved',
    goodWithKids: true,
    goodWithDogs: true,
    goodWithCats: true,
    needsGarden: false,
    personality: [
      'Playful and curious',
      'Great with other animals',
      'Adapts well to flats',
      'Loves human company',
    ],
    description: 'Mia is a young, spirited Vizsla cross full of life and curiosity. She was found wandering alone and taken in by a Hungarian rescue organisation. She has settled beautifully in foster care, gets along with cats and other dogs, and would suit an active family or individual who can give her plenty of attention.',
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&q=80',
    alt: 'Mia — Hungarian Vizsla cross available for adoption',
  },
  {
    id: 4,
    name: 'Rex',
    breed: 'Romanian Street Dog Mix',
    gender: 'Male',
    age: '4 years',
    size: 'Large',
    location: 'Cluj-Napoca, Romania',
    rescueOrg: 'Rescue Romania UK',
    status: 'Available',
    goodWithKids: false,
    goodWithDogs: false,
    goodWithCats: false,
    needsGarden: true,
    personality: [
      'Loyal one-person dog',
      'Loves outdoor adventures',
      'Thrives with an experienced owner',
      'Calm and steady',
    ],
    description: 'Rex has had a tough life on the streets but has shown incredible resilience and trust in the people who have cared for him. He is looking for an experienced dog owner who understands rescue dogs and can give him the patient, consistent home he deserves. In return you will get one of the most loyal companions imaginable.',
    image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&q=80',
    alt: 'Rex — Romanian street dog looking for experienced home',
  },
]

function DogProfileCard({ dog }: { dog: typeof RESCUE_DOGS[0] }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-gold/20 transition-all duration-300 flex flex-col">
      {/* Photo section */}
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={dog.image}
          alt={dog.alt}
          fill
          className="object-cover object-center hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Status badge — top left */}
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${dog.status === 'Available'
            ? 'bg-green-400 text-green-900'
            : 'bg-amber-400 text-amber-900'
            }`}>
            {dog.status === 'Available' ? 'Available for Adoption' : 'Reserved'}
          </span>
        </div>

        {/* Gender + size badge — top right */}
        <div className="absolute top-4 right-4">
          <span className="bg-brand-dark/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
            {dog.gender} · {dog.size}
          </span>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-dark/70 to-transparent" />

        {/* Dog name overlay at bottom of photo */}
        <div className="absolute bottom-4 left-4">
          <h3 className="font-playfair text-2xl font-bold text-white leading-none">
            {dog.name}
          </h3>
          <p className="text-brand-gold text-sm font-semibold mt-0.5">
            {dog.breed}
          </p>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Quick info pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded-full font-medium">
            <Calendar className="w-3 h-3" />
            {dog.age}
          </span>
          <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded-full font-medium">
            <MapPin className="w-3 h-3" />
            {dog.location}
          </span>
          <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded-full font-medium">
            <Heart className="w-3 h-3 text-rose-400" />
            {dog.rescueOrg}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
          {dog.description}
        </p>

        {/* Personality traits */}
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
            Personality
          </p>
          <div className="flex flex-wrap gap-1.5">
            {dog.personality.map((trait) => (
              <span key={trait} className="bg-brand-gold/10 text-brand-dark text-xs px-2.5 py-1 rounded-full border border-brand-gold/20 font-medium">
                {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Compatibility row */}
        <div className="grid grid-cols-3 gap-2 mb-6 p-4 bg-gray-50 rounded-xl">
          <div className="text-center">
            <div className={`text-lg mb-1 ${dog.goodWithKids ? 'text-green-500' : 'text-red-400'}`}>
              {dog.goodWithKids ? '✓' : '✗'}
            </div>
            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide leading-tight">
              Children
            </p>
          </div>
          <div className="text-center">
            <div className={`text-lg mb-1 ${dog.goodWithDogs ? 'text-green-500' : 'text-red-400'}`}>
              {dog.goodWithDogs ? '✓' : '✗'}
            </div>
            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide leading-tight">
              Other Dogs
            </p>
          </div>
          <div className="text-center">
            <div className={`text-lg mb-1 ${dog.goodWithCats ? 'text-green-500' : 'text-red-400'}`}>
              {dog.goodWithCats ? '✓' : '✗'}
            </div>
            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide leading-tight">
              Cats
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href={`/rescue-info?dog=${encodeURIComponent(dog.name)}&breed=${encodeURIComponent(dog.breed)}&location=${encodeURIComponent(dog.location)}`}
          className={`block w-full text-center font-bold text-sm px-4 py-3.5 rounded-xl uppercase tracking-wider transition-all duration-200 ${dog.status === 'Available'
            ? 'bg-brand-gold text-brand-dark hover:bg-brand-goldHover shadow-md hover:shadow-lg hover:scale-[1.01]'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none'
            }`}
        >
          {dog.status === 'Available' ? 'Request More Information' : 'Currently Reserved'}
        </Link>

        {dog.status === 'Available' && (
          <p className="text-center text-gray-400 text-[11px] mt-2">
            We'll be in touch within 12–24 hours
          </p>
        )}
      </div>
    </div>
  )
}

export default function RescuePage() {
  return (
    <div>
      {/* SECTION 1: PAGE HERO */}
      <PageHero
        title="Rescue a Dog"
        subtitle="Meet dogs across Europe looking for their forever home. Give a rescued dog the life they deserve."
        breadcrumb="Home / Rescue a Dog"
      />

      {/* SECTION 2: MISSION STATEMENT BANNER */}
      <section className="bg-brand-dark py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left — main message */}
            <div className="lg:col-span-2">
              <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                About Our Rescue Programme
              </p>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Every dog you see here is waiting for someone like you.
              </h2>
              <div className="w-16 h-0.5 bg-brand-gold mb-5" />
              <p className="text-gray-400 text-base leading-relaxed">
                We work with registered rescue organisations across Romania, Serbia, Hungary, Croatia and beyond. These dogs have been abandoned, surrendered, or found on the streets. They have been assessed, vaccinated, microchipped and loved in foster care — and now they are ready for their forever home.
              </p>
              <p className="text-gray-400 text-base leading-relaxed mt-3">
                When you find a dog you connect with, get in touch. We can help arrange everything — from the adoption process with the rescue organisation to safe transport to your door in the UK.
              </p>
            </div>

            {/* Right — 3 stat boxes */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                <p className="font-playfair text-3xl font-bold text-brand-gold mb-1">
                  50+
                </p>
                <p className="text-gray-400 text-sm">
                  Dogs rehomed
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                <p className="font-playfair text-2xl md:text-3xl font-bold text-brand-gold mb-1">
                  Multiple
                </p>
                <p className="text-gray-400 text-sm">
                  Rescue Centres
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                <p className="font-playfair text-2xl font-bold text-brand-gold mb-2">
                  ✓
                </p>
                <p className="text-gray-400 text-sm">
                  DEFRA Compliant Transport
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DOG PROFILES GRID */}
      <section className="bg-brand-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-14">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              Meet The Dogs
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Looking for their forever home
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-5" />
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Each dog below has been assessed, vaccinated, and cared for by a rescue organisation. They are ready to travel to the UK and start their new life with you.
            </p>
          </div>

          {/* Dog cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {RESCUE_DOGS.map((dog) => (
              <DogProfileCard key={dog.id} dog={dog} />
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-14 bg-white rounded-2xl border border-gray-100 p-8 text-center max-w-3xl mx-auto shadow-sm">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
              More Dogs Available
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              The dogs shown here are just a selection. We work with multiple rescue organisations across Europe. If you are looking for a specific breed, age, or temperament, get in touch and we will do our best to help match you with the right dog.
            </p>
            <Link
              href="/rescue-info"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-bold text-sm px-8 py-4 rounded-xl hover:bg-brand-goldHover transition-all duration-200 uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Request More Information
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW REHOMING WORKS */}
      <section className="bg-brand-dark py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              The Process
            </p>
            <h2 className="font-playfair text-3xl font-bold text-white mb-4">
              How rehoming works
            </h2>
            <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-4" />
            <p className="text-gray-400 text-base max-w-xl mx-auto">
              From first enquiry to your dog arriving at your door — here is what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                step: '01',
                title: 'Choose a Dog',
                desc: 'Browse our rescue dogs and find one that feels right for your home and lifestyle. Not sure? Tell us what you are looking for and we will help match you.',
              },
              {
                step: '02',

                title: 'Submit an Enquiry',
                desc: 'Click "Request More Information" and tell us about yourself, your home, and which dog you are interested in. Include a message about why you would be a great match.',
              },
              {
                step: '03',

                title: 'Adoption Approval',
                desc: 'We connect you with the rescue organisation. They will assess your application. Once approved, we arrange all the transport documentation.',
              },
              {
                step: '04',

                title: 'Welcome Home',
                desc: 'Your dog travels safely with Euro Pet Express. You receive regular photo updates throughout the journey until your new companion arrives at your door.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-gold/30 hover:bg-white/[0.08] transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-playfair text-3xl font-bold text-brand-gold/30">
                    {item.step}
                  </span>
                  <span className="text-2xl"></span>
                </div>
                <h3 className="font-playfair text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT TO EXPECT WHEN ADOPTING */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — content */}
            <div>
              <p className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                Before You Apply
              </p>
              <h2 className="font-playfair text-3xl font-bold text-brand-dark mb-4">
                Are you ready for a rescue dog?
              </h2>
              <div className="w-16 h-0.5 bg-brand-gold mb-6" />
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Rescue dogs are wonderful, resilient animals — but they sometimes need extra patience, consistency, and understanding as they settle into their new home. Here is what we ask of all our adopters.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: 'A safe, stable home environment',
                    desc: 'Whether you have a house or a flat, what matters most is that your dog feels safe, loved, and has regular outdoor time.',
                  },
                  {
                    title: 'Time and commitment',
                    desc: 'Rescue dogs need time to adjust. Some settle in days, others weeks. Patience and consistency make all the difference.',
                  },
                  {
                    title: 'Financial readiness',
                    desc: 'Be prepared for ongoing costs — food, vet bills, grooming, insurance, and the one-off transport and adoption fee.',
                  },
                  {
                    title: 'Openness to training support',
                    desc: 'Many rescue dogs benefit from basic training or behavioural support when they first arrive. We can advise on resources.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-brand-cream border border-gray-100">
                    <div className="w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-brand-dark font-semibold text-sm mb-1">{item.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image */}
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-brand-gold/20">
              <Image
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80"
                alt="Happy rescue dog in their new home"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-brand-dark/80 backdrop-blur-sm rounded-xl p-4 border border-brand-gold/20">
                  <p className="text-brand-gold text-xs font-semibold uppercase tracking-wider mb-1">
                    David, Managing Director
                  </p>
                  <p className="text-white text-sm italic leading-relaxed">
                    "Every dog that finds their forever home through us represents everything we built this company for."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to give a dog their forever home?
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Browse the dogs above and click enquire on any that you feel could be the right match. Or get in touch directly and tell us what you are looking for — we will do our best to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/rescue-info?type=rescue-organisation"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-dark font-bold text-sm px-10 py-4 rounded-xl hover:bg-brand-goldHover transition-all duration-200 uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Request More Information
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-brand-gold/40 text-brand-gold font-semibold text-sm px-8 py-4 rounded-xl hover:bg-brand-gold/10 transition-all duration-200 uppercase tracking-wider"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
