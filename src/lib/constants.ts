export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2x1": 1536,
} as const;

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 500,
  slow: 1000,
  preloader: 10000,
} as const;

export const SITE_CONFIG = {
  name: "Terrene",
  tagline: "Space that feel rooted, human, and quietly bold",
  description:
    "At Terrene, we shape environments that elevate daily life, invite pause, and speak through texture and light.",
  url: "https://terrene.studio",
} as const;

export const STATS = [
  { value: "225+", label: "Completed design studies" },
  { value: "36", label: "Ongoing spatial explorations" },
  { value: "12", label: "Cross-disciplinary collaborators" },
  { value: "98%", label: "Return rate across commissions" },
] as const;
