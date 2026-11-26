"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 65;
const DELETE_MS = 35;
const HOLD_MS = 1800;
const GAP_MS = 350;

// Types each line, holds it, deletes it, then moves on to the next, forever.
// The server renders the first line in full, so there's no empty heading before
// JavaScript loads, and people who prefer reduced motion just see that line.
export function Typewriter({ lines }: { lines: string[] }) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(lines[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const line = lines[index];
    let delay: number;
    let step: () => void;

    if (!deleting && length === line.length) {
      delay = HOLD_MS;
      step = () => setDeleting(true);
    } else if (deleting && length === 0) {
      delay = GAP_MS;
      step = () => {
        setDeleting(false);
        setIndex((i) => (i + 1) % lines.length);
      };
    } else {
      delay = deleting ? DELETE_MS : TYPE_MS;
      step = () => setLength((l) => l + (deleting ? -1 : 1));
    }

    const id = window.setTimeout(step, delay);
    return () => window.clearTimeout(id);
  }, [index, length, deleting, lines]);

  return (
    <span aria-hidden="true">
      {lines[index].slice(0, length)}
      <span className="caret ml-1 inline-block h-[0.9em] w-[0.08em] translate-y-[0.08em] bg-accent" />
    </span>
  );
}
