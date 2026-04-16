"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { StickerCard } from "@/components/decorative/StickerCard";
import { services } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const rotations = [-2, 1, -1, 2, -1, 1, -2, 1];

export function ServicesPreview() {
  return (
    <Section className="bg-sunday-dark">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-accent)] text-sunday-red mb-4">
            What we do
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-black text-5xl md:text-6xl leading-[0.95] tracking-tight max-w-3xl">
            Eight disciplines. One creative studio.
          </h2>
        </div>
        <Button href="/services" variant="ghost" size="md">
          All services →
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <StickerCard
              key={service.id}
              rotate={rotations[i % rotations.length]}
              className="flex flex-col gap-4 min-h-[220px]"
            >
              <motion.span
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sunday-red/15 text-sunday-red"
              >
                <Icon className="h-6 w-6" strokeWidth={2} />
              </motion.span>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-xl leading-tight">
                {service.title}
              </h3>
              <p className="text-sm text-sunday-text-muted leading-relaxed">
                {service.tagline}
              </p>
            </StickerCard>
          );
        })}
      </div>
    </Section>
  );
}
