"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/reveal";
import { CategoryTabs } from "@/components/ui/category-tabs";
import { ServiceCard } from "@/components/ui/service-card";
import { magneticButtonBaseClass } from "@/lib/button-styles";
import { services } from "@/data/services";
import type { CategorySlug } from "@/data/categories";

export function Services() {
  const t = useTranslations("services");
  const [active, setActive] = useState<CategorySlug | "all">("all");

  const filtered = active === "all" ? services : services.filter((s) => s.category === active);

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
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

        <Reveal delay={0.12}>
          <CategoryTabs active={active} onChange={setActive} allLabel={t("categoryAll")} className="mt-10" />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </AnimatePresence>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-transform hover:gap-2"
            >
              {t("viewAll")}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-center gap-5 rounded-3xl border border-border bg-surface px-8 py-12 text-center">
            <h3 className="max-w-xl font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              {t("ctaTitle")}
            </h3>
            <p className="max-w-lg text-sm text-foreground-muted">
              {t("ctaSubtitle")}
            </p>
            <Link href="/#booking" className={magneticButtonBaseClass("primary")}>
              {t("ctaBook")}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
