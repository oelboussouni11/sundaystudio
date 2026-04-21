"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Blob } from "@/components/decorative/Blob";

export function VisionQuote() {
  return (
    <Section className="bg-sunday-dark">
      <Blob
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[520px] opacity-10"
        color="#CC3E3E"
      />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-accent)] text-sunday-red mb-6">
          Our vision
        </p>
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-display)] font-black text-[clamp(2rem,6vw,5rem)] leading-[1] tracking-tight"
        >
          To build brands that people don&apos;t just{" "}
          <span className="text-sunday-text-muted">see</span>,<br />
          but <span className="text-sunday-red">feel</span>,{" "}
          <span className="text-sunday-red">wear</span>,{" "}
          <span className="text-sunday-red">follow</span>, and{" "}
          <span className="text-sunday-red">remember</span>.
        </motion.blockquote>
      </div>
    </Section>
  );
}
