"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ArrowUpRight, Activity, Droplet, Sparkles, Syringe, Wind, Zap } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { TiltCard } from "@/components/ui/tilt-card";
import { getPromotionForService } from "@/data/promotions";
import type { Service } from "@/data/services";
import type { Locale } from "@/i18n/routing";

const icons = { sparkles: Sparkles, droplet: Droplet, zap: Zap, syringe: Syringe, wind: Wind, activity: Activity };

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const locale = useLocale() as Locale;
  const t = useTranslations("services");
  const Icon = icons[service.icon];
  const promo = getPromotionForService(service.slug);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, delay: 0.05 * index, ease: [0.16, 1, 0.3, 1] }}
    >
      <TiltCard className="relative flex h-full flex-col p-8">
        {promo && (
          <span className="absolute right-6 top-6 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-brand">
            {t("promoBadgeLabel")}
          </span>
        )}
        <div className="brand-gradient flex h-14 w-14 items-center justify-center rounded-2xl text-brand-foreground">
          <Icon size={24} />
        </div>
        <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">
          {service.title[locale]}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
          {service.shortDescription[locale]}
        </p>

        <ul className="mt-6 space-y-2 border-t border-border pt-6">
          {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
            <li
              key={`${service.slug}-benefit-${benefitIndex}`}
              className="flex items-start gap-2 text-sm text-foreground-muted"
            >
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {benefit[locale]}
            </li>
          ))}
        </ul>

        <Link
          href={`/services/${service.slug}`}
          className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-transform hover:gap-2"
        >
          {t("learnMore")}
          <ArrowUpRight size={16} />
        </Link>
      </TiltCard>
    </motion.div>
  );
}
