import { useLocale, useTranslations } from "next-intl";
import { Cpu } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { technologies } from "@/data/technologies";
import type { Locale } from "@/i18n/routing";

export function Technologies() {
  const t = useTranslations("technologies");
  const locale = useLocale() as Locale;

  return (
    <section id="technologies" className="relative py-24 sm:py-32">
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
      </div>

      <Reveal delay={0.15}>
        <div className="relative mt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg to-transparent sm:w-24"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bg to-transparent sm:w-24"
          />
          <div className="no-scrollbar container-px flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="flex w-[260px] shrink-0 snap-start flex-col rounded-3xl border border-border bg-surface p-7 shadow-[var(--shadow-card)]"
              >
                <div className="brand-gradient flex h-12 w-12 items-center justify-center rounded-xl text-brand-foreground">
                  <Cpu size={20} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                  {tech.name[locale]}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {tech.description[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
