"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("languageSwitcher");

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={cn(
        "flex items-center rounded-full border border-border-strong p-1 text-xs font-semibold",
        className
      )}
    >
      {locales.map((loc) => (
        <button
          key={loc}
          type="button"
          aria-pressed={locale === loc}
          onClick={() => router.replace(pathname, { locale: loc })}
          className={cn(
            "min-w-9 rounded-full px-2.5 py-1.5 transition-colors",
            locale === loc
              ? "brand-gradient text-brand-foreground"
              : "text-foreground-muted hover:text-foreground"
          )}
        >
          {t(loc)}
        </button>
      ))}
    </div>
  );
}
