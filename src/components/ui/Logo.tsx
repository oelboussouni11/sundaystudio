import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  href?: string | null;
  size?: "sm" | "md" | "lg";
};

const heights = {
  sm: 24,
  md: 32,
  lg: 40,
};

export function Logo({ className, href = "/", size = "md" }: LogoProps) {
  const h = heights[size];
  const img = (
    <Image
      src="/logo/sundaystudio.svg"
      alt="Sunday Studio"
      width={h * 5}
      height={h}
      priority
      className={cn("w-auto", className)}
      style={{ height: h }}
    />
  );

  if (!href) return img;

  return (
    <Link
      href={href}
      aria-label="Sunday Studio home"
      className="inline-flex items-center hover:opacity-80 transition-opacity"
    >
      {img}
    </Link>
  );
}
