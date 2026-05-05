"use client";

import { useState, useMemo } from "react";
import { ProjectCard } from "@/components/data/ProjectCard";
import type { Project, ProjectCategory } from "@/data/projects";

type FilterKey = "ALL" | ProjectCategory;

const FILTERS: readonly { key: FilterKey; label: string }[] = [
  { key: "ALL", label: "All projects" },
  { key: "RESIDENTIAL", label: "Residential" },
  { key: "BUILDER", label: "Builder" },
  { key: "COMMERCIAL", label: "Commercial" },
  { key: "ENTERPRISE", label: "Enterprise" },
];

interface ProjectGalleryProps {
  projects: Project[];
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [filter, setFilter] = useState<FilterKey>("ALL");

  const filtered = useMemo(() => {
    if (filter === "ALL") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter, projects]);

  // Counts per filter for the chip labels
  const counts = useMemo(() => {
    const c: Record<FilterKey, number> = {
      ALL: projects.length,
      RESIDENTIAL: 0,
      BUILDER: 0,
      COMMERCIAL: 0,
      ENTERPRISE: 0,
    };
    for (const p of projects) c[p.category]++;
    return c;
  }, [projects]);

  return (
    <div>
      {/* Filter chips */}
      <div
        className="flex flex-wrap gap-2 mb-10"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {FILTERS.map((f) => {
          const active = filter === f.key;
          const count = counts[f.key];
          if (count === 0 && f.key !== "ALL") return null;
          return (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.key)}
              className={
                "inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors " +
                (active
                  ? "bg-brand-orange text-paper border border-brand-orange"
                  : "bg-paper text-anthracite border border-warm-border hover:border-anthracite")
              }
            >
              <span>{f.label}</span>
              <span
                className={
                  "tabular-nums " +
                  (active ? "text-paper/85" : "text-stone")
                }
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="font-mono text-sm text-stone uppercase tracking-[0.1em]">
          No projects in this category yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}
