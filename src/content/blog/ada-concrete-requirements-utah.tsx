import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import { AdaRampSpec } from "@/components/data/AdaRampSpec";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "ada-concrete-requirements-utah",
  title: "ADA Concrete Requirements in Utah: A Commercial Guide",
  metaTitle: "ADA Concrete Requirements Utah | Zion CS",
  metaDescription:
    "The ADA slope, landing, and detectable-warning rules that govern commercial concrete in Utah — and the details that fail inspection most often.",
  excerpt:
    "The slope, landing, and detectable-warning rules that govern commercial concrete in Utah — and the specific details that fail inspection most often.",
  authorSlug: "kevin",
  publishedAt: "2026-06-14",
  lastReviewedAt: "2026-07-03",
  readingTimeMinutes: 9,
  targetKeyword: "ada concrete requirements utah",
  secondaryKeywords: [
    "ada ramp concrete utah",
    "ada sidewalk slope concrete",
    "commercial ada concrete compliance",
    "ada parking lot slope requirements",
    "detectable warning curb ramp",
  ],
  siloIntent: "COMMERCIAL",
  articleRole: "insight",
  category: "insights",
  cityAnchor: "state",
  heroImage: "/images/blog/img-51-ada-requirements.jpg",
  relatedSlugs: [
    "commercial-concrete-maintenance-program-utah",
    "commercial-concrete-pour-scheduling",
    "evaluating-commercial-concrete-subs",
  ],
  faqs: [
    {
      question: "What slope counts as a ramp under the ADA?",
      answer:
        "Any accessible-route surface with a running slope steeper than 5% (1:20) is a ramp and has to meet ramp requirements: maximum 1:12 (8.33%) running slope, handrails on rises over 6 inches, edge protection, and level landings. Below 5%, it's a walking surface and only needs to hold the 2% cross-slope limit. That 5% line is the one that catches finish crews — a surface poured at 6% 'to help drainage' just became a noncompliant ramp.",
    },
    {
      question: "Can existing commercial concrete be grandfathered out of ADA compliance?",
      answer:
        "Not in the way owners hope. The ADA has no blanket grandfather clause — existing facilities carry an ongoing 'readily achievable barrier removal' obligation, and any alteration triggers current standards for the altered elements and, in many cases, the path of travel serving them. Replacing a parking lot or entry walk is an alteration. Budgeting a flatwork replacement without budgeting the ADA upgrades that ride along with it is a common and expensive planning miss.",
    },
    {
      question: "Do detectable warnings go on every curb ramp?",
      answer:
        "The truncated-dome surfaces are required where a curb ramp meets a vehicular way in the public right-of-way, and most Utah jurisdictions require them at that transit-of-traffic condition on private commercial sites as well, following PROWAG practice. They must cover the full ramp width and extend 24 inches in the direction of travel, with a color contrast against the surrounding surface. Cast-in-place dome panels set during the pour hold up better in Utah freeze-thaw than surface-applied mats, which delaminate.",
    },
    {
      question: "How flat do accessible parking spaces have to be?",
      answer:
        "Accessible spaces and their access aisles can't exceed 2% (1:48) slope in any direction — running and cross both. That's the tightest tolerance on a commercial site, and it's measured, not eyeballed. It has to be coordinated with drainage design, because a dead-flat stall that ponds is its own problem. We set accessible stalls at roughly 1.5% design slope so normal finishing variation stays inside the 2% ceiling.",
    },
    {
      question: "Who is responsible when an ADA element fails inspection — the GC or the concrete sub?",
      answer:
        "Contractually, whoever the scope documents say. Practically, the sub poured it and the correction is concrete work, so it lands back on the sub's schedule either way — and tear-out of a noncompliant ramp is pure loss for everyone. The protection is process: slope verification with a digital level before the pour is signed off, and again while the concrete is still workable. Ask any flatwork sub bidding your project how they verify ADA slopes during the pour. The answer tells you a lot.",
    },
    {
      question: "Does settlement or heaving create ADA liability on an older lot?",
      answer:
        "Yes. Compliance is a condition, not a certificate — a ramp poured at 8% that heaves to 10%, or a walkway panel that settles into a 1-inch offset, is noncompliant today regardless of what it measured at acceptance. Utah's freeze-thaw and clay soils make this movement routine. Vertical offsets over 1/4 inch (or over 1/2 inch unbeveled) are trip hazards on an accessible route. This is why ADA screening belongs in the maintenance-walk checklist, not just in construction closeout.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        On a commercial project, ADA compliance isn&rsquo;t a design
        abstraction — it&rsquo;s cast into the concrete. The slopes,
        landings, and warning surfaces are built (or missed) at the
        flatwork stage, and a miss discovered at final inspection
        means saw-cutting and re-pouring finished work. This guide
        covers the requirements that govern commercial concrete in
        Utah and the specific details we see fail most often.
      </p>
      <p>
        One framing note before the numbers: this is general guidance
        from a contractor&rsquo;s seat, not legal advice. The
        controlling documents are the 2010 ADA Standards for
        Accessible Design, the IBC/ANSI A117.1 provisions Utah
        adopts through its building code, and PROWAG for public
        rights-of-way. Your design professional owns the compliance
        determination; our job is to build what&rsquo;s drawn — and
        to flag it when what&rsquo;s drawn won&rsquo;t pass.
      </p>

      <h2>The numbers that govern flatwork</h2>

      <AdaRampSpec />

      <h3>Walking surfaces: the 5% and 2% lines</h3>
      <p>
        Every accessible route — the path from parking to entrance,
        between buildings, along public sidewalks — lives under two
        limits:
      </p>
      <ul>
        <li>
          <strong>Running slope: 5% (1:20) maximum.</strong> Steeper
          than that, the surface is legally a ramp and inherits the
          full ramp requirement set.
        </li>
        <li>
          <strong>Cross slope: 2% (1:48) maximum.</strong> This is
          the one in tension with drainage, because flatwork needs
          fall to shed water. The workable band is narrow — enough
          slope to drain, under 2% across the direction of travel —
          and it&rsquo;s why accessible routes get designed around
          drainage, not patched afterward.
        </li>
      </ul>

      <h3>Ramps: 1:12, thirty inches, and landings</h3>
      <p>
        Where a route has to climb faster than 5%, it becomes a ramp:
      </p>
      <ul>
        <li>
          <strong>Maximum running slope 1:12</strong> (8.33%) — one
          inch of rise per foot of run. Flatter is always
          permissible and, where space allows, better.
        </li>
        <li>
          <strong>Maximum rise 30 inches per run</strong> — then a
          level landing before the ramp continues.
        </li>
        <li>
          <strong>Landings at top and bottom</strong> — at least 60
          inches long, as wide as the ramp, with slope not exceeding
          2% in any direction. Where a ramp changes direction, the
          landing must be at least 60 by 60 inches.
        </li>
        <li>
          <strong>Handrails</strong> on both sides for rises over 6
          inches, and <strong>edge protection</strong> so wheels
          can&rsquo;t slip off the side.
        </li>
      </ul>
      <p>
        The detail that fails most often isn&rsquo;t the ramp — it&rsquo;s
        the landing. A ramp poured at a clean 1:12 that lands on a
        3% sloped surface fails, because the landing is part of the
        ramp.
      </p>

      <h3>Curb ramps and detectable warnings</h3>
      <p>
        Curb ramps follow the same 1:12 running-slope limit, with
        flared sides at 1:10 maximum where pedestrians walk across
        them, and a level landing at the top. Where the ramp meets a
        street or drive lane, <strong>detectable warnings</strong> —
        the truncated-dome panels — are required in the public
        right-of-way and expected by most Utah jurisdictions at
        equivalent conditions on private sites: full ramp width, 24
        inches deep in the direction of travel, visually contrasting
        with the surrounding concrete.
      </p>
      <p>
        A Utah-specific note from the field: cast-in-place dome
        panels embedded during the pour survive our freeze-thaw
        cycles and snowplow traffic far better than surface-applied
        mats, which debond within a few winters. Specify the
        cast-in-place detail; the cost difference is small and the
        replacement cycle disappears.
      </p>

      <h3>Accessible parking: the tightest tolerance on the site</h3>
      <p>
        Accessible stalls and their access aisles are limited to{" "}
        <strong>2% slope in every direction</strong>. Not 2% cross
        and something looser longitudinally — 2% total, everywhere,
        including the access aisle. On a parking lot graded for
        drainage, that makes the accessible stalls a precision zone
        inside a sloped field, and it&rsquo;s exactly where finish
        tolerance matters most. We design those zones at roughly
        1.5% so ordinary finishing variation can&rsquo;t push a
        corner over the line.
      </p>

      <h2>Why compliant-on-paper fails in the field</h2>
      <p>
        Nearly every ADA failure we&rsquo;re called to fix traces to
        one of three causes:
      </p>
      <ol>
        <li>
          <strong>Tolerance stacking.</strong> A ramp drawn at 8.33%
          leaves zero room for form settlement or finishing
          variation. Anything drawn at the legal maximum will
          measure over it somewhere. The fix is designing margin in
          — target 7.5% on ramps, 1.5% on cross slopes — so the
          built surface lands inside the limit.
        </li>
        <li>
          <strong>Field improvisation.</strong> A finisher steepens
          a walk to chase drainage, a curb ramp gets shifted to miss
          a utility box and loses its top landing. Every
          slope-affecting change on an accessible route needs to go
          back through the designer, not get solved at the screed.
        </li>
        <li>
          <strong>Movement after acceptance.</strong> Utah&rsquo;s
          expansive clays and freeze-thaw cycles move concrete —
          the mechanics are in{" "}
          <Link href="/blog/why-utah-concrete-cracks">
            why Utah concrete cracks
          </Link>
          . A surface that measured 1.8% at closeout can heave past
          2% in two winters. Compliance has to be monitored, which
          is why ADA screening sits inside{" "}
          <Link href="/blog/commercial-concrete-maintenance-program-utah">
            a commercial maintenance program
          </Link>{" "}
          rather than ending at the certificate of occupancy.
        </li>
      </ol>

      <h2>Verification: how the pour protects you</h2>
      <p>
        The cheapest ADA correction is the one made while the
        concrete is still plastic. Our practice on accessible-route
        pours: digital smart level on the forms before the pour is
        released, slope checks on the wet surface during finishing,
        and measured verification photos at completion — so
        acceptance is documented with numbers, not assumptions.
        Inspection timing matters too; ADA-element inspections are
        one of the scheduling constraints covered in{" "}
        <Link href="/blog/commercial-concrete-pour-scheduling">
          our pour-scheduling guide
        </Link>
        .
      </p>
      <p>
        If you&rsquo;re vetting flatwork subs for a commercial
        project, ask how they verify accessible slopes during — not
        after — the pour. Subs who answer with a process have poured
        ramps that passed. Subs who answer &ldquo;we build to the
        drawings&rdquo; are describing exactly how tolerance
        stacking happens.
      </p>

      <h2>Where this lands on your project</h2>
      <p>
        ADA concrete runs through two of our service lines:{" "}
        <Link href="/services/sidewalks-curbing-utah">
          sidewalks and curbing
        </Link>{" "}
        for accessible routes and curb ramps, and{" "}
        <Link href="/services/commercial-flatwork-parking-lots-sidewalks">
          commercial flatwork
        </Link>{" "}
        for parking fields and site concrete. For new work,
        remediation of failed inspections, or an ADA condition
        screen on an existing property,{" "}
        <Link href="/quote">request a quote</Link> — bring the site
        plan if you have one, and we&rsquo;ll flag the
        accessible-route details before they&rsquo;re cast in
        concrete.
      </p>
    </Prose>
  );
}
