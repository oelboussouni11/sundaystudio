import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceSection } from "@/components/services/ServiceSection";
import { WhatWeCanDo } from "@/components/services/WhatWeCanDo";
import { CTABanner } from "@/components/home/CTABanner";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Eight creative disciplines: content, branding, design, merch, events, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <div>
        {services.map((service, i) => (
          <ServiceSection
            key={service.id}
            serviceId={service.id}
            variant={i % 2 === 0 ? "dark" : "cream"}
          />
        ))}
      </div>
      <WhatWeCanDo />
      <CTABanner />
    </>
  );
}
