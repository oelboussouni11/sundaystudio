import { cn } from "@/lib/utils";

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("stroke-sunday-red fill-none", className)}
      strokeWidth={4}
      strokeLinecap="round"
    >
      <path d="M2 12 Q 25 2, 50 12 T 100 12 T 150 12 T 198 12" />
    </svg>
  );
}

export function Star({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("fill-sunday-red", className)}
    >
      <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
    </svg>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("stroke-sunday-red fill-none", className)}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 30 Q 40 5, 80 30 T 110 30" />
      <path d="M95 18 L 110 30 L 95 42" />
    </svg>
  );
}
