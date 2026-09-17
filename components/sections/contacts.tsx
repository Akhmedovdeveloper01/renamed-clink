import { useTranslations } from "next-intl";
import { Clock, Link2, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { MapEmbed } from "@/components/ui/map-embed";
import { InstagramIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/lib/site-config";

export function Contacts() {
  const t = useTranslations("contacts");

  const links = [
    {
      icon: Phone,
      label: t("phoneLabel"),
      value: siteConfig.phone,
      href: siteConfig.phoneHref,
    },
    {
      icon: Phone,
      label: t("phoneLabel"),
      value: siteConfig.phoneSecondary,
      href: siteConfig.phoneSecondaryHref,
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      value: siteConfig.instagramHandle,
      href: siteConfig.instagram,
      external: true,
    },
    {
      icon: Send,
      label: "Telegram",
      value: siteConfig.telegram.replace("https://", ""),
      href: siteConfig.telegram,
      external: true,
    },
    {
      icon: Link2,
      label: "Taplink",
      value: siteConfig.taplink.replace("https://", ""),
      href: siteConfig.taplink,
      external: true,
    },
  ];

  return (
    <section id="contacts" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
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
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-strong text-brand">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-foreground-muted">
                    {t("addressLabel")}
                  </p>
                  <p className="mt-1 text-sm text-foreground">
                    {t("addressValue")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border-strong text-brand">
                  <Clock size={18} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-foreground-muted">
                    {t("hoursLabel")}
                  </p>
                  <p className="mt-1 text-sm text-foreground">
                    {t("hoursValue")}
                  </p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 text-sm text-foreground transition-colors hover:border-brand hover:text-brand"
                  >
                    <link.icon size={18} className="shrink-0" />
                    <span className="truncate">{link.value}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <MapEmbed title={t("mapTitle")} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
