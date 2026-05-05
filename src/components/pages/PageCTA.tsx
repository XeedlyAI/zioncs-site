import Link from "next/link";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { FIRM_FACTS } from "@/lib/firm-facts";

interface PageCTAProps {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function PageCTA({
  title = "Tell us about your project.",
  body = `Honest work, skilled hands, lasting results. Average response within ${FIRM_FACTS.avgResponseTime}.`,
  primaryHref = "/quote",
  primaryLabel = "Request a Quote",
  secondaryHref,
  secondaryLabel,
}: PageCTAProps) {
  return (
    <section className="relative bg-anthracite text-bone overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/topo-bg-dark.svg)",
          backgroundSize: "cover",
          opacity: 0.55,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(232, 90, 25, 0.18) 0%, rgba(50, 40, 34, 0) 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-orange mb-4">
              ZIONCS://START-YOUR-PROJECT
            </p>
            <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-extrabold tracking-tight leading-[1.1] mb-4">
              {title}
            </h2>
            <p className="text-lg text-bone/75 leading-relaxed max-w-xl">
              {body}
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center px-7 py-4 bg-brand-orange hover:bg-brand-orange-hover text-paper font-semibold text-sm uppercase tracking-tight rounded-lg transition-colors"
            >
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center px-7 py-4 border border-bone/25 hover:border-bone/50 text-bone font-medium text-sm rounded-lg transition-colors"
              >
                {secondaryLabel}
              </Link>
            )}
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 font-mono text-sm uppercase tracking-[0.1em] text-bone/85 hover:text-brand-orange transition-colors"
            >
              <Phone size={16} aria-hidden="true" />
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
