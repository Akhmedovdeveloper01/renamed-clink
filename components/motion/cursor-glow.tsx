"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Desktop-only cursor-follow glow. Disabled on touch devices and when
 * prefers-reduced-motion is set.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Read client-only capabilities after mount to avoid a hydration
    // mismatch (server always renders the disabled/null state).
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(hasFinePointer && !reduceMotion);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;

    function onMove(e: PointerEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
    }

    function loop() {
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x - 200}px, ${y - 200}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[400px] w-[400px] rounded-full opacity-60 will-change-transform"
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--color-brand) 35%, transparent) 0%, transparent 70%)",
        mixBlendMode: "plus-lighter",
      }}
    />
  );
}
