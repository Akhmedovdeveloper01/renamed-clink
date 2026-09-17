import { Hero } from "@/components/sections/hero";
import { PromotionsStrip } from "@/components/sections/promotions-strip";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { TrendVsFace } from "@/components/sections/trend-vs-face";
import { WhyUs } from "@/components/sections/why-us";
import { Specialists } from "@/components/sections/specialists";
import { BeforeAfter } from "@/components/sections/before-after";
import { Reviews } from "@/components/sections/reviews";
import { Articles } from "@/components/sections/articles";
import { Faq } from "@/components/sections/faq";
import { Booking } from "@/components/sections/booking";
import { Contacts } from "@/components/sections/contacts";
import { MedicalBusinessJsonLd, FaqPageJsonLd } from "@/components/seo/json-ld";
import { faq } from "@/data/faq";
import type { Locale } from "@/i18n/routing";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;

  return (
    <>
      <MedicalBusinessJsonLd locale={locale} />
      <FaqPageJsonLd
        items={faq.map((item) => ({ q: item.question, a: item.answer }))}
        locale={loc}
      />
      <Hero />
      <PromotionsStrip />
      <About />
      <Services />
      <TrendVsFace />
      <WhyUs />
      <Specialists />
      <BeforeAfter />
      <Reviews />
      <Articles />
      <Faq />
      <Booking />
      <Contacts />
    </>
  );
}
