"use client";

import { useEffect } from "react";

// Any element with the `spotlight` class glows where the pointer is (see .spotlight in
// globals.css). One listener for the whole page sets --x/--y on the hovered box and
// on any spotlight boxes around it.
export function SpotlightTracker() {
  useEffect(() => {
    function onPointerMove(e: PointerEvent) {
      let el = (e.target as Element | null)?.closest?.(".spotlight") as HTMLElement | null;
      while (el) {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--x", `${e.clientX - r.left}px`);
        el.style.setProperty("--y", `${e.clientY - r.top}px`);
        el = el.parentElement?.closest(".spotlight") as HTMLElement | null;
      }
    }
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return null;
}
