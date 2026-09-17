"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import type { BodyArea } from "@/data/services";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function BodyAreaSelector({ areas }: { areas: BodyArea[] }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("services");
  const [activeKey, setActiveKey] = useState(areas[0]?.key);
  const active = areas.find((area) => area.key === activeKey) ?? areas[0];

  if (!active) return null;

  return (
    <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
      <h3 className="font-serif text-lg font-semibold text-foreground">{t("bodyAreaTitle")}</h3>

      <div role="group" aria-label={t("bodyAreaTitle")} className="mt-5 flex flex-wrap gap-2">
        {areas.map((area) => (
          <button
            key={area.key}
            type="button"
            aria-pressed={activeKey === area.key}
            onClick={() => setActiveKey(area.key)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              activeKey === area.key
                ? "border-transparent bg-brand text-brand-foreground"
                : "border-border-strong text-foreground-muted hover:text-foreground"
            )}
          >
            {area.label[locale]}
          </button>
        ))}
      </div>

      <div className="mt-5 min-h-16">
        <AnimatePresence mode="wait">
          <motion.p
            key={active.key}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="text-sm leading-relaxed text-foreground-muted"
          >
            {active.description[locale]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
