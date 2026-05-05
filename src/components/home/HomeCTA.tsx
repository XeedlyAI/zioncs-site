"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { FIRM_FACTS } from "@/lib/firm-facts";
import { fadeUp, scrollRevealProps } from "@/lib/motion";

export function HomeCTA() {
  return (
    <section className="relative bg-anthracite text-bone overflow-hidden">
      {/* Topo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/topo-bg-dark.svg)",
          backgroundSize: "cover",
          opacity: 0.55,
        }}
      />
      {/* Orange-tinted overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(232, 90, 25, 0.18) 0%, rgba(50, 40, 34, 0) 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          {...scrollRevealProps}
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-orange mb-5">
              ZIONCS://START-YOUR-PROJECT
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold tracking-tight leading-[1.05] mb-6">
              Tell us about your project.
              <br />
              <span className="text-bone/70">We&rsquo;ll come back with a number.</span>
            </h2>
            <p className="text-lg text-bone/75 leading-relaxed max-w-xl">
              Honest work, skilled hands, lasting results. Average response
              within {FIRM_FACTS.avgResponseTime}. No high-pressure sales call,
              no surprise upsells.
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
              className="inline-flex items-center justify-center px-7 py-4 border border-bone/25 hover:border-bone/50 text-bone font-medium text-sm rounded-lg transition-colors"
            >
              Book a Discovery Call
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 font-mono text-sm uppercase tracking-[0.1em] text-bone/85 hover:text-brand-orange transition-colors"
              aria-label={`Call ${CONTACT.phone}`}
            >
              <Phone size={16} aria-hidden="true" />
              {CONTACT.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
