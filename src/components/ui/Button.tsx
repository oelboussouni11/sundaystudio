"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { Magnetic } from "@/components/effects/Magnetic";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sunday-red focus-visible:ring-offset-2 focus-visible:ring-offset-sunday-dark";

const variants: Record<Variant, string> = {
  primary:
    "bg-sunday-red text-white hover:bg-sunday-red-light active:bg-sunday-red-dark shadow-[0_8px_30px_-8px_rgba(204,62,62,0.6)]",
  secondary:
    "bg-sunday-text text-sunday-dark hover:bg-sunday-text/90 border border-sunday-text",
  ghost:
    "bg-transparent text-sunday-text border border-sunday-line-strong hover:border-sunday-text hover:bg-sunday-line",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<HTMLMotionProps<"button">, "children"> & { href?: undefined };
type ButtonAsLink = CommonProps & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  const strength = variant === "ghost" ? 0.18 : 0.32;

  if ("href" in rest && rest.href) {
    return (
      <Magnetic strength={strength}>
        <Link href={rest.href} className={classes}>
          {children}
        </Link>
      </Magnetic>
    );
  }

  return (
    <Magnetic strength={strength}>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        className={classes}
        {...(rest as HTMLMotionProps<"button">)}
      >
        {children}
      </motion.button>
    </Magnetic>
  );
}
