"use client";

import { useTranslations } from "next-intl";
import { Countdown } from "@/components/ui/countdown";
import type { ServiceFacts } from "@/data/services";
import type { Promotion } from "@/data/promotions";

export function ServiceFactsCard({
  facts,
  promo,
}: {
  facts: ServiceFacts;
  promo?: Promotion & { badgeLabel: string };
}) {
  const t = useTranslations("services");

  const rows = [
    { label: t("factsDuration"), value: facts.duration },
    { label: t("factsSessions"), value: facts.sessions },
  ].filter((row) => row.value);

  const oldPrice = promo?.oldPrice ?? facts.oldPrice;
  const price = promo?.newPrice ?? facts.price;

  return (
    <div className="rounded-3xl border border-border bg-surface p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-serif text-lg font-semibold text-foreground">{t("factsTitle")}</h3>
        {promo && (
          <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-brand">
            {promo.badgeLabel}
          </span>
        )}
      </div>

      <dl className="mt-4 space-y-3">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between text-sm">
            <dt className="text-foreground-muted">{row.label}</dt>
            <dd className="font-medium text-foreground">{row.value}</dd>
          </div>
        ))}
        <div className="flex items-center justify-between text-sm">
          <dt className="text-foreground-muted">{t("factsPrice")}</dt>
          <dd className="flex items-baseline gap-2">
            {oldPrice && (
              <span className="text-xs text-foreground-muted line-through">{oldPrice}</span>
            )}
            <span className="font-semibold text-foreground">{price ?? "—"}</span>
          </dd>
        </div>
      </dl>

      {promo && (
        <div className="mt-4 border-t border-border pt-4">
          <Countdown endDate={promo.endDate} />
        </div>
      )}
    </div>
  );
}
