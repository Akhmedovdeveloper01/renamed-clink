"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Phone, ChevronDown } from "lucide-react";
import { HeroBackground } from "@/components/sections/hero-background";
import { WordReveal } from "@/components/motion/word-reveal";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { magneticButtonBaseClass } from "@/lib/button-styles";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const t = useTranslations("hero");

  const badges = [
    t("badgeCosmetology"),
    t("badgeLaser"),
    t("badgeAesthetics"),
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      <HeroBackground />

      <div className="container-px relative mx-auto max-w-7xl py-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center rounded-full border border-border-strong px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand"
        >
          {t("eyebrow")}
        </motion.p>

        <h1 className="mx-auto max-w-4xl font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          <WordReveal text={t("titleLine1")} delay={0.1} />
          <br />
          <WordReveal
            text={t("titleLine2")}
            delay={0.1 + t("titleLine1").split(" ").length * 0.06}
            className="brand-text-gradient"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mt-7 max-w-xl text-balance text-base leading-relaxed text-foreground-muted sm:text-lg"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton
            className={magneticButtonBaseClass("primary")}
            onClick={() => {
              document
                .querySelector("#booking")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t("ctaBook")}
          </MagneticButton>
          <a href={siteConfig.phoneHref} className={magneticButtonBaseClass("ghost")}>
            <Phone size={16} />
            {t("ctaCall")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-border-strong bg-surface/60 px-4 py-2 text-xs font-medium tracking-wide text-foreground-muted"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-foreground-muted sm:flex"
      >
        <span>{t("scrollHint")}</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  );
}
