"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { faqs } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const id = useId();

  return (
    <section id="faq" className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20">
      <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
        <SectionHeading
          index="06"
          label="FAQ"
          title="Good questions to ask."
          intro="The things clients usually want to know before we start."
        />
        <ul className="reveal divide-y divide-line self-start border-y border-line">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${id}-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left font-medium transition hover:text-accent"
                  >
                    {f.q}
                    <Plus
                      className={cn(
                        "size-4 shrink-0 text-muted transition-transform duration-300",
                        isOpen && "rotate-45 text-accent",
                      )}
                    />
                  </button>
                </h3>
                {/* Animating grid rows from 0fr to 1fr slides the answer open at its natural height. */}
                <div
                  id={`${id}-${i}`}
                  role="region"
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden" inert={!isOpen}>
                    <p className="pr-10 pb-5 text-sm leading-relaxed text-muted">{f.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
