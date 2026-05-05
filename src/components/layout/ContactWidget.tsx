"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";

/**
 * ContactWidget — sticky bottom-bar on mobile only.
 * Phone tap-to-call + Request a Quote, always visible on mobile.
 * Hidden on desktop (header carries those CTAs there).
 * Hidden on /quote and /contact pages where forms already dominate.
 */
export function ContactWidget() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-anthracite/95 backdrop-blur-md border-t border-concrete/30"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0)" }}
      role="region"
      aria-label="Contact actions"
    >
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={CONTACT.phoneHref}
          className="flex items-center justify-center gap-2 py-3 border border-concrete/40 hover:border-bone/60 text-bone font-semibold text-sm rounded-lg transition-colors"
          aria-label={`Call ${CONTACT.phone}`}
        >
          <Phone size={16} aria-hidden="true" />
          <span>Call</span>
        </a>
        <Link
          href="/quote"
          className="flex items-center justify-center py-3 bg-brand-orange hover:bg-brand-orange-hover text-paper font-semibold text-sm uppercase tracking-tight rounded-lg transition-colors"
        >
          Quote
        </Link>
      </div>
    </div>
  );
}
