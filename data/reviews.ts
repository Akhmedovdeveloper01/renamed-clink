import type { LocalizedText } from "./services";

export type Review = {
  id: string;
  name: string;
  rating: number;
  text: LocalizedText;
};

/** Placeholder testimonials — replace with real, consented client reviews. */
export const reviews: Review[] = [
  {
    id: "review-1",
    name: "[Mijoz ismi]",
    rating: 5,
    text: {
      uz: "[Mijoz sharhi shu yerga qo‘shiladi — haqiqiy va roziligi olingan fikr-mulohaza bilan almashtiring.]",
      ru: "[Отзыв клиента будет добавлен сюда — замените на реальный отзыв с согласия клиента.]",
    },
  },
  {
    id: "review-2",
    name: "[Mijoz ismi]",
    rating: 5,
    text: {
      uz: "[Mijoz sharhi shu yerga qo‘shiladi — haqiqiy va roziligi olingan fikr-mulohaza bilan almashtiring.]",
      ru: "[Отзыв клиента будет добавлен сюда — замените на реальный отзыв с согласия клиента.]",
    },
  },
  {
    id: "review-3",
    name: "[Mijoz ismi]",
    rating: 5,
    text: {
      uz: "[Mijoz sharhi shu yerga qo‘shiladi — haqiqiy va roziligi olingan fikr-mulohaza bilan almashtiring.]",
      ru: "[Отзыв клиента будет добавлен сюда — замените на реальный отзыв с согласия клиента.]",
    },
  },
  {
    id: "review-4",
    name: "[Mijoz ismi]",
    rating: 5,
    text: {
      uz: "[Mijoz sharhi shu yerga qo‘shiladi — haqiqiy va roziligi olingan fikr-mulohaza bilan almashtiring.]",
      ru: "[Отзыв клиента будет добавлен сюда — замените на реальный отзыв с согласия клиента.]",
    },
  },
  {
    id: "review-5",
    name: "[Mijoz ismi]",
    rating: 5,
    text: {
      uz: "[Mijoz sharhi shu yerga qo‘shiladi — haqiqiy va roziligi olingan fikr-mulohaza bilan almashtiring.]",
      ru: "[Отзыв клиента будет добавлен сюда — замените на реальный отзыв с согласия клиента.]",
    },
  },
];
