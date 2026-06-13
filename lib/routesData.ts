// TODO — CONFIRM WITH CLIENT: Current departure 
// frequencies are:
//   UK → Netherlands: Weekly
//   UK → France: Every two weeks (was "bi-weekly")
//   UK → Germany: Every two weeks (was "bi-weekly")
//   UK → Romania: Twice monthly
//   UK → Spain: Twice monthly
//   UK → Serbia, Hungary, Croatia, Czech Republic: 
//   Monthly
// Please confirm these frequencies are accurate to 
// actual operating schedule, or provide updated 
// frequencies for each route.

export interface Route {
  id: string;
  name: string;
  originCountry: string;
  destinationCountry: string;
  originCode: string;
  destinationCode: string;
  slug: string;
  departureFrequency: string;
  shortDescription: string;
  pickupCities: string[];
  typicalTravelTime: string;
  priceFrom: number;
  routeHighlights: string[];
  isActive: boolean;
  displayOrder: number;
}

export const ROUTES: Route[] = [
  {
    id: "uk-serbia",
    name: "UK → Serbia",
    originCountry: "United Kingdom",
    destinationCountry: "Serbia",
    originCode: "GB",
    destinationCode: "RS",
    slug: "uk-serbia",
    departureFrequency: "Monthly departures",
    shortDescription: "Safe and direct pet transport from the UK to Belgrade and surrounding areas.",
    pickupCities: ["London", "Birmingham", "Leeds", "Bristol", "Manchester"],
    typicalTravelTime: "Approximately 28–36 hours",
    priceFrom: 0,
    routeHighlights: [
      "DEFRA-compliant long-journey vehicle",
      "Regular welfare stops every 4–5 hours",
      "Full customs documentation support",
      "Climate-controlled transport area"
    ],
    isActive: true,
    displayOrder: 1
  },
  {
    id: "uk-romania",
    name: "UK → Romania",
    originCountry: "United Kingdom",
    destinationCountry: "Romania",
    originCode: "GB",
    destinationCode: "RO",
    slug: "uk-romania",
    departureFrequency: "Departures twice per month",
    shortDescription: "Established twice-monthly route from the UK to Bucharest, Cluj-Napoca, Brașov and beyond.",
    pickupCities: ["London", "Birmingham", "Leeds", "Bristol", "Manchester", "Cardiff"],
    typicalTravelTime: "Approximately 36–48 hours",
    priceFrom: 0,
    routeHighlights: [
      "Most popular route — twice monthly",
      "Multiple pickup points across the UK",
      "Eurotunnel Calais–Folkestone crossing",
      "Welfare checks and rest stops included"
    ],
    isActive: true,
    displayOrder: 2
  },
  {
    id: "uk-hungary",
    name: "UK → Hungary",
    originCountry: "United Kingdom",
    destinationCountry: "Hungary",
    originCode: "GB",
    destinationCode: "HU",
    slug: "uk-hungary",
    departureFrequency: "Monthly departures",
    shortDescription: "Comfortable pet transport from the UK to Budapest and surrounding Hungarian cities.",
    pickupCities: ["London", "Birmingham", "Nottingham", "Coventry", "Manchester"],
    typicalTravelTime: "Approximately 26–34 hours",
    priceFrom: 0,
    routeHighlights: [
      "Direct route via Belgium and Austria",
      "Climate-controlled crate transport",
      "Full EU import documentation",
      "Regular welfare inspection stops"
    ],
    isActive: true,
    displayOrder: 3
  },
  {
    id: "uk-croatia",
    name: "UK → Croatia",
    originCountry: "United Kingdom",
    destinationCountry: "Croatia",
    originCode: "GB",
    destinationCode: "HR",
    slug: "uk-croatia",
    departureFrequency: "Monthly departures",
    shortDescription: "Pet transport from the UK to Zagreb, Split, and key Croatian cities.",
    pickupCities: ["London", "Birmingham", "Bristol", "Southampton", "Reading"],
    typicalTravelTime: "Approximately 30–38 hours",
    priceFrom: 0,
    routeHighlights: [
      "Scenic Alpine corridor route",
      "Individual secured crates",
      "Croatian customs documentation",
      "Welfare rest stops in transit"
    ],
    isActive: true,
    displayOrder: 4
  },
  {
    id: "uk-france",
    name: "UK → France",
    originCountry: "United Kingdom",
    destinationCountry: "France",
    originCode: "GB",
    destinationCode: "FR",
    slug: "uk-france",
    departureFrequency: "Departures every two weeks",
    shortDescription: "Regular departures every two weeks from the UK to Paris, Lyon, Marseille and across France.",
    pickupCities: ["London", "Birmingham", "Leeds", "Bristol", "Southampton", "Cambridge", "Manchester"],
    typicalTravelTime: "Approximately 8–16 hours",
    priceFrom: 0,
    routeHighlights: [
      "Fastest European route available",
      "Eurotunnel or ferry crossing options",
      "Departures every two weeks for flexibility",
      "Most affordable European destination"
    ],
    isActive: true,
    displayOrder: 5
  },
  {
    id: "uk-spain",
    name: "UK → Spain",
    originCountry: "United Kingdom",
    destinationCountry: "Spain",
    originCode: "GB",
    destinationCode: "ES",
    slug: "uk-spain",
    departureFrequency: "Departures twice per month",
    shortDescription: "Popular route to Madrid, Barcelona, Valencia, and the Spanish costas.",
    pickupCities: ["London", "Birmingham", "Bristol", "Exeter", "Plymouth", "Manchester"],
    typicalTravelTime: "Approximately 20–28 hours",
    priceFrom: 0,
    routeHighlights: [
      "Covers all major Spanish regions",
      "Via France Eurotunnel crossing",
      "Spanish pet import documentation",
      "Full climate control for safe travel in warm conditions"
    ],
    isActive: true,
    displayOrder: 6
  },
  {
    id: "uk-germany",
    name: "UK → Germany",
    originCountry: "United Kingdom",
    destinationCountry: "Germany",
    originCode: "GB",
    destinationCode: "DE",
    slug: "uk-germany",
    departureFrequency: "Departures every two weeks",
    shortDescription: "Regular service to Berlin, Munich, Hamburg, Frankfurt and across Germany.",
    pickupCities: ["London", "Birmingham", "Newcastle", "Edinburgh", "Leeds", "Manchester"],
    typicalTravelTime: "Approximately 14–20 hours",
    priceFrom: 0,
    routeHighlights: [
      "Departures every two weeks for maximum flexibility",
      "Multiple German delivery cities",
      "EU pet passport compliance",
      "Via Belgium Eurotunnel corridor"
    ],
    isActive: true,
    displayOrder: 7
  },
  {
    id: "uk-netherlands",
    name: "UK → Netherlands",
    originCountry: "United Kingdom",
    destinationCountry: "Netherlands",
    originCode: "GB",
    destinationCode: "NL",
    slug: "uk-netherlands",
    departureFrequency: "Weekly departures",
    shortDescription: "Frequent weekly service to Amsterdam, Rotterdam, The Hague and all Dutch cities.",
    pickupCities: ["London", "Birmingham", "Cambridge", "Norwich", "Leeds", "Manchester"],
    typicalTravelTime: "Approximately 6–10 hours",
    priceFrom: 0,
    routeHighlights: [
      "Shortest international route — weekly service",
      "Hook of Holland or Eurotunnel options",
      "Ideal for urgent pet relocations",
      "Dutch customs documentation included"
    ],
    isActive: true,
    displayOrder: 8
  },
  {
    id: "uk-czech-republic",
    name: "UK → Czech Republic",
    originCountry: "United Kingdom",
    destinationCountry: "Czech Republic",
    originCode: "GB",
    destinationCode: "CZ",
    slug: "uk-czech-republic",
    departureFrequency: "Monthly departures",
    shortDescription: "Pet transport to Prague, Brno, Ostrava and surrounding Czech regions.",
    pickupCities: ["London", "Birmingham", "Leeds", "Sheffield", "Nottingham", "Manchester"],
    typicalTravelTime: "Approximately 18–24 hours",
    priceFrom: 0,
    routeHighlights: [
      "Via Germany autobahn corridor",
      "Czech Republic pet import compliance",
      "Regular welfare checks en route",
      "Individual crate for each pet"
    ],
    isActive: true,
    displayOrder: 9
  },
  {
    id: "uk-uk",
    name: "UK to UK Transport",
    originCountry: "United Kingdom",
    destinationCountry: "United Kingdom",
    originCode: "GB",
    destinationCode: "GB",
    slug: "uk-uk",
    departureFrequency: "Available on request",
    shortDescription: "Domestic UK pet transport for relocations, rehoming and breeder deliveries across England, Scotland and Wales.",
    pickupCities: ["London", "Birmingham", "Manchester", "Edinburgh", "Cardiff", "Bristol"],
    typicalTravelTime: "Varies by destination",
    priceFrom: 0,
    routeHighlights: [
      "Door-to-door domestic service",
      "Climate-controlled transport",
      "All UK regions covered",
      "Same welfare standards as European routes"
    ],
    isActive: true,
    displayOrder: 10
  },
  {
    id: "transatlantic",
    name: "Transatlantic Pet Transport",
    originCountry: "United Kingdom",
    destinationCountry: "United States / Canada",
    originCode: "GB",
    destinationCode: "US",
    slug: "transatlantic",
    departureFrequency: "By arrangement",
    shortDescription: "Long-haul transatlantic pet transport with full documentation and handling support for USA and Canada destinations.",
    pickupCities: ["London Heathrow", "Manchester", "Edinburgh"],
    typicalTravelTime: "Varies by arrangement",
    priceFrom: 0,
    routeHighlights: [
      "Full USDA/CFIA documentation support",
      "Coordination with air cargo partners",
      "Health certificate and rabies titre support",
      "Bespoke pricing — contact us to discuss"
    ],
    isActive: true,
    displayOrder: 11
  }
];
