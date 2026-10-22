import { experience } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-24 sm:px-6 md:py-32">
      <SectionHeading
        index="04"
        label="Experience"
        title="Where I've been shipping."
        intro="Production fintech by day: portals, SDKs and the APIs behind them."
      />

      <ol className="relative space-y-16 border-l border-line pl-6 sm:pl-10">
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
            <p className="mt-1 text-sm text-subtle">{job.location}</p>
            <p className="mt-4 max-w-2xl text-muted">{job.summary}</p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {job.highlights.map((h, i) => (
                <li
                  key={h.area}
                  className={
                    "rounded-2xl border border-line bg-elevated p-5 " +
                    // An odd number of cards: let the last one span the full row.
                    (job.highlights.length % 2 === 1 && i === job.highlights.length - 1 ? "sm:col-span-2" : "")
                  }
                >
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">{h.area}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{h.text}</p>
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
              {job.stack.map((t) => (
                <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
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
