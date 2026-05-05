import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead?: string;
  breadcrumbs: Crumb[];
}

export function PageHero({
  eyebrow,
  title,
  lead,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative bg-anthracite text-bone overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/topo-bg-dark.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(38, 34, 28, 0.6) 0%, rgba(26, 24, 20, 0.95) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-16 lg:pb-20">
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <p className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-steel-light mb-4">
          {eyebrow}
        </p>
        <h1 className="text-[clamp(2.25rem,4.6vw,3.5rem)] font-extrabold tracking-tight leading-[1.05] text-bone max-w-4xl mb-5">
          {title}
        </h1>
        {lead && (
          <p className="text-lg text-bone/80 max-w-2xl leading-relaxed">
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
