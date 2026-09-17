import { useTranslations } from "next-intl";
import { Send, Link2, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/ui/logo";
import { InstagramIcon } from "@/components/ui/social-icons";
import { navLinks } from "@/components/layout/nav-links";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-px mx-auto grid max-w-7xl gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-foreground-muted">
            {t("footer.description")}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              <InstagramIcon className="h-[17px] w-[17px]" />
            </a>
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              <Send size={16} />
            </a>
            <a
              href={siteConfig.taplink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Taplink"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              <Link2 size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-base font-semibold text-foreground">
            {t("footer.quickLinksTitle")}
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="text-sm text-foreground-muted transition-colors hover:text-brand"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-base font-semibold text-foreground">
            {t("footer.contactsTitle")}
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-foreground-muted">
            <li>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 transition-colors hover:text-brand"
              >
                <Phone size={15} />
                {siteConfig.phone}
              </a>
            </li>
            <li>{t("contacts.addressValue")}</li>
            <li>{t("contacts.hoursValue")}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 py-6 pb-24 text-xs text-foreground-muted sm:flex-row lg:pb-6">
          <p>
            &copy; {year} {siteConfig.fullName}. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
