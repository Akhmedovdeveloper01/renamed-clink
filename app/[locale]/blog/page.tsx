import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/reveal";
import { articles } from "@/data/articles";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;
  const t = await getTranslations({ locale: loc, namespace: "blog" });

  const sorted = [...articles].sort(
    (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
  );

  return (
    <div className="container-px mx-auto max-w-5xl py-20 sm:py-28">
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

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {sorted.map((article, index) => (
          <Reveal key={article.slug} delay={0.06 * index}>
            <article className="flex h-full flex-col rounded-3xl border border-border bg-surface p-7 shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-foreground-muted">
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
              <h2 className="mt-4 font-serif text-xl font-semibold text-foreground">
                {article.title[loc]}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-muted">
                {article.excerpt[loc]}
              </p>
              <Link
                href={`/blog/${article.slug}`}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-transform hover:gap-2"
              >
                {t("readMore")}
                <ArrowUpRight size={16} />
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
