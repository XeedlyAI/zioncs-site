import type { Project } from "@/data/projects";
import type {
  MediaImage,
  MediaVideo,
  MediaBeforeAfter,
  ProjectMedia,
} from "@/types/media";
import { isImage, isVideo, isBeforeAfter } from "@/types/media";

/**
 * The uniform media accessor every surface calls. Returns the project's
 * explicit `media[]` when present; otherwise synthesizes a single-image list
 * from the legacy `image` field so nothing breaks before real media lands.
 */
export function getProjectMedia(project: Project): ProjectMedia[] {
  if (project.media && project.media.length > 0) {
    return [...project.media];
  }
  if (project.image) {
    const fallback: MediaImage = {
      kind: "image",
      role: "hero",
      src: project.image,
      alt: `${project.title} — ${project.city}, ${project.state}`,
    };
    return [fallback];
  }
  return [];
}

/** True when a project has any real media beyond the legacy single image. */
export function hasRichMedia(project: Project): boolean {
  return Boolean(project.media && project.media.length > 0);
}

/** True when a project has at least one video (used to show a ▶ badge on cards). */
export function hasVideo(project: Project): boolean {
  return Boolean(project.media?.some(isVideo));
}

/** First media matching a role, if any. */
export function pickMediaByRole(
  media: readonly ProjectMedia[],
  role: ProjectMedia["role"]
): ProjectMedia | undefined {
  return media.find((m) => m.role === role);
}

/** The best card thumbnail: prefer a loop video's poster or the hero image. */
export function getCardPoster(project: Project): string | undefined {
  const media = getProjectMedia(project);
  const hero = media.find(isImage);
  if (hero) return hero.src;
  const vid = media.find(isVideo);
  if (vid) return vid.poster;
  return project.image;
}

/** A short in-view loop for hover-play cards, if the project has one. */
export function getHoverLoop(project: Project): MediaVideo | undefined {
  return project.media?.filter(isVideo).find((v) => v.loop);
}

/** The scrubbable timelapse, if present. */
export function getTimelapse(project: Project): MediaVideo | undefined {
  return project.media?.filter(isVideo).find((v) => v.role === "timelapse");
}

/** The before/after pair, if present. */
export function getBeforeAfter(project: Project): MediaBeforeAfter | undefined {
  return project.media?.find(isBeforeAfter);
}

export { isImage, isVideo, isBeforeAfter };
