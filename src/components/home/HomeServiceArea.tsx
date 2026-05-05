"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ServiceAreaMap } from "@/components/data/ServiceAreaMap";
import { fadeUp, scrollRevealProps } from "@/lib/motion";

/**
 * Homepage service-area section. Anthracite + topo + ServiceAreaMap card.
 * Reuses the shared <ServiceAreaMap /> component so the same surface
 * appears on the Wasatch Front pillar page.
 */
export function HomeServiceArea() {
  return (
    <section className="relative bg-anthracite text-bone py-24 md:py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/topo-bg-dark.svg)",
          backgroundSize: "cover",
          opacity: 0.45,
        }}
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...scrollRevealProps}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel-light mb-4">
            ZIONCS://WHERE-WE-WORK
          </p>
          <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-3">
            Wasatch Front + St. George.
          </h2>
          <p className="text-bone/70 leading-relaxed max-w-xl mx-auto">
            Roughly 300 miles of Utah&rsquo;s I-15 corridor. Sandy is home
            base; we cover from Logan in the north through St. George in
            the south.
          </p>
        </motion.div>

        <motion.div {...scrollRevealProps} variants={fadeUp}>
          <ServiceAreaMap
            eyebrow="ZIONCS://SERVICE-AREA · UTAH"
            title="Where projects happen."
            description="Most of our work clusters along the Wasatch Front (Ogden through Provo, plus Park City). St. George is our southern bookend."
          />
        </motion.div>

        <motion.div
          {...scrollRevealProps}
          variants={fadeUp}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <Link
            href="/utah-concrete-contractor"
            className="inline-flex items-center gap-2 px-5 py-3 border border-bone/25 hover:border-bone/50 text-bone font-medium text-sm rounded-lg transition-colors"
          >
            Utah service overview
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link
            href="/wasatch-front-concrete-contractor"
            className="inline-flex items-center gap-2 px-5 py-3 border border-bone/25 hover:border-bone/50 text-bone font-medium text-sm rounded-lg transition-colors"
          >
            Wasatch Front pillar
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link
            href="/locations/sandy-utah"
            className="inline-flex items-center gap-2 px-5 py-3 border border-bone/25 hover:border-bone/50 text-bone font-medium text-sm rounded-lg transition-colors"
          >
            Sandy (home base)
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
