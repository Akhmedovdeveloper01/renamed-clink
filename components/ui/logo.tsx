import { cn } from "@/lib/utils";

/**
 * Text-based placeholder wordmark. Replace with the real logo file from
 * /public/brand/ when available — see public/brand/README.md.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 56"
      className={cn("h-9 w-9 shrink-0", className)}
      role="img"
      aria-label="RENAMED monogram"
    >
      <defs>
        <linearGradient id="rm-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-brand-start)" />
          <stop offset="100%" stopColor="var(--color-brand-end)" />
        </linearGradient>
      </defs>
      <rect width="56" height="56" rx="16" fill="url(#rm-gradient)" />
      <text
        x="28"
        y="34"
        textAnchor="middle"
        fontFamily="var(--font-display), serif"
        fontSize="22"
        fontWeight="600"
        fill="#ffffff"
        letterSpacing="0.5"
      >
        RM
      </text>
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  showTagline = true,
}: {
  className?: string;
  markClassName?: string;
  showTagline?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <LogoMark className={markClassName} />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg font-semibold tracking-[0.18em] text-foreground">
          RENAMED
        </span>
        {showTagline && (
          <span className="mt-1 text-[0.6rem] font-medium tracking-[0.3em] text-foreground-muted">
            — AESTHETIC —
          </span>
        )}
      </span>
    </span>
  );
}
