"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, Phone, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { navLinks } from "@/components/layout/nav-links";
import { magneticButtonBaseClass } from "@/lib/button-styles";
import { siteConfig } from "@/lib/site-config";

export function MobileMenu() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t("header.openMenu")}
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-foreground"
      >
        <Menu size={20} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-bg"
          >
            <div className="container-px flex h-20 items-center justify-between">
              <LanguageSwitcher />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t("header.closeMenu")}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-foreground"
              >
                <X size={20} />
              </button>
            </div>

            <nav
              aria-label="Mobile"
              className="container-px flex flex-1 flex-col items-start justify-center gap-2"
            >
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.35 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-2 font-serif text-3xl font-medium text-foreground transition-colors hover:text-brand"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="container-px mb-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <div className="flex flex-1 flex-col gap-2">
                  <a
                    href={siteConfig.phoneHref}
                    className="flex h-11 items-center justify-center gap-2 rounded-full border border-border-strong text-sm font-semibold text-foreground"
                  >
                    <Phone size={16} />
                    {siteConfig.phone}
                  </a>
                  <a
                    href={siteConfig.phoneSecondaryHref}
                    className="flex h-11 items-center justify-center gap-2 rounded-full border border-border-strong text-sm font-semibold text-foreground"
                  >
                    <Phone size={16} />
                    {siteConfig.phoneSecondary}
                  </a>
                </div>
              </div>
              <Link
                href="/#booking"
                onClick={() => setOpen(false)}
                className={magneticButtonBaseClass("primary") + " w-full"}
              >
                {t("header.bookVisit")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
