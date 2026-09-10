import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LocationPageTemplate } from "@/components/pages/LocationPageTemplate";
import { SERVICES } from "@/data/services";
import { CITIES } from "@/data/cities";
import {
  breadcrumbListSchema,
  faqPageSchema,
  localBusinessSchema,
} from "@/lib/structured-data";
import { CONTACT } from "@/lib/contact";

const PAGE_URL = "https://zioncs.com/locations/sandy-utah";
const CITY = CITIES["sandy-utah"];

export const metadata: Metadata = {
  title: "Concrete Contractor Sandy UT | Zion CS",
  description:
    "Based in Sandy, UT — Zion Concrete Specialists serves South Salt Lake Valley plus the entire Wasatch Front. Driveways, sport courts, foundations.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Concrete Contractor Sandy, UT — Local Crew, Wasatch Front Reach",
    description:
      "Sandy-based concrete flatwork crew. Driveways, patios, pool decks, sport courts — South Salt Lake Valley and beyond.",
    url: PAGE_URL,
    type: "website",
  },
};

const FAQS = [
  {
    question: "Where in Sandy do you typically work?",
    answer:
      "Pretty much everywhere in the city. We've worked in Granite, Alta View, Hidden Valley, Pepperwood, Sandy Hills, and White City. Anywhere in the 84070, 84092, 84093, or 84094 ZIP codes — and the boundary doesn't really matter; we cover Sandy, Draper, Cottonwood Heights, Midvale, and South Jordan in roughly the same trip.",
  },
  {
    question: "What's your home base in Sandy?",
    answer:
      "Sandy, UT 84070. The shop and yard are here, the trucks are parked here, and most of the team lives within 15 minutes of the office. When we say we're a local Utah crew, we mean Sandy-local.",
  },
  {
    question: "Do you do residential and commercial work in Sandy?",
    answer:
      "Both. Sandy has a healthy mix — residential infill on the older streets, custom builds in the foothills, plus commercial properties along the State Street and 700 East corridors and the Cabela's-anchored retail areas. We work all of it.",
  },
  {
    question: "How does the soil affect concrete in Sandy?",
    answer:
      "Sandy sits on alluvial fan deposits with clay-heavy pockets, especially in the lower-elevation neighborhoods. Subgrade prep matters a lot — we compact, level, and spec the right base for the slab so it doesn't settle unevenly in the first two winters.",
  },
  {
    question: "How fast can you start a Sandy project?",
    answer:
      "Lead time depends on the season and scope. Most residential projects in Sandy are 2–6 weeks out from quote acceptance during the warm-weather pour window. Repair and emergency work moves faster. Tell us your target date when you request a quote.",
  },
];

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/utah-concrete-contractor" },
  { label: "Sandy, UT" },
];

const TOP_SERVICES = SERVICES.filter((s) =>
  [
    "concrete-driveways-utah",
    "stamped-decorative-concrete-utah",
    "pool-decks-utah",
    "concrete-patios-utah",
    "residential-concrete-repair-utah",
  ].includes(s.slug)
);

const lbJsonLd = localBusinessSchema({
  name: "Zion Concrete Specialists — Sandy",
  url: PAGE_URL,
  phone: CONTACT.phone,
  address: {
    street: CONTACT.address.street,
    city: CITY.name,
    state: "UT",
    zip: CITY.zipSamples[0],
  },
  geo: CITY.geo,
  hours: ["Mo-Fr 08:00-17:00"],
  image: "https://zioncs.com/brand/zioncs-logo-horizontal.png",
});

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  {
    name: "Utah Concrete Contractor",
    url: "https://zioncs.com/utah-concrete-contractor",
  },
  { name: "Sandy, UT", url: PAGE_URL },
]);

const faqJsonLd = faqPageSchema(FAQS);

export default function SandyUtahPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <LocationPageTemplate
        breadcrumbs={BREADCRUMBS}
        eyebrow="ZIONCS://LOCATION · SANDY, UT"
        title="Concrete contractor Sandy, UT — local crew, Wasatch Front reach."
        lead="Sandy is home base. Our shop, our yard, and most of our crew live within 15 minutes of 84070. We work all over the city — Granite to White City, Hidden Valley to Pepperwood — plus South Salt Lake Valley and the broader Wasatch Front."
        faqs={FAQS}
        ctaTitle="Got a project in Sandy?"
        ctaBody="We're local. Quote-driven. Two-year workmanship warranty. Tell us what you're working on and we'll send a written number."
      >
        {/* Local intro */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              01 / SANDY HOME BASE
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              Built in Sandy. Working across Salt Lake County.
            </h2>
            <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
              <p>
                Zion Concrete Specialists started in Sandy in 2016 as a
                pool-deck crew. The owner, Kevin Handrin, lives here. The
                project manager, Josh Rowberry, lives here. The trucks are
                garaged here. When you call us about a Sandy driveway, the
                people you talk to are the people who can drive past your
                house on the way home from the office.
              </p>
              <p>
                Sandy itself is a mix — older 1970s neighborhoods on the west
                side, mid-century streets near the city center, and newer
                custom builds in the foothills. We work all of it. The mix
                means we&rsquo;ve seen what settles, what cracks, and what
                doesn&rsquo;t — and we know which subgrade prep makes the
                difference in this corner of the valley.
              </p>
              <p>
                Most projects in Sandy are residential — driveways, patios,
                pool decks, sport courts, and the occasional sidewalk
                replacement after a city utility cut. We also handle local
                commercial work along State Street, 700 East, and the
                Cabela&rsquo;s/Real Salt Lake retail nodes.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                02 / SERVICES IN SANDY
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
                What we install most in Sandy.
              </h2>
              <p className="text-stone leading-relaxed">
                Top five residential categories below.{" "}
                <Link
                  href="/services"
                  className="text-brand-orange hover:text-brand-orange-hover font-semibold underline-offset-4 hover:underline"
                >
                  See all 11 services →
                </Link>
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              {TOP_SERVICES.map((s) => (
                <li
                  key={s.slug}
                  className="border-b border-warm-border last:border-b-0"
                >
                  <Link
                    href={s.href}
                    className="group flex items-center justify-between gap-6 py-5 -mx-4 px-4 rounded-md hover:bg-paper transition-colors"
                  >
                    <div className="flex items-baseline gap-5 min-w-0">
                      <span className="font-mono text-base font-semibold text-steel tabular-nums shrink-0">
                        {s.number}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-bold text-lg text-anthracite tracking-tight uppercase">
                          {s.name}
                        </h3>
                        <p className="text-sm text-stone mt-1">
                          {s.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-stone group-hover:text-brand-orange group-hover:translate-x-1 transition-all shrink-0"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="bg-anthracite text-bone py-20 md:py-24 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "url(/topo-bg-dark.svg)",
              backgroundSize: "cover",
              opacity: 0.55,
            }}
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel-light mb-4">
                  03 / NEIGHBORHOODS WE WORK
                </p>
                <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-5">
                  Most of Sandy. Most of the time.
                </h2>
                <p className="text-bone/75 leading-relaxed mb-6">
                  These are the neighborhoods where we&rsquo;ve completed the
                  most projects. If yours isn&rsquo;t listed, we still serve
                  the area — Sandy is small enough that the whole city is in
                  range.
                </p>
                <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone space-y-1">
                  <p>
                    ZIP CODES /{" "}
                    <span className="text-bone/85">
                      {CITY.zipSamples.join(" · ")}
                    </span>
                  </p>
                  <p>
                    COUNTY / <span className="text-bone/85">{CITY.county}</span>
                  </p>
                  <p>
                    GEO /{" "}
                    <span className="text-bone/85">
                      {CITY.geo.lat.toFixed(4)}° N ·{" "}
                      {Math.abs(CITY.geo.lng).toFixed(4)}° W
                    </span>
                  </p>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 self-start">
                {CITY.neighborhoods.map((n) => (
                  <li
                    key={n}
                    className="font-bold text-bone tracking-tight border-l-2 border-steel pl-4 py-1"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Linked-up: state pillar context */}
        <section className="bg-bone py-20 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              04 / BEYOND SANDY
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
              We cover the whole Wasatch Front from here.
            </h2>
            <p className="text-anthracite/85 text-lg leading-relaxed mb-5">
              From Sandy, we routinely travel to Draper, Cottonwood Heights,
              Midvale, South Jordan, Murray, West Jordan, and into Salt Lake
              City for residential and commercial flatwork. North to Bountiful
              and Layton on commercial jobs. Down to Provo, Lehi, and Orem on
              builder partnerships. The Wasatch Front is small enough that
              one Sandy-based crew covers it without the timezone problems
              you get with out-of-state outfits.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/utah-concrete-contractor"
                className="inline-flex items-center gap-2 px-5 py-3 border border-warm-border hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              >
                Utah service overview
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href="/locations/salt-lake-city"
                className="inline-flex items-center gap-2 px-5 py-3 border border-warm-border hover:border-anthracite text-anthracite font-medium text-sm rounded-lg transition-colors"
              >
                Salt Lake City
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </LocationPageTemplate>
    </>
  );
}
