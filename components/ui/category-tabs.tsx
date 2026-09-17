"use client";

import { motion } from "motion/react";
import { Activity, Sparkles, Syringe, Zap } from "lucide-react";
import { useLocale } from "next-intl";
import { categories, type CategorySlug } from "@/data/categories";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const icons = { sparkles: Sparkles, zap: Zap, syringe: Syringe, activity: Activity };

type CategoryTabsProps = {
  active: CategorySlug | "all";
  onChange: (value: CategorySlug | "all") => void;
  allLabel: string;
  className?: string;
};

export function CategoryTabs({ active, onChange, allLabel, className }: CategoryTabsProps) {
  const locale = useLocale() as Locale;

  return (
    <div
      role="tablist"
      aria-label={allLabel}
      className={cn("flex flex-wrap items-center justify-center gap-2", className)}
    >
      <TabButton isActive={active === "all"} onClick={() => onChange("all")}>
        {allLabel}
      </TabButton>
      {categories.map((category) => {
        const Icon = icons[category.icon];
        return (
          <TabButton
            key={category.slug}
            isActive={active === category.slug}
            onClick={() => onChange(category.slug)}
          >
            <Icon size={14} aria-hidden />
            {category.title[locale]}
          </TabButton>
        );
      })}
    </div>
  );
}

function TabButton({
  isActive,
  onClick,
  children,
}: {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
        isActive ? "text-brand-foreground" : "text-foreground-muted hover:text-foreground"
      )}
    >
      {isActive && (
        <motion.span
          layoutId="category-tab-highlight"
          className="brand-gradient absolute inset-0 rounded-full"
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-1.5">{children}</span>
    </button>
  );
}
