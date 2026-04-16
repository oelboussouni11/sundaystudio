"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { whatWeCanDo } from "@/lib/constants";

export function WhatWeCanDo() {
  return (
    <Section className="bg-sunday-surface">
      <p className="text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-accent)] text-sunday-red mb-4">
        Put us to work
      </p>
      <h2 className="font-[family-name:var(--font-display)] font-black text-5xl md:text-6xl leading-[0.95] tracking-tight mb-12 max-w-3xl">
        What we can do <span className="text-sunday-red">for you</span>.
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {whatWeCanDo.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ x: 8 }}
            className="group flex items-center gap-4 rounded-2xl border-2 border-sunday-line bg-sunday-dark p-6 hover:border-sunday-red transition-colors cursor-default"
          >
            <span className="font-[family-name:var(--font-display)] font-black text-2xl text-sunday-red">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-lg md:text-xl font-medium">{item}</span>
            <span className="ml-auto text-sunday-red opacity-0 group-hover:opacity-100 transition-opacity text-xl">
              →
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
