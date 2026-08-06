/**
 * Centralised GROQ query library for Euro Pet Express.
 * Import queries from here in any page or component that fetches from Sanity.
 */

// ─── Revalidation ────────────────────────────────────────────────────────────
/** Default ISR revalidation in seconds. Keep short so CMS changes show quickly. */
export const REVALIDATE = 60

// ─── Site Settings ────────────────────────────────────────────────────────────
export const SITE_SETTINGS_QUERY = `
  *[_id == "siteSettings"][0] {
    phoneNumber,
    whatsappNumber,
    emailAddress,
    defraStatus,
    responseTime,
    facebookUrl,
    instagramUrl,
    youtubeUrl,
    tiktokUrl
  }
`

// ─── Home Page ────────────────────────────────────────────────────────────────
export const HOME_PAGE_QUERY = `
  *[_id == "homePage"][0] {
    heroHeadlineLine1,
    heroHeadlineLine2,
    heroSubtext,
    founderQuote,
    vehicleSectionTitle,
    vehicleDescription,
    vehicleImageCaption,
    vehicleFeatures,
    seoTitle,
    seoDescription
  }
`

// ─── Routes Page ─────────────────────────────────────────────────────────────
export const ROUTES_PAGE_QUERY = `
  *[_id == "routesPage"][0] {
    pageHeading,
    pageSubheading,
    seoTitle,
    seoDescription
  }
`

export const ALL_ROUTES_QUERY = `
  *[_type == "route" && isActive == true] | order(displayOrder asc) {
    _id,
    name,
    "slug": slug.current,
    destinationCountry,
    destinationCode,
    departureFrequency,
    shortDescription,
    routeHighlights,
    isActive,
    displayOrder
  }
`

// ─── Services Page ────────────────────────────────────────────────────────────
export const SERVICES_PAGE_QUERY = `
  *[_id == "servicesPage"][0] {
    pageHeading,
    pageSubheading,
    services[] {
      title,
      description,
      features,
      isPriceOnApplication,
      isVisible
    }
  }
`

// ─── Rescue Page ─────────────────────────────────────────────────────────────
export const RESCUE_PAGE_QUERY = `
  *[_id == "rescuePage"][0] {
    pageHeading,
    pageSubheading,
    missionStatement,
    missionBody,
    dogsHeading,
    dogsSubheading
  }
`

export const RESCUE_DOGS_QUERY = `
  *[_type == "rescueDog" && status != "Adopted"] | order(displayOrder asc) {
    _id,
    name,
    breed,
    gender,
    age,
    size,
    location,
    rescueOrganisation,
    status,
    photo,
    description,
    personality,
    goodWithKids,
    goodWithDogs,
    goodWithCats,
    needsGarden
  }
`

// ─── About Page ──────────────────────────────────────────────────────────────
export const ABOUT_PAGE_QUERY = `
  *[_id == "aboutPage"][0] {
    founderName,
    founderTitle,
    founderParagraph1,
    founderParagraph2,
    founderParagraph3,
    founderParagraph4,
    founderParagraph5,
    faqItems[] {
      question,
      answer
    },
    seoTitle,
    seoDescription
  }
`

// ─── Compliance Page ──────────────────────────────────────────────────────────
export const COMPLIANCE_PAGE_QUERY = `
  *[_id == "compliancePage"][0] {
    pageHeading,
    pageIntroduction,
    complianceItems[] {
      title,
      description
    }
  }
`

// ─── Contact Page ─────────────────────────────────────────────────────────────
export const CONTACT_PAGE_QUERY = `
  *[_id == "contactPage"][0] {
    pageHeading,
    pageSubheading,
    successMessage,
    successSubtext,
    seoTitle,
    seoDescription
  }
`
