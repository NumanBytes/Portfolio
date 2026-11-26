"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/lib/data";

const format = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: site.timeZone,
});

function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 15_000);
  return () => clearInterval(id);
}

// Numan's local time, so visitors in other time zones know when to expect a reply.
// The static HTML has a placeholder; the browser fills in the real time.
export function LocalTime() {
  const time = useSyncExternalStore(
    subscribe,
    () => format.format(new Date()),
    () => "--:--",
  );

  return <time className="tabular-nums">{time} PKT</time>;
}
