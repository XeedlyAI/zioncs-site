import { PageHero } from "./PageHero";
import { FaqSection, type FaqItem } from "./FaqSection";
import { PageCTA } from "./PageCTA";
import { type Crumb } from "./Breadcrumbs";

interface LocationPageTemplateProps {
  breadcrumbs: Crumb[];
  eyebrow: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  faqs: FaqItem[];
  ctaTitle?: string;
  ctaBody?: string;
  ctaSecondaryHref?: string;
  ctaSecondaryLabel?: string;
}

/**
 * Shared template for Tier 2 city / location pages.
 * Same chrome as the pillar template but tuned for shorter, more local copy.
 */
export function LocationPageTemplate({
  breadcrumbs,
  eyebrow,
  title,
  lead,
  children,
  faqs,
  ctaTitle,
  ctaBody,
  ctaSecondaryHref,
  ctaSecondaryLabel,
}: LocationPageTemplateProps) {
  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow={eyebrow}
        title={title}
        lead={lead}
      />
      {children}
      <FaqSection items={faqs} />
      <PageCTA
        title={ctaTitle}
        body={ctaBody}
        secondaryHref={ctaSecondaryHref}
        secondaryLabel={ctaSecondaryLabel}
      />
    </>
  );
}
