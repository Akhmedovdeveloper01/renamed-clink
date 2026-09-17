import { cn } from "@/lib/utils";

export function magneticButtonBaseClass(variant: "primary" | "ghost") {
  return cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-colors duration-300",
    variant === "primary" &&
      "brand-gradient text-brand-foreground shadow-[var(--shadow-card)] hover:brightness-110",
    variant === "ghost" &&
      "border border-border-strong text-foreground hover:border-brand hover:text-brand"
  );
}
