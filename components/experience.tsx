import { experience } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20">
      <SectionHeading
        index="04"
        label="Experience"
        title="Where I've been shipping."
      />

      <ol className="relative space-y-12 border-l border-line pl-6 sm:pl-10">
        {experience.map((job) => (
          <li key={job.company} className="reveal relative">
            <span
              aria-hidden
              className="absolute top-2 -left-[calc(1.5rem+5px)] size-2.5 rounded-full border-2 border-bg bg-accent ring-4 ring-accent-soft sm:-left-[calc(2.5rem+5px)]"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-2xl font-semibold tracking-tight">
                {job.role} <span className="text-muted">· {job.company}</span>
              </h3>
              <p className="font-mono text-sm text-subtle">{job.period}</p>
            </div>

            <ul className="mt-4 max-w-3xl space-y-2">
              {job.highlights.map((h) => (
                <li key={h} className="flex gap-3 leading-relaxed text-muted">
                  <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
              {job.stack.map((t) => (
                <li key={t} className="chip rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                  {t}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
