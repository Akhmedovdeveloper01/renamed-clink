import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";
import { BeforeAfterSlider } from "@/components/ui/before-after-slider";

// Placeholder illustrations only. Real client before/after photos may be
// published exclusively with the client's explicit written consent.
export function BeforeAfter() {
  const t = useTranslations("beforeAfter");

  return (
    <section id="before-after" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-5xl">
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

        <Reveal delay={0.15}>
          <div className="mt-12">
            <BeforeAfterSlider
              beforeSrc="/images/before-after/before-1.svg"
              afterSrc="/images/before-after/after-1.svg"
              beforeLabel={t("before")}
              afterLabel={t("after")}
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-center text-xs text-foreground-muted">
            {t("consentNote")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
