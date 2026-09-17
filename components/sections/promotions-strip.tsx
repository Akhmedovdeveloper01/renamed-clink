"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/reveal";
import { Countdown } from "@/components/ui/countdown";
import { magneticButtonBaseClass } from "@/lib/button-styles";
import { getActivePromotions, type Promotion } from "@/data/promotions";
import { getServiceBySlug } from "@/data/services";
import type { Locale } from "@/i18n/routing";

export function PromotionsStrip() {
  const t = useTranslations("promotions");
  const locale = useLocale() as Locale;
  // Computed after mount (against the live clock) so a statically cached
  // page never keeps showing an already-expired promotion.
  const [promos, setPromos] = useState<Promotion[] | null>(null);

  useEffect(() => {
    // Client-only computation against the live clock so a statically
    // cached page never keeps showing an already-expired promotion.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPromos(getActivePromotions());
  }, []);

  if (!promos || promos.length === 0) return null;

  return (
    <section id="promotions" className="relative py-16 sm:py-20">
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
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {promos.map((promo, index) => {
            const service = getServiceBySlug(promo.serviceSlug);
            return (
              <Reveal key={promo.slug} delay={0.08 * index}>
                <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-[var(--shadow-card)]">
                  <span className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-brand">
                    {promo.badge[locale]}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                    {promo.title[locale]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {promo.description[locale]}
                  </p>

                  {(promo.oldPrice || promo.newPrice) && (
                    <div className="mt-5 flex items-baseline gap-3">
                      {promo.oldPrice && (
                        <span className="text-sm text-foreground-muted line-through decoration-2">
                          {promo.oldPrice}
                        </span>
                      )}
                      {promo.newPrice && (
                        <span className="font-serif text-2xl font-semibold text-brand">
                          {promo.newPrice}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="mt-4">
                    <Countdown endDate={promo.endDate} />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/#booking" className={magneticButtonBaseClass("primary")}>
                      {t("ctaBook")}
                    </Link>
                    {service && (
                      <Link
                        href={`/services/${service.slug}`}
                        className={magneticButtonBaseClass("ghost")}
                      >
                        {t("viewService")}
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
