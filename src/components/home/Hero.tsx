"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { FIRM_FACTS } from "@/lib/firm-facts";
import { EASE } from "@/lib/motion";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden text-bone"
      aria-labelledby="hero-heading"
    >
      {/* Placeholder background — IMG-01 lands in Track A Session 1 and replaces this gradient.
          When real photo arrives: swap to Image with parallax (background-attachment: fixed on desktop). */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-anthracite"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, #322D26 0%, #26221C 45%, #1A1814 100%)",
        }}
      />
      {/* Topo overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/topo-bg-dark.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.7,
        }}
      />
      {/* Subtle vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,24,20,0.0) 0%, rgba(26,24,20,0.35) 75%, rgba(26,24,20,0.85) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 lg:pt-44 pb-20 lg:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-light mb-5"
        >
          ZIONCS://CONCRETE-SPECIALISTS · UTAH
        </motion.p>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight leading-[1.02] mb-6 max-w-4xl"
        >
          If It Needs To Be Flat,
          <br />
          We&rsquo;ve Got It Covered.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="text-lg sm:text-xl text-bone/80 max-w-2xl leading-relaxed mb-10"
        >
          Utah&rsquo;s flatwork crew. {FIRM_FACTS.tagline}{" "}
          <span className="text-bone/65">
            Driveways, pool decks, sport courts, commercial flatwork — across
            the Wasatch Front and St. George.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="flex flex-wrap gap-3 mb-10"
        >
          <Link
            href="/quote"
            className="inline-flex items-center px-7 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-paper font-semibold text-sm uppercase tracking-tight rounded-lg transition-colors shadow-lg shadow-brand-orange/20"
          >
            Request a Quote
          </Link>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-bone/25 hover:border-bone/50 text-bone font-medium text-sm rounded-lg transition-colors"
          >
            <Phone size={16} aria-hidden="true" />
            {CONTACT.phone}
          </a>
        </motion.div>

        {/* Live indicator row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
          className="flex items-center gap-3"
        >
          <span className="relative inline-flex w-2.5 h-2.5">
            <span className="absolute inset-0 rounded-full bg-rebar animate-ping opacity-70" />
            <span className="relative rounded-full w-2.5 h-2.5 bg-rebar" />
          </span>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-bone/85">
            <span className="text-rebar">CURRENTLY QUOTING</span>
            <span className="text-stone mx-2">·</span>
            <span>Avg response: {FIRM_FACTS.avgResponseTime}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
