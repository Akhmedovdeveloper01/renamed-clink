"use client";

import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { navLinks } from "@/components/layout/nav-links";
import { CallPicker } from "@/components/ui/call-picker";
import { magneticButtonBaseClass } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-border shadow-[var(--shadow-card)]"
          : "bg-transparent"
      )}
    >
      <div className="container-px mx-auto flex h-20 max-w-[100rem] items-center justify-between">
        <Link href="/" className="shrink-0" aria-label="RENAMED — home">
          <Logo />
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-6 xl:flex"
        >
          {navLinks.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium tracking-wide text-foreground-muted transition-colors hover:text-brand"
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <CallPicker
            aria-label={t("header.call")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-brand hover:text-brand"
          >
            <Phone size={18} />
          </CallPicker>
          <Link
            href="/#booking"
            className={magneticButtonBaseClass("primary")}
          >
            {t("header.bookVisit")}
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
