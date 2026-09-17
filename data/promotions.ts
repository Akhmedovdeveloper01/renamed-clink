import type { LocalizedText } from "./services";

export type Promotion = {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  serviceSlug: string;
  oldPrice?: string;
  newPrice?: string;
  badge: LocalizedText;
  /** ISO date strings. Marked [CONFIRM] until the clinic sets real dates. */
  startDate: string;
  endDate: string;
};

export const promotions: Promotion[] = [
  {
    slug: "yuz-chistkasi-aksiya",
    title: {
      uz: "7 bosqichli yuz chistkasi — 50% chegirma",
      ru: "7-этапная чистка лица — скидка 50%",
    },
    description: {
      uz: "7 bosqichli yuz chistkamiz 800 000 so‘m edi, atigi 5 kun davomida 400 000 so‘m. Muolaja tajribali mutaxassislarimiz tomonidan amalga oshiriladi. [CONFIRM]",
      ru: "7-этапная чистка лица стоила 800 000 сум, всего 5 дней — 400 000 сум. Процедуру проводят опытные специалисты клиники. [CONFIRM]",
    },
    serviceSlug: "yuz-chistkasi-7-bosqich",
    oldPrice: "800 000 so‘m",
    newPrice: "400 000 so‘m",
    badge: { uz: "-50%", ru: "-50%" },
    startDate: "[CONFIRM]",
    endDate: "[CONFIRM]",
  },
  {
    slug: "tana-korreksiyasi-aksiya",
    title: {
      uz: "Bepul konsultatsiya + maxsus chegirma",
      ru: "Бесплатная консультация + специальная скидка",
    },
    description: {
      uz: "G5 + Emslim + limfodrenaj kompleksi uchun bepul konsultatsiya va maxsus chegirma taklif etamiz.",
      ru: "Предлагаем бесплатную консультацию и специальную скидку на комплекс G5 + Emslim + лимфодренаж.",
    },
    serviceSlug: "tana-korreksiyasi-g5-emslim",
    newPrice: "[PRICE]",
    badge: { uz: "Bepul konsultatsiya", ru: "Бесплатная консультация" },
    startDate: "[CONFIRM]",
    endDate: "[CONFIRM]",
  },
];

/**
 * Active-window check runs against the request-time clock, not build time,
 * so expired promos disappear without a redeploy. Promos with unconfirmed
 * ([CONFIRM]) dates are treated as active by default until the clinic sets
 * real start/end dates.
 */
export function getActivePromotions(now: number = Date.now()): Promotion[] {
  return promotions.filter((promo) => {
    const start = Date.parse(promo.startDate);
    const end = Date.parse(promo.endDate);
    if (Number.isNaN(start) || Number.isNaN(end)) return true;
    return now >= start && now <= end;
  });
}

export function getPromotionForService(
  slug: string,
  now: number = Date.now()
): Promotion | undefined {
  return getActivePromotions(now).find((promo) => promo.serviceSlug === slug);
}

export function hasConfirmedDates(promo: Promotion): boolean {
  return !Number.isNaN(Date.parse(promo.startDate)) && !Number.isNaN(Date.parse(promo.endDate));
}
