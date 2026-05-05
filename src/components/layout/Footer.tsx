import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
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

      {/* CTA panel — orange-tinted accent over anthracite */}
      <div className="relative border-b border-concrete/15">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(50, 40, 34, 0.6) 0%, rgba(50, 40, 34, 0.3) 50%, rgba(26, 24, 20, 0) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-orange mb-4">
                ZIONCS://START-YOUR-PROJECT
              </p>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold tracking-tight leading-[1.1] mb-3">
                Let&rsquo;s talk about your project.
              </h2>
              <p className="text-bone/75 max-w-md">
                Honest work, skilled hands, lasting results. Average response
                within {FIRM_FACTS.avgResponseTime}.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3 md:items-end">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-paper font-semibold text-sm uppercase tracking-tight rounded-lg transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-concrete/40 hover:border-bone/60 text-bone font-medium text-sm rounded-lg transition-colors"
              >
                <Phone size={16} />
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
