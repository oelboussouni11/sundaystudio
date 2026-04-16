"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type StickerCardProps = {
  className?: string;
  rotate?: number;
  children: React.ReactNode;
};

export function StickerCard({
  className,
  rotate = -1,
  children,
}: StickerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ rotate: 0, scale: 1.03 }}
      style={{ rotate: `${rotate}deg` }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative rounded-3xl border border-sunday-line bg-sunday-surface p-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
