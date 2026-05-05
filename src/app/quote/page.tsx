import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/pages/PageHero";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { CONTACT } from "@/lib/contact";
import { FIRM_FACTS } from "@/lib/firm-facts";
import { breadcrumbListSchema } from "@/lib/structured-data";

const PAGE_URL = "https://zioncs.com/quote";

export const metadata: Metadata = {
  title: "Request a Quote | Zion Concrete Specialists",
  description:
    "Request a written quote from Utah's flatwork crew. Average response 2 business hours. No high-pressure sales call. No surprise upsells.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Request a Quote — Zion Concrete Specialists",
    description:
      "Tell us about your concrete project. Written quote within 7 days, no high-pressure follow-up.",
    url: PAGE_URL,
    type: "website",
  },
  // Quote pages don't need to compete in search; route there from CTAs only
  robots: { index: true, follow: true },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Request a Quote" },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Request a Quote", url: PAGE_URL },
]);

export default function QuotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="ZIONCS://REQUEST-A-QUOTE"
        title="Tell us about your project."
        lead={`Average response within ${FIRM_FACTS.avgResponseTime}. No high-pressure sales call. No surprise upsells. Most quotes back in 7 business days after the site walk.`}
      />

      <section className="bg-bone py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Form column */}
            <div className="lg:col-span-8">
              <QuoteForm />
            </div>

            {/* Sidebar — what to expect / contact alternatives */}
            <aside className="lg:col-span-4 space-y-5">
              <div className="card-light p-6 md:p-7 status-steel">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-3">
                  ZIONCS://WHAT-HAPPENS-NEXT
                </p>
                <h2 className="text-lg font-bold text-anthracite leading-snug mb-4">
                  Quote process — start to finish.
                </h2>
                <ol className="space-y-3 text-sm text-stone leading-relaxed">
                  <li className="grid grid-cols-[1.5rem_1fr] gap-2">
                    <span className="font-mono text-steel font-semibold">
                      01
                    </span>
                    <span>
                      We confirm your request within 2 business hours and
                      ask any clarifying questions.
                    </span>
                  </li>
                  <li className="grid grid-cols-[1.5rem_1fr] gap-2">
                    <span className="font-mono text-steel font-semibold">
                      02
                    </span>
                    <span>
                      A project manager schedules a no-charge site walk —
                      typically within a week.
                    </span>
                  </li>
                  <li className="grid grid-cols-[1.5rem_1fr] gap-2">
                    <span className="font-mono text-steel font-semibold">
                      03
                    </span>
                    <span>
                      Written quote in your inbox — usually within 7
                      business days of the walk. No high-pressure
                      follow-up.
                    </span>
                  </li>
                </ol>
              </div>

              <div className="card-light p-6 md:p-7 status-rebar">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-rebar mb-3">
                  ZIONCS://PREFER-TO-CALL
                </p>
                <h2 className="text-lg font-bold text-anthracite leading-snug mb-4">
                  Talk to us directly.
                </h2>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href={CONTACT.phoneHref}
                      className="flex items-center gap-2.5 text-anthracite hover:text-brand-orange transition-colors"
                    >
                      <Phone size={14} className="shrink-0 text-rebar" aria-hidden />
                      <span className="font-mono">{CONTACT.phone}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="flex items-center gap-2.5 text-anthracite hover:text-brand-orange transition-colors"
                    >
                      <Mail size={14} className="shrink-0 text-rebar" aria-hidden />
                      <span className="font-mono break-all">{CONTACT.email}</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 text-anthracite/85">
                    <Clock size={14} className="shrink-0 text-rebar" aria-hidden />
                    <span>{CONTACT.hours.display}</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-anthracite/85">
                    <MapPin
                      size={14}
                      className="shrink-0 text-rebar mt-0.5"
                      aria-hidden
                    />
                    <span>{CONTACT.address.full}</span>
                  </li>
                </ul>
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-warm leading-relaxed">
                We protect your info. Submitted details only go to the
                ZionCS team. We don&rsquo;t share contact info or sell
                lead data.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
