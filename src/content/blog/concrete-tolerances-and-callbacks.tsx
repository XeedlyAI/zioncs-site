import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "concrete-tolerances-and-callbacks",
  title: "Concrete Tolerances and Callbacks: What Builders Should Spec",
  metaTitle: "Concrete Tolerances & Callbacks",
  metaDescription:
    "The flatness, finish, and joint tolerances that prevent concrete callbacks — what to write into the scope so defects are the sub's problem, not yours.",
  excerpt:
    "The callbacks builders actually see at closing, the tolerances that would have prevented them, and the scope language that assigns the fix.",
  authorSlug: "kevin",
  publishedAt: "2026-06-18",
  lastReviewedAt: "2026-07-03",
  readingTimeMinutes: 8,
  targetKeyword: "concrete flatwork tolerances",
  secondaryKeywords: [
    "concrete callback issues",
    "flatness tolerance concrete",
    "concrete finish defects builder",
    "concrete warranty scope builder",
    "flatwork punch list",
  ],
  siloIntent: "BUILDER",
  articleRole: "diagnostic",
  category: "insights",
  cityAnchor: null,
  relatedSlugs: [
    "common-concrete-sub-failures",
    "pre-pour-checklist-for-builders",
    "how-to-read-a-concrete-sub-bid",
  ],
  faqs: [
    {
      question: "What flatness tolerance is reasonable for residential exterior flatwork?",
      answer:
        "A 1/4-inch gap under a 10-foot straightedge is the workable standard for drives, walks, and patios — measurable on site with a tool every crew owns. FF-number specs belong on commercial floors, not a spec-home driveway; write a tolerance your super can actually check at the walkthrough, or it will never be checked.",
    },
    {
      question: "Is cracking automatically a defect?",
      answer:
        "No. Concrete cracks — the jointing plan exists to decide where. The defensible line: hairline cracks within panels under about 1/16 inch with no vertical displacement are normal; cracks that are wider, that displace vertically, or that run through multiple panels ignoring the joints indicate a subgrade or jointing failure and belong on the sub's warranty. Write that distinction into the scope so nobody argues it at month eleven.",
    },
    {
      question: "What counts as a trip hazard on flatwork?",
      answer:
        "The common enforcement threshold is 1/4 inch of vertical displacement at any joint or crack in a walking surface — many Utah municipalities use it for public sidewalks, and buyers' home inspectors flag it on private walks too. It's a clean, measurable number to put in your scope: any edge over 1/4 inch within the warranty period gets ground or the panel gets replaced, at the sub's cost.",
    },
    {
      question: "How long should a flatwork warranty run, and what should it cover?",
      answer:
        "Match it to your builder warranty obligation — the standard structural coverage window a buyer holds you to, which is at least one year on flatwork-type defects and often longer. Coverage should name the defect classes by measurement: cracking beyond the stated tolerance, vertical displacement, ponding beyond tolerance, and surface failure like scaling or spalling. A warranty that just says 'defects in workmanship' guarantees an argument, not a fix.",
    },
    {
      question: "When is ponding water on a slab the sub's problem?",
      answer:
        "When the scope says so. A workable spec: no standing water deeper than 1/4 inch remaining 24 hours after wetting, on slabs poured to the specified slope. Check it with a hose at the pre-closing walk, not after the buyer's first storm. The caveat: if grading changed after the pour and now drains onto the slab, that's a sequencing problem — which is why flatwork pours after final grade.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        Concrete callbacks have a pattern: they surface at the
        buyer&rsquo;s eleven-month walkthrough, they&rsquo;re
        judgment calls nobody wrote down, and the sub who poured the work
        is now mid-season on other projects with no contractual reason to
        come back. The builder eats the fix — not because the work was
        defensible, but because the scope never defined what a defect was.
      </p>
      <p>
        The fix is boring and happens at contract time: write measurable
        tolerances into the flatwork scope, tie the warranty to them, and
        check them once before closing. Here&rsquo;s what the callbacks
        actually look like, the numbers that prevent them, and the scope
        language that puts the comeback on the sub.
      </p>

      <h2>The callbacks builders actually see</h2>
      <p>
        Five defect classes account for nearly all flatwork callbacks on
        residential builds. Cracking that ignores the joints — random
        cracks through panel fields, usually a subgrade or jointing
        failure, occasionally a curing one. Vertical displacement —
        settled panels and heaved edges that read as trip hazards to a
        home inspector. Ponding — water standing on walks and patios
        because slope was eyeballed instead of shot. Surface failure —
        scaling and spalling after the first winter, the signature of a
        weak surface (over-finished, under-aired, or sealed too late)
        meeting Utah freeze-thaw and de-icer. And finish inconsistency —
        color and texture that changes mid-slab, usually a mix or
        finishing-timing problem that buyers read as a flaw even when
        it&rsquo;s cosmetic.
      </p>
      <p>
        Notice what&rsquo;s not on the list: hairline cracks within
        panels, minor color variation between separate pours, surface
        crazing. Those are concrete being concrete. The scope&rsquo;s job
        is to separate the two lists with numbers, because at month
        eleven, adjectives are worthless.
      </p>

      <h2>The tolerances worth writing down</h2>

      <h3>Flatness</h3>
      <p>
        For exterior residential flatwork, spec a maximum 1/4-inch gap
        under a 10-foot straightedge. Skip FF numbers — they&rsquo;re for
        measured commercial floors, and a tolerance your superintendent
        can&rsquo;t verify with a tool on the truck is a tolerance that
        will never be enforced. The straightedge test takes minutes per
        slab at the walkthrough.
      </p>

      <h3>Cracking</h3>
      <p>
        Define the boundary explicitly: hairline cracks under roughly
        1/16 inch, within panels, with no vertical displacement — normal,
        not warrantable. Cracks wider than that, cracks with displacement,
        or cracking that runs across joints through multiple panels —
        defect, sub&rsquo;s warranty. Pair it with a jointing spec
        (control joints cut to a quarter of slab depth, spacing per the
        plan on the bid), because the jointing plan is what makes the
        cracking clause enforceable. A sub who never cut joints to depth
        doesn&rsquo;t get to call the resulting random crack
        &ldquo;normal.&rdquo;
      </p>

      <h3>Vertical displacement</h3>
      <p>
        Maximum 1/4 inch at any joint or crack in a walking surface —
        the same threshold many municipalities use for public sidewalk
        enforcement, and the number buyers&rsquo; inspectors carry in
        their heads. Anything over it within the warranty period gets
        ground flush or the panel replaced, at the sub&rsquo;s election
        and cost.
      </p>

      <h3>Slope and drainage</h3>
      <p>
        Positive slope away from the structure at 1/8 to 1/4 inch per
        foot, and a performance test to back it: no standing water deeper
        than 1/4 inch remaining 24 hours after wetting. The hose test at
        the pre-closing walk settles in ten minutes what would otherwise
        be a spring argument about whose fault the puddle is.
      </p>

      <h3>Surface and finish</h3>
      <p>
        Finish type stated per surface, uniform within a pour. For the
        freeze-thaw side, the protection is upstream in the mix spec —
        4–7% air entrainment for exterior work — so the tolerance clause
        here is simple: scaling or spalling that exposes aggregate within
        the warranty period is a defect. If the air was in the mix and
        the cure was run right, the sub carries that clause without
        flinching. If either was skipped, this is the clause that finds
        it.
      </p>

      <h2>Making defects the sub&rsquo;s problem</h2>
      <p>
        Tolerances only shift risk if three more pieces exist. First, the
        warranty binds to the numbers — coverage defined as
        &ldquo;failure to meet the tolerances in the scope,&rdquo; not
        &ldquo;defects in workmanship,&rdquo; running at least as long as
        your own flatwork obligation to the buyer. Second, response terms
        are stated — a warranty claim gets a site visit within a defined
        number of working days and a scheduled fix, so a legitimate
        callback can&rsquo;t die in a sub&rsquo;s voicemail through pour
        season. Third, somebody actually measures — a 30-minute flatwork
        walk before closing with the straightedge, a level, and a hose.
        Defects found then are punch-list items the sub fixes on normal
        scheduling. The same defects found by the buyer at month eleven
        are warranty claims with an angry homeowner attached and a
        remobilization nobody budgeted.
      </p>
      <p>
        That walkthrough is the highest-leverage half hour in this whole
        system. Most of what it catches — ponding, high joints, missed
        joint depth — is cheap to fix before landscaping and closing, and
        expensive after.
      </p>

      <h2>The honest caveat: tolerances don&rsquo;t fix subgrade</h2>
      <p>
        Scope language assigns the cost of failure; it doesn&rsquo;t
        prevent it. A slab over uncompacted backfill will settle no
        matter what the contract says, and winning the warranty argument
        still costs you a torn-up walkway at a finished, occupied home.
        The prevention lives upstream — in the prep spec on the bid and
        in verification at pour time. Tolerances are the backstop.
        They&rsquo;re also, quietly, a vetting instrument: subs who do
        the prep right accept measurable tolerances without much
        negotiation, because they don&rsquo;t expect to pay on them. Subs
        who push back hard on a straightedge number are telling you what
        they know about their own subgrade work.
      </p>

      <h2>Where to go from here</h2>
      <p>
        The failure modes these tolerances catch — and their upstream
        causes — are cataloged in{" "}
        <Link href="/blog/common-concrete-sub-failures">
          common concrete sub failures
        </Link>
        . Prevention at pour time is{" "}
        <Link href="/blog/pre-pour-checklist-for-builders">
          the pre-pour checklist for builders
        </Link>
        , and catching the thin scope before you sign it is{" "}
        <Link href="/blog/how-to-read-a-concrete-sub-bid">
          how to read a concrete sub bid
        </Link>
        . If you want a flatwork sub who&rsquo;ll put these numbers in
        the scope unprompted, start at{" "}
        <Link href="/builders">the builders page</Link> or{" "}
        <Link href="/book/discovery-call-builder">
          book a discovery call
        </Link>
        .
      </p>
    </Prose>
  );
}
