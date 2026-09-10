"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ServiceAreaMap } from "@/components/data/ServiceAreaMap";
import { fadeUp, scrollRevealProps } from "@/lib/motion";

/**
 * Homepage service-area section.
 *
 * 2-col layout: narration on the left, map on the right. Mobile stacks
 * narration → map → tiles. Map sized via the parent column rather than
 * the section max-width so it doesn't dominate the page.
 *
 * Reuses the shared <ServiceAreaMap /> component (also rendered on the
 * Wasatch Front pillar page).
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
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Narration */}
          <motion.div
            {...scrollRevealProps}
            variants={fadeUp}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel-light mb-4">
              ZIONCS://WHERE-WE-WORK
            </p>
            <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-5">
              Wasatch Front + St. George.
            </h2>
            <div className="space-y-4 text-bone/75 leading-relaxed mb-6">
              <p>
                Roughly{" "}
                <span className="font-mono tabular-nums font-semibold text-bone">
                  300 miles
                </span>{" "}
                of Utah&rsquo;s I-15 corridor. Sandy is home base; we
                cover from Logan in the north through St. George in the
                south, with most of our work clustered along the Wasatch
                Front.
              </p>
              <p className="text-bone/65 text-[15px]">
                The logo arches{" "}
                <span className="text-bone font-semibold">
                  WY · UT · MT
                </span>{" "}
                — Wyoming and Montana are on our roadmap as we grow.
                Every project today still happens on Utah ground.
              </p>
            </div>

            {/* Coverage spec block */}
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 font-mono text-[10px] uppercase tracking-[0.15em] mb-7 pb-6 border-b border-concrete/20">
              <div>
                <dt className="text-stone mb-1">HOME BASE</dt>
                <dd className="text-bone tabular-nums">Sandy, UT 84070</dd>
              </div>
              <div>
                <dt className="text-stone mb-1">CORRIDOR</dt>
                <dd className="text-bone tabular-nums">I-15 · 300 mi</dd>
              </div>
              <div>
                <dt className="text-stone mb-1">REGIONS</dt>
                <dd className="text-bone">Wasatch Front + St. George</dd>
              </div>
              <div>
                <dt className="text-stone mb-1">EXPANSION</dt>
                <dd className="text-steel-light">WY · MT · roadmap</dd>
              </div>
            </dl>

            {/* Link tiles */}
            <div className="flex flex-col gap-2.5">
              <Link
                href="/utah-concrete-contractor"
                className="group inline-flex items-center justify-between gap-3 px-4 py-3 border border-bone/15 hover:border-bone/40 hover:bg-bone/5 text-bone text-sm rounded-lg transition-colors"
              >
                <span className="font-medium">Utah service overview</span>
                <ArrowRight
                  size={14}
                  aria-hidden="true"
                  className="text-stone group-hover:text-bone group-hover:translate-x-0.5 transition-all"
                />
              </Link>
              <Link
                href="/wasatch-front-concrete-contractor"
                className="group inline-flex items-center justify-between gap-3 px-4 py-3 border border-bone/15 hover:border-bone/40 hover:bg-bone/5 text-bone text-sm rounded-lg transition-colors"
              >
                <span className="font-medium">Wasatch Front pillar</span>
                <ArrowRight
                  size={14}
                  aria-hidden="true"
                  className="text-stone group-hover:text-bone group-hover:translate-x-0.5 transition-all"
                />
              </Link>
              <Link
                href="/locations/sandy-utah"
                className="group inline-flex items-center justify-between gap-3 px-4 py-3 border border-bone/15 hover:border-bone/40 hover:bg-bone/5 text-bone text-sm rounded-lg transition-colors"
              >
                <span className="font-medium">Sandy — home base</span>
                <ArrowRight
                  size={14}
                  aria-hidden="true"
                  className="text-stone group-hover:text-bone group-hover:translate-x-0.5 transition-all"
                />
              </Link>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            {...scrollRevealProps}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <ServiceAreaMap
              eyebrow="ZIONCS://SERVICE-AREA · UTAH"
              title="Where projects happen."
              description="Wasatch Front cluster (Ogden through Provo, plus Park City). St. George marks the southern bookend."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
