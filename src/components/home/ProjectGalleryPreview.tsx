"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { EASE, fadeUp, staggerContainer, scrollRevealProps } from "@/lib/motion";

type PreviewProject = {
  number: string;
  category: string;
  city: string;
  title: string;
  scale: string;
  duration: string;
  status: "COMPLETE" | "IN PROGRESS";
};

// Placeholder data — real ProjectCard component + project data file lands in Wave 5.
const PREVIEW: readonly PreviewProject[] = [
  {
    number: "01",
    category: "DRIVEWAY",
    city: "Sandy, UT",
    title: "Stamped Driveway with Decorative Border",
    scale: "1,800 SQ FT",
    duration: "4 DAYS",
    status: "COMPLETE",
  },
  {
    number: "02",
    category: "BUILDER",
    city: "Lehi, UT",
    title: "Townhome Development Flatwork",
    scale: "8,000 SQ FT",
    duration: "9 DAYS",
    status: "COMPLETE",
  },
  {
    number: "03",
    category: "COMMERCIAL",
    city: "Draper, UT",
    title: "Retail Center Parking + ADA Sidewalks",
    scale: "12,000 SQ FT",
    duration: "12 DAYS",
    status: "COMPLETE",
  },
  {
    number: "04",
    category: "ENTERPRISE",
    city: "Multi-site, UT",
    title: "Dumpster Pad Rollout · 14 Sites",
    scale: "14 SITES",
    duration: "ROLLING",
    status: "IN PROGRESS",
  },
];

export function ProjectGalleryPreview() {
  return (
    <section className="relative bg-anthracite text-bone py-24 md:py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/topo-bg-dark.svg)",
          backgroundSize: "cover",
          opacity: 0.6,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...scrollRevealProps}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
        >
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel-light mb-4">
              ZIONCS://PROJECT-LOG
            </p>
            <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-extrabold tracking-tight text-bone leading-[1.1] mb-4">
              Recent work across four buyer types.
            </h2>
            <p className="text-bone/70 leading-relaxed">
              Every project ships with a written timeline, a cleanup standard,
              and a finish that holds up to Utah freeze-thaw.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-brand-orange hover:text-paper transition-colors font-semibold shrink-0"
          >
            View all projects
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </motion.div>

        <motion.div
          {...scrollRevealProps}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {PREVIEW.map((p) => (
            <motion.article
              key={p.number}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: EASE },
                },
              }}
              className="card-dark overflow-hidden"
            >
              {/* Image placeholder — replaced when Track A Session 2 produces gallery images */}
              <div
                aria-hidden="true"
                className="aspect-[4/3] relative overflow-hidden border-b border-concrete/20"
                style={{
                  background:
                    "linear-gradient(135deg, #322D26 0%, #26221C 50%, #1A1814 100%)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url(/topo-bg-dark.svg)",
                    backgroundSize: "cover",
                    opacity: 0.5,
                  }}
                />
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] px-2 py-1 bg-anthracite/80 border border-concrete/30 text-bone/85 rounded">
                    {p.number} / {p.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone mb-2">
                  {p.city}
                </p>
                <h3 className="text-base font-bold text-bone leading-snug mb-4 line-clamp-2">
                  {p.title}
                </h3>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-bone/70 pt-3 border-t border-concrete/15">
                  <span>{p.scale}</span>
                  <span className="text-stone">·</span>
                  <span>{p.duration}</span>
                  <span className="text-stone">·</span>
                  <span
                    className={
                      p.status === "COMPLETE"
                        ? "text-rebar"
                        : "text-gold"
                    }
                  >
                    {p.status}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
