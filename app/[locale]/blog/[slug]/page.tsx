import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { articles, getArticleBySlug } from "@/data/articles";
import { getServiceBySlug } from "@/data/services";
import { ArticleJsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/motion/reveal";
import { magneticButtonBaseClass } from "@/lib/button-styles";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    articles.map((article) => ({ locale, slug: article.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const loc = locale as Locale;
  return {
    title: article.title[loc],
    description: article.excerpt[loc],
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const loc = locale as Locale;
  const t = await getTranslations("blog");
  const relatedService = article.relatedServiceSlug
    ? getServiceBySlug(article.relatedServiceSlug)
    : undefined;

  return (
    <div className="container-px mx-auto max-w-3xl py-20 sm:py-28">
      <ArticleJsonLd article={article} locale={loc} />
      <Reveal>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted transition-colors hover:text-brand"
        >
          <ArrowLeft size={16} />
          {t("backToBlog")}
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-6 flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-foreground-muted">
          <time dateTime={article.publishedAt}>
            {new Intl.DateTimeFormat(loc, {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }).format(new Date(article.publishedAt))}
          </time>
          <span aria-hidden>·</span>
          <span>
            {article.readingTimeMinutes} {t("minutesShort")} {t("readingTimeLabel")}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="mt-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
          {article.title[loc]}
        </h1>
      </Reveal>

      <div className="mt-8 space-y-5">
        {article.body.map((paragraph, index) => (
          <Reveal key={index} delay={0.05 * index}>
            <p className="text-base leading-relaxed text-foreground-muted">{paragraph[loc]}</p>
          </Reveal>
        ))}
      </div>

      {relatedService && (
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl border border-border bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-serif text-xl font-semibold text-foreground">
              {relatedService.title[loc]}
            </h2>
            <Link
              href={`/services/${relatedService.slug}`}
              className={magneticButtonBaseClass("primary")}
            >
              {t("relatedServiceCta")}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      )}
    </div>
  );
}
