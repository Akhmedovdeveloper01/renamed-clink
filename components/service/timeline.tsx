import { Reveal } from "@/components/motion/reveal";

type Step = { title: string; text: string };

export function ServiceTimeline({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative space-y-8 border-l border-border pl-8">
      {steps.map((step, index) => (
        <Reveal as="li" key={index} delay={0.06 * index} className="relative">
          <span
            aria-hidden
            className="brand-gradient absolute -left-[2.6rem] flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-brand-foreground"
          >
            {index + 1}
          </span>
          <h4 className="font-serif text-lg font-semibold text-foreground">{step.title}</h4>
          <p className="mt-1 text-sm leading-relaxed text-foreground-muted">{step.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}
