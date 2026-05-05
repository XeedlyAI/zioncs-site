export const EASE = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.2,
  normal: 0.5,
  section: 0.6,
  kpi: 1.4,
} as const;

export const STAGGER = {
  fast: 0.08,
  normal: 0.12,
  slow: 0.15,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.section, ease: EASE },
  },
} as const;

export const fadeUpChild = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE },
  },
} as const;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.normal,
      delayChildren: 0.08,
    },
  },
} as const;

export const fadeRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.4, ease: EASE },
  },
} as const;

export const scrollRevealProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-50px" },
} as const;
