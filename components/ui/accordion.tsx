"use client";

import { ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  id: string;
  question: ReactNode;
  answer: ReactNode;
};

export function Accordion({
  items,
  defaultOpenId,
}: {
  items: AccordionItem[];
  defaultOpenId?: string | null;
}) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        return (
          <Reveal key={item.id} delay={0.05 * index} className="overflow-hidden rounded-2xl border border-border bg-surface">
            <h3>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${item.id}`}
                id={`accordion-trigger-${item.id}`}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-serif text-base font-semibold text-foreground sm:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "shrink-0 text-brand transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div
                id={`accordion-panel-${item.id}`}
                role="region"
                aria-labelledby={`accordion-trigger-${item.id}`}
                className="min-h-0 overflow-hidden"
              >
                <p className="px-6 pb-5 text-sm leading-relaxed text-foreground-muted">
                  {item.answer}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
