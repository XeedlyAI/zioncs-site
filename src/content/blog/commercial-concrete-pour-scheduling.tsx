import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "commercial-concrete-pour-scheduling",
  title: "Commercial Concrete Scheduling: How We Hit Your Critical Path",
  metaTitle: "Commercial Concrete Scheduling",
  metaDescription:
    "How experienced Utah commercial subs sequence pours around weather, inspections, and critical-path constraints — without becoming the schedule risk.",
  excerpt:
    "How Utah commercial subs sequence pours around weather, inspections, and tenant access — without becoming the schedule risk on your project.",
  authorSlug: "josh",
  publishedAt: "2026-03-28",
  lastReviewedAt: "2026-05-04",
  readingTimeMinutes: 8,
  targetKeyword: "commercial concrete pour scheduling",
  secondaryKeywords: [
    "commercial concrete critical path",
    "concrete pour timeline commercial",
    "scheduling commercial concrete pour",
    "concrete pour weather window",
    "commercial concrete project schedule",
  ],
  siloIntent: "COMMERCIAL",
  articleRole: "process-guide",
  category: "guides",
  cityAnchor: null,
  relatedSlugs: [
    "utah-soil-conditions-commercial-foundations",
    "evaluating-commercial-concrete-subs",
    "pre-pour-checklist-for-builders",
  ],
  faqs: [
    {
      question: "How far in advance do you commit to a pour date?",
      answer:
        "We commit to a pour-week window when the contract is signed and confirm the specific pour date 3–5 days out from the forecast. Hard-locking a calendar date 4 weeks in advance is how subs become the schedule risk — Utah weather is too variable. Project managers who push for specific-date commitments early are the ones whose projects slip when the locked-in date doesn't cooperate.",
    },
    {
      question: "What weather conditions force a reschedule?",
      answer:
        "Hard rules: forecast highs over 95°F (cure damage), forecast lows under 25°F within 48 hours of pour without cold-weather precautions, sustained winds over 25 mph (plastic shrinkage cracks), heavy precipitation forecast within 6 hours of pour. Marginal conditions (40°F lows, 15 mph winds) get cold/hot-weather precautions instead of rescheduling.",
    },
    {
      question:
        "How do you handle inspection delays that push the pour off the planned window?",
      answer:
        "Inspection delays are the #1 schedule disruptor on commercial work. We carry buffer days into our project schedule for AHJ inspection slippage, and we don't pull crew off-site between inspection signoff and pour. If an inspection delays beyond the buffer, we re-sequence with the GC — pour the unaffected sections first, hold the inspection-dependent sections.",
    },
    {
      question: "What's a realistic timeline for a 10,000 sq ft commercial pour?",
      answer:
        "Single-phase: 2–3 days (subgrade prep + form + pour + finish), then 7-day cure for walkable, 28-day cure for full strength. Multi-phase (more typical for retail centers staying open): 5–10 days across 2–3 phases. The pour itself is fast; the prep, inspection, and tenant coordination are what extends the timeline.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        On most commercial projects, the concrete sub is one of two
        things: a known quantity that holds the schedule, or the
        single biggest schedule risk on the project. Which one
        depends almost entirely on how the sub plans pour
        sequencing — not on how fast they can pour, but on how
        well they can absorb the variability that surrounds the
        pour.
      </p>
      <p>
        Utah weather is variable. Inspections slip. Tenant access
        windows shift. Ready-mix supply tightens at peak season.
        The commercial concrete schedule is a function of all of
        those constraints, and a sub who hasn&rsquo;t built
        explicit absorption into their plan is a sub who will tell
        you mid-project that the pour has to push.
      </p>
      <p>
        This is how experienced Wasatch Front commercial subs
        plan around the variability instead of being broken by it.
      </p>

      <h2>The four constraints that drive the schedule</h2>

      <h3>1. Weather windows</h3>
      <p>
        Utah commercial pours need windows above freezing for
        setting and standard cure. Spring through fall is the
        primary pour window; winter pours need cold-weather
        precautions (insulated blankets, accelerator additives, hot
        water in the mix) that increase cost and reduce schedule
        flexibility. We carry a 4–7 day forecast buffer on every
        commercial pour and confirm the specific date 3–5 days out.
      </p>
      <p>
        Hot weather (forecast highs over 90°F) requires its own
        precautions: water-down on the subgrade pre-pour, cooling
        admixtures, immediate curing-blanket application. Hot pours
        in St. George summer are routine; we plan for them
        explicitly.
      </p>

      <h3>2. Inspection schedules</h3>
      <p>
        AHJ inspections are the most common schedule disruptor on
        commercial work. Foundation pre-pour inspections, ADA-ramp
        slope inspections, and final walkthroughs all sit on the
        critical path between forms and concrete arriving. Most
        Wasatch Front jurisdictions schedule inspections 24–72
        hours out; St. George and rural areas can run 5+ business
        days.
      </p>
      <p>
        We build inspection buffer into every commercial schedule
        — typically 2 business days between &ldquo;forms ready&rdquo;
        and &ldquo;ready-mix arrival.&rdquo; If the inspection
        delays beyond the buffer, we re-sequence rather than wait
        idle.
      </p>

      <h3>3. Tenant + construction access</h3>
      <p>
        Retail centers stay open during construction. Multi-family
        residential sites have residents using the property. Light
        industrial has shift schedules and equipment movement.
        Pour sequencing has to maintain access for whoever&rsquo;s
        there.
      </p>
      <p>
        Common sequencing patterns:
      </p>
      <ul>
        <li>
          <strong>Phased pours by section</strong> — pour half the
          parking lot Monday, the other half Wednesday. Customers
          park on the cured side during the wet pour.
        </li>
        <li>
          <strong>Overnight pours</strong> — for retail entry
          ramps and high-visibility public sidewalk work where
          daytime traffic can&rsquo;t be diverted. Cure happens
          overnight; opens to foot traffic Monday morning.
        </li>
        <li>
          <strong>Weekend pours</strong> — for office complexes
          and commercial sites that operate weekday-only.
        </li>
      </ul>

      <h3>4. Ready-mix availability</h3>
      <p>
        Peak-season ready-mix supply tightens. May–September on
        the Wasatch Front, ready-mix suppliers can be booked 2+
        weeks out for large pours. We hold standing relationships
        with multiple suppliers across the corridor so we&rsquo;re
        not dependent on a single source. Off-peak months have
        flexible supply but compressed daylight pour windows in
        winter.
      </p>

      <h2>How we sequence a typical commercial project</h2>
      <p>
        Take a 10,000 sq ft retail center parking lot replacement
        with ADA ramp upgrades. Multi-phase, tenants stay open.
        Typical sequence:
      </p>
      <ol>
        <li>
          <strong>Week -2</strong>: Permits filed, ready-mix
          ordered, tenant communications sent, signage staged.
          Inspector pre-walk if AHJ requires.
        </li>
        <li>
          <strong>Week -1</strong>: Demo begins, subgrade
          excavation, base aggregate and compaction. Forms set
          for first phase.
        </li>
        <li>
          <strong>Week 0, Mon</strong>: Pre-pour AHJ inspection on
          phase 1.
        </li>
        <li>
          <strong>Week 0, Tue–Wed</strong>: Phase 1 pour (north
          parking section, 4,000 sq ft). 7-day cure.
        </li>
        <li>
          <strong>Week 1</strong>: Phase 2 prep (south section).
          Phase 1 cures.
        </li>
        <li>
          <strong>Week 2, Mon</strong>: Phase 2 inspection. Phase
          1 walkable, customers park on it.
        </li>
        <li>
          <strong>Week 2, Tue–Wed</strong>: Phase 2 pour (south,
          4,000 sq ft).
        </li>
        <li>
          <strong>Week 3</strong>: ADA ramp work (overnight pours
          to keep entries open during business hours).
        </li>
        <li>
          <strong>Week 4</strong>: Final inspection, sealer
          (where spec'd), striping subcontractor.
        </li>
      </ol>
      <p>
        Total project time: ~5 weeks from demo start to finished
        striping. Pour days themselves: 4 days across the project.
        The other 25+ days are prep, cure, inspections, tenant
        access management, and float for variability.
      </p>

      <h2>Where projects actually slip</h2>
      <p>
        Three places we&rsquo;ve seen commercial projects go off
        schedule, ranked by frequency:
      </p>
      <ol>
        <li>
          <strong>Inspection delays</strong> — most common. AHJ
          schedules slip; we wait. Solution: build buffer into the
          schedule, re-sequence work to keep crew productive
          during waits.
        </li>
        <li>
          <strong>Weather windows that close</strong> — second.
          Forecast moves and the planned window evaporates.
          Solution: float pour dates within a week-long target
          rather than locking specific dates 4 weeks out.
        </li>
        <li>
          <strong>Late spec changes</strong> — third. GC or owner
          changes scope mid-project (different finish, additional
          ADA ramps, different rebar grid). Solution: documented
          change orders before any work happens; never absorb
          scope changes silently.
        </li>
      </ol>

      <h2>What to expect from a credible sub on scheduling</h2>
      <p>
        When you&rsquo;re evaluating commercial concrete subs, the
        scheduling answers tell you a lot about how the project
        will run:
      </p>
      <ul>
        <li>
          Credible subs talk in week-long pour windows, not specific
          dates 4+ weeks out.
        </li>
        <li>
          Credible subs name the inspection-buffer math
          explicitly: &ldquo;we build 2 business days between
          forms-ready and pour-ready.&rdquo;
        </li>
        <li>
          Credible subs can describe a phased-pour plan for sites
          that stay open. They don&rsquo;t say &ldquo;just close the
          lot for the day.&rdquo;
        </li>
        <li>
          Credible subs name multiple ready-mix suppliers
          they&rsquo;ve worked with. They don&rsquo;t say
          &ldquo;we just go through one supplier.&rdquo;
        </li>
      </ul>

      <p>
        For the broader sub-evaluation framework, see{" "}
        <Link href="/blog/evaluating-commercial-concrete-subs">
          evaluating commercial concrete subs
        </Link>
        . For the soil and frost-depth context that drives commercial
        prep timelines, see{" "}
        <Link href="/blog/utah-soil-conditions-commercial-foundations">
          Utah soil conditions and your commercial foundation
        </Link>
        . For our commercial track specifically, see{" "}
        <Link href="/commercial">
          our commercial silo page
        </Link>
        .
      </p>
    </Prose>
  );
}
