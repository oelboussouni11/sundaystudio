"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Star } from "@/components/decorative/Doodle";

export function WhoWeAre() {
  return (
    <Section className="bg-sunday-cream text-sunday-text-dark">
      <Star className="absolute top-10 left-[5%] h-10 w-10 rotate-12 opacity-80" />
      <div className="grid gap-10 md:grid-cols-[1fr_1.5fr] items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-accent)] text-sunday-red mb-4">
            Who we are
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-black text-5xl md:text-6xl leading-[0.95] tracking-tight">
            Sunday is a{" "}
            <span className="text-sunday-red">hybrid</span>.
          </h2>
        </div>
        <div className="space-y-5 text-lg md:text-xl leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A creative agency built for brands that want more than visibility.
            We create stories, experiences, and visuals that actually stick.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We operate at the intersection of content, branding, and culture,
            with a strong focus on lifestyle, sport, and community.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 pt-4"
          >
            <span className="rounded-full border border-sunday-red/30 bg-sunday-red/5 px-5 py-2 text-sm font-semibold text-sunday-text-dark">
              Not a production house.
            </span>
            <span className="rounded-full border border-sunday-red/30 bg-sunday-red/5 px-5 py-2 text-sm font-semibold text-sunday-text-dark">
              Not a marketing agency.
            </span>
            <span className="rounded-full bg-sunday-red px-5 py-2 text-sm font-semibold text-white">
              A hybrid that gets both worlds.
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-2 font-[family-name:var(--font-accent)] italic text-base text-sunday-text-dark/60"
          >
            (it&apos;s not that deep.)
          </motion.p>
        </div>
      </div>
    </Section>
  );
}
