import { HeroSection } from "@/components/home/HeroSection";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ApproachTimeline } from "@/components/home/ApproachTimeline";
import { WhySunday } from "@/components/home/WhySunday";
import { CTABanner } from "@/components/home/CTABanner";
import { Marquee } from "@/components/decorative/Marquee";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee text="LET'S BUILD SOMETHING THAT MOVES" />
      <WhoWeAre />
      <ServicesPreview />
      <ApproachTimeline />
      <WhySunday />
      <CTABanner />
    </>
  );
}
