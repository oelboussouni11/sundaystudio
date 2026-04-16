import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { StorySection } from "@/components/about/StorySection";
import { VisionQuote } from "@/components/about/VisionQuote";
import { ValuesGrid } from "@/components/about/ValuesGrid";
import { TeamSection } from "@/components/about/TeamSection";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sunday Studio is a creative agency built for brands that want more than visibility.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <VisionQuote />
      <ValuesGrid />
      <TeamSection />
      <CTABanner />
    </>
  );
}
