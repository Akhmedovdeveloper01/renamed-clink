import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";

// counterYearsLabel target of 10 reflects the clinic's own Instagram posts
// ("10 yillik tajriba"), but is unconfirmed — [CONFIRM] before launch.
// The remaining counters are placeholder figures for the clinic to fill in.
const counters = [
  { target: 10, suffix: "+", labelKey: "counterYearsLabel" },
  { target: 2500, suffix: "+", labelKey: "counterClientsLabel" },
  { target: 6000, suffix: "+", labelKey: "counterProceduresLabel" },
  { target: 12, suffix: "+", labelKey: "counterSpecialistsLabel" },
] as const;

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {t("eyebrow")}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                {t("title")}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-foreground-muted">
                {t("paragraph1")}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-base leading-relaxed text-foreground-muted">
                {t("paragraph2")}
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {counters.map((counter, index) => (
              <Reveal key={counter.labelKey} delay={0.05 * index}>
                <div className="rounded-3xl border border-border bg-surface p-7 shadow-[var(--shadow-card)]">
                  <p className="font-serif text-4xl font-semibold text-brand">
                    <Counter target={counter.target} suffix={counter.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-foreground-muted">
                    {t(counter.labelKey)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
