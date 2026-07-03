import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import { MediaEmbed } from "@/components/media/MediaEmbed";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "multi-site-concrete-inspection-checklist",
  title: "The Multi-Site Concrete Inspection Checklist",
  metaTitle: "Multi-Site Concrete Inspection Checklist",
  metaDescription:
    "A repeatable checklist for inspecting concrete across a multi-site portfolio — trip hazards, spalling, joints, drainage, and ADA, scored consistently.",
  excerpt:
    "A repeatable, walkable checklist for inspecting concrete across a portfolio — trip hazards, spalling, joints, drainage, and ADA — scored the same way at every site.",
  authorSlug: "josh",
  publishedAt: "2026-06-05",
  lastReviewedAt: "2026-07-03",
  readingTimeMinutes: 8,
  targetKeyword: "concrete inspection checklist multi site",
  secondaryKeywords: [
    "facility concrete inspection",
    "concrete condition assessment checklist",
    "portfolio concrete audit",
    "commercial concrete inspection checklist",
    "concrete site walk checklist",
  ],
  siloIntent: "ENTERPRISE",
  articleRole: "process-guide",
  category: "guides",
  cityAnchor: null,
  heroImage: "/images/blog/img-54-inspection-checklist.jpg",
  relatedSlugs: [
    "concrete-maintenance-budgeting-for-facility-managers",
    "multi-site-concrete-maintenance-programs",
    "vendor-consolidation-concrete-contractor",
  ],
  faqs: [
    {
      question: "How often should each site in a portfolio be inspected?",
      answer:
        "Annually at minimum, and spring is the right season in Utah — winter freeze-thaw does its damage between November and March, so a spring walk catches the new failures with the full construction season ahead to fix them. Sites with known band-2 assets or heavy truck traffic warrant a second fall walk before winter locks in.",
    },
    {
      question: "Who should perform the inspection — in-house staff or the contractor?",
      answer:
        "Either works if the checklist and scoring are consistent. In-house walks cost less and keep the data in your hands; contractor-led inspections bring trained eyes that catch sub-grade and drainage signals a facilities generalist might miss. The common hybrid: in-house teams run the annual walk, the program contractor scores anything flagged at band 3 or below before pricing repairs.",
    },
    {
      question: "How long does a site inspection take?",
      answer:
        "For a typical commercial site — parking areas, walks, a dumpster pad, entries — a trained walker with the checklist covers it in under an hour. The first pass at each site runs longer because you're building the asset inventory. Photograph everything scored 3 or below; the photos are what make year-over-year comparison honest.",
    },
    {
      question: "What counts as a trip hazard from a liability standpoint?",
      answer:
        "The widely used threshold is a vertical displacement of a quarter inch or more between adjacent surfaces — slab to slab, slab to curb, or around utility structures. Many Utah municipalities use similar language in sidewalk ordinances. Anything at or past that threshold belongs at the top of the repair list regardless of the slab's overall condition score.",
    },
    {
      question: "Should the checklist scores feed directly into the budget?",
      answer:
        "That's the point of scoring. Band 4–5 assets generate only cycle maintenance, band 3 generates the next repair season's work list, and band 2 feeds the capital replacement forecast. Scores without a budget consequence are paperwork; the checklist earns its time when the fall inspection writes the spring work plan.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        The difference between a portfolio that manages its
        concrete and one that reacts to it is usually a single
        document: a checklist that gets walked the same way, at
        every site, on a schedule. Not a consultant study — a
        one-page discipline that a facilities coordinator or a
        property manager can execute in under an hour per site and
        that produces scores a budget can act on.
      </p>
      <p>
        This is the checklist we use on program inspections across
        Utah portfolios. It&rsquo;s organized as a physical walk —
        perimeter in — and every item resolves to a condition band
        from 5 (sound) to 1 (failed), the same scale defined in{" "}
        <Link href="/blog/concrete-maintenance-budgeting-for-facility-managers">
          the concrete budgeting framework
        </Link>
        . Use it as-is or fold it into your existing site-audit
        forms; the value is in the consistency, not the format.
      </p>

      <h2>Before the walk</h2>
      <ul>
        <li>Pull the prior inspection&rsquo;s scores and photos for the site — you&rsquo;re scoring change, not just condition</li>
        <li>List every concrete asset on the site: parking areas, drive lanes, sidewalks, entries, dumpster pad, loading areas, curb and gutter, exterior stairs</li>
        <li>Walk in spring where possible — Utah&rsquo;s freeze-thaw damage shows itself by April</li>
        <li>Bring a camera; photograph anything you score at band 3 or below, with something for scale in frame</li>
      </ul>

      <h2>The checklist</h2>

      <MediaEmbed
        poster="/images/gallery/img-32-multi-site-dumpster-pads.png"
        alt="Standardized dumpster pad and enclosure at one site of a multi-site program"
        caption="MULTI-SITE PROGRAM · SITE 5 OF 14 — the standardized-spec pads this checklist keeps honest."
      />

      <h3>1. Surface condition</h3>
      <ul>
        <li>Cracking: note pattern (isolated, map/craze, or aligned), width (hairline vs. open), and whether cracks are full-depth</li>
        <li>Spalling or scaling: surface flaking, exposed aggregate, pop-outs — common where de-icer has been over-applied</li>
        <li>Surface wear in wheel paths and cart lanes — polished or rutted texture</li>
        <li>Staining or discoloration that indicates chronic ponding, oil, or chemical exposure</li>
        <li>Compare against last cycle&rsquo;s photos: is deterioration static or advancing?</li>
      </ul>

      <h3>2. Joints</h3>
      <ul>
        <li>Control joints: cracking following the joints (good) or wandering off-pattern across panels (a flag)</li>
        <li>Joint sealant: intact and flexible, or dried, cracked, and pulling away</li>
        <li>Joint edges: clean, or spalling and widening under traffic</li>
        <li>Expansion joints at building lines and fixed structures: filler present and functioning</li>
      </ul>

      <h3>3. Settlement, heaving, and trip hazards</h3>
      <ul>
        <li>Vertical displacement between adjacent slabs — flag anything at or past a quarter inch as a trip hazard, priority regardless of overall score</li>
        <li>Slab rocking or movement under load (stand on corners)</li>
        <li>Heaving at slab centers or edges — in Utah, frost heave and expansive-soil movement both present this way</li>
        <li>Settlement around utility structures, cleanouts, and drains</li>
        <li>Voids under slab edges — probe where soil has washed out at the perimeter</li>
      </ul>

      <h3>4. Drainage</h3>
      <ul>
        <li>Ponding evidence: staining rings, sediment lines, moss or algae in shaded areas</li>
        <li>Water directed toward or away from the building at entries and foundations</li>
        <li>Downspout discharge points: onto concrete, and if so, is the surface deteriorating there</li>
        <li>Gutter and flow-line function along curbs — sediment-filled or draining</li>
        <li>Any drainage failure adjacent to a settling slab — the two travel together, and the drainage is usually the cause</li>
      </ul>

      <h3>5. ADA and access routes</h3>
      <ul>
        <li>Accessible route from parking to entry: continuous, firm, and free of displacements past a quarter inch</li>
        <li>Ramp condition: cracking, spalling, or settlement that changes running slope</li>
        <li>Detectable warning surfaces (truncated domes): present, intact, and secure</li>
        <li>Accessible parking stalls and access aisles: surface condition and cross slope by eye and level</li>
        <li>Flag any deficiency on an accessible route at band 2 or below — ADA exposure escalates a repair regardless of the slab&rsquo;s size</li>
      </ul>

      <h3>6. Heavy-duty assets: dumpster pads and loading areas</h3>
      <ul>
        <li>Dumpster pad surface: cracking or rutting under container feet and truck axle paths</li>
        <li>Pad-to-approach transition: displacement or breakup where collection trucks brake and lift</li>
        <li>Approach apron: this fails before the pad does at most sites — score it as its own asset</li>
        <li>Enclosure interaction: gate posts and bollards heaving, enclosure slab separating from the pad</li>
        <li>Drainage off the pad: waste-water ponding accelerates surface failure and creates compliance issues</li>
      </ul>
      <p>
        Dumpster pads deserve their own line on the inventory
        because they fail on a different clock than the rest of the
        site&rsquo;s flatwork — concentrated axle loads on a small
        slab. What a correctly built pad looks like is covered on
        our{" "}
        <Link href="/services/dumpster-pad-trash-enclosure-concrete-utah">
          dumpster pad and trash enclosure concrete page
        </Link>
        .
      </p>

      <h3>7. Score and document</h3>
      <ul>
        <li>Assign each asset a band from 5 (sound) to 1 (failed) — worst governing observation sets the score</li>
        <li>Record score, date, photos, and a one-line note per asset — enough that next year&rsquo;s walker can find and compare</li>
        <li>Separate the output into three lists: cycle maintenance (bands 4–5), repair candidates (band 3), and repair-vs-replace decisions (bands 1–2)</li>
        <li>Flag every trip hazard and ADA deficiency on a priority list independent of scores</li>
      </ul>

      <h2>Making the scores mean something</h2>
      <p>
        A checklist that ends in a filing cabinet is a site walk,
        not a program. The scores should flow directly into the
        annual budget — bands 4–5 into the maintenance base, band 3
        into the repair allowance, band 2 into the capital
        forecast — using the triggers laid out in{" "}
        <Link href="/blog/concrete-maintenance-budgeting-for-facility-managers">
          the budgeting guide
        </Link>
        . And scored consistently across sites, the data does a
        second job: it makes vendor recommendations auditable. A
        contractor proposing work at a site you scored last quarter
        is either confirming your data or contradicting it, and
        both are useful — that accountability loop is a core
        argument in{" "}
        <Link href="/blog/multi-site-concrete-maintenance-programs">
          the multi-site maintenance program framework
        </Link>
        .
      </p>

      <h2>Bottom line</h2>
      <p>
        Walk every site the same way, score every asset on the same
        scale, photograph what&rsquo;s deteriorating, and let the
        scores write the work plan. One disciplined hour per site
        per year is the cheapest concrete management tool a
        portfolio can own.
      </p>
      <p>
        If you&rsquo;d rather have the inspection cycle run as part
        of a structured program — scored by the crew that will
        stand behind the repairs — that&rsquo;s what{" "}
        <Link href="/multi-site">our multi-site program</Link> is
        built for. You can{" "}
        <Link href="/book/discovery-call-enterprise">
          book an enterprise discovery call
        </Link>{" "}
        to walk through it against your portfolio.
      </p>
    </Prose>
  );
}
