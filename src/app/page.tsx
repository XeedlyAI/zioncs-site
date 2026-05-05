import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { KpiRibbon } from "@/components/home/KpiRibbon";
import { HomeIntelligenceConsole } from "@/components/home/HomeIntelligenceConsole";
import { IntelligenceConsole } from "@/components/console/IntelligenceConsole";
import { NumberedServiceGrid } from "@/components/home/NumberedServiceGrid";
import { WhyZionCS } from "@/components/home/WhyZionCS";
import { ProjectGalleryPreview } from "@/components/home/ProjectGalleryPreview";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { SocialFeedPreview } from "@/components/home/SocialFeedPreview";
import { HomeCTA } from "@/components/home/HomeCTA";
import {
  organizationSchema,
  localBusinessSchema,
} from "@/lib/structured-data";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Zion Concrete Specialists — Utah Flatwork Contractor",
  description:
    "Utah's flatwork crew. Driveways, pool decks, sport courts, commercial flatwork across the Wasatch Front and St. George. Show up on time, keep the worksite clean, get the job done right.",
  alternates: {
    canonical: "https://zioncs.com/",
  },
};

const orgJsonLd = organizationSchema({
  name: "Zion Concrete Specialists",
  url: "https://zioncs.com",
  logo: "https://zioncs.com/brand/zioncs-logo-horizontal.png",
  phone: CONTACT.phone,
  email: CONTACT.email,
  sameAs: [CONTACT.social.facebook, CONTACT.social.instagram],
});

const lbJsonLd = localBusinessSchema({
  name: "Zion Concrete Specialists",
  url: "https://zioncs.com",
  phone: CONTACT.phone,
  address: {
    street: CONTACT.address.street,
    city: CONTACT.address.city,
    state: CONTACT.address.state,
    zip: CONTACT.address.zip,
  },
  geo: { lat: 40.5649, lng: -111.8389 },
  hours: ["Mo-Fr 08:00-17:00"],
  image: "https://zioncs.com/brand/zioncs-logo-horizontal.png",
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lbJsonLd) }}
      />
      <Hero />
      <KpiRibbon />
      <HomeIntelligenceConsole />
      <IntelligenceConsole />
      <NumberedServiceGrid />
      <WhyZionCS />
      <ProjectGalleryPreview />
      <ProcessTimeline />
      <SocialFeedPreview />
      <HomeCTA />
    </>
  );
}
