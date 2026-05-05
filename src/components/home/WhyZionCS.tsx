"use client";

import { motion } from "framer-motion";
import { Clock, Sparkles, Hammer, MapPin } from "lucide-react";
import { EASE, fadeUp, staggerContainer, scrollRevealProps } from "@/lib/motion";

const USPS = [
  {
    icon: Clock,
    eyebrow: "01 / SHOW UP ON TIME",
    title: "On the day. At the hour.",
    body: "Schedules slip when subs flake. We don't. The crew arrives when we said, with the equipment we said, and the prep work already squared away.",
  },
  {
    icon: Sparkles,
    eyebrow: "02 / KEEP THE WORKSITE CLEAN",
    title: "We leave it tidier than we found it.",
    body: "Concrete jobs make a mess. Cleanup isn't a phase — it's continuous. By end-of-day every day, the site is organized, swept, and walkable.",
  },
  {
    icon: Hammer,
    eyebrow: "03 / GET THE JOB DONE RIGHT",
    title: "9+ years. 200+ projects. Five-star reviews.",
    body: "Pool decks built our reputation — precision craft on the highest-visibility flatwork in your yard. Every service since has held that bar.",
  },
  {
    icon: MapPin,
    eyebrow: "04 / WASATCH FRONT + ST. GEORGE",
    title: "Local crew. No subcontractor surprises.",
    body: "Sandy, Salt Lake, Draper, Lehi, Provo, Ogden, Park City, St. George. One Utah team. One point of contact. No phone-tag with offshore dispatchers.",
  },
];

export function WhyZionCS() {
  return (
    <section className="relative bg-bg-orange-tinted-light py-24 md:py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: "url(/topo-bg-light.svg)",
          backgroundSize: "cover",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...scrollRevealProps}
          variants={fadeUp}
          className="text-center mb-14 md:mb-16 max-w-2xl mx-auto"
        >
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-orange mb-4">
            ZIONCS://WHY-CHOOSE-US
          </p>
          <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-extrabold tracking-tight text-anthracite leading-[1.1] mb-4">
            Four reasons builders, homeowners, and developers stay with us.
          </h2>
          <p className="text-stone leading-relaxed">
            The differentiators aren&rsquo;t marketing. They&rsquo;re what every
            review on Google says, in different words.
          </p>
        </motion.div>

        <motion.div
          {...scrollRevealProps}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {USPS.map((usp) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={usp.eyebrow}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: EASE },
                  },
                }}
                className="card-light p-7 md:p-8 status-orange"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-brand-orange/10 text-brand-orange mb-5">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-orange mb-2">
                  {usp.eyebrow}
                </p>
                <h3 className="text-xl font-bold tracking-tight text-anthracite mb-3 leading-tight">
                  {usp.title}
                </h3>
                <p className="text-stone leading-relaxed">{usp.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
