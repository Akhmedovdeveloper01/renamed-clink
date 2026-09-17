import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";
import { ServicesList } from "@/components/service/services-list";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: "services" });

  return (
    <div className="container-px mx-auto max-w-7xl py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {t("eyebrow")}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            {t("title")}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 text-base text-foreground-muted">{t("subtitle")}</p>
        </Reveal>
      </div>

      <div className="mt-14">
        <ServicesList />
      </div>
    </div>
  );
}
