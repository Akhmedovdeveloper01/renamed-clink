import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { specialists } from "@/data/specialists";
import type { Locale } from "@/i18n/routing";

export function Specialists() {
  const t = useTranslations("specialists");
  const locale = useLocale() as Locale;

  return (
    <section id="specialists" className="relative py-24 sm:py-32">
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {specialists.map((specialist, index) => (
            <Reveal key={specialist.id} delay={0.08 * index}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
                <Image
                  src={specialist.photo}
                  alt={`${specialist.name} — ${specialist.role[locale]}`}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-serif text-lg font-semibold">
                    {specialist.name}
                  </h3>
                  <p className="text-sm text-white/80">
                    {specialist.role[locale]}
                  </p>
                  <p className="mt-2 max-h-0 overflow-hidden text-xs leading-relaxed text-white/80 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
                    {specialist.bio[locale]}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
