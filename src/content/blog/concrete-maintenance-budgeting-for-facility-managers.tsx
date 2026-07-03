import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "concrete-maintenance-budgeting-for-facility-managers",
  title: "Concrete Maintenance Budgeting for Facility Managers",
  metaTitle: "Concrete Maintenance Budgeting Guide",
  metaDescription:
    "How facility managers should budget concrete across a portfolio — condition scoring, repair-vs-replace triggers, and a predictable annual line item.",
  excerpt:
    "How to budget concrete across a portfolio — condition scoring, repair-vs-replace triggers, and turning reactive spend into a predictable annual line item.",
  authorSlug: "kevin",
  publishedAt: "2026-05-26",
  lastReviewedAt: "2026-07-03",
  readingTimeMinutes: 9,
  targetKeyword: "concrete maintenance budget facility",
  secondaryKeywords: [
    "facility concrete capital planning",
    "budgeting concrete repairs portfolio",
    "concrete lifecycle cost facility",
    "facility manager concrete budget",
    "concrete condition scoring",
  ],
  siloIntent: "ENTERPRISE",
  articleRole: "process-guide",
  category: "guides",
  cityAnchor: null,
  relatedSlugs: [
    "multi-site-concrete-maintenance-programs",
    "vendor-consolidation-concrete-contractor",
    "multi-site-concrete-inspection-checklist",
  ],
  faqs: [
    {
      question:
        "What percentage of a facility budget should concrete maintenance take?",
      answer:
        "There's no universal number — it depends on portfolio age, climate exposure, and how much deferred work you're carrying. The useful move is to stop thinking in percentages and start thinking in condition data: score every site, price the work each score band implies, and let the annual line item fall out of the math. Portfolios that budget this way typically see the number stabilize within two to three cycles.",
    },
    {
      question: "How do I budget for concrete when I don't know site conditions?",
      answer:
        "You can't — that's the honest answer. The first budget cycle should fund a baseline condition assessment across the portfolio. It's a modest line item relative to the repair budget it informs, and it converts every future budget conversation from guesswork to documented condition. A structured inspection checklist scored consistently across sites is the input everything else depends on.",
    },
    {
      question: "When does repair stop making sense versus full replacement?",
      answer:
        "The working triggers: when cracking is structural rather than surface (full-depth, widening, or accompanied by settlement), when more than roughly a quarter to a third of a slab's area needs work, or when the same slab has been repaired twice and is failing again. At that point each additional repair buys less life than the last, and replacement resets the clock instead of renting time on a failing asset.",
    },
    {
      question: "Should concrete work come from the operating budget or capital budget?",
      answer:
        "Both, split by work type. Recurring maintenance — sealing, joint work, crack repair, inspection — belongs in operating as a predictable annual line. Replacement and new construction belong in capital, planned one to three years out from condition scores. Portfolios that run everything through one bucket end up either raiding capital for routine work or deferring replacements that operating can't absorb.",
    },
    {
      question: "How far in advance can concrete replacement realistically be forecast?",
      answer:
        "With consistent condition scoring, one to three years for most flatwork. Concrete rarely fails without warning — scores trend downward across inspection cycles before a slab becomes a liability. A site scoring in the middle band today is a candidate for the capital plan two cycles out. What breaks forecasting is inconsistent inspection, not the material.",
    },
    {
      question: "Does a maintenance program actually reduce total spend, or just smooth it?",
      answer:
        "Both, but the reduction is real. Sealing and joint maintenance cost a small fraction of the replacement they defer, and repairs caught at the mid-condition band cost meaningfully less than the same failure addressed as an emergency. Smoothing is the secondary benefit — a predictable line item survives budget review in a way that surprise capital requests don't.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        Concrete is one of the few line items in a facility budget
        that punishes you specifically for not having a line item.
        Roofs get inspected on a schedule. HVAC gets a service
        contract. Concrete, at most portfolios, gets attention when
        a slab heaves, a tenant complains, or someone trips — and
        every one of those events lands as unplanned spend at
        emergency pricing.
      </p>
      <p>
        The fix is not complicated, but it does require structure:
        score the condition of what you own, define the triggers
        that separate repair from replacement, and convert the
        result into an annual line item your finance team can plan
        around. This is the framework we see work across Utah
        portfolios, and it&rsquo;s the same logic that underpins a
        formal{" "}
        <Link href="/blog/multi-site-concrete-maintenance-programs">
          multi-site concrete maintenance program
        </Link>
        .
      </p>

      <h2>Step 1: Score what you own</h2>
      <p>
        You cannot budget an asset you haven&rsquo;t assessed. The
        starting point is a condition score for every concrete
        asset in the portfolio — dumpster pads, sidewalks,
        approaches, loading areas, patios, curb and gutter. A
        five-band scale is enough:
      </p>
      <ul>
        <li>
          <strong>5 — Sound.</strong> No visible cracking beyond
          hairline, joints intact, drainage working, surface
          uniform. Needs sealing on cycle and nothing else.
        </li>
        <li>
          <strong>4 — Minor wear.</strong> Hairline cracking,
          early surface wear, joint sealant aging. Maintenance
          items only; no repair mobilization required.
        </li>
        <li>
          <strong>3 — Active deterioration.</strong> Cracks
          widening or multiplying, spalling starting, joint
          failure, early settlement. This is the band where money
          spent buys the most life — repairs here are routine
          work, not reconstruction.
        </li>
        <li>
          <strong>2 — Failing.</strong> Structural cracking,
          significant settlement or heaving, trip hazards,
          drainage failure. Repair is still possible but the
          repair-vs-replace math needs to be run honestly.
        </li>
        <li>
          <strong>1 — Failed.</strong> The slab is a liability —
          safety exposure, ADA exposure, or functional failure.
          Replacement, scheduled as soon as the season allows.
        </li>
      </ul>
      <p>
        Consistency matters more than precision. Two people scoring
        the same slab should land within one band of each other,
        which is why the scoring criteria belong on paper — we
        published the walk-through we use as{" "}
        <Link href="/blog/multi-site-concrete-inspection-checklist">
          the multi-site concrete inspection checklist
        </Link>
        . Score every site the same way, on the same cycle, and the
        portfolio starts telling you what it needs.
      </p>

      <h2>Step 2: Define repair-vs-replace triggers before you need them</h2>
      <p>
        The most expensive decisions in concrete budgeting are the
        ones made under pressure — a failed pad, a tenant
        escalation, a bid in hand and no framework to evaluate it.
        Setting the triggers in advance removes the pressure from
        the decision. The three we use:
      </p>
      <ol>
        <li>
          <strong>Structural vs. surface failure.</strong> Surface
          problems — scaling, spalling, hairline cracking, joint
          wear — are repairable and worth repairing. Full-depth
          cracking, settlement, and heaving mean the problem is
          under the slab, and surface repair is cosmetic money
          spent on a structural issue.
        </li>
        <li>
          <strong>The one-quarter rule.</strong> When more than
          roughly 25–30% of a slab&rsquo;s area needs repair, the
          per-square math flips — mobilization, saw cutting, and
          patch-to-original matching stack up until replacement of
          the full slab costs comparably and delivers a new asset
          instead of an old one with patches.
        </li>
        <li>
          <strong>The repeat-repair rule.</strong> A slab
          that&rsquo;s been repaired twice and is failing again is
          telling you the failure cause was never addressed —
          usually sub-grade or drainage. Third repairs almost never
          pay off. Fix the cause and replace the slab.
        </li>
      </ol>
      <p>
        Triggers turn vendor recommendations into checkable claims.
        When a contractor proposes replacement, the condition score
        and the triggers either support the call or they
        don&rsquo;t — which is exactly the transparency you should
        expect from a program vendor, per the reporting standards
        in our{" "}
        <Link href="/blog/vendor-consolidation-concrete-contractor">
          vendor consolidation framework
        </Link>
        .
      </p>

      <h2>Step 3: Build the annual line item</h2>
      <p>
        With scores and triggers in place, the budget assembles
        itself into three components:
      </p>

      <h3>The maintenance base (operating)</h3>
      <p>
        Recurring, predictable work driven by cycle rather than
        failure: sealing on a one-to-three-year rotation per site,
        joint resealing, crack sealing on band-4 assets, and the
        annual inspection itself. This number is stable
        year-over-year and scales with site count. Under a
        consolidated program, cost per site visit consolidates —
        the crew sealing site 6 this week is doing site 9 next,
        and the mobilization spreads.
      </p>

      <h3>The repair allowance (operating)</h3>
      <p>
        Work generated by band-3 and band-2 scores from the last
        inspection cycle. Unlike the maintenance base, this varies
        by year — but it varies <em>predictably</em>, because the
        inspection told you last fall what needs work this spring.
        Carry a contingency margin on top for the failures
        inspection didn&rsquo;t catch; portfolios with mature
        scoring find that margin shrinks each cycle.
      </p>

      <h3>The replacement forecast (capital)</h3>
      <p>
        Band-2 assets trending toward band 1, sequenced one to
        three years out. This is the component that most
        portfolios skip and pay for later — replacements funded as
        emergencies cost more, land in the wrong season, and blow
        through operating budgets that were never sized for them.
        A rolling capital forecast built from condition scores
        means no replacement is ever a surprise, only a scheduled
        event.
      </p>

      <h2>What this looks like in practice</h2>
      <p>
        Year one is the heaviest lift: baseline inspection across
        the portfolio, first-pass scores, and a repair backlog
        that&rsquo;s usually larger than anyone expected — that
        backlog is the deferred maintenance the reactive model was
        quietly accumulating. Year two, the maintenance base
        stabilizes and the repair allowance starts tracking the
        prior year&rsquo;s inspection instead of the phone ringing.
        By year three, the replacement forecast is doing its job
        and the concrete line item behaves like the roof line item:
        boring, defensible, and approved without a fight.
      </p>
      <p>
        The budgeting framework and a maintenance program are two
        halves of the same system — the program generates the
        condition data, and the budget consumes it. Whether one
        vendor should run that program across your whole portfolio
        is its own decision, covered in{" "}
        <Link href="/blog/vendor-consolidation-concrete-contractor">
          the vendor consolidation math
        </Link>{" "}
        and in{" "}
        <Link href="/blog/concrete-rfp-vs-preferred-vendor">
          the RFP-vs-preferred-vendor question
        </Link>
        .
      </p>

      <h2>Bottom line</h2>
      <p>
        Concrete budgeting fails when it&rsquo;s reactive and works
        when it&rsquo;s condition-driven. Score every asset on a
        consistent scale, set repair-vs-replace triggers before the
        pressure arrives, and split the budget into a maintenance
        base, a repair allowance, and a rolling replacement
        forecast. The first cycle is work; every cycle after that
        is maintenance of a system that already runs.
      </p>
      <p>
        We run condition-scored maintenance programs for multi-site
        portfolios across the Wasatch Front and St. George — the
        structure is on{" "}
        <Link href="/multi-site">our multi-site page</Link>. If you
        want to talk through what a baseline assessment would look
        like for your portfolio,{" "}
        <Link href="/book/discovery-call-enterprise">
          book an enterprise discovery call
        </Link>
        .
      </p>
    </Prose>
  );
}
