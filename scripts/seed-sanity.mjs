#!/usr/bin/env node
/**
 * Sanity CMS Seeding Script
 * This script extracts all hardcoded content from the EuroPet website
 * and seeds it into Sanity CMS via the API.
 */

import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

console.log('🌱 Starting Sanity seed script...')
console.log(`📦 Project: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`)
console.log(`🗂️  Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}\n`)

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

async function upsertDocument(doc) {
  try {
    const existing = await client.fetch(`*[_id == "${doc._id}"]`)
    if (existing.length > 0) {
      console.log(`  ✓ Updating existing document: ${doc._id}`)
      return await client.createIfNotExists({
        ...doc,
        _id: doc._id,
      }).then((result) => client.patch(doc._id).set(doc).commit())
    } else {
      console.log(`  ✓ Creating new document: ${doc._id}`)
      return await client.createIfNotExists({
        ...doc,
        _id: doc._id,
      })
    }
  } catch (error) {
    console.error(`  ✗ Error upserting ${doc._id}:`, error.message)
    throw error
  }
}

// ============================================================================
// SITE SETTINGS
// ============================================================================

async function seedSiteSettings() {
  console.log('\n📋 Seeding Site Settings...')
  
  const siteSettings = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    phoneNumber: '+44 7853 147342',
    whatsappNumber: '447853147342',
    emailAddress: 'info@europetexpress.co.uk',
    defraStatus: 'Pending DEFRA Type 2 Approval — End August 2026',
    responseTime: 'Within 12–24 hours',
    facebookUrl: 'https://www.facebook.com/share/18HAUnUYuM/?mibextrid=wwXIfr',
    instagramUrl: 'https://www.instagram.com/europetexpress26/',
    youtubeUrl: 'https://youtube.com/@europetexpress-z1v?si=o_sn0SLEsUIdX2Fi',
    tiktokUrl: 'https://www.tiktok.com/@europet.express',
  }
  
  await upsertDocument(siteSettings)
}

// ============================================================================
// HOME PAGE
// ============================================================================

async function seedHomePage() {
  console.log('\n🏠 Seeding Home Page...')
  
  const homePage = {
    _id: 'homePage',
    _type: 'homePage',
    heroHeadlineLine1: 'Your dog is family.',
    heroHeadlineLine2: 'Every journey treats it that way.',
    heroSubtext: 'Euro Pet Express was founded by someone who spent over a decade moving dogs across Europe the way this industry does it, and decided it had to be done better. Welfare first. Paperwork right. No corners cut, ever.',
    founderQuote: 'I\'ve been around dogs my whole life, and for over a decade I\'ve been moving them across Europe and into the UK.',
    vehicleSectionTitle: 'The Vehicle That Carries Your Pet',
    vehicleDescription: 'Our climate-controlled transport vehicle meets DEFRA long-journey pet transport standards. Every journey provides regular welfare stops every 4–5 hours, individual secured crates sized for each pet, and WhatsApp photo/video updates so you know exactly how your pet is doing throughout the journey.',
    vehicleImageCaption: 'Euro Pet Express DEFRA-compliant transport vehicle',
    vehicleFeatures: [
      'Climate control maintained throughout',
      'Individual secured IATA-standard crates',
      'Regular welfare stops every 4–5 hours',
      'Photo & video updates via WhatsApp',
      'DEFRA Type 2 long-journey compliant',
      'Professional animal welfare trained driver',
    ],
    seoTitle: 'Euro Pet Express | Premium Pet Transport UK & Europe',
    seoDescription: 'Premium pet transport between the UK and Europe. Safe, compliant, scheduled departures for dogs, cats and small animals. DEFRA-authorised. Welfare first.',
  }
  
  await upsertDocument(homePage)
}

// ============================================================================
// ROUTES PAGE
// ============================================================================

async function seedRoutesPage() {
  console.log('\n🗺️  Seeding Routes Page...')
  
  const routesPage = {
    _id: 'routesPage',
    _type: 'routesPage',
    pageHeading: 'Routes & Schedule',
    pageSubheading: 'Regular scheduled departures between the United Kingdom and Europe.',
    seoTitle: 'Routes & Schedule | Euro Pet Express',
    seoDescription: 'Explore our scheduled pet transport routes connecting the UK with Romania, Serbia, Hungary, Croatia, France, Spain, Germany, Netherlands, Czech Republic, and beyond.',
  }
  
  await upsertDocument(routesPage)
}

// ============================================================================
// ROUTES (TRANSPORT ROUTES)
// ============================================================================

async function seedRoutes() {
  console.log('\n🚐 Seeding Transport Routes...')
  
  const routes = [
    {
      _id: 'uk-serbia',
      _type: 'route',
      name: 'UK ↔ Serbia',
      slug: { current: 'uk-serbia' },
      destinationCountry: 'Serbia',
      destinationCode: 'RS',
      departureFrequency: 'Departures twice per month',
      shortDescription: 'Safe and direct pet transport from the UK to Belgrade and surrounding areas.',
      routeHighlights: [
        'DEFRA-compliant long-journey vehicle',
        'Regular welfare stops every 4–5 hours',
        'Full customs documentation support',
        'Climate-controlled transport area',
      ],
      isActive: true,
      displayOrder: 1,
    },
    {
      _id: 'uk-romania',
      _type: 'route',
      name: 'UK ↔ Romania',
      slug: { current: 'uk-romania' },
      destinationCountry: 'Romania',
      destinationCode: 'RO',
      departureFrequency: 'Departures twice per month',
      shortDescription: 'Established twice-monthly route from the UK to Bucharest, Cluj-Napoca, Brașov and beyond.',
      routeHighlights: [
        'Most popular route — twice monthly',
        'Multiple pickup points across the UK',
        'Eurotunnel Calais–Folkestone crossing',
        'Welfare checks and rest stops included',
      ],
      isActive: true,
      displayOrder: 2,
    },
    {
      _id: 'uk-hungary',
      _type: 'route',
      name: 'UK ↔ Hungary',
      slug: { current: 'uk-hungary' },
      destinationCountry: 'Hungary',
      destinationCode: 'HU',
      departureFrequency: 'Departures twice per month',
      shortDescription: 'Comfortable pet transport from the UK to Budapest and surrounding Hungarian cities.',
      routeHighlights: [
        'Direct route via Belgium and Austria',
        'Climate-controlled crate transport',
        'Full EU import documentation',
        'Regular welfare inspection stops',
      ],
      isActive: true,
      displayOrder: 3,
    },
    {
      _id: 'uk-croatia',
      _type: 'route',
      name: 'UK ↔ Croatia',
      slug: { current: 'uk-croatia' },
      destinationCountry: 'Croatia',
      destinationCode: 'HR',
      departureFrequency: 'Departures twice per month',
      shortDescription: 'Pet transport from the UK to Zagreb, Split, and key Croatian cities.',
      routeHighlights: [
        'Scenic Alpine corridor route',
        'Individual secured crates',
        'Croatian customs documentation',
        'Welfare rest stops in transit',
      ],
      isActive: true,
      displayOrder: 4,
    },
    {
      _id: 'uk-france',
      _type: 'route',
      name: 'UK ↔ France',
      slug: { current: 'uk-france' },
      destinationCountry: 'France',
      destinationCode: 'FR',
      departureFrequency: 'Departures twice per month',
      shortDescription: 'Regular twice-monthly departures from the UK to Paris, Lyon, Marseille and across France.',
      routeHighlights: [
        'Fastest European route available',
        'Eurotunnel or ferry crossing options',
        'Departures twice per month for flexibility',
        'Most affordable European destination',
      ],
      isActive: true,
      displayOrder: 5,
    },
    {
      _id: 'uk-spain',
      _type: 'route',
      name: 'UK ↔ Spain',
      slug: { current: 'uk-spain' },
      destinationCountry: 'Spain',
      destinationCode: 'ES',
      departureFrequency: 'Departures twice per month',
      shortDescription: 'Popular route to Madrid, Barcelona, Valencia, and the Spanish costas.',
      routeHighlights: [
        'Covers all major Spanish regions',
        'Via France Eurotunnel crossing',
        'Spanish pet import documentation',
        'Full climate control for safe travel in warm conditions',
      ],
      isActive: true,
      displayOrder: 6,
    },
    {
      _id: 'uk-germany',
      _type: 'route',
      name: 'UK ↔ Germany',
      slug: { current: 'uk-germany' },
      destinationCountry: 'Germany',
      destinationCode: 'DE',
      departureFrequency: 'Departures twice per month',
      shortDescription: 'Regular service to Berlin, Munich, Hamburg, Frankfurt and across Germany.',
      routeHighlights: [
        'Departures twice per month for maximum flexibility',
        'Multiple German delivery cities',
        'EU pet passport compliance',
        'Via Belgium Eurotunnel corridor',
      ],
      isActive: true,
      displayOrder: 7,
    },
    {
      _id: 'uk-netherlands',
      _type: 'route',
      name: 'UK ↔ Netherlands',
      slug: { current: 'uk-netherlands' },
      destinationCountry: 'Netherlands',
      destinationCode: 'NL',
      departureFrequency: 'Departures twice per month',
      shortDescription: 'Regular twice-monthly service to Amsterdam, Rotterdam, The Hague and all Dutch cities.',
      routeHighlights: [
        'Shortest international route — twice-monthly service',
        'Hook of Holland or Eurotunnel options',
        'Ideal for urgent pet relocations',
        'Dutch customs documentation included',
      ],
      isActive: true,
      displayOrder: 8,
    },
    {
      _id: 'uk-czech-republic',
      _type: 'route',
      name: 'UK ↔ Czech Republic',
      slug: { current: 'uk-czech-republic' },
      destinationCountry: 'Czech Republic',
      destinationCode: 'CZ',
      departureFrequency: 'Departures twice per month',
      shortDescription: 'Pet transport to Prague, Brno, Ostrava and surrounding Czech regions.',
      routeHighlights: [
        'Via Germany autobahn corridor',
        'Czech Republic pet import compliance',
        'Regular welfare checks en route',
        'Individual crate for each pet',
      ],
      isActive: true,
      displayOrder: 9,
    },
    {
      _id: 'uk-uk',
      _type: 'route',
      name: 'UK to UK Transport',
      slug: { current: 'uk-uk' },
      destinationCountry: 'United Kingdom',
      destinationCode: 'GB',
      departureFrequency: 'By arrangement — contact us for scheduling',
      shortDescription: 'Domestic UK pet transport for relocations, rehoming and breeder deliveries across England, Scotland and Wales.',
      routeHighlights: [
        'Door-to-door domestic service',
        'Climate-controlled transport',
        'All UK regions covered',
        'Same welfare standards as European routes',
      ],
      isActive: true,
      displayOrder: 10,
    },
    {
      _id: 'transatlantic',
      _type: 'route',
      name: 'Transatlantic Pet Transport',
      slug: { current: 'transatlantic' },
      destinationCountry: 'United States / Canada',
      destinationCode: 'US',
      departureFrequency: 'By arrangement — contact us for scheduling',
      shortDescription: 'Long-haul transatlantic pet transport with full documentation and handling support for USA and Canada destinations.',
      routeHighlights: [
        'Full USDA/CFIA documentation support',
        'Coordination with air cargo partners',
        'Health certificate and rabies titre support',
        'Bespoke pricing — contact us to discuss',
      ],
      isActive: true,
      displayOrder: 11,
    },
  ]
  
  for (const route of routes) {
    await upsertDocument(route)
  }
}

// ============================================================================
// SERVICES PAGE
// ============================================================================

async function seedServicesPage() {
  console.log('\n🐾 Seeding Services Page...')
  
  const servicesPage = {
    _id: 'servicesPage',
    _type: 'servicesPage',
    pageHeading: 'Our Services',
    pageSubheading: 'Tailored pet transport for rescues, breeders, shelters and private owners.',
    services: [
      {
        _type: 'service',
        title: 'Private Owner Transport',
        description: 'You\'re moving to the UK or reuniting with your pet. We provide door-to-door or collection-point transport for privately owned pets with full welfare documentation support.',
        features: [
          'Flexible collection points',
          'Welfare updates during journey',
          'TRACES documentation support',
          'Microchip & vaccination verification',
        ],
        isPriceOnApplication: false,
        isVisible: true,
      },
      {
        _type: 'service',
        title: 'Rescue & Shelter Transport',
        description: 'We work directly with registered rescue organisations to transport rehomed pets from European shelters to their UK foster or forever homes.',
        features: [
          'Volume discount for registered rescues',
          'Coordination with shelter staff',
          'Full EU/UK import compliance',
          'DEFRA-authorised journey documentation',
        ],
        isPriceOnApplication: false,
        isVisible: true,
      },
      {
        _type: 'service',
        title: 'Breeder Transport',
        description: 'Trusted by registered breeders across Romania and Poland to transport puppies and adult pets to new owners in the UK safely and in compliance with all regulations.',
        features: [
          'Age-verified puppy transport (min. 15 weeks)',
          'Health certificate coordination',
          'Rabies titre test verification',
          'Microchip & passport checking',
        ],
        isPriceOnApplication: false,
        isVisible: true,
      },
      {
        _type: 'service',
        title: 'Documentation Assistance',
        description: 'Navigating UK pet import rules post-Brexit is complex. We guide owners and organisations through the required paperwork.',
        features: [
          'TRACES NT movement document guidance',
          'Health certificate requirements',
          'Rabies vaccination timing',
          'Tapeworm treatment guidance',
        ],
        isPriceOnApplication: false,
        isVisible: true,
      },
      {
        _type: 'service',
        title: 'Bespoke Pet Transport',
        description: 'For unique or complex transport requirements, we offer fully bespoke pet transport solutions tailored to your specific needs. Whether transporting multiple pets, exotic animals, or requiring specialist handling, we can accommodate.',
        features: [
          'Fully tailored transport solution',
          'Specialist handling available',
          'Flexible scheduling and routing',
          'Price on application — contact us to discuss',
        ],
        isPriceOnApplication: true,
        isVisible: true,
      },
    ],
  }
  
  await upsertDocument(servicesPage)
}

// ============================================================================
// RESCUE PAGE
// ============================================================================

async function seedRescuePage() {
  console.log('\n🐕 Seeding Rescue Page...')
  
  const rescuePage = {
    _id: 'rescuePage',
    _type: 'rescuePage',
    pageHeading: 'Rescue a Dog',
    pageSubheading: 'Every dog deserves a second chance. We help connect shelter dogs across Europe with loving UK homes.',
    missionStatement: 'Our Rescue Mission',
    missionBody: 'Euro Pet Express partners with registered dog rescue organisations across Eastern Europe to transport rehomed dogs to their forever homes in the UK. We handle all transport logistics, welfare, documentation, and compliance — so rescues can focus on what they do best: saving lives.',
    dogsHeading: 'Dogs Available for Adoption',
    dogsSubheading: 'Browse currently available rescue dogs seeking their forever homes.',
  }
  
  await upsertDocument(rescuePage)
}

// ============================================================================
// ABOUT PAGE
// ============================================================================

async function seedAboutPage() {
  console.log('\n👤 Seeding About Page...')
  
  const aboutPage = {
    _id: 'aboutPage',
    _type: 'aboutPage',
    founderName: 'David',
    founderTitle: 'Managing Director',
    founderParagraph1: 'I\'ve been around dogs my whole life, and for over a decade I\'ve been moving them across Europe and into the UK.',
    founderParagraph2: 'I\'ve seen puppies put on the road before they were ready. I\'ve seen vans packed too tight and journeys running too long with no proper stops. And gosh, I\'ve seen people taking paperwork for granted which gives troubles later. Consequently, I\'ve watched dogs arrive frightened and shut down, and watched people sign for them anyway, because there was money to be made and a schedule to keep.',
    founderParagraph3: 'For years I told myself it was just how things were done. Then I decided I didn\'t want to be part of how things were done anymore.',
    founderParagraph4: 'That\'s why Euro Pet Express exists. I know every shortcut in this trade, because I\'ve witnessed them firsthand. That\'s exactly why I can avoid them.',
    founderParagraph5: 'When you hand us your dog, you\'re handing it to someone who spent over a decade learning what not to do, and built a company to prove there\'s a better way.',
    faqItems: [
      {
        _type: 'faqItem',
        question: 'What documents does my pet need to travel to the UK?',
        answer: 'All pets (dogs, cats, and ferrets) entering Great Britain must have a valid microchip, an up-to-date rabies vaccination administered after microchipping, and an Animal Health Certificate (AHC) or valid pet passport issued by an official vet within the required timeframe before travel. Dogs entering Great Britain also require a tapeworm treatment administered 24–120 hours before arrival — this requirement does not currently apply to cats or ferrets. Euro Pet Express will guide you through the exact requirements for your specific pet and route when you request a quote.',
      },
      {
        _type: 'faqItem',
        question: 'How long does the pet transport journey take?',
        answer: 'Journey duration varies based on weather, traffic, border crossings, welfare stops, and ferry or tunnel schedules. Please contact Euro Pet Express for current estimates on your specific route.',
      },
      {
        _type: 'faqItem',
        question: 'Can I track my pet during the transport journey?',
        answer: 'Yes. Euro Pet Express provides regular WhatsApp updates throughout the journey including welfare check photos and location updates at key stages, so you always know how your pet is doing.',
      },
      {
        _type: 'faqItem',
        question: 'What size transport crates do you use?',
        answer: 'Euro Pet Express carries crates suitable for pets from small breeds up to large breeds. Please state your pet\'s breed, weight, and height when requesting a quote so we can confirm crate availability for your pet.',
      },
      {
        _type: 'faqItem',
        question: 'Do you transport cats and other animals as well as dogs?',
        answer: 'Yes, Euro Pet Express transports dogs, cats, ferrets, and other small animals between the UK and Europe. For bespoke or exotic pet transport requirements, please contact us to discuss your specific needs.',
      },
      {
        _type: 'faqItem',
        question: 'How far in advance should I book pet transport?',
        answer: 'We recommend booking at least 3 to 4 weeks in advance of your preferred departure date, as spaces on each scheduled run are limited. Contact Euro Pet Express as early as possible to secure your slot.',
      },
    ],
    seoTitle: 'About Euro Pet Express | Premium Pet Transport Founded by David',
    seoDescription: 'Euro Pet Express was founded by David, a dog transport professional with over a decade of experience who decided the industry had to be done better. Premium pet transport between the UK and Europe. Welfare first. Paperwork right. No corners cut.',
  }
  
  await upsertDocument(aboutPage)
}

// ============================================================================
// COMPLIANCE PAGE
// ============================================================================

async function seedCompliancePage() {
  console.log('\n📋 Seeding Compliance Page...')
  
  const compliancePage = {
    _id: 'compliancePage',
    _type: 'compliancePage',
    pageHeading: 'Compliance & Standards',
    pageIntroduction: 'Euro Pet Express operates to the highest standards of animal welfare, regulatory compliance, and transparency. All transport routes comply with DEFRA requirements, EU regulations, and UK animal health legislation.',
    complianceItems: [
      {
        _type: 'complianceItem',
        title: 'DEFRA Authorisation',
        description: 'Euro Pet Express is authorised under DEFRA regulations as a Type 2 long-journey pet transporter. This means our vehicle, welfare standards, and driver training all meet UK government requirements for safe international pet transport.',
      },
      {
        _type: 'complianceItem',
        title: 'Animal Welfare Standards',
        description: 'All pets travel in individual IATA-standard crates sized appropriately for their breed and weight. Climate control is maintained throughout the journey. Welfare checks and rest stops occur every 4–5 hours as standard.',
      },
      {
        _type: 'complianceItem',
        title: 'TRACES NT Documentation',
        description: 'We ensure all movement documents, health certificates, and import/export paperwork comply with UK and EU requirements. TRACES NT (Trade Control and Expert System) records are completed accurately for all transported animals.',
      },
      {
        _type: 'complianceItem',
        title: 'Driver Training',
        description: 'All Euro Pet Express drivers are trained in animal first aid, welfare assessment, and emergency response. We maintain records of ongoing professional development and compliance training.',
      },
    ],
  }
  
  await upsertDocument(compliancePage)
}

// ============================================================================
// CONTACT PAGE
// ============================================================================

async function seedContactPage() {
  console.log('\n📞 Seeding Contact Page...')
  
  const contactPage = {
    _id: 'contactPage',
    _type: 'contactPage',
    pageHeading: 'Request a Transport Quote',
    pageSubheading: 'Tell us about your pet and travel plans. We\'ll respond within 12–24 hours with a personalised quote.',
    successMessage: 'Quote Request Received',
    successSubtext: 'Thank you for submitting your pet transport request. Our team will review your details and contact you within 12–24 hours with a personalised quote and next steps. In the meantime, feel free to explore our routes and services.',
    seoTitle: 'Request a Quote | Euro Pet Express',
    seoDescription: 'Get a personalised pet transport quote from Euro Pet Express. Tell us about your pet and route — we\'ll respond within 12–24 hours with pricing and availability.',
  }
  
  await upsertDocument(contactPage)
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

async function main() {
  try {
    // Check connection
    const project = await client.request({
      uri: '/projects/' + client.config().projectId,
    })
    console.log(`✓ Connected to Sanity project: ${project.displayName}\n`)
    
    // Seed all content
    await seedSiteSettings()
    await seedHomePage()
    await seedRoutesPage()
    await seedRoutes()
    await seedServicesPage()
    await seedRescuePage()
    await seedAboutPage()
    await seedCompliancePage()
    await seedContactPage()
    
    console.log('\n✅ Seed complete! All content has been pushed to Sanity.')
    console.log('🎉 Your Sanity Studio is ready to use at: /studio')
    
    process.exit(0)
  } catch (error) {
    console.error('\n❌ Seed failed:', error.message)
    console.error(error)
    process.exit(1)
  }
}

main()
