import { experience } from "@/lib/data";
import { BulletList, TagList } from "@/components/ui/lists";
import { Section, SectionHeading } from "@/components/ui/section";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading index="04" label="Experience" title="Where I've been shipping." />
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
            <BulletList items={job.highlights} className="mt-4 max-w-3xl space-y-2 text-base" />
            <TagList items={job.stack} className="mt-5" />
          </li>
        ))}
      </ol>
    </Section>
  );
}
