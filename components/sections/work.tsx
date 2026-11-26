import Link from "next/link";
import { ArrowRight, ChevronRight, Lock } from "lucide-react";
import { clientWork, featuredProjects, site, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { GitHubIcon } from "@/components/ui/icons";
import { ArrowOut, ExternalLink, button } from "@/components/ui/link";
import { BulletList, TagList } from "@/components/ui/lists";
import { Section, SectionHeading } from "@/components/ui/section";

export function Work() {
  return (
    <Section id="work">
      <SectionHeading
        index="01"
        label="Selected work"
        title="Built and shipped."
        intro="Products I run in production, and the platforms I build for clients."
      />

      <div className="space-y-6">
        {featuredProjects.map((p, i) => (
          <FeaturedProject key={p.slug} project={p} wide={i === 0} />
        ))}
      </div>

      <div className="mt-16">
        <div className="reveal mb-8 max-w-2xl">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Client work at CloudCard</h3>
          <p className="mt-3 text-muted">{clientWork.intro}</p>
        </div>
        <ul className="grid gap-4 lg:grid-cols-3">
          {clientWork.projects.map((p) => (
            <li key={p.name} className="spotlight card reveal flex flex-col rounded-2xl p-6">
              <p className="font-mono text-xs tracking-[0.2em] text-subtle uppercase">{p.audience}</p>
              <h4 className="mt-2 text-xl font-semibold tracking-tight">{p.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
              <BulletList items={p.points} className="mt-5 flex-1" />
              <p className="mt-5 font-mono text-xs text-subtle">{p.stack.join(" · ")}</p>
              {p.url && (
                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <ExternalLink href={p.url} data-umami-event={`portal:${p.name}`} className={button()}>
                    Live portal <ArrowOut />
                  </ExternalLink>
                  <span className="inline-flex items-center gap-1.5 text-xs text-subtle">
                    <Lock className="size-3" /> Login only — client data stays private
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>

        <ExternalLink
          href={site.socials.github}
          className="mt-6 inline-flex items-center gap-2 text-sm text-muted transition hover:text-fg"
        >
          <GitHubIcon className="size-4" /> More on GitHub <ChevronRight className="size-4" />
        </ExternalLink>
      </div>
    </Section>
  );
}

function FeaturedProject({ project: p, wide }: { project: Project; wide: boolean }) {
  return (
    <article className="spotlight card reveal overflow-hidden rounded-3xl">
      <div className={cn("grid gap-10 p-6 sm:p-10", wide && "lg:grid-cols-[1.1fr_1fr]")}>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-xs tracking-[0.2em] text-subtle uppercase">{p.kicker}</p>
            {p.status && <StatusBadge status={p.status} />}
          </div>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{p.name}</h3>
          <p className="mt-4 text-lg text-pretty text-muted">{p.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {p.caseStudy && (
              <Link
                href={`/work/${p.caseStudy}/`}
                data-umami-event={`case-study:${p.slug}`}
                className={button("accent")}
              >
                Case study
                <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
              </Link>
            )}
            {p.links.map((l, i) => (
              <ExternalLink
                key={l.href}
                href={l.href}
                data-umami-event={`${l.label.toLowerCase()}:${p.slug}`}
                className={button(i === 0 && !p.caseStudy ? "solid" : "outline")}
              >
                {l.label === "Source" && <GitHubIcon className="size-4" />}
                {l.label}
                <ArrowOut />
              </ExternalLink>
            ))}
          </div>

          {p.pipeline && <Pipeline steps={p.pipeline} />}
        </div>

        <div className="space-y-6">
          <BulletList items={p.points} className="space-y-3" />
          <TagList items={p.stack} />
        </div>
      </div>
    </article>
  );
}

function StatusBadge({ status }: { status: NonNullable<Project["status"]> }) {
  const live = status === "Live";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[11px]",
        live ? "bg-accent-soft text-accent" : "bg-line text-muted",
      )}
    >
      <span className={cn("relative size-1.5 rounded-full", live ? "pulse-dot bg-accent" : "bg-subtle")} />
      {status}
    </span>
  );
}

// How a job moves through Shortlist, drawn as a row of stages joined by a moving line.
function Pipeline({ steps }: { steps: string[] }) {
  return (
    <figure className="mt-10 rounded-2xl border border-line bg-bg/60 p-4">
      <figcaption className="mb-3 font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">Pipeline</figcaption>
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
