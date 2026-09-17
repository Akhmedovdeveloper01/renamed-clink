"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function CallPicker({
  children,
  className,
  wrapperClassName,
  panelPosition = "bottom",
  "aria-label": ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
  panelPosition?: "top" | "bottom";
  "aria-label"?: string;
}) {
  const t = useTranslations("floating");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    function handleClick(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const numbers = [
    { label: siteConfig.phone, href: siteConfig.phoneHref },
    { label: siteConfig.phoneSecondary, href: siteConfig.phoneSecondaryHref },
  ];

  return (
    <div ref={rootRef} className={cn("relative", wrapperClassName)}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={ariaLabel}
        className={cn("w-full", className)}
      >
        {children}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="menu"
            aria-label={t("callPickerTitle")}
            initial={{ opacity: 0, y: panelPosition === "bottom" ? -8 : 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: panelPosition === "bottom" ? -8 : 8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute right-0 z-50 w-60 rounded-2xl border border-border bg-bg-elevated p-3 shadow-[var(--shadow-card)]",
              panelPosition === "bottom" ? "top-full mt-2" : "bottom-full mb-2"
            )}
          >
            <p className="px-2 pb-2 text-xs font-medium uppercase tracking-wide text-foreground-muted">
              {t("callPickerTitle")}
            </p>
            <ul className="space-y-1">
              {numbers.map((number) => (
                <li key={number.href}>
                  <a
                    href={number.href}
                    role="menuitem"
                    className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent-soft hover:text-brand"
                  >
                    <Phone size={16} className="shrink-0" />
                    {number.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
