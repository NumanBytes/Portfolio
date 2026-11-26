"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";

/** Question-and-answer list; one item open at a time, answers slide open. */
export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const id = useId();

  return (
    <ul className="divide-y divide-line self-start">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left font-medium transition hover:text-accent"
              >
                {item.q}
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
                <p className="pr-10 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
