"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/constants";
import { Blob } from "@/components/decorative/Blob";
import { cn } from "@/lib/utils";

type Props = {
  serviceId: number;
  variant: "dark" | "cream";
};

export function ServiceSection({ serviceId, variant }: Props) {
  const service = services.find((s) => s.id === serviceId);
  if (!service) return null;
  const isDark = variant === "dark";
  const Icon = service.icon;
  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 md:py-28",
        isDark
          ? "bg-sunday-dark text-sunday-text"
          : "bg-sunday-cream text-sunday-text-dark"
      )}
    >
      <Blob
        className={cn(
          "h-[420px] w-[420px] opacity-10",
          service.id % 2 === 0
            ? "top-[-120px] right-[-120px]"
            : "bottom-[-140px] left-[-140px]"
        )}
        color={isDark ? "#CC3E3E" : "#CC3E3E"}
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 grid gap-10 md:grid-cols-[auto_1fr]">
        <div className="flex items-start gap-6">
          <span className="font-[family-name:var(--font-display)] font-black text-[clamp(5rem,12vw,10rem)] leading-none text-sunday-red/80">
            {String(service.id).padStart(2, "0")}
          </span>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sunday-red/15 text-sunday-red">
              <Icon className="h-6 w-6" strokeWidth={2} />
            </span>
            <p className="text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-accent)] opacity-60">
              Service · {service.id}
            </p>
          </div>
          <h2 className="font-[family-name:var(--font-display)] font-black text-4xl md:text-6xl leading-[0.95] tracking-tight mb-3">
            {service.title}
          </h2>
          <p
            className={cn(
              "text-lg md:text-xl mb-8 max-w-2xl",
              isDark ? "text-sunday-text/70" : "text-sunday-text-dark/70"
            )}
          >
            {service.tagline}
          </p>
          <div className="flex flex-wrap gap-3">
            {service.items.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={cn(
                  "rounded-2xl border px-5 py-3 text-sm md:text-base font-medium transition-colors",
                  isDark
                    ? "border-sunday-line bg-sunday-surface text-sunday-text hover:border-sunday-red"
                    : "border-sunday-red/30 bg-sunday-red/5 text-sunday-text-dark hover:border-sunday-red hover:bg-sunday-red/10"
                )}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
