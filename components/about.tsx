import { Sparkles } from "lucide-react";
import { about } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20">
      <SectionHeading index="03" label="About" title="Full-stack, from idea to production." />

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

        </div>
      </div>
    </section>
  );
}
