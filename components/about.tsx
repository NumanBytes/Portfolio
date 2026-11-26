import { about } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20">
      <SectionHeading index="03" label="About" title="Full-stack, from idea to production." />
      <div className="reveal max-w-3xl space-y-4 text-pretty text-xl leading-relaxed text-muted sm:text-2xl">
        {about.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
    </section>
  );
}
