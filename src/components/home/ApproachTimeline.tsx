"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Arrow } from "@/components/decorative/Doodle";
import { approach } from "@/lib/constants";

export function ApproachTimeline() {
  return (
    <Section className="bg-sunday-surface">
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-accent)] text-sunday-red mb-4">
          Our approach
        </p>
        <h2 className="font-[family-name:var(--font-display)] font-black text-5xl md:text-6xl leading-[0.95] tracking-tight">
          Four steps. Zero bullshit.
        </h2>
      </div>

      <div className="relative grid gap-8 md:grid-cols-4">
        {approach.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1 }}
            className="relative rounded-3xl border-2 border-sunday-line bg-sunday-dark p-6 hover:border-sunday-red transition-colors"
          >
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sunday-red text-2xl font-black text-white font-[family-name:var(--font-display)]">
              {step.step}
            </div>
            <h3 className="font-[family-name:var(--font-display)] font-bold text-2xl mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-sunday-text-muted leading-relaxed">
              {step.description}
            </p>
            {i < approach.length - 1 && (
              <Arrow className="hidden md:block absolute top-10 -right-6 w-12 opacity-60" />
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
