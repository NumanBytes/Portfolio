import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const dynamic = "force-static";
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The card shown when the link is shared on LinkedIn, Slack, WhatsApp, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(circle at 80% 0%, #134e43 0%, #16171b 55%)",
          color: "#f4f4f6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#5eeac0",
              color: "#0d2a22",
              fontSize: 32,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            NR
          </div>
          <div style={{ fontSize: 30, color: "#a1a1aa" }}>{site.url.replace(/^https?:\/\//, "")}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3 }}>{site.name}</div>
          <div style={{ fontSize: 40, color: "#5eeac0", marginTop: 8 }}>
            {`${site.role} · React, TypeScript, Next.js, NestJS`}
          </div>
          <div style={{ fontSize: 30, color: "#a1a1aa", marginTop: 24 }}>
            Banking portals, SDKs and AI products — Lahore, Pakistan
          </div>
        </div>
      </div>
    ),
    size,
  );
}
