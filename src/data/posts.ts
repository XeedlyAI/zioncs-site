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
import * as commercialScheduling from "@/content/blog/commercial-concrete-pour-scheduling";
import * as evaluatingCommercialSubs from "@/content/blog/evaluating-commercial-concrete-subs";
import * as multiSitePrograms from "@/content/blog/multi-site-concrete-maintenance-programs";
import * as vendorConsolidation from "@/content/blog/vendor-consolidation-concrete-contractor";
// Core 60 expansion — RESIDENTIAL
import * as concreteSealing from "@/content/blog/concrete-sealing-utah";
import * as bestTimeToPour from "@/content/blog/best-time-to-pour-concrete-utah";
import * as stampedPatterns from "@/content/blog/stamped-concrete-patterns-utah";
import * as concreteVsPaversVsAsphalt from "@/content/blog/concrete-vs-pavers-vs-asphalt-driveway";
import * as maintainDriveway from "@/content/blog/how-to-maintain-a-concrete-driveway-utah";
import * as backyardIdeas from "@/content/blog/backyard-concrete-ideas-utah";
// Core 60 expansion — BUILDER
import * as flatworkScheduling from "@/content/blog/concrete-flatwork-scheduling-for-builders";
import * as readSubBid from "@/content/blog/how-to-read-a-concrete-sub-bid";
import * as tolerancesCallbacks from "@/content/blog/concrete-tolerances-and-callbacks";
// Core 60 expansion — COMMERCIAL
import * as tiltUpVsCastInPlace from "@/content/blog/tilt-up-vs-cast-in-place-concrete-utah";
import * as commercialMaintenance from "@/content/blog/commercial-concrete-maintenance-program-utah";
import * as adaRequirements from "@/content/blog/ada-concrete-requirements-utah";
import * as curingHeatCold from "@/content/blog/curing-concrete-in-utah-heat-and-cold";
// Core 60 expansion — ENTERPRISE
import * as maintenanceBudgeting from "@/content/blog/concrete-maintenance-budgeting-for-facility-managers";
import * as inspectionChecklist from "@/content/blog/multi-site-concrete-inspection-checklist";
import * as rfpVsPreferredVendor from "@/content/blog/concrete-rfp-vs-preferred-vendor";

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
  [commercialScheduling.meta.slug]: commercialScheduling,
  [evaluatingCommercialSubs.meta.slug]: evaluatingCommercialSubs,
  [multiSitePrograms.meta.slug]: multiSitePrograms,
  [vendorConsolidation.meta.slug]: vendorConsolidation,
  // Core 60 expansion — RESIDENTIAL
  [concreteSealing.meta.slug]: concreteSealing,
  [bestTimeToPour.meta.slug]: bestTimeToPour,
  [stampedPatterns.meta.slug]: stampedPatterns,
  [concreteVsPaversVsAsphalt.meta.slug]: concreteVsPaversVsAsphalt,
  [maintainDriveway.meta.slug]: maintainDriveway,
  [backyardIdeas.meta.slug]: backyardIdeas,
  // Core 60 expansion — BUILDER
  [flatworkScheduling.meta.slug]: flatworkScheduling,
  [readSubBid.meta.slug]: readSubBid,
  [tolerancesCallbacks.meta.slug]: tolerancesCallbacks,
  // Core 60 expansion — COMMERCIAL
  [tiltUpVsCastInPlace.meta.slug]: tiltUpVsCastInPlace,
  [commercialMaintenance.meta.slug]: commercialMaintenance,
  [adaRequirements.meta.slug]: adaRequirements,
  [curingHeatCold.meta.slug]: curingHeatCold,
  // Core 60 expansion — ENTERPRISE
  [maintenanceBudgeting.meta.slug]: maintenanceBudgeting,
  [inspectionChecklist.meta.slug]: inspectionChecklist,
  [rfpVsPreferredVendor.meta.slug]: rfpVsPreferredVendor,
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
