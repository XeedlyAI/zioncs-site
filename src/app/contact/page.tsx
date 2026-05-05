import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/pages/Breadcrumbs";
import { IntelligenceConsoleMini } from "@/components/console/IntelligenceConsoleMini";
import { ContactPageForm } from "@/components/forms/ContactPageForm";
import { CONTACT } from "@/lib/contact";
import {
  breadcrumbListSchema,
  localBusinessSchema,
} from "@/lib/structured-data";

const PAGE_URL = "https://zioncs.com/contact";

export const metadata: Metadata = {
  title: "Contact — Zion Concrete Specialists",
  description: `Talk to ZionCS — call ${CONTACT.phone}, email ${CONTACT.email}, or send a message. Sandy, UT. Mon–Fri 8 AM – 5 PM Mountain.`,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Contact Zion Concrete Specialists",
    description:
      "Talk to a Utah concrete contractor — phone, email, message form.",
    url: PAGE_URL,
    type: "website",
  },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Contact" },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Contact", url: PAGE_URL },
]);

const lbJsonLd = localBusinessSchema({
  name: "Zion Concrete Specialists",
  url: PAGE_URL,
  phone: CONTACT.phone,
  address: {
    street: CONTACT.address.street,
    city: CONTACT.address.city,
    state: CONTACT.address.state,
    zip: CONTACT.address.zip,
  },
  geo: { lat: 40.5649, lng: -111.8389 },
  hours: ["Mo-Fr 08:00-17:00"],
  image: "https://zioncs.com/brand/zioncs-logo-horizontal.png",
});

const ROUTES = [
  {
    title: "Need a written quote?",
    body: "Use the quote form — captures project specifics (service, city, size, timeline) so we can route to the right project manager.",
    href: "/quote",
    label: "Request a quote",
  },
  {
    title: "Got a builder, commercial, or multi-site project?",
    body: "Book a discovery call — 30/45/60-minute slots based on the project type.",
    href: "/builders",
    label: "Builder track",
  },
  {
    title: "Just have a question?",
    body: "Use the message form below or call us during business hours. Most non-project questions answer in a single email.",
    href: "#message",
    label: "Send a message",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lbJsonLd) }}
      />
      {/* 2-col hero: intro left, mini console right */}
      <section className="relative bg-anthracite text-bone overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/topo-bg-dark.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.6,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(38, 34, 28, 0.6) 0%, rgba(26, 24, 20, 0.95) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 lg:pb-20">
          <div className="mb-6">
            <Breadcrumbs items={BREADCRUMBS} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-6">
              <p className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-light mb-4">
                ZIONCS://CONTACT
              </p>
              <h1 className="text-[clamp(2.25rem,4.6vw,3.5rem)] font-extrabold tracking-tight leading-[1.05] text-bone mb-5">
                Talk to a Utah concrete crew.
              </h1>
              <p className="text-lg text-bone/80 leading-relaxed mb-6">
                Sandy home base. Mon–Fri 8 AM to 5 PM Mountain. Average
                response within 2 business hours during office hours.{" "}
                {CONTACT.phone} or {CONTACT.email}.
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone leading-relaxed">
                Not sure which path is yours? Ask the console — it
                routes builder, multi-site, and homeowner questions
                differently. Or skip ahead to the form below.
              </p>
            </div>
            <div className="lg:col-span-6">
              <IntelligenceConsoleMini hideExpand />
            </div>
          </div>
        </div>
      </section>

      {/* Direct contact info — anthracite band */}
      <section className="bg-anthracite-elevated text-bone border-b border-concrete/15 py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href={CONTACT.phoneHref}
              className="flex items-start gap-3 group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-md bg-rebar/15 text-rebar shrink-0">
                <Phone size={16} aria-hidden />
              </span>
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-stone mb-1">
                  PHONE
                </p>
                <p className="font-mono text-base text-bone group-hover:text-brand-orange transition-colors">
                  {CONTACT.phone}
                </p>
              </div>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-start gap-3 group"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-md bg-steel/15 text-steel-light shrink-0">
                <Mail size={16} aria-hidden />
              </span>
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-stone mb-1">
                  EMAIL
                </p>
                <p className="font-mono text-base text-bone group-hover:text-brand-orange transition-colors break-all">
                  {CONTACT.email}
                </p>
              </div>
            </a>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-md bg-gold/15 text-gold shrink-0">
                <Clock size={16} aria-hidden />
              </span>
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-stone mb-1">
                  HOURS
                </p>
                <p className="font-mono text-base text-bone">
                  {CONTACT.hours.display}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-stone mt-1">
                  Mountain Time
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-md bg-brand-orange/15 text-brand-orange shrink-0">
                <MapPin size={16} aria-hidden />
              </span>
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-stone mb-1">
                  HOME BASE
                </p>
                <p className="font-mono text-base text-bone">
                  {CONTACT.address.full}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routing block */}
      <section className="bg-bone py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              01 / PICK A PATH
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
              How can we help?
            </h2>
            <p className="text-stone leading-relaxed">
              Quote requests, discovery calls, and general questions
              all land in the same inbox — but routing through the
              right form gets you a faster, more specific response.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ROUTES.map((r) => (
              <Link
                key={r.title}
                href={r.href}
                className="card-light p-7 status-steel block group h-full"
              >
                <h3 className="text-lg font-bold tracking-tight text-anthracite mb-3 leading-snug">
                  {r.title}
                </h3>
                <p className="text-sm text-stone leading-relaxed mb-4">
                  {r.body}
                </p>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-brand-orange group-hover:text-brand-orange-hover transition-colors font-semibold">
                  {r.label}
                  <ArrowRight size={12} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Form + map */}
      <section id="message" className="bg-bg-sand-wash py-16 md:py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                02 / MESSAGE
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-5">
                Send a message.
              </h2>
              <p className="text-stone leading-relaxed mb-6">
                For everything that&rsquo;s not a quote request or a
                discovery-call booking. Press inquiries, partnership
                discussions, follow-ups on completed projects, general
                questions.
              </p>
              <ContactPageForm />
            </div>

            <aside className="lg:col-span-5">
              <div className="card-light p-6 status-rebar">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-rebar mb-3">
                  ZIONCS://LOCATION
                </p>
                <h2 className="text-lg font-bold text-anthracite leading-snug mb-4">
                  Sandy home base.
                </h2>
                {/* Static map placeholder — no real maps integration in v1 */}
                <div
                  aria-label="Map of Sandy, Utah home base"
                  className="rounded-md mb-4 aspect-[4/3] relative overflow-hidden border border-warm-border"
                  style={{
                    background:
                      "linear-gradient(135deg, #EDE8DC 0%, #F4F0E8 50%, #E0DBCF 100%)",
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      backgroundImage: "url(/topo-bg-light.svg)",
                      backgroundSize: "cover",
                      opacity: 0.7,
                    }}
                  />
                  {/* Sandy marker */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-orange text-paper mb-2 shadow-lg shadow-brand-orange/30">
                        <MapPin size={18} aria-hidden />
                      </div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] font-semibold text-anthracite">
                        SANDY · UT
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone">
                        40.5649° N · 111.8389° W
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-stone leading-relaxed mb-3">
                  Office is in Sandy, UT 84070. We don&rsquo;t do
                  walk-in consults — every conversation starts on
                  the phone or with a site walk we schedule.
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Zion Concrete Specialists Sandy UT 84070")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-brand-orange hover:text-brand-orange-hover transition-colors font-semibold"
                >
                  Open in Google Maps
                  <ArrowRight size={12} aria-hidden="true" />
                </a>
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-warm leading-relaxed mt-5">
                We don&rsquo;t share contact info or sell lead data.
                Submitted info goes only to the ZionCS team.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
