import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/pages/PageHero";
import { ProjectCard } from "@/components/data/ProjectCard";
import { ServiceSpecBlock } from "@/components/data/ServiceSpecBlock";
import {
  getAllProjects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/data/projects";
import { breadcrumbListSchema } from "@/lib/structured-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const url = `https://zioncs.com/projects/${slug}`;
  return {
    title: `${project.title} — ${project.city}, ${project.state} | Zion CS`,
    description: project.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — ${project.city}, ${project.state}`,
      description: project.excerpt,
      url,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(slug, 3);
  const url = `https://zioncs.com/projects/${slug}`;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    {
      label:
        project.title.length > 50
          ? project.title.slice(0, 47) + "…"
          : project.title,
    },
  ];

  const breadcrumbsJsonLd = breadcrumbListSchema([
    { name: "Home", url: "https://zioncs.com/" },
    { name: "Projects", url: "https://zioncs.com/projects" },
    { name: project.title, url },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow={`ZIONCS://PROJECT · ${project.category}`}
        title={project.title}
        lead={project.excerpt}
        heroImage={project.image}
        heroAlt={`${project.title} — ${project.city}, ${project.state}`}
      />

      {/* Project briefing block — geo + status + scale + duration on a dark band */}
      <section className="relative bg-anthracite-elevated text-bone border-y border-concrete/20 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-5 gap-y-5 gap-x-6 font-mono text-[11px] uppercase tracking-[0.15em]">
            <div>
              <dt className="text-stone mb-1">CITY</dt>
              <dd className="text-bone tabular-nums">
                {project.city}, {project.state}
              </dd>
            </div>
            <div>
              <dt className="text-stone mb-1">SCALE</dt>
              <dd className="text-bone tabular-nums">{project.scale}</dd>
            </div>
            <div>
              <dt className="text-stone mb-1">DURATION</dt>
              <dd className="text-bone tabular-nums">
                {project.durationLabel}
              </dd>
            </div>
            <div>
              <dt className="text-stone mb-1">YEAR</dt>
              <dd className="text-bone tabular-nums">{project.year}</dd>
            </div>
            <div>
              <dt className="text-stone mb-1">STATUS</dt>
              <dd
                className={
                  project.status === "COMPLETE" ? "text-rebar" : "text-gold"
                }
              >
                {project.status}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Body: scope + spec sidebar */}
      <section className="bg-bone py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                01 / SCOPE
              </p>
              <h2 className="text-[clamp(1.5rem,2.5vw,1.875rem)] font-extrabold tracking-tight text-anthracite leading-[1.15] mb-5">
                What we did.
              </h2>
              <div className="space-y-5 text-anthracite/85 text-lg leading-relaxed">
                {project.scope.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mt-12 mb-4">
                02 / TIMELINE
              </p>
              <h2 className="text-[clamp(1.5rem,2.5vw,1.875rem)] font-extrabold tracking-tight text-anthracite leading-[1.15] mb-5">
                Day-by-day.
              </h2>
              <ol className="space-y-4 mt-6">
                {project.timeline.map((entry, idx) => (
                  <li
                    key={idx}
                    className="grid grid-cols-[5.5rem_1fr] gap-4 items-baseline border-b border-warm-border pb-3 last:border-b-0"
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.12em] font-semibold text-steel tabular-nums">
                      {entry.day}
                    </span>
                    <span className="text-anthracite/85 leading-relaxed">
                      {entry.action}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-28 space-y-4">
                <ServiceSpecBlock
                  title={`${project.service.toUpperCase()} · ${project.city.toUpperCase()}`}
                  specs={project.specs.map((s) => ({ ...s }))}
                  footnote={`PROJECT GEO · ${project.geo.lat.toFixed(4)}° N · ${Math.abs(project.geo.lng).toFixed(4)}° W`}
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-bg-sand-wash py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
                ZIONCS://RELATED-PROJECTS
              </p>
              <h2 className="text-[clamp(1.5rem,2.5vw,1.875rem)] font-extrabold tracking-tight text-anthracite leading-[1.15]">
                Other recent projects.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} variant="compact" />
              ))}
            </div>
          </div>
        </section>
      )}

    </>
  );
}
