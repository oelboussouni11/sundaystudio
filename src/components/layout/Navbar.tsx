"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, socials } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Squiggle, Star } from "@/components/decorative/Doodle";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 transition-all",
        scrolled || open
          ? "bg-sunday-dark/85 backdrop-blur-md border-b border-sunday-line"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 sm:h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-6 md:px-10">
        <Logo size="md" className="h-7 sm:h-8" />

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition",
                  active
                    ? "text-sunday-text"
                    : "text-sunday-text/75 hover:text-sunday-text hover:bg-sunday-line"
                )}
              >
                {link.label}
                {active && (
                  <>
                    <Squiggle className="pointer-events-none absolute left-3 right-3 -bottom-1 w-[calc(100%-1.5rem)] h-2" />
                    <Star className="pointer-events-none absolute -top-1.5 -right-0.5 h-3 w-3 rotate-12" />
                  </>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button href="/contact" size="sm">
            Let&apos;s Talk
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-sunday-line bg-sunday-dark/60"
            onClick={() => setOpen((v) => !v)}
          >
            <motion.span
              animate={
                open
                  ? { rotate: 45, y: 6 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="block h-0.5 w-5 bg-sunday-text"
            />
            <motion.span
              animate={open ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className="block h-0.5 w-5 bg-sunday-text"
            />
            <motion.span
              animate={
                open
                  ? { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0 }
              }
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="block h-0.5 w-5 bg-sunday-text"
            />
          </button>
        </div>
      </div>

    </header>

    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 top-16 sm:top-20 z-40 md:hidden bg-sunday-dark flex flex-col overflow-y-auto"
        >
          <div className="flex-1 flex flex-col justify-between px-5 pt-10 pb-8">
            <nav className="flex flex-col">
              {navLinks.map((link, i) => {
                const active = isActivePath(pathname, link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.08 + i * 0.07,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-sunday-line"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className="group flex items-baseline gap-4 py-5"
                    >
                      <span className="text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-accent)] text-sunday-text-muted w-6 shrink-0">
                        0{i + 1}
                      </span>
                      <span
                        className={cn(
                          "relative font-[family-name:var(--font-display)] font-black text-4xl sm:text-5xl leading-none tracking-tight transition-colors",
                          active
                            ? "text-sunday-red"
                            : "text-sunday-text group-hover:text-sunday-red"
                        )}
                      >
                        {link.label}
                        {active && (
                          <Star className="absolute -top-2 -right-5 h-3.5 w-3.5 rotate-12" />
                        )}
                      </span>
                      <span className="ml-auto text-xl text-sunday-text-muted group-hover:text-sunday-red transition-colors">
                        →
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.45 }}
              className="mt-10 space-y-6"
            >
              <Button href="/contact" size="lg" className="w-full sm:w-auto">
                Let&apos;s Talk →
              </Button>
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.25em] font-[family-name:var(--font-accent)] text-sunday-text-muted hover:text-sunday-red transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
