"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import { EASE, fadeUp, staggerContainer, scrollRevealProps } from "@/lib/motion";

export function NumberedServiceGrid() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...scrollRevealProps}
          variants={fadeUp}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
            ZIONCS://SERVICES · 11 OFFERINGS
          </p>
          <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-4">
            Eleven flatwork services. One Utah crew.
          </h2>
          <p className="text-stone leading-relaxed">
            From a backyard patio to a multi-site dumpster pad rollout — we
            handle residential, commercial, and enterprise concrete across the
            Wasatch Front and St. George.
          </p>
        </motion.div>

        <motion.ul
          {...scrollRevealProps}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10"
        >
          {SERVICES.map((service) => (
            <motion.li
              key={service.slug}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: EASE },
                },
              }}
              className="border-b border-warm-border last:border-b-0 md:[&:nth-last-child(2)]:border-b-0"
            >
              <Link
                href={service.href}
                className="group flex items-center justify-between gap-6 py-5 md:py-6 -mx-4 px-4 rounded-md hover:bg-brand-orange-muted transition-colors"
              >
                <div className="flex items-baseline gap-5 min-w-0">
                  <span className="font-mono text-base font-semibold text-steel tabular-nums shrink-0">
                    {service.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-bold text-lg sm:text-xl text-anthracite tracking-tight leading-tight uppercase">
                      {service.name}
                    </h3>
                    <p className="text-sm text-stone mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  size={20}
                  className="text-stone group-hover:text-brand-orange group-hover:translate-x-1 transition-all shrink-0"
                  aria-hidden="true"
                />
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          {...scrollRevealProps}
          variants={fadeUp}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-brand-orange hover:text-brand-orange-hover transition-colors font-semibold"
          >
            View all services
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
