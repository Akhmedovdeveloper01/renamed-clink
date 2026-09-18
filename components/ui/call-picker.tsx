"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function CallPicker({
  children,
  className,
  wrapperClassName,
  panelPosition = "bottom",
  variant = "dropdown",
  "aria-label": ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
  panelPosition?: "top" | "bottom";
  /** "dropdown" anchors a small panel next to the trigger (desktop). "modal" centers a card over a backdrop (mobile). */
  variant?: "dropdown" | "modal";
  "aria-label"?: string;
}) {
  const t = useTranslations("floating");
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    function handleClick(event: MouseEvent) {
      if (variant === "dropdown" && rootRef.current && !rootRef.current.contains(event.target as Node)) {
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
  }, [open, variant]);

  const numbers = [
    { label: siteConfig.phone, href: siteConfig.phoneHref },
    { label: siteConfig.phoneSecondary, href: siteConfig.phoneSecondaryHref },
  ];

  const list = (
    <ul className="space-y-1">
      {numbers.map((number) => (
        <li key={number.href}>
          <a
            href={number.href}
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent-soft hover:text-brand"
          >
            <Phone size={16} className="shrink-0" />
            {number.label}
          </a>
        </li>
      ))}
    </ul>
  );

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
        {open && variant === "modal" && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40"
              aria-hidden
            />
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-6">
              <motion.div
                id={panelId}
                role="menu"
                aria-label={t("callPickerTitle")}
                initial={{ opacity: 0, scale: 0.94, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 8 }}
                transition={{ duration: 0.18 }}
                className="w-full max-w-xs rounded-2xl border border-border bg-bg-elevated p-4 shadow-[var(--shadow-card)]"
              >
                <div className="flex items-center justify-between gap-4 px-1 pb-3">
                  <p className="text-xs font-medium uppercase tracking-wide text-foreground-muted">
                    {t("callPickerTitle")}
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label={t("close")}
                    className="flex h-7 w-7 items-center justify-center rounded-full text-foreground-muted transition-colors hover:text-foreground"
                  >
                    <X size={16} />
                  </button>
                </div>
                {list}
              </motion.div>
            </div>
          </>
        )}

        {open && variant === "dropdown" && (
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
            {list}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
