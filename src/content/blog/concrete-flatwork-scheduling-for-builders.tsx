import Link from "next/link";
import { Prose } from "@/components/blog/Prose";
import type { PostMeta } from "@/types/post";

export const meta: PostMeta = {
  slug: "concrete-flatwork-scheduling-for-builders",
  title: "Concrete Flatwork Scheduling for Spec Builders",
  metaTitle: "Concrete Flatwork Scheduling for Builders",
  metaDescription:
    "How a reliable flatwork sub sequences aprons, walks, and patios around your build schedule and Utah weather — without becoming your critical-path risk.",
  excerpt:
    "Where flatwork actually sits in your build sequence, how weather windows work in Utah, and the scheduling commitments to get in writing.",
  authorSlug: "josh",
  publishedAt: "2026-05-22",
  lastReviewedAt: "2026-07-03",
  readingTimeMinutes: 8,
  targetKeyword: "concrete flatwork scheduling builders",
  secondaryKeywords: [
    "spec home concrete schedule",
    "builder flatwork timeline",
    "sequencing concrete on a build",
    "flatwork sub scheduling",
    "concrete schedule spec build",
  ],
  siloIntent: "BUILDER",
  articleRole: "process-guide",
  category: "guides",
  cityAnchor: null,
  heroImage: "/images/blog/img-46-flatwork-scheduling.jpg",
  relatedSlugs: [
    "pre-pour-checklist-for-builders",
    "how-to-vet-a-concrete-subcontractor",
    "commercial-concrete-pour-scheduling",
  ],
  faqs: [
    {
      question: "How much lead time should I give a flatwork sub on a spec build?",
      answer:
        "Book the slot when framing starts, not when you need concrete. During the Wasatch Front pour season (roughly April through October), reliable flatwork subs run 2–6 weeks out. A sub booked at framing start can hold a float window and confirm exact dates 3–5 days out from the forecast. A sub called the week you need them takes whatever weather window is left.",
    },
    {
      question: "Can flatwork pour before final grade is done?",
      answer:
        "It shouldn't. Flatwork poured before final grade forces the grading crew to work around finished slabs — and any regrade that changes drainage around a poured walk or patio creates ponding you'll hear about at the eleven-month walkthrough. The clean sequence is: backfill settled, final grade shot, then flatwork. Exceptions exist (garage slabs, porches) but exterior walks and drives wait.",
    },
    {
      question: "What's a reasonable weather-delay policy in a flatwork sub's schedule?",
      answer:
        "Confirmed pour dates 3–5 days out from the forecast, with a stated re-slot commitment if the window closes — typically within 5–7 working days, not 'whenever we can fit you back in.' Subs pouring for multiple builders will re-slot the GC with the clearest schedule communication first. Get the re-slot commitment in writing before the season starts.",
    },
    {
      question: "Should driveway and walks pour in one mobilization or two?",
      answer:
        "One, if the site allows it. Every extra mobilization is a scheduling dependency and a cost the sub carries somewhere in the number. The usual reason for a forced split is access — the drive has to stay open for other trades, or landscaping isn't far enough along for the back patio. If you can sequence trades so flatwork pours everything in one visit, do it.",
    },
    {
      question: "How late in the year can exterior flatwork pour in Utah?",
      answer:
        "Standard pours want 48 hours of lows above 40°F after placement. Along the Wasatch Front that gets unreliable by late October and mostly closes November through February without cold-weather measures — blankets, accelerator, sometimes heated enclosures — which add cost and risk. If your closing is in December, the flatwork needed to close should have poured in October. Plan the calendar backward from closing.",
    },
  ],
};

export default function Article() {
  return (
    <Prose>
      <p>
        Flatwork is rarely on a spec builder&rsquo;s critical path — until
        it is. The driveway apron the city wants before final inspection.
        The front walk the appraiser flags. The patio the buyer&rsquo;s
        contract says exists. Concrete that should have been a quiet
        two-day line item becomes the thing holding up a closing, usually
        because it was scheduled as an afterthought and the weather window
        closed.
      </p>
      <p>
        This is how flatwork scheduling actually works from the
        sub&rsquo;s side — where it sits in the sequence, what the Utah
        calendar does to it, and the specific commitments that separate a
        sub who holds your schedule from one who becomes your schedule
        risk.
      </p>

      <h2>Where flatwork sits in the build sequence</h2>
      <p>
        On a typical spec build, exterior flatwork — driveway, apron,
        walks, porch caps, patio — lands late: after backfill has settled,
        after final grade, usually alongside or just ahead of landscaping.
        That position is what makes it dangerous. By the time flatwork
        pours, the closing date is set, the buyer may be under contract,
        and there&rsquo;s no float left to absorb a slip.
      </p>

      <h3>What has to be done before we can pour</h3>
      <p>
        A flatwork sub can&rsquo;t start until the site is actually ready,
        and &ldquo;ready&rdquo; means more than the lot looking flat.
        Backfill against the foundation needs time to settle or mechanical
        compaction — flatwork over fresh, uncompacted backfill is the
        single most common cause of settled, cracked walks at the one-year
        mark. Final grade needs to be shot so slab elevations and drainage
        slopes are real numbers, not guesses. Utilities crossing under
        future slabs need to be in, inspected, and backfilled. And other
        trades need to be out of the pour area — a framer&rsquo;s dumpster
        sitting on the driveway subgrade is a mobilization wasted.
      </p>

      <h3>Two mobilizations is the honest default</h3>
      <p>
        Most builds want the garage slab and porches early (framing and
        stucco need them) and the exterior flatwork late. That&rsquo;s two
        mobilizations, and a sub who quotes it as one is either planning
        to pour your exterior work too early or hiding a remobilization
        charge for later. Ask directly how many mobilizations the number
        includes and what triggers an extra one. The answer tells you a
        lot about how the sub thinks about your schedule.
      </p>

      <h2>The Utah weather calendar</h2>
      <p>
        The Wasatch Front pour season runs roughly April through October.
        Inside that window, scheduling is about lead time and sequencing.
        Outside it, everything gets conditional.
      </p>
      <p>
        Standard exterior pours want 48 hours of lows above 40°F after
        placement. In spring and fall, that means pour dates confirm 3–5
        days out from the forecast, not weeks in advance — any sub
        promising a firm November 12 pour date in September is promising
        something the weather hasn&rsquo;t agreed to. Cold-weather pours
        are possible with blankets, accelerator, and sometimes heated
        enclosures, but they cost more, carry more risk, and should be a
        contingency plan, not the plan.
      </p>
      <p>
        The practical rule: work backward from closing. A December closing
        means the flatwork required for certificate of occupancy pours by
        mid-October, with the back half of October as float. Builders who
        treat flatwork as a &ldquo;whenever landscaping happens&rdquo;
        item in the fall are the ones buying heated enclosures in
        December.
      </p>

      <h2>How a reliable sub runs the schedule</h2>
      <p>
        From our side of the relationship, the scheduling machinery looks
        like this — and it&rsquo;s worth knowing so you can tell whether
        your sub has machinery at all.
      </p>

      <h3>Booking at framing start</h3>
      <p>
        The slot gets booked when framing starts, sized as a float window
        (&ldquo;week of&rdquo;), not a hard date. That gives the sub a
        real position in the queue and gives you the right to a firm date
        as the window approaches. Calling a sub two weeks before you need
        concrete, in June, gets you whatever&rsquo;s left — which is
        usually the crew&rsquo;s worst week and the forecast&rsquo;s worst
        window.
      </p>

      <h3>Site-readiness confirmation before mobilization</h3>
      <p>
        A day or two before mobilizing, the sub should confirm the site is
        actually pour-ready — grade, access, backfill, utilities. Subs who
        skip this show up, find a dumpster on the subgrade, and either
        pour around problems or burn the mobilization. Either outcome
        costs you. The confirmation call is a 10-minute habit that
        prevents most of it; the fuller version is the{" "}
        <Link href="/blog/pre-pour-checklist-for-builders">
          pre-pour checklist
        </Link>
        .
      </p>

      <h3>Weather calls made early and communicated</h3>
      <p>
        When a window closes, the call should come to you 48–72 hours out,
        with a re-slot date attached — not a morning-of no-show and not a
        vague &ldquo;we&rsquo;ll get back when it warms up.&rdquo; Ask any
        sub you&rsquo;re vetting how they handled their last three weather
        delays. Specific answers with dates mean there&rsquo;s a system.
        Generalities mean your schedule absorbs their chaos.
      </p>

      <h2>The failure modes that blow up builder schedules</h2>
      <p>
        The flatwork slips we see cost builders closings, and almost all
        of them trace to one of four causes. The sub was overcommitted and
        your project was the shock absorber when a bigger pour ran long.
        The site wasn&rsquo;t ready and nobody verified it, so the
        mobilization burned and the crew moved to the next job. The
        weather window closed with no re-slot commitment, so the project
        went to the back of the queue. Or the scope was fuzzy — the bid
        said &ldquo;flatwork&rdquo; and the sub didn&rsquo;t know the city
        required the apron before final, so it wasn&rsquo;t sequenced.
      </p>
      <p>
        Every one of those is preventable at contract time, not pour time.
        Which is the point of the next section.
      </p>

      <h2>What to put in the scheduling agreement</h2>
      <p>
        Four things, in writing, before the season starts. First, the
        booking trigger — flatwork slot reserved at framing start, firm
        date confirmed 3–5 days out. Second, mobilization count — how many
        visits the price includes and what an extra one costs your scope,
        so nobody discovers it in October. Third, the weather re-slot
        commitment — a delayed pour re-slots within a stated number of
        working days. Fourth, the closing-critical list — which pieces of
        flatwork gate certificate of occupancy or the buyer&rsquo;s
        contract, named explicitly, so the sub sequences them first when a
        window gets tight.
      </p>
      <p>
        None of this is exotic. A sub who works with builders regularly
        will agree to all four without friction — and a sub who
        won&rsquo;t is telling you where you sit in their queue.
      </p>

      <h2>Where to go from here</h2>
      <p>
        Scheduling discipline is one axis of picking a sub; the fuller
        framework is in{" "}
        <Link href="/blog/how-to-vet-a-concrete-subcontractor">
          how to vet a concrete subcontractor
        </Link>
        . For what to verify on the ground before each pour, use{" "}
        <Link href="/blog/pre-pour-checklist-for-builders">
          the pre-pour checklist for builders
        </Link>
        , and for the larger-project version of this scheduling problem,
        see{" "}
        <Link href="/blog/commercial-concrete-pour-scheduling">
          commercial concrete pour scheduling
        </Link>
        . If you&rsquo;re lining up a flatwork sub for the coming season,
        our builder track starts at{" "}
        <Link href="/builders">the builders page</Link> — or go straight
        to{" "}
        <Link href="/book/discovery-call-builder">
          booking a discovery call
        </Link>
        .
      </p>
    </Prose>
  );
}
