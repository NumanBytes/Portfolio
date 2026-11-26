import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Section, SectionHeading } from "@/components/ui/section";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading index="05" label="Toolkit" title="What I work with." />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <li
            key={s.group}
            className={cn("spotlight card reveal rounded-2xl p-6", (i === 0 || i === skills.length - 1) && "lg:col-span-2")}
          >
            <h3 className="font-mono text-xs tracking-[0.2em] text-subtle uppercase">{s.group}</h3>
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
    </Section>
  );
}
