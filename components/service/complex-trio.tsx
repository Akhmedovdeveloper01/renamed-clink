"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion, useReducedMotion } from "motion/react";
import { Activity, Droplets, Waves } from "lucide-react";
import type { ServiceStep } from "@/data/services";
import type { Locale } from "@/i18n/routing";

const partIcons = [Droplets, Activity, Waves];

export function ComplexTrio({ parts }: { parts: ServiceStep[] }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("services");
  const reduceMotion = useReducedMotion();

  return (
    <div className="rounded-3xl border border-border bg-surface p-6 sm:p-10">
      <h3 className="text-center font-serif text-xl font-semibold text-foreground sm:text-2xl">
        {t("complexTrioTitle")}
      </h3>

      <div className="relative mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-4">
        {parts.map((part, index) => {
          const Icon = partIcons[index % partIcons.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.15 }}
              className="flex w-full max-w-xs flex-col items-center rounded-2xl border border-border bg-bg-elevated p-6 text-center sm:w-56"
            >
              <span className="brand-gradient flex h-12 w-12 items-center justify-center rounded-full text-brand-foreground">
                <Icon size={22} />
              </span>
              <h4 className="mt-4 font-serif text-lg font-semibold text-foreground">
                {part.title[locale]}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                {part.text[locale]}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
