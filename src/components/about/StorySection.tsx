"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";

export function StorySection() {
  return (
    <Section className="bg-sunday-cream text-sunday-text-dark">
      <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-accent)] text-sunday-red mb-4">
            Our story
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-black text-5xl md:text-6xl leading-[0.95] tracking-tight">
            The hybrid <br /> approach.
          </h2>
        </div>
        <div className="space-y-5 text-lg md:text-xl leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            We started Sunday because most agencies force you to pick: creative{" "}
            <em>or</em> strategic. Production <em>or</em> marketing. Brand{" "}
            <em>or</em> content.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Our philosophy is simple: the best brands live at the intersection.
            We sit where content, branding, and culture meet with deep roots in
            lifestyle, sport, and community.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We&apos;re not a production house. We&apos;re not a marketing
            agency. We&apos;re a hybrid that understands both worlds, and
            builds brands people actually remember.
          </motion.p>
        </div>
      </div>
    </Section>
  );
}
