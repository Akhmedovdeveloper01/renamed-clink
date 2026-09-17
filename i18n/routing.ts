import { defineRouting } from "next-intl/routing";

export const locales = ["uz", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "uz";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeCookie: {
    name: "RENAMED_LOCALE",
    maxAge: 60 * 60 * 24 * 365,
  },
});
