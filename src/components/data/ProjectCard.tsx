import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  /** Show full timeline rows (gallery preview) vs. compact (homepage tease). */
  variant?: "full" | "compact";
}

const STATUS_COLOR: Record<Project["status"], string> = {
  COMPLETE: "text-rebar",
  "IN PROGRESS": "text-gold",
};

export function ProjectCard({ project, variant = "full" }: ProjectCardProps) {
  const showTimeline = variant === "full";
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card-dark overflow-hidden block group h-full flex flex-col"
    >
      {/* 4:3 image placeholder. Real images land via Track A Session 2 swap-in. */}
      <div
        className="relative aspect-[4/3] overflow-hidden border-b border-concrete/20"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #322D26 0%, #26221C 50%, #1A1814 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/topo-bg-dark.svg)",
            backgroundSize: "cover",
            opacity: 0.5,
          }}
        />
        <div className="absolute top-3 left-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] px-2 py-1 bg-anthracite/85 border border-concrete/30 text-bone/85 rounded">
            {project.category}
          </span>
        </div>
        <div className="absolute bottom-3 right-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] px-2 py-1 bg-anthracite/85 border border-concrete/30 text-stone rounded tabular-nums">
            {project.year}
          </span>
        </div>
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone mb-2">
          {project.service.toUpperCase()} · {project.city.toUpperCase()},{" "}
          {project.state}
        </p>
        <h3 className="text-base md:text-lg font-bold text-bone leading-snug mb-3 group-hover:text-brand-orange transition-colors">
          {project.title}
        </h3>

        {showTimeline && (
          <ul className="space-y-1 mb-5 font-mono text-[11px] text-bone/75 leading-relaxed">
            {project.timeline.slice(0, 4).map((entry) => (
              <li key={entry.day} className="flex gap-2">
                <span className="text-stone shrink-0 w-16">{entry.day}</span>
                <span className="text-bone/80 truncate">{entry.action}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-bone/70 pt-3 border-t border-concrete/15 mt-auto">
          <span>{project.scale}</span>
          <span className="text-stone">·</span>
          <span>{project.durationLabel}</span>
          <span className="text-stone">·</span>
          <span className={STATUS_COLOR[project.status]}>{project.status}</span>
        </div>
      </div>
    </Link>
  );
}
