import { siteConfig } from "@/lib/site-config";
import type { Service, ServiceFaqItem } from "@/data/services";
import type { Promotion } from "@/data/promotions";
import type { Article } from "@/data/articles";
import type { Locale } from "@/i18n/routing";

function JsonLdScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function MedicalBusinessJsonLd({ locale }: { locale: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "BeautySalon"],
    name: siteConfig.fullName,
    url: `${siteConfig.domain}/${locale}`,
    telephone: [siteConfig.phone, siteConfig.phoneSecondary],
    image: `${siteConfig.domain}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressCountry: "UZ",
    },
    sameAs: [siteConfig.instagram, siteConfig.telegram, siteConfig.taplink],
  };

  return <JsonLdScript data={data} />;
}

export function MedicalProcedureJsonLd({
  service,
  locale,
}: {
  service: Service;
  locale: Locale;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title[locale],
    description: service.shortDescription[locale],
    url: `${siteConfig.domain}/${locale}/services/${service.slug}`,
    procedureType: service.category,
    ...(service.preparation
      ? { preparation: service.preparation.map((item) => item[locale]).join(" ") }
      : {}),
    ...(service.contraindications
      ? { contraindication: service.contraindications.map((item) => item[locale]).join(" ") }
      : {}),
  };

  return <JsonLdScript data={data} />;
}

export function OfferJsonLd({
  promotion,
  locale,
}: {
  promotion: Promotion;
  locale: Locale;
}) {
  const datesConfirmed =
    !Number.isNaN(Date.parse(promotion.startDate)) && !Number.isNaN(Date.parse(promotion.endDate));

  const data = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: promotion.title[locale],
    description: promotion.description[locale],
    url: `${siteConfig.domain}/${locale}/services/${promotion.serviceSlug}`,
    ...(promotion.newPrice ? { price: promotion.newPrice, priceCurrency: "UZS" } : {}),
    ...(datesConfirmed
      ? { availabilityStarts: promotion.startDate, availabilityEnds: promotion.endDate }
      : {}),
  };

  return <JsonLdScript data={data} />;
}

export function FaqPageJsonLd({
  items,
  locale,
}: {
  items: ServiceFaqItem[];
  locale: Locale;
}) {
  if (items.length === 0) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a[locale],
      },
    })),
  };

  return <JsonLdScript data={data} />;
}

export function ArticleJsonLd({
  article,
  locale,
}: {
  article: Article;
  locale: Locale;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title[locale],
    description: article.excerpt[locale],
    datePublished: article.publishedAt,
    url: `${siteConfig.domain}/${locale}/blog/${article.slug}`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.fullName,
    },
  };

  return <JsonLdScript data={data} />;
}
