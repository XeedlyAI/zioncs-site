import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { PageCTA } from "@/components/pages/PageCTA";
import { ProjectGallery } from "@/components/gallery/ProjectGallery";
import { getAllProjects } from "@/data/projects";
import { breadcrumbListSchema } from "@/lib/structured-data";

const PAGE_URL = "https://zioncs.com/projects";

export const metadata: Metadata = {
  title: "Projects | Zion Concrete Specialists",
  description:
    "Recent concrete flatwork projects across Utah — residential driveways, builder developments, commercial parking lots, multi-site enterprise programs.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Projects — Zion Concrete Specialists",
    description:
      "Recent concrete projects across the Wasatch Front and St. George.",
    url: PAGE_URL,
    type: "website",
  },
};

const BREADCRUMBS = [
  { label: "Home", href: "/" },
  { label: "Projects" },
];

const breadcrumbsJsonLd = breadcrumbListSchema([
  { name: "Home", url: "https://zioncs.com/" },
  { name: "Projects", url: PAGE_URL },
]);

export default function ProjectsPage() {
  const projects = getAllProjects();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <PageHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="ZIONCS://PROJECT-LOG"
        title="Recent work across four buyer types."
        lead="Filter by category. Each project shows the timeline, scale, and engineering specs we delivered. Real imagery rolling in as projects publish — placeholder cards in the meantime."
      />

      <section className="bg-bone py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectGallery projects={projects} />
        </div>
      </section>

      <PageCTA
        title="Got a project?"
        body="We work residential, builder, commercial, and enterprise. Tell us about yours — we'll send a written quote within 7 days."
      />
    </>
  );
}
