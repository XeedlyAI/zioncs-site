import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "how-to-vet-a-concrete-subcontractor",
  title: "How to Vet a Concrete Subcontractor: A Builder's 7-Question Test",
  metaTitle: "How to Vet a Concrete Subcontractor",
  metaDescription:
    "Seven questions builders should ask before signing a concrete sub. What to look for, what to walk away from, how to test reliability.",
  excerpt:
    "Seven questions to ask, three red flags to spot. The framework experienced GCs use before signing a flatwork sub on a multi-unit build.",
  authorSlug: "kevin",
  publishedAt: "2026-04-15",
  lastReviewedAt: "2026-05-04",
  readingTimeMinutes: 9,
  targetKeyword: "how to vet a concrete subcontractor",
  secondaryKeywords: [
    "choosing a concrete sub builder",
    "evaluating concrete subs",
    "builder concrete subcontractor checklist",
    "concrete sub questions to ask",
    "hiring concrete sub",
  ],
  siloIntent: "BUILDER",
  articleRole: "front-door",
  category: "guides",
  cityAnchor: null,
  heroImage: "/images/blog/img-20-vet-subcontractor.png",
  relatedSlugs: [
    "concrete-sub-reliability-vs-lowest-bid",
    "common-concrete-sub-failures",
    "pre-pour-checklist-for-builders",
  ],
  faqs: [
    {
      question: "How long does a typical sub vetting process take for a builder?",
      answer:
        "Allow 1–2 weeks if you're starting from cold. Reference checks alone take a week of phone tag. References + a site visit to a recent project + a sit-down with the sub's project manager is the minimum credible vet for a sub you're going to sign onto multi-unit work. Cold-bid awards without that work fail more often than they succeed.",
    },
    {
      question: "Can I just check Google reviews for a concrete sub?",
      answer:
        "Helpful but not enough. Google reviews skew toward residential homeowners — most builder relationships don't show up there. The signal you actually want is references from other GCs (not homeowners) about schedule discipline, callback rate, and how the sub handles change orders. Ask for two GC references when you're vetting.",
    },
    {
      question: "How many concrete subs should I bid?",
      answer:
        "Three for first-time relationships. Two if you have an incumbent and you're checking the market. One if it's a long-standing relationship and you trust the price. Bidding more than three burns your project manager's time and signals to subs that you're not a serious counterparty — the best subs stop responding to over-bid GCs.",
    },
    {
      question: "What's the warning sign that a sub is overcommitted?",
      answer:
        "The biggest tell: they hesitate when you ask them to commit to your pour window. Overcommitted subs hedge — 'we should be able to fit you in,' 'depends on how the other project goes.' Subs with bandwidth give you a clear yes/no with a date. The hedge means your project is going to slip when their bigger project does.",
    },
    {
      question: "Should I require a performance bond?",
      answer:
        "Project-dependent. For multi-unit builds where a sub's failure cascades into your closing schedule, yes — the bond is cheap insurance against a 6-figure schedule slip. For single-unit residential or small commercial, the bonding cost can outweigh the risk. Talk to your insurance broker about specific coverage that matches your project size.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        Every builder has a story about a concrete sub who didn&rsquo;t
        show up. Or showed up late. Or showed up but poured a slab that
        cracked badly enough to delay framing inspection. Or finished
        the job but left half the rebar exposed on the back walkway and
        won&rsquo;t come back to fix it.
      </p>
      <p>
        Most of those stories trace back to a vetting process that
        skipped steps. Bid awarded on price alone, no reference check,
        no site visit to a recent pour, no sit-down with the sub&rsquo;s
        project manager. The sub said yes. You said yes. And then the
        first hard week of the project, the sub showed you exactly
        what their actual capacity was.
      </p>
      <p>
        This is the seven-question framework that experienced GCs run
        through before signing a sub onto a multi-unit build. Less
        about checking boxes — more about getting honest signal on
        whether this sub will hold the schedule when things go
        sideways.
      </p>

      <h2>The seven questions</h2>

      <h3>1. Walk me through your last three projects in this scope.</h3>
      <p>
        Open-ended. You&rsquo;re looking for: <em>do they remember
        details</em> (good sign), <em>are the projects similar in scope
        to yours</em> (matters more than total project count), and{" "}
        <em>do they talk about what went wrong</em> (great sign — every
        real project has friction). A sub who only describes wins is
        either lying or hasn&rsquo;t been on enough real projects to
        know what wrong looks like.
      </p>

      <h3>2. What&rsquo;s your typical lead time during peak season?</h3>
      <p>
        Residential concrete subs in the Wasatch Front are 2–6 weeks
        out from quote acceptance during the spring-through-fall pour
        window. Subs claiming &ldquo;we can start tomorrow&rdquo; in
        peak season are either between projects (ask why) or no one
        books them (a problem). Subs claiming 4+ months out either are
        very good or are overcommitted and your project is going to
        slip.
      </p>

      <h3>3. Who&rsquo;s actually pouring my concrete?</h3>
      <p>
        Some subs run a sales operation and farm the pour out to
        whichever crew has bandwidth. Others run owner-operated with
        the same crew on every job. Both can produce good work, but
        the accountability and consistency profile is different. Ask
        directly: <em>will the people quoting this be on the site the
        day of the pour?</em> If no, ask who actually will be — and
        whether you can meet them.
      </p>

      <h3>4. How do you handle weather delays?</h3>
      <p>
        Utah weather is variable. Concrete pours need windows above
        freezing for setting and cure (or specialty cold-weather
        accommodations that cost more). The right answer is: <em>we
        confirm specific pour dates 3–5 days out from the forecast and
        carry insulated blankets and accelerator additives for marginal
        windows</em>. The wrong answer is &ldquo;we&rsquo;ll just push
        if we have to&rdquo; — that means your schedule is the
        sub&rsquo;s schedule shock absorber.
      </p>

      <h3>5. What&rsquo;s your callback rate, and how do you handle them?</h3>
      <p>
        Most subs don&rsquo;t track this number formally. The honest
        answer is &ldquo;we don&rsquo;t track a percentage but
        callbacks are rare and we come back fast when they happen.&rdquo;
        Press for specifics — <em>how soon do you respond to a callback
        request</em> and <em>do you charge for warranty work or absorb
        it?</em> A sub who hedges on warranty terms will hedge when
        you call them about a cracked apron at the 5-month mark.
      </p>

      <h3>6. What&rsquo;s your subgrade prep standard?</h3>
      <p>
        Most concrete failures are subgrade failures. The right answer
        involves: <em>excavation depth, plate compaction, gravel base
        per slab requirement, leveling tolerance, moisture
        management</em>. The wrong answer is <em>we just pour over
        whatever&rsquo;s there</em>. The lazier the answer, the more
        your closing inspections are going to surface settling cracks
        on driveways.
      </p>

      <h3>7. Can I see a project you completed 18+ months ago?</h3>
      <p>
        New work always looks great. The real test is what their work
        looks like after a winter or two. Walk a residential driveway
        the sub poured 2 years ago — look at the joints, look for
        spalling, look at how the surface is wearing. Concrete that
        looks great at 24 months from a sub on the Wasatch Front is
        evidence the sub knows what they&rsquo;re doing for the
        climate.
      </p>

      <h2>Three red flags to walk away from</h2>

      <h3>The bid 25%+ below comparable quotes</h3>
      <p>
        Concrete pricing has a real floor. A sub coming in 25% below
        the median is usually one of two things: they&rsquo;ve
        misunderstood your scope (and the scope creep will show up as
        change orders later), or they&rsquo;re cutting corners on
        prep, mix, or rebar. Either way, the apparent savings
        disappears within the first quarter and you&rsquo;re left with
        a contractor relationship you don&rsquo;t want to keep. See{" "}
        <Link href="/blog/concrete-sub-reliability-vs-lowest-bid">
          sub reliability vs the lowest bid
        </Link>{" "}
        for the full math.
      </p>

      <h3>Reluctance to provide GC references</h3>
      <p>
        Subs who can&rsquo;t produce two builder references in a
        24-hour window haven&rsquo;t worked with builders successfully
        — or have, but the GCs won&rsquo;t vouch. Either reading is
        bad. Residential homeowner reviews are not a substitute for GC
        references; the contractor relationship is fundamentally
        different.
      </p>

      <h3>Insistence on cash or unusual payment terms</h3>
      <p>
        Standard residential concrete is 10–25% deposit + balance on
        completion. Standard builder pricing is per draw with progress
        billing. A sub asking for 50%+ upfront on residential or
        large lump-sum payments outside your draw structure is
        signaling cash-flow problems. You don&rsquo;t want to inherit
        those.
      </p>

      <h2>What to do with the answers</h2>
      <p>
        Score the seven questions on a 1–3 scale. Anyone scoring 1 on
        more than two questions, drop. Anyone scoring 3 across the
        board with credible specifics is a real candidate. Then add the
        soft signal: did they take the time to answer thoughtfully, or
        did they rush through it? The willingness to invest 30 minutes
        in a vetting conversation is itself a signal about how
        they&rsquo;ll handle your project.
      </p>
      <p>
        For follow-up reading on specific failure modes to watch for
        during the pour itself, see{" "}
        <Link href="/blog/common-concrete-sub-failures">
          common concrete sub failures
        </Link>
        . For the day-of-pour checklist GCs use to verify the sub is
        ready, see{" "}
        <Link href="/blog/pre-pour-checklist-for-builders">
          the pre-pour checklist for builders
        </Link>
        . If you&rsquo;re evaluating us specifically as a sub, head
        over to{" "}
        <Link href="/builders">our builder track page</Link>.
      </p>
    </Prose>
  );
}
