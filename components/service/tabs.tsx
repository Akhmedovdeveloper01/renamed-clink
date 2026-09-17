"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TabItem = { id: string; label: string; content: ReactNode };

export function ServiceTabs({ items }: { items: TabItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id);
  const active = items.find((item) => item.id === activeId) ?? items[0];

  if (!active) return null;

  return (
    <div>
      <div role="tablist" className="flex gap-2 border-b border-border">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`service-tab-${item.id}`}
            aria-selected={activeId === item.id}
            aria-controls={`service-tabpanel-${item.id}`}
            onClick={() => setActiveId(item.id)}
            className={cn(
              "-mb-px border-b-2 px-4 py-3 text-sm font-medium transition-colors",
              activeId === item.id
                ? "border-brand text-brand"
                : "border-transparent text-foreground-muted hover:text-foreground"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`service-tabpanel-${active.id}`}
        aria-labelledby={`service-tab-${active.id}`}
        className="pt-6"
      >
        {active.content}
      </div>
    </div>
  );
}
