"use client";

import { useReducedMotion } from "motion/react";
import { type MouseEvent, type ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const rotateX = (0.5 - py) * 10;
    const rotateY = (px - 0.5) * 10;

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`,
    });
    setSpotlight({ x: px * 100, y: py * 100, opacity: 1 });
  }

  function handleMouseLeave() {
    setStyle({
      transform:
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)",
    });
    setSpotlight((s) => ({ ...s, opacity: 0 }));
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transition: "transform 0.3s ease-out" }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-card)]",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(500px circle at ${spotlight.x}% ${spotlight.y}%, color-mix(in oklab, var(--color-brand) 18%, transparent), transparent 70%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
