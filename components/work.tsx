import { ArrowUpRight, ChevronRight } from "lucide-react";
import { clientWork, featuredProjects, site, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { GitHubIcon } from "./icons";
import { SectionHeading } from "./section-heading";
import { Spotlight } from "./spotlight";

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-4 py-24 sm:px-6 md:py-32">
      <SectionHeading
        index="03"
        label="Selected work"
        title="Products I've built and shipped."
        intro="My own products, taken all the way to production — and the platforms I build for clients, used by hundreds of thousands of people."
      />

      <div className="space-y-6">
        {featuredProjects.map((p, i) => (
          <FeaturedProject key={p.slug} project={p} wide={i === 0} />
        ))}
      </div>

      <div className="mt-24">
        <div className="reveal mb-8 max-w-2xl">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Client work at CloudCard</h3>
          <p className="mt-3 text-muted">{clientWork.intro}</p>
        </div>
        <ul className="grid gap-4 lg:grid-cols-3">
          {clientWork.projects.map((p) => (
            <Spotlight
              as="li"
              key={p.name}
              className="reveal flex flex-col rounded-2xl border border-line bg-elevated p-6 transition hover:border-line-strong"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">{p.audience}</p>
              <h4 className="mt-2 text-xl font-semibold tracking-tight">{p.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-mono text-xs text-subtle">{p.stack.join(" · ")}</p>
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex h-10 w-fit items-center gap-2 rounded-full bg-fg px-4 text-sm font-medium text-bg transition hover:opacity-85"
                >
                  View sandbox
                  <ArrowUpRight className="size-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </Spotlight>
          ))}
        </ul>

        <a
          href={site.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition hover:text-fg"
        >
          <GitHubIcon className="size-4" /> More on GitHub <ChevronRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

function FeaturedProject({ project: p, wide }: { project: Project; wide: boolean }) {
  return (
    <Spotlight
      as="article"
      className="reveal overflow-hidden rounded-3xl border border-line bg-elevated transition hover:border-line-strong"
    >
      <div className={cn("grid gap-10 p-6 sm:p-10", wide && "lg:grid-cols-[1.1fr_1fr]")}>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">{p.kicker}</p>
            {p.status && (
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[11px]",
                  p.status === "Live" ? "bg-accent-soft text-accent" : "bg-line text-muted",
                )}
              >
                <span
                  className={cn(
                    "relative size-1.5 rounded-full",
                    p.status === "Live" ? "pulse-dot bg-accent" : "bg-subtle",
                  )}
                />
                {p.status}
              </span>
            )}
          </div>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{p.name}</h3>
          <p className="mt-4 text-pretty text-lg text-muted">{p.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {p.links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium transition",
                  i === 0 ? "bg-fg text-bg hover:opacity-85" : "border border-line-strong hover:bg-line",
                )}
              >
                {l.label === "Source" && <GitHubIcon className="size-4" />}
                {l.label}
                <ArrowUpRight className="size-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>

          {p.pipeline && (
            <div className="mt-10">
              <Pipeline steps={p.pipeline} />
            </div>
          )}
        </div>

        <div className="space-y-6">
          <ul className="space-y-3">
            {p.points.map((pt) => (
              <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                {pt}
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-2" aria-label="Technologies">
            {p.stack.map((t) => (
              <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Spotlight>
  );
}

// How a job moves through Shortlist, drawn as a row of stages joined by a moving line.
function Pipeline({ steps }: { steps: string[] }) {
  return (
    <figure className="rounded-2xl border border-line bg-bg/60 p-4">
      <figcaption className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
        Pipeline
      </figcaption>
      <ol className="flex flex-wrap items-center gap-y-2">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center">
            <span
              className={cn(
                "rounded-lg border px-2.5 py-1.5 font-mono text-[11px] whitespace-nowrap",
                s.includes("Claude") ? "border-accent/40 bg-accent-soft text-accent" : "border-line text-muted",
              )}
            >
              {s}
            </span>
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="flow mx-1.5 h-px w-4 bg-[linear-gradient(90deg,transparent,var(--accent),transparent)] sm:w-6"
              />
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}
