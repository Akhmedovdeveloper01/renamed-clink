"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { useTranslations } from "next-intl";

type Remaining = { days: number; hours: number; minutes: number; seconds: number; expired: boolean };

function getRemaining(endDate: string): Remaining | null {
  const end = Date.parse(endDate);
  if (Number.isNaN(end)) return null;

  const diff = end - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };

  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
    expired: false,
  };
}

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

export function Countdown({ endDate }: { endDate: string }) {
  const t = useTranslations("promotions");
  const reduceMotion = useReducedMotion();
  const [remaining, setRemaining] = useState<Remaining | null>(() => getRemaining(endDate));

  useEffect(() => {
    if (Number.isNaN(Date.parse(endDate))) return;
    const interval = setInterval(
      () => setRemaining(getRemaining(endDate)),
      reduceMotion ? 60_000 : 1_000
    );
    return () => clearInterval(interval);
  }, [endDate, reduceMotion]);

  if (remaining === null) {
    return <span className="text-sm text-foreground-muted">{t("datesUnconfirmed")}</span>;
  }

  return (
    <div
      role="timer"
      aria-live="polite"
      className="flex flex-wrap items-center gap-2 text-sm font-semibold text-foreground"
    >
      <span className="font-normal text-foreground-muted">{t("endsIn")}</span>
      {remaining.days > 0 && (
        <span>
          {remaining.days} {t("days")}
        </span>
      )}
      <span className="tabular-nums">
        {pad(remaining.hours)}:{pad(remaining.minutes)}:{pad(remaining.seconds)}
      </span>
    </div>
  );
}
