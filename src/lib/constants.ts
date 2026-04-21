export const siteMetadata = {
  name: "Sunday Studio®",
  tagline: "We don't just create content. We build presence.",
  description:
    "Sunday Studio® is a creative agency at the intersection of content, branding, and culture, focused on lifestyle, sport, and community.",
  url: "https://sundaystudio.co",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Sneak Peek", href: "/sneak-peek" },
] as const;

import type { LucideIcon } from "lucide-react";
import {
  Clapperboard,
  Compass,
  Sparkles,
  PenTool,
  Shirt,
  Building2,
  PartyPopper,
  Smartphone,
} from "lucide-react";

export type Service = {
  id: number;
  title: string;
  icon: LucideIcon;
  tagline: string;
  items: string[];
};

export const services: Service[] = [
  {
    id: 1,
    title: "Content Creation",
    icon: Clapperboard,
    tagline: "Stories you can feel, frame by frame.",
    items: [
      "Cinematic videos (brand films, campaigns, social content)",
      "Photography (lifestyle, sport, product, editorial)",
      "Short-form content (Reels, TikTok, ads)",
      "Event coverage (premium, fast delivery)",
    ],
  },
  {
    id: 2,
    title: "Creative Direction",
    icon: Compass,
    tagline: "Big ideas, sharp execution.",
    items: [
      "Concept creation",
      "Storytelling & scripting",
      "Moodboards & visual universes",
      "Campaign ideation",
    ],
  },
  {
    id: 3,
    title: "Branding & Identity",
    icon: Sparkles,
    tagline: "Brands with a point of view.",
    items: [
      "Brand positioning",
      "Visual identity (logo, colors, typography)",
      "Brand guidelines",
      "Rebranding / brand refresh",
    ],
  },
  {
    id: 4,
    title: "Graphic Design",
    icon: PenTool,
    tagline: "Visuals that stop the scroll.",
    items: [
      "Social media visuals",
      "Posters, flyers, campaigns",
      "Brand assets & digital content",
      "Presentation & pitch design",
    ],
  },
  {
    id: 5,
    title: "Textile & Merch Design",
    icon: Shirt,
    tagline: "Wearable brand energy.",
    items: [
      "Apparel design (t-shirts, hoodies, sportswear)",
      "Capsule collections & drops",
      "Branding for uniforms / teams / events",
      "Creative direction for fashion visuals",
    ],
  },
  {
    id: 6,
    title: "Brand Building",
    icon: Building2,
    tagline: "From zero to cultural icon.",
    items: [
      "Image strategy",
      "Social media direction",
      "Tone & storytelling consistency",
      "Launch strategies",
    ],
  },
  {
    id: 7,
    title: "Event & Experience Production",
    icon: PartyPopper,
    tagline: "IRL moments people remember.",
    items: [
      "Sports events (padel, tournaments, activations)",
      "Brand activations",
      "Launch events",
      "Community-driven experiences",
    ],
  },
  {
    id: 8,
    title: "Digital & Social Execution",
    icon: Smartphone,
    tagline: "Always on, always on-brand.",
    items: [
      "Content planning",
      "Posting strategy",
      "Performance creatives",
      "Growth-focused formats",
    ],
  },
];

export const approach = [
  {
    step: 1,
    title: "Understand",
    description: "We go deep into your brand, not just surface-level briefs.",
  },
  {
    step: 2,
    title: "Create",
    description: "Strong concepts before execution.",
  },
  {
    step: 3,
    title: "Execute",
    description: "High-end production, fast and precise.",
  },
  {
    step: 4,
    title: "Amplify",
    description: "Content designed to perform, not just look good.",
  },
];

export const whySunday = [
  "Creative + strategic (rare combination)",
  "Strong branding + strong execution",
  "Fast, flexible, and hands-on",
  "Real experience (events, content, community)",
  "We focus on impact, not just deliverables",
];

export const whatWeCanDo = [
  "Build your brand from zero",
  "Design your identity and visuals",
  "Create your merch / apparel line",
  "Produce high-end content",
  "Launch campaigns that stand out",
  "Elevate your events and presence",
  "Turn your brand into a story people follow",
];

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/almostsundaystudio/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/almostsundaystudio/" },
];
