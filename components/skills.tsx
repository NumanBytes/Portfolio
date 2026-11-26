import { skills } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Spotlight } from "./spotlight";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20">
      <SectionHeading
        index="05"
        label="Toolkit"
        title="The stack I reach for."
        intro="What I use today across the whole stack: frontend, APIs, data, AI and the cloud it all runs on."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Spotlight
            as="li"
            key={s.group}
            className={
              "reveal rounded-2xl border border-line bg-elevated p-6 transition hover:border-line-strong " +
              (i === 0 || i === skills.length - 1 ? "lg:col-span-2" : "")
            }
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">{s.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li key={item} className="rounded-lg bg-line px-3 py-1.5 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </Spotlight>
        ))}
      </ul>
    </section>
  );
}
