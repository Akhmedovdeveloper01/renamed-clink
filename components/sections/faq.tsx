"use client";

import { useLocale, useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";
import { Accordion } from "@/components/ui/accordion";
import { faq } from "@/data/faq";
import type { Locale } from "@/i18n/routing";

export function Faq() {
  const t = useTranslations("faq");
  const locale = useLocale() as Locale;

  const items = faq.map((item) => ({
    id: item.id,
    question: item.question[locale],
    answer: item.answer[locale],
  }));

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-3xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              {t("eyebrow")}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              {t("title")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base text-foreground-muted">
              {t("subtitle")}
            </p>
          </Reveal>
        </div>

        <div className="mt-12">
          <Accordion items={items} defaultOpenId={faq[0]?.id ?? null} />
        </div>
      </div>
    </section>
  );
}
