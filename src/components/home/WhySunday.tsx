"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { whySunday } from "@/lib/constants";

export function WhySunday() {
  return (
    <Section className="bg-sunday-dark">
      <div className="max-w-3xl mb-12">
        <p className="text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-accent)] text-sunday-red mb-4">
          Why Sunday
        </p>
        <h2 className="font-[family-name:var(--font-display)] font-black text-5xl md:text-6xl leading-[0.95] tracking-tight">
          What makes us <span className="text-sunday-red">different</span>.
        </h2>
      </div>
      <div className="flex flex-wrap gap-3 md:gap-4">
        {whySunday.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
            className="cursor-default rounded-full border-2 border-sunday-red/50 bg-sunday-red/10 px-6 py-3 text-base md:text-lg font-semibold hover:bg-sunday-red hover:text-white transition-colors"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </Section>
  );
}
