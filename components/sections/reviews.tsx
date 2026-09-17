"use client";

import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { reviews } from "@/data/reviews";
import type { Locale } from "@/i18n/routing";

const AUTOPLAY_MS = 5500;

export function Reviews() {
  const t = useTranslations("reviews");
  const locale = useLocale() as Locale;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const dragStartX = useRef(0);

  function goTo(next: number) {
    setDirection(next > index ? 1 : -1);
    setIndex((next + reviews.length) % reviews.length);
  }

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % reviews.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const review = reviews[index];

  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-3xl">
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

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label={t("title")}
        >
          <div
            className="overflow-hidden rounded-3xl border border-border bg-surface p-10 sm:p-12"
            onPointerDown={(e) => (dragStartX.current = e.clientX)}
            onPointerUp={(e) => {
              const delta = e.clientX - dragStartX.current;
              if (delta > 60) goTo(index - 1);
              else if (delta < -60) goTo(index + 1);
            }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={review.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-5 text-balance font-serif text-xl leading-relaxed text-foreground sm:text-2xl">
                  “{review.text[locale]}”
                </p>
                <p className="mt-6 text-sm font-semibold text-foreground-muted">
                  {review.name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => goTo(index - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {reviews.map((r, i) => (
                <button
                  key={r.id}
                  type="button"
                  aria-label={`Go to review ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-brand" : "w-2 bg-border-strong"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next"
              onClick={() => goTo(index + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
