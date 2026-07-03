import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "commercial-concrete-maintenance-program-utah",
  title: "Building a Commercial Concrete Maintenance Program",
  metaTitle: "Commercial Concrete Maintenance Program",
  metaDescription:
    "How to structure a commercial concrete maintenance program in Utah — inspection cadence, sealing intervals, joint upkeep, and budgeting for repairs.",
  excerpt:
    "How to structure a commercial concrete maintenance program in Utah — inspection cadence, sealing intervals, joint upkeep, and a defensible repair budget.",
  authorSlug: "josh",
  publishedAt: "2026-06-02",
  lastReviewedAt: "2026-07-03",
  readingTimeMinutes: 8,
  targetKeyword: "commercial concrete maintenance program utah",
  secondaryKeywords: [
    "commercial concrete sealing program",
    "parking lot concrete maintenance",
    "commercial slab upkeep utah",
    "concrete joint maintenance commercial",
    "concrete inspection schedule commercial",
  ],
  siloIntent: "COMMERCIAL",
  articleRole: "process-guide",
  category: "guides",
  cityAnchor: null,
  heroImage: "/images/blog/img-50-commercial-maintenance.jpg",
  relatedSlugs: [
    "utah-soil-conditions-commercial-foundations",
    "multi-site-concrete-maintenance-programs",
    "ada-concrete-requirements-utah",
  ],
  faqs: [
    {
      question: "How often should commercial concrete be resealed in Utah?",
      answer:
        "Every 2–3 years for exterior flatwork on the Wasatch Front, driven by freeze-thaw exposure and de-icer use. High-traffic drive lanes and entries trend toward 2 years; low-traffic walks and pads stretch to 3. St. George properties run a different clock — less freeze-thaw, more UV and alkalinity — and typically reseal on a 3-year cadence with alkali-resistant products. A water-bead test each fall tells you whether the sealer is still working.",
    },
    {
      question: "What does deferred joint maintenance actually cost a property?",
      answer:
        "Failed joint sealant lets water reach the subgrade. In Utah's freeze-thaw climate, that water freezes, expands, and pumps fines out from under the slab edge — which becomes spalled joints, then rocking panels, then full panel replacement. The pattern we see on the Wasatch Front: a joint resealing scope skipped in year 4 becomes panel replacement in year 8 at many times the cost. Joint sealant is the cheapest line in the program and the most consequential to skip.",
    },
    {
      question: "Which de-icers are safe on commercial concrete?",
      answer:
        "None are harmless, but they're not equal. Avoid ammonium sulfate and ammonium nitrate outright — they chemically attack concrete. Rock salt (sodium chloride) is acceptable on cured concrete but accelerates freeze-thaw scaling. Calcium chloride and magnesium chloride are gentler at Utah temperatures. Never de-ice concrete less than a year old. Whatever your snow contractor uses, put it in their contract — de-icer choice is a maintenance-program decision, not a truck-driver decision.",
    },
    {
      question: "Should we budget concrete maintenance as opex or capital?",
      answer:
        "Both, split by activity. Inspections, sealing, joint resealing, and crack routing are recurring operating costs on a predictable cadence. Panel replacement, structural repairs, and ADA corrections are capital events you forecast from inspection findings. The point of a program is that the inspection data turns capital surprises into planned line items 2–3 years before they're urgent. Your CFO will notice the difference.",
    },
    {
      question: "Can our facilities team run the inspections themselves?",
      answer:
        "The twice-yearly walk, yes — most of it is looking for defined conditions with a camera and a checklist: new cracks, joint sealant failure, spalling, ponding, trip-hazard offsets over 1/4 inch. What warrants a contractor's eye is the interpretation: whether a crack pattern means subgrade movement, whether spalling is cosmetic or progressive. A workable split is in-house walks twice a year with a contractor review of the findings, plus a contractor walk every 2–3 years tied to the resealing cycle.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        Most commercial properties don&rsquo;t have a concrete
        maintenance program. They have a concrete emergency response
        pattern: ignore the flatwork until a tenant complains, a
        trip-and-fall letter arrives, or a panel fails outright —
        then pay crisis prices for work that compressed maintenance
        would have prevented. On Utah properties, where every winter
        runs dozens of freeze-thaw cycles through every slab, the gap
        between those two approaches is wider than almost anywhere
        else in the country.
      </p>
      <p>
        A real program is not complicated. It&rsquo;s an inspection
        cadence, a sealing cycle, a joint-maintenance cycle, a
        de-icer policy, and a budget structure that turns findings
        into planned work. This is how we&rsquo;d build one for a
        Wasatch Front property.
      </p>

      <h2>Why Utah concrete needs a program at all</h2>
      <p>
        Concrete fails from the details inward. Water gets through a
        failed joint or an unsealed surface, reaches the subgrade,
        freezes, and expands. Utah&rsquo;s climate runs that cycle
        relentlessly — the Wasatch Front sees far more
        freeze-thaw crossings per winter than most US metros, and the
        clay-heavy subgrades in much of the valley amplify the
        movement (the soil mechanics are covered in{" "}
        <Link href="/blog/utah-soil-conditions-commercial-foundations">
          our Utah soils article
        </Link>
        ). Add de-icing salts from November through March and you
        have a chemistry-plus-physics attack that maintenance either
        interrupts or doesn&rsquo;t.
      </p>
      <p>
        The economics follow directly: sealing and joint work cost a
        small fraction of panel replacement, and panel replacement
        costs a small fraction of a slab rebuilt after subgrade
        washout. Every step you defer moves you one tier up that
        ladder.
      </p>

      <h2>The inspection cadence</h2>
      <p>
        Two scheduled walks a year, timed to Utah&rsquo;s seasons:
      </p>
      <ul>
        <li>
          <strong>Spring walk (April)</strong> — the damage audit.
          Winter just showed you every weakness: new cracks, scaling
          from de-icers, joint sealant pulled loose, spalled edges,
          heaved panels, ponding where drainage failed. Photograph
          and log everything against last year&rsquo;s record.
        </li>
        <li>
          <strong>Fall walk (October)</strong> — the pre-winter
          seal-up. Anything open going into winter — cracked
          sealant, unrouted cracks, exposed joints — is a water
          entry point for five months of freeze-thaw. Fall findings
          get fixed before Thanksgiving, not logged for spring.
        </li>
      </ul>
      <p>
        What the walk covers: crack mapping, joint sealant condition,
        surface scaling and spalling, panel movement (rocking,
        faulting, offsets), drainage and ponding, and ADA-relevant
        conditions — trip hazards over 1/4 inch, ramp and
        cross-slope changes from settlement. That last category is a
        compliance exposure, not just a maintenance item; the
        thresholds are laid out in{" "}
        <Link href="/blog/ada-concrete-requirements-utah">
          our ADA concrete requirements guide
        </Link>
        .
      </p>

      <h2>The sealing cycle</h2>
      <p>
        Exterior commercial flatwork on the Wasatch Front wants
        resealing every 2–3 years. The sealer is the sacrificial
        layer — it takes the de-icer exposure and moisture intrusion
        so the surface paste doesn&rsquo;t. High-traffic zones
        (drive lanes, dock aprons, entries) wear to the short end of
        that range; walks and low-traffic pads stretch to the long
        end.
      </p>
      <p>
        Two program rules worth writing down. First, test rather
        than assume: water dropped on the surface each fall should
        bead or darken slowly — fast absorption means the sealer is
        done regardless of the calendar. Second, match product to
        exposure: penetrating silane/siloxane sealers for
        freeze-thaw and salt protection on the Wasatch Front,
        alkali-resistant products in St. George where soil chemistry
        attacks the surface from below.
      </p>

      <h2>Joint maintenance — the highest-leverage line item</h2>
      <p>
        Joints are where commercial concrete actually fails. The
        sealant in a control or expansion joint has a service life of
        roughly 5–7 years in Utah&rsquo;s UV and temperature swings,
        and once it splits or debonds, every storm feeds water
        straight to the subgrade. The failure sequence is
        predictable: saturated subgrade, freeze-heave at the joint,
        spalled edges, pumped-out fines, rocking panels, replacement.
      </p>
      <p>
        The program answer: inspect sealant on both annual walks,
        budget a full joint resealing cycle every 5–7 years, and rout
        and seal random cracks as they appear so they behave like
        joints instead of like open wounds. None of this work is
        glamorous. All of it is the difference between a 30-year slab
        and a 15-year slab.
      </p>

      <h2>The winter policy</h2>
      <p>
        Put three things in writing with whoever plows your lot:
        which de-icer is permitted (calcium or magnesium chloride;
        never ammonium-based products), plow blades set to shoe
        height so steel doesn&rsquo;t gouge the surface at joints,
        and no de-icer at all on concrete placed within the last
        year. A snow contract that&rsquo;s silent on these points is
        how a five-year-old lot ends up looking fifteen.
      </p>

      <h2>Budgeting: make the program self-funding on paper</h2>
      <p>
        Structure the budget in three tiers, fed by the inspection
        log:
      </p>
      <ol>
        <li>
          <strong>Recurring (annual)</strong> — inspections, crack
          routing, spot sealant repair, fall seal-up items.
        </li>
        <li>
          <strong>Cyclical (every 2–7 years)</strong> — surface
          resealing and full joint resealing, scheduled by zone so
          the cost spreads across fiscal years instead of landing at
          once.
        </li>
        <li>
          <strong>Forecast capital (2–3 year horizon)</strong> —
          panel replacements, drainage corrections, ADA remediation,
          identified by trend lines in the inspection record and
          scheduled before they become urgent.
        </li>
      </ol>
      <p>
        The inspection log is what makes tier three possible. A panel
        that shows new faulting in spring 2026 is a planned
        replacement in summer 2027, priced in competitive season —
        not an emergency in January at winter rates.
      </p>

      <h2>Single property vs portfolio</h2>
      <p>
        Everything above scales, but portfolios add a layer:
        consistent scoring across sites, consolidated vendor
        management, and capital planning across dozens of slabs
        instead of one. If you&rsquo;re running concrete across
        multiple locations, see{" "}
        <Link href="/blog/multi-site-concrete-maintenance-programs">
          our multi-site maintenance programs article
        </Link>{" "}
        — the program logic is the same; the operating model is
        different.
      </p>

      <h2>Getting started</h2>
      <p>
        The first step is a baseline condition walk — crack map,
        joint inventory, drainage check, ADA screen — so the program
        starts from documented reality instead of memory. We do
        these for commercial properties across the Wasatch Front as
        part of{" "}
        <Link href="/services/commercial-flatwork-parking-lots-sidewalks">
          our commercial flatwork service
        </Link>
        . If you want a baseline and a maintenance calendar built
        from it,{" "}
        <Link href="/quote">request a quote</Link> and tell us the
        property type and approximate flatwork area — we&rsquo;ll
        scope the walk from there.
      </p>
    </Prose>
  );
}
