import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you were looking for doesn't exist on zioncs.com. Head back home or browse services, projects, and the blog.",
  robots: { index: false, follow: true },
};

const SUGGESTIONS = [
  {
    label: "Browse services",
    href: "/services",
    blurb: "Driveways, patios, pool decks, commercial flatwork, the rest.",
  },
  {
    label: "See recent projects",
    href: "/projects",
    blurb: "Six recent residential and commercial pours across Utah.",
  },
  {
    label: "Request a quote",
    href: "/quote",
    blurb: "Multi-step intake — replies within 2 business hours.",
  },
  {
    label: "Read the blog",
    href: "/blog",
    blurb: "Field-tested guides on concrete in Utah's freeze-thaw climate.",
  },
];

export default function NotFound() {
  return (
    <section className="relative bg-anthracite text-bone overflow-hidden min-h-screen flex items-center">
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
            "linear-gradient(180deg, rgba(38, 34, 28, 0.5) 0%, rgba(26, 24, 20, 0.95) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <p className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-rebar mb-4">
          ZIONCS://STATUS · 404 · ROUTE-NOT-FOUND
        </p>
        <h1 className="text-[clamp(2.25rem,4.6vw,3.5rem)] font-extrabold tracking-tight leading-[1.05] text-bone max-w-3xl mb-5">
          That page isn&rsquo;t here.
        </h1>
        <p className="text-lg text-bone/80 max-w-2xl leading-relaxed mb-10">
          Either the URL was mistyped, the page moved, or it never
          existed. Either way, here&rsquo;s where most visitors are
          headed — pick one.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          {SUGGESTIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group block p-5 rounded-md border border-concrete/30 bg-anthracite-elevated/60 hover:border-brand-orange/60 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-brand-orange group-hover:text-brand-orange-hover font-semibold">
                  {s.label}
                </span>
                <ArrowRight
                  size={14}
                  className="text-brand-orange group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                />
              </div>
              <p className="text-sm text-bone/70 leading-relaxed">
                {s.blurb}
              </p>
            </Link>
          ))}
        </div>

        <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.12em] text-stone">
          <Link
            href="/"
            className="text-bone/80 hover:text-brand-orange transition-colors"
          >
            ← Back to home
          </Link>
        </p>
      </div>
    </section>
  );
}
