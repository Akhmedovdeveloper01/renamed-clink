import type { LocalizedText } from "./services";

export type CategorySlug = "face" | "laser" | "injection" | "body";

export type Category = {
  slug: CategorySlug;
  title: LocalizedText;
  icon: "sparkles" | "zap" | "syringe" | "activity";
};

export const categories: Category[] = [
  {
    slug: "face",
    title: { uz: "Yuz parvarishi", ru: "Уход за лицом" },
    icon: "sparkles",
  },
  {
    slug: "laser",
    title: { uz: "Lazer", ru: "Лазер" },
    icon: "zap",
  },
  {
    slug: "injection",
    title: { uz: "In'eksion estetika", ru: "Инъекционная эстетика" },
    icon: "syringe",
  },
  {
    slug: "body",
    title: { uz: "Tana korreksiyasi", ru: "Коррекция фигуры" },
    icon: "activity",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
