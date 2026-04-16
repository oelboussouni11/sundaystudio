import { cn } from "@/lib/utils";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-16 md:py-28 overflow-hidden", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
