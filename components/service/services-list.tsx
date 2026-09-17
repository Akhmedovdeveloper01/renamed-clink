"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence } from "motion/react";
import { CategoryTabs } from "@/components/ui/category-tabs";
import { ServiceCard } from "@/components/ui/service-card";
import { services } from "@/data/services";
import type { CategorySlug } from "@/data/categories";

export function ServicesList() {
  const t = useTranslations("services");
  const [active, setActive] = useState<CategorySlug | "all">("all");

  const filtered = active === "all" ? services : services.filter((s) => s.category === active);

  return (
    <div>
      <CategoryTabs active={active} onChange={setActive} allLabel={t("categoryAll")} />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
