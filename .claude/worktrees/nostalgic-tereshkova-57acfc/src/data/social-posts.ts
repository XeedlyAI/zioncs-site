export type SocialPlatform = "instagram" | "facebook";

export type SocialPost = {
  id: string;
  platform: SocialPlatform;
  /** ISO date posted */
  postedAt: string;
  /** Caption snippet — 1-2 lines */
  caption: string;
  /** Image alt text for a11y */
  alt: string;
  /** Where the post links — Instagram or Facebook permalink */
  url: string;
  /** Optional explicit image path. Falls back to a gradient placeholder when omitted. */
  image?: string;
};

const FB =
  "https://www.facebook.com/profile.php?id=61573114690934";
const IG = "https://www.instagram.com/zionconcretespecialists/";

/**
 * Manually curated social posts for the homepage SocialFeedScroll.
 * Update this list when ZionCS posts new content. Phase 2: optionally
 * wire to Meta Graph API.
 */
export const SOCIAL_POSTS: readonly SocialPost[] = [
  {
    id: "ig-2026-04-pool-deck-alpine",
    platform: "instagram",
    postedAt: "2026-04-28",
    caption:
      "Pool deck wrapped up in Alpine. Stamped slate, cobblestone border, non-slip sealer. Pool stayed open the whole time.",
    alt: "Finished pool deck in Alpine, Utah with stamped slate texture",
    url: IG,
    image: "/images/gallery/img-33-alpine-pool-deck.png",
  },
  {
    id: "fb-2026-04-lehi-townhomes",
    platform: "facebook",
    postedAt: "2026-04-22",
    caption:
      "22 townhome flatwork project in Lehi — last pour day. Aprons, walks, and patios across all units.",
    alt: "Lehi townhome development driveway pour",
    url: FB,
    image: "/images/gallery/img-30-lehi-townhome-flatwork.png",
  },
  {
    id: "ig-2026-04-draper-retail",
    platform: "instagram",
    postedAt: "2026-04-15",
    caption:
      "Phase 4 of the Draper retail center project. ADA ramps poured overnight to keep the storefronts open.",
    alt: "ADA ramp pour at Draper retail center",
    url: IG,
    image: "/images/gallery/img-31-draper-retail-center.png",
  },
  {
    id: "ig-2026-04-driveway-sandy",
    platform: "instagram",
    postedAt: "2026-04-10",
    caption:
      "Stamped European fan with cobblestone border in Sandy. Hidden Valley project — replaced a 30-year-old slab.",
    alt: "Stamped concrete driveway with European fan pattern in Sandy, UT",
    url: IG,
    image: "/images/gallery/img-29-sandy-stamped-driveway.png",
  },
  {
    id: "fb-2026-04-sport-court-draper",
    platform: "facebook",
    postedAt: "2026-04-04",
    caption:
      "Sport court in Draper foothills — pickleball + basketball overlay. Striped this week.",
    alt: "Backyard sport court in Draper, UT",
    url: FB,
    image: "/images/gallery/img-34-draper-sport-court.png",
  },
  {
    id: "ig-2026-03-dumpster-pad",
    platform: "instagram",
    postedAt: "2026-03-29",
    caption:
      "Site 5 of 14 on the multi-site dumpster pad program. Standardized spec across the whole portfolio.",
    alt: "Commercial dumpster pad with steel enclosure",
    url: IG,
    image: "/images/gallery/img-32-multi-site-dumpster-pads.png",
  },
  {
    id: "ig-2026-03-patio-stamped",
    platform: "instagram",
    postedAt: "2026-03-21",
    caption:
      "Stamped patio extension in SLC's East Bench. Slate field, broom border to tie into the existing walkway.",
    alt: "Stamped concrete patio extension in Salt Lake City",
    url: IG,
    image: "/images/services/img-05-stamped-decorative.png",
  },
  {
    id: "fb-2026-03-foundation-pour",
    platform: "facebook",
    postedAt: "2026-03-14",
    caption:
      "Commercial foundation slab in West Valley. 4,500 PSI, #4 rebar grid, full ADA-compliant edge.",
    alt: "Commercial foundation pour in West Valley City",
    url: FB,
    image: "/images/services/img-11-industrial-foundations.png",
  },
  {
    id: "ig-2026-03-decorative-border",
    platform: "instagram",
    postedAt: "2026-03-07",
    caption:
      "Decorative concrete border around a Lehi pool. Custom dye match to the home's stone facade.",
    alt: "Decorative concrete border in Lehi, UT",
    url: IG,
    image: "/images/services/img-06-pool-decks.png",
  },
  {
    id: "ig-2026-02-driveway-replacement",
    platform: "instagram",
    postedAt: "2026-02-26",
    caption:
      "Before/after on a Salt Lake driveway replacement. Map cracking → fresh broom finish in 4 days.",
    alt: "Driveway replacement before and after in Salt Lake City",
    url: IG,
    image: "/images/services/img-08-repair.png",
  },
  {
    id: "fb-2026-02-rv-pad",
    platform: "facebook",
    postedAt: "2026-02-19",
    caption:
      "RV pad in West Jordan. 6 inches, beefed-up rebar — built for the rig the homeowner actually has.",
    alt: "RV pad in West Jordan, Utah",
    url: FB,
    image: "/images/services/img-35-rv-pads.png",
  },
  {
    id: "ig-2026-02-st-george",
    platform: "instagram",
    postedAt: "2026-02-12",
    caption:
      "Pool deck rebuild in St. George. Heat-tolerant sealer, lighter color to keep the surface walkable in summer.",
    alt: "Pool deck rebuild in St. George, Utah",
    url: IG,
    image: "/images/gallery/img-33-alpine-pool-deck.png",
  },
];

export function getRecentPosts(limit = 12): SocialPost[] {
  return [...SOCIAL_POSTS]
    .sort(
      (a, b) =>
        new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime()
    )
    .slice(0, limit);
}
