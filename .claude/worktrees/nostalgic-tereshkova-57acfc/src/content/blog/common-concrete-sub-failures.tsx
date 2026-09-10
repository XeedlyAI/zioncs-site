import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "common-concrete-sub-failures",
  title:
    "Common Concrete Sub Failures (and How to Spot Them Before Closing)",
  metaTitle: "Common Concrete Sub Failures",
  metaDescription:
    "The five concrete sub failure modes that show up at closing — and the warning signs experienced builders catch during the pour, not after.",
  excerpt:
    "Five failure modes show up at closing with predictable patterns. The warning signs experienced builders catch during the pour itself.",
  authorSlug: "kevin",
  publishedAt: "2026-04-08",
  lastReviewedAt: "2026-05-04",
  readingTimeMinutes: 8,
  targetKeyword: "concrete sub problems builders",
  secondaryKeywords: [
    "concrete subcontractor failures",
    "common concrete sub mistakes",
    "concrete sub red flags",
    "concrete sub callback issues",
    "builder concrete problems",
  ],
  siloIntent: "BUILDER",
  articleRole: "diagnostic",
  category: "insights",
  cityAnchor: null,
  heroImage: "/images/blog/img-22-sub-failures.png",
  relatedSlugs: [
    "how-to-vet-a-concrete-subcontractor",
    "pre-pour-checklist-for-builders",
    "concrete-sub-reliability-vs-lowest-bid",
  ],
  faqs: [
    {
      question: "How early in the pour can a builder spot a problem?",
      answer:
        "Most issues are visible during forms-and-rebar inspection (before any concrete arrives) or during the pour itself. By the time concrete is curing, you've usually missed the window — the failure is baked in. The pre-pour checklist is the highest-leverage moment for catching problems.",
    },
    {
      question: "Are these failures the sub's fault or the GC's fault?",
      answer:
        "Mostly the sub's fault, but a builder who didn't verify is sharing it. The sub is responsible for the work; the GC is responsible for the verification. Most builder warranty disputes settle around who should have caught what — and the answer is almost always 'both, but earlier.'",
    },
    {
      question: "What's the most common failure on Wasatch Front spec home builds?",
      answer:
        "Subgrade settling at driveway aprons within the first 18 months. Almost always traces back to inadequate compaction or a clay pocket that wasn't properly removed and replaced. Visible as a 1/4 to 1 inch dip at the apron-to-street transition. Repair-grade if caught early; replacement-grade if it spreads.",
    },
    {
      question: "Should builders document the pour itself?",
      answer:
        "Yes. Photos at three points: forms + rebar before pour, pour-in-progress, finished surface before crew leaves. Stamped with date and address. Five minutes of photography per pour saves hours of dispute resolution if a callback comes 8 months later.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        Concrete failures on builder projects don&rsquo;t happen
        randomly. Five specific failure modes account for the
        overwhelming majority of callbacks — and each one has
        warning signs that show up during the pour itself, not
        afterward. Catch them at the pour and you save a callback.
        Miss them and you&rsquo;re explaining cracks to a new
        homeowner at the 6-month walkthrough.
      </p>
      <p>
        This is the diagnostic catalog experienced GCs use to
        verify a sub&rsquo;s work before crews leave the site.
      </p>

      <h2>Failure 1: subgrade settling</h2>
      <p>
        <strong>What it looks like at closing:</strong> A 1/4 to 1
        inch dip at the apron-to-street transition, or a corner of
        the driveway lower than the rest. Visible to the homeowner.
        Worsens through the first winter as freeze-thaw cycles
        amplify the unevenness.
      </p>
      <p>
        <strong>Root cause:</strong> Inadequate subgrade
        compaction. Sometimes a clay pocket that wasn&rsquo;t
        identified and replaced with proper base. Sometimes a fill
        section that wasn&rsquo;t compacted in lifts.
      </p>
      <p>
        <strong>Warning signs during the pour:</strong> Subgrade
        looks &ldquo;dirty&rdquo; — soil mixed with gravel rather
        than a clean compacted gravel base. Crew skipped or
        shortened the plate-compactor passes (you should hear it
        running for 10–15 minutes per zone). Subgrade has visible
        moisture variation across the apron (wet pockets next to
        dry pockets — uneven prep).
      </p>
      <p>
        <strong>What to verify:</strong> Subgrade depth and base
        material before forms go in. Any sub competent at
        residential work shouldn&rsquo;t mind you walking the
        prepped subgrade with a steel rod and probing for soft
        spots.
      </p>

      <h2>Failure 2: hairline-to-wide cracking</h2>
      <p>
        <strong>What it looks like at closing:</strong> Cracks
        wider than 1/8 inch, often radiating from corners or
        running across the slab. Sometimes already visible at
        closing; sometimes appears in the first 60 days as
        shrinkage stress relieves.
      </p>
      <p>
        <strong>Root cause:</strong> Control joints either missing
        or placed too far apart. Concrete relieves stress wherever
        it can; if the sub didn&rsquo;t cut joints at appropriate
        intervals, the slab decides for itself, and the crack
        appears wherever was most convenient — usually right where
        you&rsquo;d see it.
      </p>
      <p>
        <strong>Warning signs during the pour:</strong> Crew skips
        the saw-cut step. Or cuts joints at intervals exceeding 10
        feet on a residential apron. Or the joints look shallow
        (&lt;1 inch deep into a 4-inch slab — should be 1.25
        inches minimum).
      </p>
      <p>
        <strong>What to verify:</strong> Joint plan should be
        documented in the sub&rsquo;s scope. Walk the joints after
        cut, confirm depth and spacing match spec.
      </p>

      <h2>Failure 3: surface scaling and spalling</h2>
      <p>
        <strong>What it looks like at closing:</strong> Surface
        flaking off in thin plates within the first 12–18 months.
        Sometimes localized to apron edges; sometimes slab-wide.
      </p>
      <p>
        <strong>Root cause:</strong> Non-air-entrained concrete
        mix. Air entrainment is microscopic air bubbles
        distributed through the slab that absorb freeze-thaw
        expansion. Without it, water trapped near the surface
        freezes, expands, and spalls the top layer off. Common on
        bids that came in low because the sub was using a cheaper
        non-air-entrained mix.
      </p>
      <p>
        <strong>Warning signs during the pour:</strong> The mix
        ticket from the ready-mix supplier (truck driver hands one
        over) doesn&rsquo;t list air entrainment percentage. Or
        the spec was for 4,000 PSI but the mix delivered is 3,500.
        Or the sub didn&rsquo;t do an air-content test on a
        cold-weather pour where it matters most.
      </p>
      <p>
        <strong>What to verify:</strong> Mix ticket on every truck.
        Should list PSI, air content (4–7% for residential
        exterior in Utah), and slump. Take a photo for your records.
      </p>

      <h2>Failure 4: ADA-ramp non-compliance</h2>
      <p>
        <strong>What it looks like at closing:</strong> ADA ramp
        with slope exceeding 8.33% (1:12), or cross-slope exceeding
        2%, or detectable warning surface missing. Caught at
        municipal inspection, sometimes after the fact during ADA
        complaint review.
      </p>
      <p>
        <strong>Root cause:</strong> Sub didn&rsquo;t verify slope
        with a digital level during forms placement. Eyeballing
        the slope is the most common mistake; ADA tolerances are
        tight enough that visual estimation fails.
      </p>
      <p>
        <strong>Warning signs during the pour:</strong> No digital
        level on site. Crew sets ramp forms by eye. Detectable
        warning surface (the truncated dome panels) not staged for
        installation.
      </p>
      <p>
        <strong>What to verify:</strong> Walk the ramp with a
        4-foot digital level after forms are set, again after pour.
        Slopes should be documented. Detectable warning surface
        should be installed within 1/8 inch of grade.
      </p>

      <h2>Failure 5: edge spalling at exterior corners</h2>
      <p>
        <strong>What it looks like at closing:</strong> Crumbling
        concrete at exterior corners — driveway-to-sidewalk,
        sidewalk-to-curb, patio-to-step. Visible chips and missing
        material. Worse after first winter.
      </p>
      <p>
        <strong>Root cause:</strong> Edges weren&rsquo;t edged
        (rounded) during finish, leaving a sharp corner that
        shears off under load or freeze-thaw. Or the corner was
        finished too late after the slab had set, creating a weak
        cold joint.
      </p>
      <p>
        <strong>Warning signs during the pour:</strong> Crew
        doesn&rsquo;t use an edging tool (rounds the corner to a
        small radius). Or skips the second pass (edges should be
        worked twice — once after initial set, once after the
        bleed water has come up).
      </p>
      <p>
        <strong>What to verify:</strong> Walk corners after final
        finish. Should have a consistent rounded edge,
        approximately 1/4 inch radius. Sharp 90-degree corners
        will fail.
      </p>

      <h2>The five-minute verification routine</h2>
      <p>
        Builders who&rsquo;ve been through enough callbacks have a
        five-minute routine they run every pour:
      </p>
      <ol>
        <li>
          <strong>Before pour</strong> — walk subgrade with a steel
          rod, verify base material and compaction
        </li>
        <li>
          <strong>Mix ticket</strong> — photo of every ticket as
          trucks arrive, verify PSI + air content + slump
        </li>
        <li>
          <strong>During pour</strong> — note time the mix arrived,
          time crew started, time finishing began. Time gaps over
          90 minutes are concerning.
        </li>
        <li>
          <strong>After finish</strong> — walk joints (depth +
          spacing), edges (rounding), ADA ramps (slope verification
          if applicable)
        </li>
        <li>
          <strong>Photos</strong> — three photos: forms+rebar
          before pour, finished surface before crew leaves, mix
          ticket. Stamped with date and address.
        </li>
      </ol>
      <p>
        If you&rsquo;re a builder reading this, your foreman or
        site superintendent should be doing this on every pour. If
        you&rsquo;re a sub reading this, the GCs you want to keep
        working with are the ones running this routine — they
        catch problems early when they&rsquo;re cheap to fix.
      </p>
      <p>
        For the full pre-pour checklist that prevents most of
        these failures, see{" "}
        <Link href="/blog/pre-pour-checklist-for-builders">
          the pre-pour checklist
        </Link>
        . For the upstream sub-vetting framework that filters out
        the subs likely to produce these failures, see{" "}
        <Link href="/blog/how-to-vet-a-concrete-subcontractor">
          how to vet a concrete subcontractor
        </Link>
        . If you&rsquo;re evaluating us specifically, head to{" "}
        <Link href="/builders">our builder track page</Link>.
      </p>
    </Prose>
  );
}
