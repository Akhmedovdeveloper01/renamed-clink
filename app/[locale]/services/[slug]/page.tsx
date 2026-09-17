import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import {
  Activity,
  ArrowUpRight,
  CalendarCheck,
  Droplet,
  Phone,
  Sparkles,
  Syringe,
  Wind,
  Zap,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getServiceBySlug, services } from "@/data/services";
import { getCategoryBySlug } from "@/data/categories";
import { getPromotionForService } from "@/data/promotions";
import { MedicalProcedureJsonLd, OfferJsonLd, FaqPageJsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/motion/reveal";
import { Accordion } from "@/components/ui/accordion";
import { ServiceCard } from "@/components/ui/service-card";
import { ServiceStickyNav } from "@/components/service/sticky-nav";
import { ServiceTimeline } from "@/components/service/timeline";
import { ServiceTabs } from "@/components/service/tabs";
import { ServiceFactsCard } from "@/components/service/facts-card";
import { TrendVsFace } from "@/components/service/trend-vs-face";
import { BodyAreaSelector } from "@/components/service/body-area-selector";
import { ComplexTrio } from "@/components/service/complex-trio";
import { magneticButtonBaseClass } from "@/lib/button-styles";
import { siteConfig } from "@/lib/site-config";

const icons = { sparkles: Sparkles, droplet: Droplet, zap: Zap, syringe: Syringe, wind: Wind, activity: Activity };

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    services.map((service) => ({ locale, slug: service.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const loc = locale as Locale;
  const title = service.seo.title[loc];
  const description = service.seo.description[loc];

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const loc = locale as Locale;
  const t = await getTranslations("services");
  const Icon = icons[service.icon];
  const category = getCategoryBySlug(service.category);
  const promo = getPromotionForService(service.slug);

  const related = service.relatedSlugs
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter((s): s is typeof service => Boolean(s));

  const navItems = [
    { id: "what-is-it", label: t("whatIsItTitle") },
    { id: "indications", label: t("indicationsTitle") },
    { id: "benefits", label: t("benefitsTitle") },
    ...(service.steps ? [{ id: "steps", label: t("stepsTitle") }] : []),
    ...(service.preparation || service.aftercare
      ? [{ id: "care", label: t("preparationTab") }]
      : []),
    ...(service.contraindications ? [{ id: "contraindications", label: t("contraindicationsTitle") }] : []),
    { id: "faq", label: t("faqTitle") },
    { id: "booking-cta", label: t("bookThisService") },
  ];

  return (
    <div className="relative py-16 sm:py-20">
      <MedicalProcedureJsonLd service={service} locale={loc} />
      {promo && <OfferJsonLd promotion={promo} locale={loc} />}
      <FaqPageJsonLd items={service.faq} locale={loc} />
      {/* Hero */}
      <div className="container-px mx-auto max-w-5xl">
        <Reveal>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted transition-colors hover:text-brand"
          >
            {t("backToServices")}
          </Link>
        </Reveal>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {category && (
            <span className="rounded-full border border-border-strong px-3 py-1 text-xs font-medium uppercase tracking-wide text-foreground-muted">
              {category.title[loc]}
            </span>
          )}
          {promo && (
            <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-brand">
              {t("promoBadgeLabel")}
            </span>
          )}
        </div>

        <Reveal delay={0.05}>
          <div className="brand-gradient mt-6 flex h-16 w-16 items-center justify-center rounded-2xl text-brand-foreground">
            <Icon size={28} />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 font-serif text-4xl font-semibold text-foreground sm:text-5xl">
            {service.title[loc]}
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground-muted">
            {service.heroTagline[loc]}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/?service=${encodeURIComponent(service.slug)}#booking`}
              className={magneticButtonBaseClass("primary")}
            >
              <CalendarCheck size={16} />
              {t("bookThisService")}
            </Link>
            <a href={siteConfig.phoneHref} className={magneticButtonBaseClass("ghost")}>
              <Phone size={16} />
              {siteConfig.phone}
            </a>
          </div>
        </Reveal>
      </div>

      {/* Body: sticky nav + content */}
      <div className="container-px mx-auto mt-14 max-w-5xl lg:flex lg:items-start lg:gap-12">
        <ServiceStickyNav items={navItems} ariaLabel={t("stickyNavAria")} />

        <div className="min-w-0 flex-1 space-y-16">
          <section id="what-is-it" className="scroll-mt-28">
            <Reveal>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                {t("whatIsItTitle")}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground-muted">
                {service.whatIsIt[loc]}
              </p>
            </Reveal>

            {service.interactiveBlock === "trend-vs-face" && (
              <Reveal delay={0.1} className="mt-8">
                <TrendVsFace />
              </Reveal>
            )}
          </section>

          <section id="indications" className="scroll-mt-28">
            <Reveal>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                {t("indicationsTitle")}
              </h2>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {service.indications.map((item, index) => (
                <Reveal
                  key={index}
                  delay={0.05 * index}
                  className="rounded-2xl border border-border bg-surface p-5 text-sm text-foreground-muted"
                >
                  {item[loc]}
                </Reveal>
              ))}
            </div>
          </section>

          <section id="benefits" className="scroll-mt-28">
            <Reveal>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                {t("benefitsTitle")}
              </h2>
            </Reveal>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((benefit, index) => (
                <Reveal as="li" key={index} delay={0.04 * index} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-[10px] font-bold text-brand"
                  >
                    ✓
                  </span>
                  <span className="text-sm leading-relaxed text-foreground">{benefit[loc]}</span>
                </Reveal>
              ))}
            </ul>

            {service.interactiveBlock === "complex-trio" && service.steps && (
              <Reveal delay={0.1} className="mt-8">
                <ComplexTrio parts={service.steps} />
              </Reveal>
            )}

            {service.interactiveBlock === "body-area-selector" && service.bodyAreas && (
              <Reveal delay={0.1} className="mt-8">
                <BodyAreaSelector areas={service.bodyAreas} />
              </Reveal>
            )}
          </section>

          {service.steps && service.interactiveBlock !== "complex-trio" && (
            <section id="steps" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  {t("stepsTitle")}
                </h2>
              </Reveal>
              <div className="mt-8">
                <ServiceTimeline
                  steps={service.steps.map((step) => ({ title: step.title[loc], text: step.text[loc] }))}
                />
              </div>
            </section>
          )}

          {(service.preparation || service.aftercare) && (
            <section id="care" className="scroll-mt-28">
              <ServiceTabs
                items={[
                  ...(service.preparation
                    ? [
                        {
                          id: "preparation",
                          label: t("preparationTab"),
                          content: (
                            <ul className="space-y-3">
                              {service.preparation.map((item, index) => (
                                <li key={index} className="text-sm leading-relaxed text-foreground-muted">
                                  {item[loc]}
                                </li>
                              ))}
                            </ul>
                          ),
                        },
                      ]
                    : []),
                  ...(service.aftercare
                    ? [
                        {
                          id: "aftercare",
                          label: t("aftercareTab"),
                          content: (
                            <ul className="space-y-3">
                              {service.aftercare.map((item, index) => (
                                <li key={index} className="text-sm leading-relaxed text-foreground-muted">
                                  {item[loc]}
                                </li>
                              ))}
                            </ul>
                          ),
                        },
                      ]
                    : []),
                ]}
              />
            </section>
          )}

          {service.contraindications && (
            <section id="contraindications" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  {t("contraindicationsTitle")}
                </h2>
                <ul className="mt-4 space-y-2">
                  {service.contraindications.map((item, index) => (
                    <li key={index} className="text-sm leading-relaxed text-foreground-muted">
                      {item[loc]}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </section>
          )}

          <Reveal>
            <ServiceFactsCard
              facts={service.facts}
              promo={
                promo
                  ? { ...promo, badgeLabel: promo.badge[loc] }
                  : undefined
              }
            />
          </Reveal>

          {service.faq.length > 0 && (
            <section id="faq" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-serif text-2xl font-semibold text-foreground">{t("faqTitle")}</h2>
              </Reveal>
              <div className="mt-6">
                <Accordion
                  items={service.faq.map((item, index) => ({
                    id: `${service.slug}-faq-${index}`,
                    question: item.q[loc],
                    answer: item.a[loc],
                  }))}
                />
              </div>
            </section>
          )}

          {related.length > 0 && (
            <section>
              <Reveal>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  {t("relatedTitle")}
                </h2>
              </Reveal>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {related.map((relatedService, index) => (
                  <ServiceCard key={relatedService.slug} service={relatedService} index={index} />
                ))}
              </div>
            </section>
          )}

          <section id="booking-cta" className="scroll-mt-28">
            <Reveal>
              <div className="flex flex-col items-start gap-4 rounded-3xl border border-border bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {t("bookThisService")}
                  </h3>
                </div>
                <Link
                  href={`/?service=${encodeURIComponent(service.slug)}#booking`}
                  className={magneticButtonBaseClass("primary")}
                >
                  {t("bookThisService")}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          </section>

          <p className="text-xs leading-relaxed text-foreground-muted">{t("disclaimer")}</p>
        </div>
      </div>
    </div>
  );
}
