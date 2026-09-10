import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/pages/PageHero";
import { FIRM_FACTS } from "@/lib/firm-facts";
import { CONTACT } from "@/lib/contact";
import { breadcrumbListSchema } from "@/lib/structured-data";

const PAGE_URL = "https://zioncs.com/about";

export const metadata: Metadata = {
  title: "About — Zion Concrete Specialists",
  description:
    "Started in 2016 as a Sandy, Utah pool-deck crew. 9+ years in, 200+ projects across the Wasatch Front and St. George. Owned and run by Kevin Handrin.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "About Zion Concrete Specialists",
    description:
      "Utah's flatwork crew — show up on time, keep the worksite clean, get the job done right.",
    url: PAGE_URL,
    type: "website",
  },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "About" },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "About", url: PAGE_URL },
]);

const VALUES = [
  {
    eyebrow: "01 / SHOW UP ON TIME",
    title: "Schedules are a promise.",
    body: "Crew arrives on the day, at the hour, with the equipment we said. No phone-tag, no day-of rescheduling. The single most-cited reason we get invited to the next project.",
  },
  {
    eyebrow: "02 / KEEP THE WORKSITE CLEAN",
    title: "Cleanup isn't a phase.",
    body: "Concrete jobs make a mess. We sweep, organize, and walk the site at end-of-day every day. By the time the pour cures, the area looks like it did before we got there — minus the failing concrete.",
  },
  {
    eyebrow: "03 / GET THE JOB DONE RIGHT",
    title: "Subgrade prep is non-negotiable.",
    body: "Most concrete failures are subgrade failures. We compact, level, and base-prep before every pour. The 30 minutes of extra work prevents the 5 years of cracking that follows skipped prep.",
  },
];

const STATS = [
  { value: FIRM_FACTS.yearsInBusiness, label: "YEARS IN BUSINESS" },
  { value: FIRM_FACTS.projectsCompleted, label: "PROJECTS COMPLETED" },
  { value: FIRM_FACTS.teamSize, label: "TEAM MEMBERS" },
  {
    value: `${FIRM_FACTS.googleReviews.rating} / ${FIRM_FACTS.googleReviews.count}`,
    label: "GOOGLE REVIEWS",
  },
];

const FOUNDERS = [
  {
    name: FIRM_FACTS.founders.kevin.name,
    role: FIRM_FACTS.founders.kevin.role,
    bio: "Kevin started ZionCS in 2016 as a pool-deck crew. He still walks most quote sites and runs the technical spec on every project. Lives in Sandy. The buck stops with Kevin on workmanship issues — same number that started the company answers when something needs to be made right.",
    accent: "status-orange",
  },
  {
    name: FIRM_FACTS.founders.amy.name,
    role: FIRM_FACTS.founders.amy.role,
    bio: "Amy runs the office, customer communications, and most of the writing on this site. Quote requests, intake forms, and follow-up calls all go through her — she's the team's front of house. If you've called ZionCS in the last few years, you've talked to Amy.",
    accent: "status-steel",
  },
  {
    name: FIRM_FACTS.founders.josh.name,
    role: FIRM_FACTS.founders.josh.role,
    bio: "Josh is the project manager on residential and commercial work. He walks the site, sequences the crew, and handles AHJ inspections. If your project is bigger than a single residential pour, Josh is the one running it day-by-day.",
    accent: "status-rebar",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="ZIONCS://ABOUT"
        title="Started in Sandy. Pool decks first."
        lead="Zion Concrete Specialists started in 2016 as a residential pool-deck crew in Sandy, Utah. Nine years and 200+ projects later, we run four service tracks — residential, builder, commercial, enterprise — across the Wasatch Front and St. George. Same Sandy home base, same standards, same crew."
        heroImage="/images/hero/img-03-about.png"
      />

      {/* Stats band */}
      <section className="bg-anthracite-elevated text-bone border-y border-concrete/15 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <li key={s.label} className="text-center">
                <p className="font-mono font-bold tabular-nums text-bone text-[clamp(1.5rem,3vw,2.25rem)] leading-none mb-2">
                  {s.value}
                </p>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-stone">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Origin story */}
      <section className="bg-bone py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
            01 / ORIGIN
          </p>
          <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
            From pool decks outward.
          </h2>
          <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
            <p>
              Pool decks are the most-visible flatwork in any backyard.
              They get walked on wet, exposed to chlorine, photographed
              when guests come over, and stand right next to the water
              that cost the homeowner six figures. Every detail matters
              — the texture has to grip wet feet, the slope has to
              move water away from the coping, the color has to look
              good against the home and the water, and the joints have
              to hide where the slab will inevitably crack.
            </p>
            <p>
              We started here. The first dozen ZionCS projects were
              residential pool decks for clients in Sandy and the
              south Salt Lake Valley. Word spread, the work expanded
              into driveways and patios, and by 2019 we were known
              for residential flatwork across the metro. By 2024 the
              service stack had grown to cover sport courts, RV pads,
              dumpster pads, foundations, sidewalks, decorative
              finishes, and full commercial work.
            </p>
            <p>
              Today, four service tracks — residential, builder,
              commercial, multi-site enterprise — run out of one Sandy
              shop with one crew. Pool decks still set the bar
              internally for what &ldquo;done right&rdquo; means.
              Every other surface borrows from what we learned there.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bg-orange-tinted-light py-20 md:py-24 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: "url(/topo-bg-light.svg)",
            backgroundSize: "cover",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-orange mb-4">
              02 / VALUES
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
              Three things that show up in every Google review.
            </h2>
            <p className="text-stone leading-relaxed">
              The differentiators aren&rsquo;t marketing — they&rsquo;re
              what every five-star review on the company says, in
              different words.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.eyebrow}
                className="card-light p-7 status-orange"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-orange mb-3">
                  {v.eyebrow}
                </p>
                <h3 className="text-xl font-bold tracking-tight text-anthracite mb-3 leading-tight">
                  {v.title}
                </h3>
                <p className="text-stone leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-bone py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              03 / THE TEAM
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
              Three names you&rsquo;ll talk to.
            </h2>
            <p className="text-stone leading-relaxed">
              Plus a 10+ person crew that handles the actual concrete.
              When you call ZionCS, you talk to Amy. When you walk a
              site, you walk it with Kevin or Josh.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FOUNDERS.map((f) => (
              <article
                key={f.name}
                className={`card-light p-7 ${f.accent}`}
              >
                {/* Headshot placeholder — Track A or real photos swap in later */}
                <div
                  aria-hidden="true"
                  className="aspect-square rounded-md mb-5 overflow-hidden border border-warm-border"
                  style={{
                    background:
                      "linear-gradient(135deg, #EDE8DC 0%, #F4F0E8 50%, #E0DBCF 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "url(/topo-bg-light.svg)",
                      backgroundSize: "cover",
                      opacity: 0.5,
                    }}
                  />
                </div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-2">
                  {f.role}
                </p>
                <h3 className="text-xl font-bold tracking-tight text-anthracite mb-3">
                  {f.name}
                </h3>
                <p className="text-stone leading-relaxed text-sm">
                  {f.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service area + close */}
      <section className="relative bg-anthracite text-bone py-20 md:py-24 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/topo-bg-dark.svg)",
            backgroundSize: "cover",
            opacity: 0.55,
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Brand mark — closes the about page with the full lettered lockup */}
          <div className="flex justify-center mb-10">
            <Image
              src="/brand/zioncs-logo-mascot-white.png"
              alt="Zion Concrete Specialists"
              width={820}
              height={350}
              className="w-auto h-auto max-w-[400px] opacity-95"
            />
          </div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel-light mb-4">
            04 / WHERE WE WORK
          </p>
          <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-5">
            Sandy home base. Wasatch Front + St. George coverage.
          </h2>
          <div className="space-y-5 text-bone/80 text-lg leading-relaxed mb-6">
            <p>
              Home base is{" "}
              <span className="text-bone font-semibold">
                {CONTACT.address.full}
              </span>
              . The shop, the yard, and most of the team live within
              15 minutes of the office. We routinely work the entire
              Wasatch Front (Ogden through Provo, plus Park City) and
              travel south to St. George multiple times a year.
            </p>
            <p>
              We don&rsquo;t operate outside Utah. The logo&rsquo;s
              WY/MT references are forward-looking — we may eventually
              expand into neighboring states, but every project today
              happens on Utah ground.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/utah-concrete-contractor"
              className="inline-flex items-center gap-2 px-5 py-3 border border-bone/25 hover:border-bone/50 text-bone font-medium text-sm rounded-lg transition-colors"
            >
              Utah service overview
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/wasatch-front-concrete-contractor"
              className="inline-flex items-center gap-2 px-5 py-3 border border-bone/25 hover:border-bone/50 text-bone font-medium text-sm rounded-lg transition-colors"
            >
              Wasatch Front pillar
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 border border-bone/25 hover:border-bone/50 text-bone font-medium text-sm rounded-lg transition-colors"
            >
              Recent projects
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
