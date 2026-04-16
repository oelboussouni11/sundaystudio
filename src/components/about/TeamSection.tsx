"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  Hammer,
  Feather,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/layout/Section";

type Member = {
  name: string;
  role: string;
  icon: LucideIcon;
};

const team: Member[] = [
  { name: "The Director", role: "Creative Direction", icon: Megaphone },
  { name: "The Builder", role: "Branding & Design", icon: Hammer },
  { name: "The Storyteller", role: "Content & Copy", icon: Feather },
  { name: "The Connector", role: "Community & Events", icon: Users },
];

export function TeamSection() {
  return (
    <Section className="bg-sunday-dark">
      <p className="text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-accent)] text-sunday-red mb-4">
        The team
      </p>
      <h2 className="font-[family-name:var(--font-display)] font-black text-5xl md:text-6xl leading-[0.95] tracking-tight mb-12 max-w-3xl">
        Humans behind the hustle.
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m, i) => {
          const Icon = m.icon;
          return (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ rotate: i % 2 === 0 ? 2 : -2, scale: 1.02 }}
              className="rounded-3xl border-2 border-sunday-line bg-sunday-surface p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-sunday-red/30 bg-sunday-red/10 text-sunday-red">
                <Icon className="h-10 w-10" strokeWidth={1.75} />
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-xl">
                {m.name}
              </h3>
              <p className="text-sm text-sunday-text-muted font-[family-name:var(--font-accent)] uppercase tracking-wider mt-1">
                {m.role}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
