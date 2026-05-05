import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "10-common-residential-concrete-problems",
  title: "10 Common Residential Concrete Problems (and How to Spot Them Early)",
  metaTitle: "10 Residential Concrete Problems",
  metaDescription:
    "From hairline cracks to sinking patios — the 10 most common concrete problems Utah homeowners face, and how to tell when each one means trouble.",
  excerpt:
    "From hairline cracks to sinking patios — what to watch for, what's normal, and when each one is telling you something serious.",
  authorSlug: "editorial",
  publishedAt: "2026-04-22",
  lastReviewedAt: "2026-05-04",
  readingTimeMinutes: 8,
  targetKeyword: "residential concrete problems",
  secondaryKeywords: [
    "common concrete problems homeowners",
    "concrete issues utah",
    "signs of concrete failure",
    "when to worry about concrete cracks",
    "concrete problems checklist",
  ],
  siloIntent: "RESIDENTIAL",
  articleRole: "magnetizer",
  category: "insights",
  cityAnchor: null,
  relatedSlugs: [
    "why-utah-concrete-cracks",
    "driveway-replacement-vs-repair",
    "residential-concrete-repair-utah",
  ],
  faqs: [
    {
      question: "Should I worry about every concrete crack?",
      answer:
        "No. Hairline shrinkage cracks under 1/8 inch wide and stable are normal — they're how concrete relieves the stress of curing. Working cracks (those that move with temperature) and structural cracks (1/4 inch wide or growing) deserve attention. Cracks with vertical displacement (one side higher than the other) are the ones to address quickly.",
    },
    {
      question: "Can concrete problems be fixed without replacement?",
      answer:
        "Often, yes. Surface cracks, joint failures, light spalling, and isolated settling can usually be repaired without full replacement. Widespread failures (map cracking, slab-wide spalling, multiple settled sections, structural cracks) are usually replacement-grade. The diagnosis matters because the cost difference is 10x or more.",
    },
    {
      question: "How quickly should I act on a concrete problem?",
      answer:
        "Depends on the problem. Trip hazards (vertical displacement at a joint or crack) are urgent — liability and safety. Spalling is fast-moving in winter — every freeze-thaw cycle takes more material. Hairline cracks are slow-moving and can wait until you're ready to address the whole project. We help triage during a free site walk.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        Most homeowners only look closely at their concrete twice — once
        when it&rsquo;s new, and once when something obvious has gone
        wrong. The years between are when small problems turn into
        expensive ones. This is the catalog of failures we see most
        often, what each one looks like, what it&rsquo;s telling you,
        and when it crosses from cosmetic into &ldquo;call someone.&rdquo;
      </p>

      <h2>1. Hairline shrinkage cracks</h2>
      <p>
        <strong>What it looks like:</strong> Thin random cracks under
        1/8 inch wide, often radiating from corners or along joints.
        Stable — they don&rsquo;t change much over time.
      </p>
      <p>
        <strong>What it means:</strong> Normal. Concrete shrinks 1–2%
        as it cures, and small cracks are how it relieves that stress.
        Almost every slab has them.
      </p>
      <p>
        <strong>When to act:</strong> Seal them when you reseal the
        slab — every 4–5 years for plain concrete, 2–3 for stamped.
        Otherwise, ignore.
      </p>

      <h2>2. Working cracks (1/8 to 1/4 inch)</h2>
      <p>
        <strong>What it looks like:</strong> Cracks that visibly open
        and close with the seasons — wider in cold weather, narrower
        in warm.
      </p>
      <p>
        <strong>What it means:</strong> The slab is moving with
        temperature, and the original control joints aren&rsquo;t
        where the actual stress wants to relieve. Annoying but rarely
        structural.
      </p>
      <p>
        <strong>When to act:</strong> Polyurethane crack sealant. Stays
        elastic, moves with the crack. Cheap, effective, lasts years.
      </p>

      <h2>3. Wide structural cracks (1/4 inch+)</h2>
      <p>
        <strong>What it looks like:</strong> Cracks wider than a
        quarter, often growing season-to-season. Sometimes with
        vertical displacement (one side higher than the other).
      </p>
      <p>
        <strong>What it means:</strong> Structural failure. Could be
        subgrade settling, inadequate reinforcement, or a slab that
        was poured wrong from the start.
      </p>
      <p>
        <strong>When to act:</strong> Get a professional assessment
        soon. Surface repair won&rsquo;t hold; the question is partial
        replacement vs full replacement.
      </p>

      <h2>4. Map cracking (alligatoring)</h2>
      <p>
        <strong>What it looks like:</strong> A network of cracks
        dividing the slab into roughly equal sections — looks like
        alligator skin or a dried lakebed.
      </p>
      <p>
        <strong>What it means:</strong> The slab has fundamental
        problems — bad mix, improper cure, inadequate base. Common on
        older driveways poured before air-entrainment requirements.
      </p>
      <p>
        <strong>When to act:</strong> Replacement-grade. Patching
        won&rsquo;t hold; the failure mode is slab-wide. Plan a
        replacement budget.
      </p>

      <h2>5. Spalling and surface scaling</h2>
      <p>
        <strong>What it looks like:</strong> Surface flaking off in
        thin plates or sheets, exposing aggregate underneath. Often
        starts at edges and joints.
      </p>
      <p>
        <strong>What it means:</strong> The surface paste has lost air
        entrainment and is failing under freeze-thaw. Common on
        concrete that wasn&rsquo;t air-entrained from the start, or
        that had heavy de-icing salt exposure.
      </p>
      <p>
        <strong>When to act:</strong> Localized spalling — patch.
        Slab-wide spalling — plan a replacement. Every winter without
        action means more material is gone.
      </p>

      <h2>6. Sunken or settling sections</h2>
      <p>
        <strong>What it looks like:</strong> A section of the slab is
        noticeably lower than the surrounding concrete, with a step
        or lip at the joint.
      </p>
      <p>
        <strong>What it means:</strong> Subgrade has settled under that
        section. The slab itself might be fine — the base under it
        moved.
      </p>
      <p>
        <strong>When to act:</strong> Vertical displacement is a trip
        hazard. Address it. Slabjacking/mudjacking can lift the
        section back to grade without tearing it out, if the slab is
        otherwise sound. Otherwise, saw-cut and replace the affected
        section.
      </p>

      <h2>7. Heaving (lifting at edges or center)</h2>
      <p>
        <strong>What it looks like:</strong> A section of slab is
        higher than surrounding concrete — usually at the center of a
        slab or along an edge.
      </p>
      <p>
        <strong>What it means:</strong> Frost heaving, expansive clay
        soil under the slab, or tree roots pushing up. Less common
        than settling but more disruptive when it happens.
      </p>
      <p>
        <strong>When to act:</strong> Diagnose the cause first. Frost
        heaving can self-correct in spring; soil and roots
        won&rsquo;t. Section replacement with proper subgrade prep is
        usually the durable answer.
      </p>

      <h2>8. Crumbling joints</h2>
      <p>
        <strong>What it looks like:</strong> Concrete edges along
        control joints or expansion joints crumbling away, with debris
        in the joint.
      </p>
      <p>
        <strong>What it means:</strong> Joint sealant has failed,
        water has gotten in, and freeze-thaw has done its work.
        Cosmetic at first, eventually structural if joint loses
        function.
      </p>
      <p>
        <strong>When to act:</strong> Reseal the joint. Old sealant
        out, fresh sealant in. Standard maintenance every 5–7 years
        prevents this from progressing.
      </p>

      <h2>9. Discoloration and staining</h2>
      <p>
        <strong>What it looks like:</strong> Permanent dark or light
        spots on the slab — oil, rust, mineral deposits, plant tannins,
        sun-faded sections of stamped concrete.
      </p>
      <p>
        <strong>What it means:</strong> Cosmetic. Doesn&rsquo;t affect
        structure. Some stains never come out completely.
      </p>
      <p>
        <strong>When to act:</strong> Power-wash and reseal — fresh
        sealer evens out faded color. For deep stains, professional
        concrete cleaning helps but rarely returns the slab to
        new-pour color.
      </p>

      <h2>10. Pop-outs (small craters)</h2>
      <p>
        <strong>What it looks like:</strong> Small craters or
        chip-outs on the surface, often round, exposing a particle of
        aggregate underneath.
      </p>
      <p>
        <strong>What it means:</strong> A piece of reactive aggregate
        in the original mix expanded and popped out. Cosmetic; rare
        in modern mixes; common on older slabs.
      </p>
      <p>
        <strong>When to act:</strong> Patch with concrete repair
        material if the pop-outs are extensive enough to bother you;
        otherwise leave alone.
      </p>

      <h2>The triage rule</h2>
      <p>
        Sort what you see by these three questions:
      </p>
      <ol>
        <li>
          <strong>Is anyone in danger?</strong> Trip hazards from
          displacement get fixed first, full stop.
        </li>
        <li>
          <strong>Is it getting worse?</strong> Fast-moving failures
          (active spalling, growing cracks) need attention this
          season. Slow-moving (hairline cracks, discoloration) can
          wait.
        </li>
        <li>
          <strong>Is it structural or cosmetic?</strong> Structural
          gets professional assessment. Cosmetic can usually wait
          until you&rsquo;re ready to address the whole slab.
        </li>
      </ol>

      <p>
        For the underlying climate context, see{" "}
        <Link href="/blog/why-utah-concrete-cracks">
          why Utah concrete cracks
        </Link>
        . For the repair-vs-replace decision, see{" "}
        <Link href="/blog/driveway-replacement-vs-repair">
          driveway replacement vs repair
        </Link>
        . When you&rsquo;re ready to act, our{" "}
        <Link href="/services/residential-concrete-repair-utah">
          residential concrete repair service
        </Link>{" "}
        covers most of this list.
      </p>
    </Prose>
  );
}
