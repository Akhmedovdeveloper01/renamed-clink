import { useTranslations } from "next-intl";
import { Award, Clock, HeartHandshake, Shield, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const items = [
  { icon: Shield, key: 1 },
  { icon: Sparkles, key: 2 },
  { icon: HeartHandshake, key: 3 },
  { icon: Award, key: 4 },
  { icon: Users, key: 5 },
  { icon: Clock, key: 6 },
] as const;

export function WhyUs() {
  const t = useTranslations("whyUs");

  return (
    <section id="why-us" className="relative py-24 sm:py-32">
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
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.key} delay={0.06 * index}>
                <div className="h-full rounded-3xl border border-border bg-surface p-7 transition-colors hover:border-brand/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong text-brand">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                    {t(`item${item.key}Title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {t(`item${item.key}Description`)}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
