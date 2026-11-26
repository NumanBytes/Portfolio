import { about } from "@/lib/data";
import { Section, SectionHeading } from "@/components/ui/section";

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="03" label="About" title="Full-stack, from idea to production." />
      <div className="reveal max-w-3xl space-y-4 text-xl leading-relaxed text-pretty text-muted sm:text-2xl">
        {about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
