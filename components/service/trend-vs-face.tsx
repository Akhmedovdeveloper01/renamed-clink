"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export function TrendVsFace() {
  const t = useTranslations("services");
  const [mode, setMode] = useState<"trend" | "face">("face");

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-10">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
            {t("trendVsFaceTitle")}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-foreground-muted sm:text-base">
            {t("trendVsFaceText")}
          </p>

          <div
            role="group"
            aria-label={t("trendVsFaceTitle")}
            className="mt-6 inline-flex rounded-full border border-border-strong p-1"
          >
            {(["trend", "face"] as const).map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={mode === option}
                onClick={() => setMode(option)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  mode === option
                    ? "brand-gradient text-brand-foreground"
                    : "text-foreground-muted hover:text-foreground"
                )}
              >
                {option === "trend" ? t("trendVsFaceOptionTrend") : t("trendVsFaceOptionFace")}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64">
          <AnimatePresence mode="wait">
            {mode === "trend" ? (
              <motion.svg
                key="trend"
                viewBox="0 0 200 200"
                className="h-full w-full text-foreground-muted"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                aria-hidden
              >
                <circle cx="100" cy="90" r="60" fill="none" stroke="currentColor" strokeWidth="2" />
                <line x1="70" y1="90" x2="130" y2="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="100" y1="60" x2="100" y2="120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M75 150 Q100 165 125 150" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </motion.svg>
            ) : (
              <motion.svg
                key="face"
                viewBox="0 0 200 200"
                className="h-full w-full text-brand"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                aria-hidden
              >
                <path
                  d="M105 30 C140 32 165 62 160 100 C157 130 140 158 108 165 C72 172 45 148 42 110 C39 74 68 28 105 30Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M68 92 Q78 84 88 92" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M118 90 Q128 82 140 90" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M80 148 Q104 162 128 146" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </motion.svg>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
