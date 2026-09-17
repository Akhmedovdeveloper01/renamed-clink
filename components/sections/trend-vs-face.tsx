import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/reveal";
import { TrendVsFace as TrendVsFaceCard } from "@/components/service/trend-vs-face";

export function TrendVsFace() {
  const t = useTranslations("services");

  return (
    <section className="relative py-16 sm:py-20">
      <div className="container-px mx-auto max-w-4xl">
        <Reveal>
          <TrendVsFaceCard />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-6 flex justify-center">
            <Link
              href="/services/filler"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-transform hover:gap-2"
            >
              {t("learnMore")}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
