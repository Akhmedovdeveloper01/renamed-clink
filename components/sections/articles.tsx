import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/motion/reveal";
import { articles } from "@/data/articles";
import type { Locale } from "@/i18n/routing";

export function Articles() {
  const t = useTranslations("blog");
  const locale = useLocale() as Locale;
  const latest = [...articles]
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .slice(0, 3);

  return (
    <section id="blog" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
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
              <p className="mt-4 max-w-xl text-base text-foreground-muted">
                {t("subtitle")}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-transform hover:gap-2"
            >
              {t("viewAll")}
              <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {latest.map((article, index) => (
            <Reveal key={article.slug} delay={0.08 * index}>
              <article className="flex h-full flex-col rounded-3xl border border-border bg-surface p-7 shadow-[var(--shadow-card)]">
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wide text-foreground-muted">
                  <time dateTime={article.publishedAt}>
                    {new Intl.DateTimeFormat(locale, {
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
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                  {article.title[locale]}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-muted">
                  {article.excerpt[locale]}
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
    </section>
  );
}
