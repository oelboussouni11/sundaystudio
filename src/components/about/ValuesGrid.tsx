"use client";

import { motion } from "framer-motion";
import { Target, Zap, Heart, Flame, type LucideIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";

type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const values: Value[] = [
  {
    icon: Target,
    title: "Strategy meets soul",
    description:
      "We don't choose between data and taste. Both lead to better work.",
  },
  {
    icon: Zap,
    title: "Fast, never rushed",
    description: "Hands-on production, quick decisions, zero bureaucracy.",
  },
  {
    icon: Heart,
    title: "Community first",
    description:
      "We build brands that people want to be part of, not just buy from.",
  },
  {
    icon: Flame,
    title: "Impact over output",
    description:
      "Deliverables are easy. Building presence is the real work.",
  },
];

export function ValuesGrid() {
  return (
    <Section className="bg-sunday-surface">
      <p className="text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-accent)] text-sunday-red mb-4">
        How we work
      </p>
      <h2 className="font-[family-name:var(--font-display)] font-black text-5xl md:text-6xl leading-[0.95] tracking-tight mb-12 max-w-3xl">
        Our values, unfiltered.
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl border-2 border-sunday-line bg-sunday-dark p-8 hover:border-sunday-red transition-colors"
            >
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sunday-red/15 text-sunday-red">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-2xl mb-2">
                {v.title}
              </h3>
              <p className="text-sunday-text-muted leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
