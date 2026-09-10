import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "pre-pour-checklist-for-builders",
  title:
    "The Pre-Pour Checklist: What Builders Should Verify Before Concrete Day",
  metaTitle: "Pre-Pour Checklist for Builders",
  metaDescription:
    "Twelve items every builder should verify before the concrete truck shows up. Subgrade, forms, reinforcement, weather, and the sub-side checks too.",
  excerpt:
    "Twelve items to verify before the truck arrives. The checklist that prevents most concrete callbacks — used at the pour, not after.",
  authorSlug: "josh",
  publishedAt: "2026-04-04",
  lastReviewedAt: "2026-05-04",
  readingTimeMinutes: 10,
  targetKeyword: "concrete pre pour checklist builders",
  secondaryKeywords: [
    "concrete pour preparation",
    "builder concrete checklist",
    "before concrete pour",
    "concrete pour readiness",
    "residential concrete pour prep",
  ],
  siloIntent: "BUILDER",
  articleRole: "process-guide",
  category: "guides",
  cityAnchor: null,
  heroImage: "/images/blog/img-23-pre-pour-checklist.png",
  relatedSlugs: [
    "how-to-vet-a-concrete-subcontractor",
    "common-concrete-sub-failures",
    "concrete-sub-reliability-vs-lowest-bid",
  ],
  faqs: [
    {
      question: "How long before pour day should the checklist be reviewed?",
      answer:
        "Three days minimum. That's enough time to fix anything that's missing without rescheduling the ready-mix delivery. Same-day checklist runs catch problems too late — the truck is already on the way and any fix means delaying the pour.",
    },
    {
      question: "Should the GC or the concrete sub run the checklist?",
      answer:
        "Both, separately. The sub should self-check the day before pour as part of their site-readiness verification. The GC's site superintendent should walk the same checklist independently — different eyes catch different issues. Reconcile any discrepancies before the truck arrives.",
    },
    {
      question: "What's the single most-skipped item on the list?",
      answer:
        "Verifying the mix ticket against the spec when each truck arrives. The first truck's ticket gets reviewed; trucks 2 and 3 of a multi-truck pour often go unverified. Inconsistent mix between trucks creates color and density variations across a single slab. 30 seconds per ticket prevents the issue.",
    },
    {
      question: "How does weather change the checklist?",
      answer:
        "Cold-weather pours (forecast lows under 40°F within 48 hours) add insulated blankets and accelerator additive verification. Hot-weather pours (highs over 90°F) add water-spray-down + curing-blanket-on-set verification. The base 12 items don't change — they're additions for marginal weather windows.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        Most concrete callbacks on builder projects trace back to
        something that wasn&rsquo;t verified before the truck
        arrived. Subgrade not fully compacted. Mix delivered
        different from spec. Joints planned wrong. Forms not square.
        Each problem is cheap to catch in advance and expensive to
        catch after — once concrete is in the form, the failure is
        baked in.
      </p>
      <p>
        This is the 12-item pre-pour checklist that experienced
        Wasatch Front builders run before every residential pour.
        Designed to be walked in 30 minutes by the GC&rsquo;s site
        superintendent, with the sub running the same list
        independently the day before. Reconcile any discrepancies
        before pour day.
      </p>

      <h2>The 12 items</h2>

      <h3>1. Subgrade depth and material</h3>
      <p>
        Excavation depth matches spec (typically 6–8 inches below
        finish slab grade for a 4-inch residential pour with a
        2–4 inch base). Base material is clean compacted gravel,
        not native soil. No clay pockets, no fill that
        wasn&rsquo;t lifted and compacted.
      </p>
      <p>
        <strong>Verify:</strong> walk the subgrade with a steel rod
        — should resist penetration evenly. Soft spots indicate
        inadequate compaction or buried organic material.
      </p>

      <h3>2. Compaction documentation</h3>
      <p>
        Plate compactor passes documented by the sub. For
        residential pours, minimum 3 passes per zone with the
        compactor running 8–15 minutes per pass depending on base
        depth.
      </p>
      <p>
        <strong>Verify:</strong> sub should have a compaction log
        or photos showing the compactor in operation. If the only
        evidence is &ldquo;we did it,&rdquo; that&rsquo;s
        insufficient documentation.
      </p>

      <h3>3. Forms set true and braced</h3>
      <p>
        Forms square (90° corners measured with a framing square
        or 3-4-5 method on long runs), level, plumb. Bracing
        adequate for the pour pressure — driveway forms need
        external stakes every 4 feet minimum on long runs.
      </p>
      <p>
        <strong>Verify:</strong> walk every form, push lightly on
        each section. Movement greater than 1/4 inch under hand
        pressure means the bracing won&rsquo;t hold pour pressure.
      </p>

      <h3>4. Slope and drainage planned</h3>
      <p>
        Driveway forms should slope 1/8 to 1/4 inch per foot away
        from the house for drainage. Patios same. Swales and
        positive grade away from foundation walls verified.
      </p>
      <p>
        <strong>Verify:</strong> 4-foot digital level on every
        major run. Slope inconsistencies of more than 1/8 inch
        across a single run will pool water in winter and
        accelerate freeze-thaw damage.
      </p>

      <h3>5. Reinforcement: rebar grid and chair height</h3>
      <p>
        Rebar grid sized to spec (#3 at 18 inches on center for
        residential standard, #4 at 16 inches for heavier loads),
        tied at intersections, and lifted to mid-slab depth on
        chairs. Rebar lying on the subgrade is structurally
        useless.
      </p>
      <p>
        <strong>Verify:</strong> walk the grid, push lightly on
        the bars — should rest on chairs above the subgrade.
        Spacing should be consistent within ±1 inch. Tie wire at
        every intersection on residential.
      </p>

      <h3>6. Embeds and inserts placed</h3>
      <p>
        Anchor bolts, dowels, sleeves, drains, conduit
        penetrations. All embeds for downstream trades (electrical
        for outdoor outlets, plumbing for irrigation, anchor bolts
        for railings or fences) staged and located.
      </p>
      <p>
        <strong>Verify:</strong> the sub should have a marked-up
        site plan showing every embed location. Walk the plan,
        check each embed. Missing embeds cost real money to
        retrofit after pour.
      </p>

      <h3>7. ADA-ramp slope (if applicable)</h3>
      <p>
        Ramp running slope ≤ 8.33% (1:12), cross slope ≤ 2%,
        landing slopes ≤ 2% in any direction. Detectable warning
        surface (truncated dome panels) staged for installation
        within 1/8 inch of grade.
      </p>
      <p>
        <strong>Verify:</strong> 4-foot digital level on every
        ramp face. Inspector won&rsquo;t pass a ramp at 8.5%; the
        retrofit cost is full replacement.
      </p>

      <h3>8. Mix specification confirmed</h3>
      <p>
        Concrete mix specified in writing to the ready-mix
        supplier — PSI (4,000 standard residential, 4,500–5,000
        commercial), air entrainment percentage (4–7% for Utah
        exterior), maximum aggregate size, slump target. Order
        confirmed against spec the day before.
      </p>
      <p>
        <strong>Verify:</strong> photo of the order confirmation
        from the supplier. Spec should match the project documents
        exactly.
      </p>

      <h3>9. Truck schedule and pour rate</h3>
      <p>
        Multi-truck pours need scheduled arrival times spaced so
        no truck waits more than 30 minutes for the previous
        truck to discharge. Concrete that sits in the truck longer
        than 90 minutes from batch time loses workability and is
        more likely to crack later.
      </p>
      <p>
        <strong>Verify:</strong> truck schedule from the ready-mix
        supplier. First truck batch time and arrival time logged.
        Last truck arrival should be within 60 minutes of pour
        start.
      </p>

      <h3>10. Weather window confirmed</h3>
      <p>
        Forecast lows above 40°F for 48 hours post-pour for
        standard pours. Forecast highs below 90°F for the pour
        day. No rain forecast for the 12 hours during and after
        pour. Wind under 15 mph (high wind accelerates surface
        moisture loss and causes plastic shrinkage cracks).
      </p>
      <p>
        <strong>Verify:</strong> forecast pulled the morning of
        pour day, not from a 5-day-out forecast. Marginal
        forecasts mean cold-weather precautions (insulated
        blankets, accelerator) or hot-weather precautions
        (water-down, curing blankets).
      </p>

      <h3>11. Tools and crew capacity</h3>
      <p>
        Crew size matches the pour size — typical residential pour
        of 5–15 cubic yards needs 4–6 workers actively. Floats,
        trowels, edgers, jointing tools, brooms, sealer (if
        same-day) all on site.
      </p>
      <p>
        <strong>Verify:</strong> count the crew at start of pour.
        Light crew leads to delayed finishing, which leads to
        cold joints and surface defects.
      </p>

      <h3>12. Cure plan documented</h3>
      <p>
        Cure schedule documented: walkable target (typically 24
        hours), driveable target (7 days for cars, 10–14 for
        trucks), full strength (28 days). Curing method specified
        — wet cure, curing blankets, or curing compound. Sealer
        application time scheduled if applicable (typically 7+
        days post-pour for stamped concrete).
      </p>
      <p>
        <strong>Verify:</strong> cure schedule in writing. New
        homeowners need to know when they can drive on the slab
        — providing a written schedule prevents premature loading
        damage.
      </p>

      <h2>How to use this checklist</h2>
      <p>
        Walk it the day before pour. The sub walks it independently
        as part of their site-readiness self-check. Reconcile any
        discrepancies the morning of pour, before the first truck
        arrives. Items 1–7 should be verified before forms close;
        items 8–12 should be verified the morning of pour day.
      </p>
      <p>
        Reasonable subs welcome a builder running this checklist —
        it&rsquo;s a sign you&rsquo;re a serious counterparty who
        cares about getting the work right. Subs who push back on
        verification are usually the ones whose work fails the
        checklist.
      </p>
      <p>
        For the failure modes this checklist prevents, see{" "}
        <Link href="/blog/common-concrete-sub-failures">
          common concrete sub failures
        </Link>
        . For the upstream sub-vetting framework that filters out
        subs likely to fail this checklist, see{" "}
        <Link href="/blog/how-to-vet-a-concrete-subcontractor">
          how to vet a concrete subcontractor
        </Link>
        . If you&rsquo;re evaluating us specifically as a sub,
        head to{" "}
        <Link href="/builders">our builder track page</Link>{" "}
        — we welcome the verification.
      </p>
    </Prose>
  );
}
