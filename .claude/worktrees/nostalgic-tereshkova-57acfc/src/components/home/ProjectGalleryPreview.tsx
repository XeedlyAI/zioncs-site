"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/data/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";
import { EASE, fadeUp, staggerContainer, scrollRevealProps } from "@/lib/motion";

export function ProjectGalleryPreview() {
  // Pull the first 4 featured projects across personas
  const projects = getFeaturedProjects().slice(0, 4);
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
          {projects.map((p) => (
            <motion.div
              key={p.slug}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: EASE },
                },
              }}
            >
              <ProjectCard project={p} variant="compact" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
