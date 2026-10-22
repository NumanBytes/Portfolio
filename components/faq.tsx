import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-5xl px-4 py-24 sm:px-6 md:py-32">
      <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <SectionHeading
          index="06"
          label="FAQ"
          title="Good questions to ask."
          intro="The things clients usually want to know before we start."
        />
        <ul className="reveal divide-y divide-line border-y border-line self-start">
          {faqs.map((f) => (
            <li key={f.q}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-medium transition hover:text-accent [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus className="size-4 shrink-0 text-muted transition group-open:rotate-45" />
                </summary>
                <p className="-mt-1 pb-5 pr-10 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
