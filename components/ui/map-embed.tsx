"use client";

import { useInView } from "motion/react";
import { useRef } from "react";
import { siteConfig } from "@/lib/site-config";

export function MapEmbed({ title }: { title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  return (
    <div
      ref={ref}
      className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)] sm:aspect-video"
    >
      {isInView ? (
        <iframe
          src={siteConfig.mapEmbedSrc}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full grayscale-[15%] contrast-[1.02]"
        />
      ) : (
        <div className="h-full w-full animate-pulse bg-surface-muted" />
      )}
    </div>
  );
}
