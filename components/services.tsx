import { Check, Gauge, Globe, LayoutDashboard, Rocket, Server, Sparkles } from "lucide-react";
import { promises, services, workProcess } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Spotlight } from "./spotlight";

const icons = {
  rocket: Rocket,
  layout: LayoutDashboard,
  sparkles: Sparkles,
  gauge: Gauge,
  server: Server,
  globe: Globe,
};

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-4 py-24 sm:px-6 md:py-32">
      <SectionHeading
        index="02"
        label="Services"
        title="How I can help you."
        intro="Whether you're a founder with an idea or a team that needs another pair of hands, I can take it from a rough brief to something live and working."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = icons[s.icon];
          return (
            <Spotlight
              as="li"
              key={s.title}
              className="reveal flex flex-col rounded-2xl border border-line bg-elevated p-6 transition hover:border-line-strong"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.body}</p>
              <p className="mt-5 font-mono text-xs text-subtle">{s.tags.join(" · ")}</p>
            </Spotlight>
          );
        })}
      </ul>

      <div className="reveal mt-20">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Working together is simple.</h3>
        <p className="mt-3 max-w-xl text-muted">
          No jargon, no disappearing for weeks. You always know what&apos;s being built, what it costs and
          when it&apos;ll be ready.
        </p>

        <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {workProcess.map((step, i) => (
            <li key={step.title} className="bg-bg p-6">
              <span className="font-mono text-sm text-accent">0{i + 1}</span>
              <p className="mt-3 font-medium">{step.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          {promises.map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm text-muted">
              <Check className="size-4 text-accent" /> {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
