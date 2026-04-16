import { cn } from "@/lib/utils";

type BlobProps = {
  className?: string;
  color?: string;
};

export function Blob({ className, color = "#CC3E3E" }: BlobProps) {
  return (
    <svg
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("pointer-events-none absolute", className)}
    >
      <g transform="translate(300,300)">
        <path
          fill={color}
          d="M151.6,-183.1C186.7,-142.4,197.4,-86.1,208.2,-27.8C219,30.5,229.8,90.9,204.8,133.5C179.8,176.2,118.8,201.1,60.1,212.2C1.4,223.3,-55.1,220.6,-106.6,197.3C-158.1,174,-204.5,130,-222.8,76.5C-241.1,23,-231.3,-40.1,-203.7,-89.6C-176.1,-139.1,-130.6,-175,-81.4,-210.5C-32.1,-246,20.8,-281.1,65.2,-271.4C109.7,-261.8,116.6,-223.8,151.6,-183.1Z"
        />
      </g>
    </svg>
  );
}
