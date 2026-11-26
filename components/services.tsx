import { ArrowUpRight, Gauge, LayoutDashboard, Rocket, Sparkles } from "lucide-react";
import { bookingLink, services, workProcess } from "@/lib/data";
import { SectionHeading } from "./section-heading";

const icons = {
  rocket: Rocket,
  layout: LayoutDashboard,
  sparkles: Sparkles,
  gauge: Gauge,
};

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20">
      <SectionHeading
        index="02"
        label="Services"
        title="What I build."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => {
          const Icon = icons[s.icon];
          return (
            <li
              key={s.title}
              className="spotlight reveal flex flex-col rounded-2xl border border-line bg-elevated p-6 transition hover:border-line-strong"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.body}</p>
              <p className="mt-5 font-mono text-xs text-subtle">{s.tags.join(" · ")}</p>
            </li>
          );
        })}
      </ul>

      <div className="reveal mt-14">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">How we&apos;d work</h3>

        <ol className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {workProcess.map((step, i) => (
            <li key={step.title} className="spotlight bg-bg p-6">
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <p className="mt-3 font-medium">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              {i === 0 && (
                <a
                  href={bookingLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event="services:book-call"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  Book it <ArrowUpRight className="size-3.5" />
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
