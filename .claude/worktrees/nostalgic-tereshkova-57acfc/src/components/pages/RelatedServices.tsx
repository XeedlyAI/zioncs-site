import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/services";

interface RelatedServicesProps {
  /** Slugs to show. Falls back to all services minus the current one if omitted. */
  slugs?: string[];
  currentSlug?: string;
  title?: string;
  eyebrow?: string;
}

export function RelatedServices({
  slugs,
  currentSlug,
  title = "Related services",
  eyebrow = "ZIONCS://RELATED",
}: RelatedServicesProps) {
  const items = slugs
    ? slugs
        .map((s) => SERVICES.find((svc) => svc.slug === s))
        .filter((s): s is (typeof SERVICES)[number] => Boolean(s))
    : SERVICES.filter((s) => s.slug !== currentSlug).slice(0, 4);

  if (items.length === 0) return null;

  return (
    <section className="bg-bg-sand-wash py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-warm mb-4">
            {eyebrow}
          </p>
          <h2 className="text-[clamp(1.5rem,2.5vw,1.875rem)] font-extrabold tracking-tight text-anthracite leading-[1.15]">
            {title}
          </h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((s) => (
            <li key={s.slug}>
              <Link
                href={s.href}
                className="card-light p-6 block group h-full"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-steel mb-2">
                  {s.number} / {s.shortLabel.toUpperCase()}
                </p>
                <h3 className="text-base font-bold text-anthracite tracking-tight leading-snug mb-3">
                  {s.name}
                </h3>
                <p className="text-sm text-stone leading-relaxed mb-4">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-brand-orange group-hover:text-brand-orange-hover transition-colors font-semibold">
                  Learn more
                  <ArrowRight size={12} aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
