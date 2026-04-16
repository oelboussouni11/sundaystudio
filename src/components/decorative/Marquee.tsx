import { cn } from "@/lib/utils";

type MarqueeProps = {
  text: string;
  className?: string;
  repeat?: number;
};

export function Marquee({ text, className, repeat = 8 }: MarqueeProps) {
  const items = Array.from({ length: repeat });
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y-2 border-sunday-red/30 bg-sunday-red py-6 -rotate-1 my-4",
        className
      )}
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0">
            {items.map((_, i) => (
              <span
                key={`${group}-${i}`}
                className="mx-8 text-4xl md:text-6xl font-black tracking-tight text-white font-[family-name:var(--font-display)]"
              >
                {text}
                <span className="mx-8 text-white/60">★</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
