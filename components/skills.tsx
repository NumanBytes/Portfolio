import { skills } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20">
      <SectionHeading
        index="05"
        label="Toolkit"
        title="The stack I reach for."
        intro="Modern, proven tools I'll use to build your product — across the frontend, APIs, data, AI and the cloud it runs on."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <li
            key={s.group}
            className={
              "spotlight reveal rounded-2xl border border-line bg-elevated p-6 transition hover:border-line-strong " +
              (i === 0 || i === skills.length - 1 ? "lg:col-span-2" : "")
            }
          >
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">{s.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <li key={item} className="chip rounded-lg border border-transparent bg-line px-3 py-1.5 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
