"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    const apply = () => {
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {}
    };
    // Cross-fade the whole page where the browser supports view transitions.
    if ("startViewTransition" in document) document.startViewTransition(apply);
    else apply();
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      className="grid size-9 place-items-center rounded-full text-muted transition hover:bg-line hover:text-fg"
    >
      {/* Both icons render; CSS shows the right one so the server markup never mismatches. */}
      <Sun className="size-4 hidden light:block" />
      <Moon className="size-4 light:hidden" />
    </button>
  );
}
