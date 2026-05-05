"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { PRIMARY_NAV } from "@/lib/nav";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-anthracite/85 backdrop-blur-md border-b border-concrete/20"
            : "bg-transparent border-b border-transparent"
        )}
        style={{
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              scrolled ? "h-14" : "h-20"
            )}
          >
            {/* Logo — horizontal lockup at rest, medallion icon when scrolled */}
            <Link
              href="/"
              className="flex items-center shrink-0 relative"
              aria-label="Zion Concrete Specialists — home"
            >
              <Image
                src="/brand/zioncs-logo-horizontal-white.png"
                alt="Zion Concrete Specialists"
                width={180}
                height={48}
                priority
                className={cn(
                  "w-auto transition-opacity duration-300 h-11",
                  scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
              />
              <Image
                src="/brand/zioncs-mascot.png"
                alt=""
                aria-hidden="true"
                width={170}
                height={170}
                className={cn(
                  "absolute left-0 top-1/2 -translate-y-1/2 w-auto transition-opacity duration-300",
                  scrolled ? "opacity-100 h-9" : "opacity-0 pointer-events-none h-9"
                )}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {PRIMARY_NAV.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-bone/85 hover:text-brand-orange transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-bone/85 hover:text-brand-orange transition-colors"
                aria-label={`Call ${CONTACT.phone}`}
              >
                <Phone size={14} aria-hidden="true" />
                {CONTACT.phone}
              </a>
              <Link
                href="/quote"
                className="inline-flex items-center px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-paper font-semibold text-[12px] uppercase tracking-tight rounded-lg transition-colors"
              >
                Request a Quote
              </Link>
            </div>

            {/* Mobile: phone + menu trigger */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={CONTACT.phoneHref}
                className="p-2 text-bone hover:text-brand-orange transition-colors"
                aria-label={`Call ${CONTACT.phone}`}
              >
                <Phone size={20} />
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                className="p-2 text-bone hover:text-brand-orange transition-colors"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
