"use client";

import { useTranslations } from "next-intl";
import { Phone, Send, CalendarCheck } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { CallPicker } from "@/components/ui/call-picker";
import { siteConfig } from "@/lib/site-config";

export function FloatingActions() {
  const t = useTranslations();

  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div className="container-px fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-border bg-bg/95 py-3 backdrop-blur-md lg:hidden">
        <CallPicker
          variant="modal"
          wrapperClassName="flex-1"
          className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-border-strong text-sm font-semibold text-foreground"
        >
          <Phone size={16} />
          {t("floating.call")}
        </CallPicker>
        <Link
          href="/#booking"
          className="brand-gradient flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full text-sm font-semibold text-brand-foreground"
        >
          <CalendarCheck size={16} />
          {t("floating.book")}
        </Link>
      </div>

      {/* Desktop floating action */}
      <a
        href={siteConfig.telegram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="brand-gradient fixed bottom-8 right-8 z-40 hidden h-14 w-14 items-center justify-center rounded-full text-brand-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105 lg:flex"
      >
        <Send size={22} />
      </a>
    </>
  );
}
