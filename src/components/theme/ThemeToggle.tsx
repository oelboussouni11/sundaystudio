"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme) || "dark";
    setTheme(current);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("sunday-theme", next);
    } catch {}
  };

  const isDark = mounted && theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      whileTap={{ scale: 0.9 }}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-sunday-line text-sunday-text hover:border-sunday-red hover:text-sunday-red transition-colors",
        className
      )}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full bg-sunday-red/20"
        initial={false}
        animate={{ scale: [0, 1.6], opacity: [0.6, 0] }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        key={`ripple-${theme}`}
      />

      <AnimatePresence mode="popLayout" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -120, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 120, scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun className="h-4 w-4" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 120, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -120, scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon className="h-4 w-4" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
