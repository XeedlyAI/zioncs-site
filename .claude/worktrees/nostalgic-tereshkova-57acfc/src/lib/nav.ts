export type NavLink = {
  label: string;
  href: string;
};

export const PRIMARY_NAV: readonly NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_SERVICES: readonly NavLink[] = [
  { label: "Concrete Driveways", href: "/services/concrete-driveways-utah" },
  {
    label: "Stamped & Decorative",
    href: "/services/stamped-decorative-concrete-utah",
  },
  { label: "Pool Decks", href: "/services/pool-decks-utah" },
  { label: "Patios", href: "/services/concrete-patios-utah" },
  {
    label: "Concrete Repair",
    href: "/services/residential-concrete-repair-utah",
  },
  {
    label: "Commercial Flatwork",
    href: "/services/commercial-flatwork-parking-lots-sidewalks",
  },
] as const;

export const FOOTER_COMPANY: readonly NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "For Builders", href: "/builders" },
  { label: "Commercial", href: "/commercial" },
  { label: "Multi-Site", href: "/multi-site" },
] as const;

export const FOOTER_LEGAL: readonly NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
] as const;
