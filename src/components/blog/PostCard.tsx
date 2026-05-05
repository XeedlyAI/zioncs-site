import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PostMeta } from "@/types/post";
import { getAuthor } from "@/lib/authors";

interface PostCardProps {
  meta: PostMeta;
  variant?: "light" | "dark";
}

const SILO_LABEL: Record<PostMeta["siloIntent"], string> = {
  RESIDENTIAL: "RESIDENTIAL",
  BUILDER: "BUILDER",
  COMMERCIAL: "COMMERCIAL",
  ENTERPRISE: "ENTERPRISE",
};

export function PostCard({ meta, variant = "light" }: PostCardProps) {
  const author = getAuthor(meta.authorSlug);
  const isDark = variant === "dark";

  return (
    <Link
      href={`/blog/${meta.slug}`}
      className={`block group h-full ${isDark ? "card-dark" : "card-light"} status-steel p-6 md:p-7`}
    >
      <p
        className={`font-mono text-[10px] font-semibold uppercase tracking-[0.15em] mb-3 ${
          isDark ? "text-steel-light" : "text-steel"
        }`}
      >
        {SILO_LABEL[meta.siloIntent]} · {meta.readingTimeMinutes} MIN
      </p>
      <h3
        className={`text-lg sm:text-xl font-bold tracking-tight leading-snug mb-3 ${
          isDark ? "text-bone" : "text-anthracite"
        }`}
      >
        {meta.title}
      </h3>
      <p
        className={`text-sm leading-relaxed mb-5 line-clamp-3 ${
          isDark ? "text-bone/70" : "text-stone"
        }`}
      >
        {meta.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.12em] ${
            isDark ? "text-stone" : "text-slate-warm"
          }`}
        >
          {author.name}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] font-semibold transition-colors ${
            isDark
              ? "text-brand-orange group-hover:text-paper"
              : "text-brand-orange group-hover:text-brand-orange-hover"
          }`}
        >
          Read
          <ArrowRight size={12} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
