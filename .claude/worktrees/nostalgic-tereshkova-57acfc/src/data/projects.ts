export type ProjectCategory =
  | "RESIDENTIAL"
  | "BUILDER"
  | "COMMERCIAL"
  | "ENTERPRISE";

export type ProjectStatus = "COMPLETE" | "IN PROGRESS";

export type TimelineEntry = {
  day: string;
  action: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Sub-category tag — driveways, pool deck, sport court, retail, multi-site, etc. */
  service: string;
  city: string;
  state: string;
  /** Year completed (or in progress) */
  year: number;
  status: ProjectStatus;
  /** Project size or scale label — "1,800 sq ft", "14 sites", "8,000 sq ft" */
  scale: string;
  /** Total days on-site */
  durationLabel: string;
  /** Featured / pinned project surfaces in homepage preview */
  featured: boolean;
  /** Short excerpt for cards / preview blocks */
  excerpt: string;
  /** Long-form scope description, 2–4 paragraphs */
  scope: string[];
  /** Day-by-day or phase-by-phase timeline */
  timeline: readonly TimelineEntry[];
  /** Engineering specs — same shape as ServiceSpecBlock rows */
  specs: readonly { key: string; value: string }[];
  /** Geo for project briefing data overlay */
  geo: { lat: number; lng: number };
  /** Public-path image (4:3). When omitted, ProjectCard renders its placeholder gradient. */
  image?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "sandy-stamped-driveway",
    title: "Stamped Driveway with Decorative Border",
    category: "RESIDENTIAL",
    service: "Driveway",
    city: "Sandy",
    state: "UT",
    year: 2026,
    status: "COMPLETE",
    scale: "1,800 sq ft",
    durationLabel: "4 days",
    featured: true,
    excerpt:
      "1,800 sq ft stamped driveway in a Sandy custom-build neighborhood. European fan pattern, contrasting border, broom-finish utility apron.",
    scope: [
      "Replacement of a settling 1990s residential driveway in the Hidden Valley neighborhood. The original concrete had multiple settled sections, joint failure, and surface scaling — the homeowner had been patching for three years before deciding to replace.",
      "Scope included demo + haul-off of the existing slab, full subgrade rework with 6 inches of compacted base, rebar grid at 18 inches on center, and a stamped European fan pattern with a contrasting cobblestone border. Utility apron at the street kept a broom finish for traction.",
      "Coordinated with the homeowner's landscape contractor to protect a mature maple within 4 feet of the driveway edge. Pour day scheduled around late-May weather window for ideal cure conditions.",
    ],
    timeline: [
      { day: "Day 1", action: "Demo + haul-off, subgrade prep begins" },
      { day: "Day 2", action: "Compaction + base, rebar grid tied" },
      { day: "Day 3", action: "Pour, finish, stamp + border, control joints" },
      { day: "Day 4", action: "Cure check, sealer, final walkthrough" },
    ],
    specs: [
      { key: "CONCRETE", value: "4,000 PSI · air-entrained" },
      { key: "THICKNESS", value: "4″ field / 5″ apron" },
      { key: "REINFORCEMENT", value: "#3 rebar grid 18″ o.c." },
      { key: "FINISH", value: "European fan stamp · cobblestone border" },
      { key: "COLOR", value: "Integral · 2-tone earth + slate" },
      { key: "SEALER", value: "Acrylic · UV-rated · reseal 2–3yr" },
      { key: "WARRANTY", value: "Workmanship — 2 year" },
    ],
    geo: { lat: 40.5849, lng: -111.8275 },
    image: "/images/gallery/img-29-sandy-stamped-driveway.png",
  },
  {
    slug: "lehi-townhome-flatwork",
    title: "Townhome Development Flatwork — 22 Units",
    category: "BUILDER",
    service: "Builder Flatwork",
    city: "Lehi",
    state: "UT",
    year: 2025,
    status: "COMPLETE",
    scale: "8,000 sq ft",
    durationLabel: "9 days",
    featured: true,
    excerpt:
      "Driveway aprons, sidewalks, patios, and walkways across 22 townhome units for a Wasatch-front builder. Sequenced around the GC's framing schedule.",
    scope: [
      "Subcontractor flatwork for a 22-unit townhome development. Single-pour scheduling across multiple units to minimize mobilization cost and keep the GC on critical path.",
      "Scope per unit: 2-car driveway apron (residential 4-inch standard), front sidewalk to entry, back patio, side walkway. ADA-compliant ramps at the development entrance and clubhouse access points.",
      "Sequenced in two pour days separated by 5 days for the next units to come up to subgrade. Permit coordination with Lehi city, ready-mix scheduling with three trucks per pour day.",
    ],
    timeline: [
      { day: "Day 1–2", action: "Subgrade prep + forms across all 22 units" },
      { day: "Day 3", action: "First pour — units 1–11" },
      { day: "Day 4–7", action: "Crew rotates to other site, returns for forms phase 2" },
      { day: "Day 8", action: "Second pour — units 12–22" },
      { day: "Day 9", action: "Cure inspection, GC walkthrough, sign-off" },
    ],
    specs: [
      { key: "CONCRETE", value: "4,000 PSI · air-entrained" },
      { key: "THICKNESS", value: "4″ residential · 5″ ADA ramps" },
      { key: "REINFORCEMENT", value: "#3 rebar grid · 18″ o.c." },
      { key: "FINISH", value: "Broom (driveways) · light broom (patios)" },
      { key: "COMPLIANCE", value: "ADA-compliant ramps + slope" },
      { key: "WARRANTY", value: "Workmanship — 2 year" },
    ],
    geo: { lat: 40.3916, lng: -111.8508 },
    image: "/images/gallery/img-30-lehi-townhome-flatwork.png",
  },
  {
    slug: "draper-retail-center",
    title: "Retail Center Parking + ADA Sidewalks",
    category: "COMMERCIAL",
    service: "Commercial Flatwork",
    city: "Draper",
    state: "UT",
    year: 2025,
    status: "COMPLETE",
    scale: "12,000 sq ft",
    durationLabel: "12 days",
    featured: true,
    excerpt:
      "Parking lot section replacement plus ADA-compliant sidewalks at a Draper retail center. Phased pours to keep the storefronts open during work.",
    scope: [
      "Concrete replacement work for a small retail center along Draper's State Street corridor. Existing 1980s parking concrete had failed in multiple sections and the ADA accessibility ramps no longer met current code.",
      "Scope: 8,000 sq ft of parking section replacement (5-inch commercial), 2,000 sq ft of ADA-compliant sidewalk and ramp work, 2,000 sq ft of dumpster pad and back-of-house. Phased to keep three of the five storefronts open during the work — pours scheduled overnight where access constraints required.",
      "Coordinated with the property manager and three of the tenants directly on access windows, signage, and customer routing. Final inspection passed first walk; all ADA slopes within code tolerance.",
    ],
    timeline: [
      { day: "Phase 1", action: "Demo + subgrade · north parking section" },
      { day: "Phase 2", action: "Pour north section · 4-day cure" },
      { day: "Phase 3", action: "Demo + pour ADA ramps + sidewalks" },
      { day: "Phase 4", action: "Demo + pour back-of-house dumpster pads" },
      { day: "Phase 5", action: "Striping coordination, final walkthrough" },
    ],
    specs: [
      { key: "CONCRETE", value: "4,500 PSI · air-entrained" },
      { key: "THICKNESS", value: "5″ parking · 4″ sidewalks" },
      { key: "REINFORCEMENT", value: "#4 rebar grid · 16″ o.c." },
      { key: "FINISH", value: "Broom · ADA-textured ramps" },
      { key: "COMPLIANCE", value: "Current ADA + IBC · approved" },
      { key: "WARRANTY", value: "Workmanship — 2 year" },
    ],
    geo: { lat: 40.5247, lng: -111.8638 },
    image: "/images/gallery/img-31-draper-retail-center.png",
  },
  {
    slug: "multi-site-dumpster-pad-rollout",
    title: "Multi-Site Dumpster Pad Program — 14 Sites",
    category: "ENTERPRISE",
    service: "Multi-Site Concrete",
    city: "Wasatch Front",
    state: "UT",
    year: 2026,
    status: "IN PROGRESS",
    scale: "14 sites",
    durationLabel: "Rolling",
    featured: true,
    excerpt:
      "Standardized concrete dumpster pads + trash enclosures across 14 commercial sites for a single property-management portfolio. One PO, one schedule, one spec.",
    scope: [
      "Multi-site concrete program for a property management portfolio with 14 commercial sites across the Wasatch Front. Goal: replace failing dumpster pads and standardize the pad spec across all sites for consistent maintenance and contractor handoffs.",
      "Single PO, single technical spec across all 14 sites. Crew rotates through 1–2 sites per week during the warm-weather pour window. Each site: 200–400 sq ft of 6-inch commercial concrete with steel trash-enclosure post anchoring, scored to drain to existing site grade.",
      "First 5 sites complete; 9 more scheduled through Q3. Owner gets a single quarterly invoice and a single point of contact for all 14 properties.",
    ],
    timeline: [
      { day: "Months 1–2", action: "Site survey + spec lock across all 14 properties" },
      { day: "Month 3", action: "First 5 sites poured (warm weather window)" },
      { day: "Months 4–6", action: "Remaining 9 sites — rolling schedule" },
      { day: "Month 7", action: "Final inspections + maintenance handoff" },
    ],
    specs: [
      { key: "CONCRETE", value: "4,500 PSI · air-entrained" },
      { key: "THICKNESS", value: "6″ commercial · doweled at edges" },
      { key: "REINFORCEMENT", value: "#4 rebar grid · 12″ o.c." },
      { key: "FINISH", value: "Broom · scored for drainage" },
      { key: "ENCLOSURE", value: "Steel post anchors · pre-cast" },
      { key: "WARRANTY", value: "Workmanship — 2 year per site" },
    ],
    geo: { lat: 40.6, lng: -111.85 },
    image: "/images/gallery/img-32-multi-site-dumpster-pads.png",
  },
  {
    slug: "alpine-pool-deck-signature",
    title: "Pool Deck — Stamped Slate, Custom Border",
    category: "RESIDENTIAL",
    service: "Pool Deck",
    city: "Alpine",
    state: "UT",
    year: 2025,
    status: "COMPLETE",
    scale: "1,400 sq ft",
    durationLabel: "5 days",
    featured: true,
    excerpt:
      "1,400 sq ft pool deck in stamped slate texture with a contrasting cobblestone border. Pool stayed in use throughout — only the walking deck was roped off.",
    scope: [
      "Pool deck replacement for a 2008 luxury home in Alpine, Utah. The original deck had cracked, settled at the deep-end coping, and the original sealer had faded badly under high-altitude UV.",
      "Scope: 1,400 sq ft replacement deck in stamped slate texture with a 12-inch cobblestone border around the pool and at the back-of-house transition. Non-slip sealer additive throughout. Coordinated with the pool builder on coping integration.",
      "Pool stayed full and usable throughout the project — only the walking surface was roped off. Total pool downtime for the homeowners: zero swimming days, just five days of no walking on fresh concrete.",
    ],
    timeline: [
      { day: "Day 1", action: "Demo, coping protection, subgrade rework" },
      { day: "Day 2", action: "Forms, rebar, joint planning around pool geometry" },
      { day: "Day 3", action: "Pour + stamp slate texture + cobblestone border" },
      { day: "Day 4", action: "Cure check, control joint sealing" },
      { day: "Day 5", action: "Sealer + non-slip additive, final walkthrough" },
    ],
    specs: [
      { key: "CONCRETE", value: "4,000 PSI · air-entrained" },
      { key: "THICKNESS", value: "4″ standard" },
      { key: "REINFORCEMENT", value: "#3 rebar grid 18″ o.c." },
      { key: "TEXTURE", value: "Stamped slate · field" },
      { key: "BORDER", value: "Stamped cobblestone · contrasting color" },
      { key: "SEALER", value: "Chlorine-rated · UV-rated · non-slip additive" },
      { key: "WARRANTY", value: "Workmanship — 2 year" },
    ],
    geo: { lat: 40.4633, lng: -111.7758 },
    image: "/images/gallery/img-33-alpine-pool-deck.png",
  },
  {
    slug: "draper-backyard-sport-court",
    title: "Backyard Sport Court — Pickleball + Basketball",
    category: "RESIDENTIAL",
    service: "Sport Court",
    city: "Draper",
    state: "UT",
    year: 2025,
    status: "COMPLETE",
    scale: "1,200 sq ft",
    durationLabel: "4 days",
    featured: false,
    excerpt:
      "Multi-sport backyard court in Draper foothills — pickleball line set with a basketball half-court overlay. 4-inch slab, sealed, professionally striped.",
    scope: [
      "Custom backyard sport court installation for a Draper foothills home. Multi-sport spec — full pickleball line set with overlaid basketball half-court markings, hoop on a permanent post.",
      "Scope: 1,200 sq ft 4-inch slab, broom-finish field with a smooth-trowel center for line striping. Permanent basketball post anchor, professional line-striping in two contrasting colors (pickleball court lines + basketball half-court).",
      "Coordinated with a sport-court line-striping subcontractor for the final paint work. Slab cured a full 28 days before striping for maximum paint adhesion.",
    ],
    timeline: [
      { day: "Day 1", action: "Subgrade + post anchor placement" },
      { day: "Day 2", action: "Forms, rebar, control joints planned" },
      { day: "Day 3", action: "Pour + finish (broom field, trowel center)" },
      { day: "Day 4", action: "Cure check, post installation, hoop assembly" },
      { day: "+28 days", action: "Line striping subcontractor — final paint" },
    ],
    specs: [
      { key: "CONCRETE", value: "4,000 PSI · air-entrained" },
      { key: "THICKNESS", value: "4″ standard" },
      { key: "REINFORCEMENT", value: "#3 rebar grid 18″ o.c." },
      { key: "FINISH", value: "Broom field · smooth trowel center" },
      { key: "POST ANCHOR", value: "Permanent · basketball regulation" },
      { key: "STRIPING", value: "Pickleball + basketball overlay (sub)" },
      { key: "WARRANTY", value: "Workmanship — 2 year" },
    ],
    geo: { lat: 40.519, lng: -111.86 },
    image: "/images/gallery/img-34-draper-sport-court.png",
  },
];

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | null {
  return PROJECTS.find((p) => p.slug === slug) ?? null;
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = getProjectBySlug(slug);
  if (!current) return [];
  return PROJECTS.filter(
    (p) => p.slug !== slug && p.category === current.category
  )
    .concat(PROJECTS.filter((p) => p.slug !== slug && p.category !== current.category))
    .slice(0, limit);
}
