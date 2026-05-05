export type Service = {
  number: string;
  slug: string;
  href: string;
  name: string;
  shortLabel: string;
  description: string;
};

export const SERVICES: readonly Service[] = [
  {
    number: "01",
    slug: "concrete-driveways-utah",
    href: "/services/concrete-driveways-utah",
    name: "Concrete Driveways",
    shortLabel: "Driveways",
    description: "New driveways and replacement across Utah",
  },
  {
    number: "02",
    slug: "stamped-decorative-concrete-utah",
    href: "/services/stamped-decorative-concrete-utah",
    name: "Stamped & Decorative",
    shortLabel: "Stamped & Decorative",
    description: "Patios, driveways, pool decks with custom finishes",
  },
  {
    number: "03",
    slug: "pool-decks-utah",
    href: "/services/pool-decks-utah",
    name: "Pool Decks",
    shortLabel: "Pool Decks",
    description: "Built by pool-deck specialists — our origin business",
  },
  {
    number: "04",
    slug: "concrete-patios-utah",
    href: "/services/concrete-patios-utah",
    name: "Concrete Patios",
    shortLabel: "Patios",
    description: "Outdoor living spaces built to last Utah winters",
  },
  {
    number: "05",
    slug: "residential-concrete-repair-utah",
    href: "/services/residential-concrete-repair-utah",
    name: "Concrete Repair",
    shortLabel: "Repair",
    description: "Cracks, settling, resurfacing, leveling",
  },
  {
    number: "06",
    slug: "industrial-concrete-foundations-utah",
    href: "/services/industrial-concrete-foundations-utah",
    name: "Foundations & Footings",
    shortLabel: "Foundations",
    description: "Soil-prepped for Utah freeze-thaw conditions",
  },
  {
    number: "07",
    slug: "sport-courts-utah",
    href: "/services/sport-courts-utah",
    name: "Sport Courts",
    shortLabel: "Sport Courts",
    description: "Backyard pickleball, basketball, multi-sport",
  },
  {
    number: "08",
    slug: "rv-pads-utah",
    href: "/services/rv-pads-utah",
    name: "RV Pads",
    shortLabel: "RV Pads",
    description: "Built for the rig you actually own",
  },
  {
    number: "09",
    slug: "splash-pads-utah",
    href: "/services/splash-pads-utah",
    name: "Splash Pads",
    shortLabel: "Splash Pads",
    description: "Backyard splash pads engineered for Utah summers",
  },
  {
    number: "10",
    slug: "sidewalks-curbing-utah",
    href: "/services/sidewalks-curbing-utah",
    name: "Sidewalks & Curbing",
    shortLabel: "Sidewalks & Curbing",
    description: "Residential and municipal flatwork",
  },
  {
    number: "11",
    slug: "commercial-flatwork-parking-lots-sidewalks",
    href: "/services/commercial-flatwork-parking-lots-sidewalks",
    name: "Commercial Flatwork",
    shortLabel: "Commercial",
    description: "Parking lots, ADA ramps, industrial slabs",
  },
] as const;
