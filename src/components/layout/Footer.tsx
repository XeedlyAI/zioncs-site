import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { FIRM_FACTS } from "@/lib/firm-facts";
import {
  FOOTER_SERVICES,
  FOOTER_COMPANY,
  FOOTER_LEGAL,
} from "@/lib/nav";

export function Footer() {
  return (
    <footer className="relative bg-anthracite text-bone overflow-hidden">
      {/* Topo overlay */}
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

      {/* CTA panel — universal closer for every page on the site.
          Light cement gray section before the dark footer body — gives a
          clean light-to-dark close and breaks the warm-anthracite stack
          that dominates most page bottoms. */}
      <div className="relative bg-bg-cement text-anthracite border-b border-warm-border">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 25% 50%, rgba(232, 90, 25, 0.10) 0%, rgba(242, 242, 242, 0) 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-orange mb-4">
                ZIONCS://START-YOUR-PROJECT
              </p>
              <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-extrabold tracking-tight leading-[1.1] mb-4 text-anthracite">
                Let&rsquo;s talk about your project.
              </h2>
              <p className="text-stone leading-relaxed max-w-xl">
                Honest work, skilled hands, lasting results. Average response
                within {FIRM_FACTS.avgResponseTime}. No high-pressure sales
                call, no surprise upsells.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-7 py-4 bg-brand-orange hover:bg-brand-orange-hover text-paper font-semibold text-sm uppercase tracking-tight rounded-lg transition-colors shadow-lg shadow-brand-orange/20"
              >
                Request a Quote
              </Link>
              <Link
                href="/book/discovery-call-builder"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-anthracite/25 hover:border-anthracite/50 text-anthracite font-medium text-sm rounded-lg transition-colors"
              >
                <Calendar size={16} aria-hidden="true" />
                Book a Discovery Call
              </Link>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-3 font-mono text-sm uppercase tracking-[0.1em] text-anthracite/85 hover:text-brand-orange transition-colors"
                aria-label={`Call ${CONTACT.phone}`}
              >
                <Phone size={16} aria-hidden="true" />
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center mb-5"
              aria-label="Zion Concrete Specialists — home"
            >
              <Image
                src="/brand/zioncs-logo-horizontal-white.png"
                alt="Zion Concrete Specialists"
                width={200}
                height={56}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-bone/70 text-sm leading-relaxed mb-5 max-w-xs">
              Utah&rsquo;s flatwork crew. Serving the Wasatch Front and St.
              George.
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2.5 text-bone/85 hover:text-brand-orange transition-colors"
              >
                <Phone size={14} className="shrink-0" aria-hidden="true" />
                <span className="font-mono">{CONTACT.phone}</span>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2.5 text-bone/85 hover:text-brand-orange transition-colors"
              >
                <Mail size={14} className="shrink-0" aria-hidden="true" />
                <span className="font-mono">{CONTACT.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-bone/85">
                <MapPin
                  size={14}
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{CONTACT.address.full}</span>
              </div>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone mt-5">
              {CONTACT.hours.display}
            </p>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-stone mb-4">
              Services
            </p>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-bone/80 hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-stone mb-4">
              Company
            </p>
            <ul className="space-y-2.5">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-bone/80 hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service area */}
          <div className="md:col-span-2">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-stone mb-4">
              Service Area
            </p>
            <ul className="space-y-1.5 text-sm text-bone/80">
              {FIRM_FACTS.serviceArea.cities.slice(0, 6).map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
            <Link
              href="/utah-concrete-contractor"
              className="inline-block mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-brand-orange hover:text-brand-orange-hover transition-colors"
            >
              View all →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-concrete/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-stone">
            © {new Date().getFullYear()} Zion Concrete Specialists · Utah
          </p>
          <nav className="flex items-center gap-5">
            {FOOTER_LEGAL.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[10px] uppercase tracking-[0.12em] text-stone hover:text-bone transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
