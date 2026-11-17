import { Reveal } from "./Reveal";
import { TempleDivider } from "./TempleDivider";

export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-terracotta">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-4xl font-light italic leading-tight text-ink sm:text-5xl">{title}</h2>
      <TempleDivider className="my-6" />
      {intro && <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>}
    </Reveal>
  );
}
