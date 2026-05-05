import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { PageHero } from "./PageHero";
import { FaqSection, type FaqItem } from "./FaqSection";
import { type Crumb } from "./Breadcrumbs";

export type SiloProof = {
  /** Mono eyebrow label (e.g., "01 / SCHEDULE DISCIPLINE") */
  eyebrow: string;
  /** Bold short headline */
  title: string;
  /** Body copy — 1-2 short paragraphs */
  body: string;
};

export type SiloService = {
  number: string;
  href: string;
  name: string;
  description: string;
};

export type SiloRelated = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
};

interface SiloLandingTemplateProps {
  breadcrumbs: Crumb[];
  eyebrow: string;
  title: string;
  lead?: string;
  /** Headline for the proof section */
  proofTitle?: string;
  /** Sub-text for the proof section */
  proofSubtitle?: string;
  /** Proof items rendered as cards on the anthracite section */
  proof: SiloProof[];
  /** Headline for the services section */
  servicesTitle: string;
  /** Brief intro for the services section */
  servicesIntro?: string;
  /** Service tiles */
  services: SiloService[];
  /** Related blog articles in the silo */
  relatedTitle?: string;
  related: SiloRelated[];
  /** Silo-tier CTA label — used in the dual-CTA band under the hero. */
  ctaPrimaryLabel?: string;
  /** Silo-tier CTA href — used in the dual-CTA band under the hero. */
  ctaPrimaryHref?: string;
  /** @deprecated — page-level CTAs were retired in favor of the universal Footer CTA. */
  ctaTitle?: string;
  /** @deprecated */
  ctaBody?: string;
  /** FAQs at the bottom */
  faqs: FaqItem[];
}

/**
 * Shared template for silo landing pages (BUILDER, COMMERCIAL, ENTERPRISE).
 * More anthracite-heavy than the pillar template — calibrated for B2B
 * credibility per ZIONCS_DESIGN_CALIBRATION.
 *
 * Layout:
 *   PageHero (anthracite + topo + breadcrumbs)
 *   Builder-tier dual CTA band (under hero) — primary discovery call + secondary quote
 *   Proof section (anthracite-elevated, 4 reasons-why-us)
 *   Services-in-this-silo grid (bone)
 *   Related articles (sand-wash)
 *   FAQ
 *   PageCTA with the silo-specific CTA variant
 */
export function SiloLandingTemplate({
  breadcrumbs,
  eyebrow,
  title,
  lead,
  proofTitle = "Why builders work with us.",
  proofSubtitle,
  proof,
  servicesTitle,
  servicesIntro,
  services,
  relatedTitle = "Read more from the journal",
  related,
  ctaPrimaryLabel = "Book a Discovery Call",
  ctaPrimaryHref = "/book/discovery-call-builder",
  faqs,
}: SiloLandingTemplateProps) {
  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow={eyebrow}
        title={title}
        lead={lead}
      />

      {/* Dual CTA band — silo-tier primary + secondary quote */}
      <section className="bg-anthracite-elevated text-bone border-b border-concrete/15 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-bone/85 max-w-md">
            Two paths in: a 30-minute discovery call to walk through scope,
            or a written quote.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={ctaPrimaryHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-steel hover:bg-steel-light text-paper font-semibold text-sm uppercase tracking-tight rounded-lg transition-colors"
            >
              <Calendar size={14} aria-hidden />
              {ctaPrimaryLabel}
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-paper font-semibold text-sm uppercase tracking-tight rounded-lg transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Proof — anthracite, 4 reasons */}
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
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel-light mb-4">
              ZIONCS://PROOF
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-3">
              {proofTitle}
            </h2>
            {proofSubtitle && (
              <p className="text-bone/70 leading-relaxed">{proofSubtitle}</p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {proof.map((p) => (
              <div
                key={p.eyebrow}
                className="card-dark status-steel p-7"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel-light mb-3">
                  {p.eyebrow}
                </p>
                <h3 className="text-xl font-bold tracking-tight text-bone mb-3 leading-tight">
                  {p.title}
                </h3>
                <p className="text-bone/75 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in this silo */}
      <section className="bg-bone py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              ZIONCS://SCOPE
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-3">
              {servicesTitle}
            </h2>
            {servicesIntro && (
              <p className="text-stone leading-relaxed">{servicesIntro}</p>
            )}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            {services.map((s) => (
              <li
                key={s.href}
                className="border-b border-warm-border last:border-b-0 md:[&:nth-last-child(2)]:border-b-0"
              >
                <Link
                  href={s.href}
                  className="group flex items-center justify-between gap-6 py-5 -mx-4 px-4 rounded-md hover:bg-bg-orange-tinted-light transition-colors"
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

      {/* Related articles */}
      <section className="bg-bg-sand-wash py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
              ZIONCS://JOURNAL
            </p>
            <h2 className="text-[clamp(1.5rem,2.5vw,1.875rem)] font-extrabold tracking-tight text-anthracite leading-[1.15]">
              {relatedTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="card-light p-6 status-steel block group h-full"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-3">
                  {r.eyebrow}
                </p>
                <h3 className="text-lg font-bold text-anthracite tracking-tight leading-snug mb-3">
                  {r.title}
                </h3>
                <p className="text-sm text-stone leading-relaxed mb-4">
                  {r.description}
                </p>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-brand-orange group-hover:text-brand-orange-hover transition-colors font-semibold">
                  Read
                  <ArrowRight size={12} aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={faqs} />
    </>
  );
}
