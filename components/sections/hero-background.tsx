export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        aria-hidden
        className="motion-safe:animate-float-slow absolute -left-24 -top-32 h-[26rem] w-[26rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-brand-start), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="motion-safe:animate-float-slower absolute -right-20 top-10 h-[22rem] w-[22rem] rounded-full opacity-30 blur-3xl sm:block"
        style={{
          background:
            "radial-gradient(circle, var(--color-brand-end), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="motion-safe:animate-float-slow hidden h-[20rem] w-[20rem] rounded-full opacity-30 blur-3xl sm:absolute sm:bottom-0 sm:left-1/3 sm:block"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent), transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--color-border) 1px, transparent 0)",
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 20%, black, transparent)",
          opacity: 0.5,
        }}
      />
    </div>
  );
}
