import { GraduationCap, Sparkles } from "lucide-react";
import { about, education } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-24 sm:px-6 md:py-32">
      <SectionHeading index="01" label="About" title="Frontend roots, full-stack reach." />

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="reveal space-y-6 text-pretty text-lg leading-relaxed text-muted">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <div className="space-y-4">
          <div className="reveal rounded-2xl border border-line bg-elevated p-6">
            <p className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              <Sparkles className="size-3.5 text-accent" /> How I work
            </p>
            <ul className="space-y-5">
              {about.principles.map((p) => (
                <li key={p.title}>
                  <p className="font-medium">{p.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal flex items-start gap-4 rounded-2xl border border-line bg-elevated p-6">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
              <GraduationCap className="size-5" />
            </span>
            <div>
              <p className="font-medium">{education.degree}</p>
              <p className="text-sm text-muted">{education.school}</p>
              <p className="mt-1 font-mono text-xs text-subtle">{education.period}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
