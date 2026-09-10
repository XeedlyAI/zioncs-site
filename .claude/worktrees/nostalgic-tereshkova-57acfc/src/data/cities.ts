export type City = {
  slug: string;
  name: string;
  county: string;
  region: "Wasatch Front" | "Southern Utah" | "Mountain";
  /** Used for LocalBusiness JSON-LD geo + maps. Approximate city-center coordinates. */
  geo: { lat: number; lng: number };
  zipSamples: readonly string[];
  /** Neighborhoods or sub-areas we work in. Used for body copy + internal credibility. */
  neighborhoods: readonly string[];
  /** Drive time from Sandy home base. Used in copy. */
  driveFromSandy: string;
};

export const CITIES: Record<string, City> = {
  "sandy-utah": {
    slug: "sandy-utah",
    name: "Sandy",
    county: "Salt Lake County",
    region: "Wasatch Front",
    geo: { lat: 40.5649, lng: -111.8389 },
    zipSamples: ["84070", "84092", "84093", "84094"],
    neighborhoods: [
      "Granite",
      "Alta View",
      "Hidden Valley",
      "Pepperwood",
      "Sandy Hills",
      "White City",
    ],
    driveFromSandy: "Home base",
  },
  "salt-lake-city": {
    slug: "salt-lake-city",
    name: "Salt Lake City",
    county: "Salt Lake County",
    region: "Wasatch Front",
    geo: { lat: 40.7608, lng: -111.891 },
    zipSamples: ["84101", "84103", "84105", "84108", "84111"],
    neighborhoods: [
      "Sugar House",
      "The Avenues",
      "Federal Heights",
      "9th and 9th",
      "Liberty Wells",
      "Rose Park",
      "Glendale",
      "East Bench",
    ],
    driveFromSandy: "20 minutes north",
  },
  "st-george": {
    slug: "st-george",
    name: "St. George",
    county: "Washington County",
    region: "Southern Utah",
    geo: { lat: 37.0965, lng: -113.5684 },
    zipSamples: ["84770", "84790"],
    neighborhoods: [
      "Bloomington",
      "Bloomington Hills",
      "Little Valley",
      "Tonaquint",
      "Green Valley",
    ],
    driveFromSandy: "4.5 hours south",
  },
} as const;
