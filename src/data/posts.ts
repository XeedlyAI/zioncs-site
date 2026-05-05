import type { PostMeta, PostModule } from "@/types/post";
import * as howToChoose from "@/content/blog/how-to-choose-a-concrete-contractor-in-utah";
import * as whyUtah from "@/content/blog/why-utah-concrete-cracks";
import * as drivewayReplaceRepair from "@/content/blog/driveway-replacement-vs-repair";
import * as commonProblems from "@/content/blog/10-common-residential-concrete-problems";
import * as whatToExpect from "@/content/blog/what-to-expect-when-you-request-a-concrete-quote";
import * as howToVet from "@/content/blog/how-to-vet-a-concrete-subcontractor";
import * as subReliability from "@/content/blog/concrete-sub-reliability-vs-lowest-bid";
import * as subFailures from "@/content/blog/common-concrete-sub-failures";
import * as prePourChecklist from "@/content/blog/pre-pour-checklist-for-builders";
import * as utahSoil from "@/content/blog/utah-soil-conditions-commercial-foundations";

const POST_MODULES: Record<string, PostModule> = {
  [howToChoose.meta.slug]: howToChoose,
  [whyUtah.meta.slug]: whyUtah,
  [drivewayReplaceRepair.meta.slug]: drivewayReplaceRepair,
  [commonProblems.meta.slug]: commonProblems,
  [whatToExpect.meta.slug]: whatToExpect,
  [howToVet.meta.slug]: howToVet,
  [subReliability.meta.slug]: subReliability,
  [subFailures.meta.slug]: subFailures,
  [prePourChecklist.meta.slug]: prePourChecklist,
  [utahSoil.meta.slug]: utahSoil,
};

export function getAllPostSlugs(): string[] {
  return Object.keys(POST_MODULES);
}

export function getAllPosts(): PostMeta[] {
  return Object.values(POST_MODULES)
    .map((m) => m.meta)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getPostBySlug(slug: string): PostModule | null {
  return POST_MODULES[slug] ?? null;
}

export function getRelatedPosts(currentSlug: string, slugs: readonly string[]): PostMeta[] {
  const explicit = slugs
    .map((s) => POST_MODULES[s]?.meta)
    .filter((m): m is PostMeta => Boolean(m));
  if (explicit.length >= 3) return explicit.slice(0, 3);
  // Pad with most-recent siblings if explicit list is short
  const fillers = getAllPosts()
    .filter(
      (m) =>
        m.slug !== currentSlug && !explicit.some((e) => e.slug === m.slug)
    )
    .slice(0, 3 - explicit.length);
  return [...explicit, ...fillers].slice(0, 3);
}
