"use client";

import { useEffect, useRef } from "react";

// Per theme: accent colour (RGB, so the canvas can vary the alpha) and how strongly dots,
// links and pointer links show. Light needs more ink to read as clearly as dark.
const THEMES = {
  dark: { rgb: "94, 234, 192", dot: 0.4, link: 0.13, pointer: 0.35, width: 1, size: 1.4 },
  light: { rgb: "0, 120, 96", dot: 0.6, link: 0.26, pointer: 0.6, width: 1.2, size: 1.7 },
};
const LINK_DISTANCE = 110;
const POINTER_RADIUS = 160;

type Dot = { x: number; y: number; vx: number; vy: number };

// A field of drifting dots joined by faint lines, fixed behind the whole page. Dots near
// the pointer link up to it and are gently pushed aside, so the background follows the
// mouse. Static for reduced motion, and paused while the tab is hidden.
export function PointerField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -9999, y: -9999 };
    let dots: Dot[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      // About one dot per 18,000 px², so phones get fewer than desktops.
      const count = Math.min(80, Math.round((width * height) / 18000));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    }

    function draw() {
      const theme = THEMES[document.documentElement.dataset.theme === "light" ? "light" : "dark"];
      const rgb = theme.rgb;
      ctx!.clearRect(0, 0, width, height);

      for (const d of dots) {
        if (!reduceMotion) {
          const dx = d.x - pointer.x;
          const dy = d.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < POINTER_RADIUS && dist > 0) {
            const push = (1 - dist / POINTER_RADIUS) * 0.9;
            d.x += (dx / dist) * push;
            d.y += (dy / dist) * push;
          }
          d.x += d.vx;
          d.y += d.vy;
          if (d.x < -10) d.x = width + 10;
          if (d.x > width + 10) d.x = -10;
          if (d.y < -10) d.y = height + 10;
          if (d.y > height + 10) d.y = -10;
        }
        ctx!.fillStyle = `rgba(${rgb}, ${theme.dot})`;
        ctx!.beginPath();
        ctx!.arc(d.x, d.y, theme.size, 0, Math.PI * 2);
        ctx!.fill();
      }

      ctx!.lineWidth = theme.width;
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DISTANCE) {
            ctx!.strokeStyle = `rgba(${rgb}, ${(1 - dist / LINK_DISTANCE) * theme.link})`;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
        const toPointer = Math.hypot(a.x - pointer.x, a.y - pointer.y);
        if (toPointer < POINTER_RADIUS) {
          ctx!.strokeStyle = `rgba(${rgb}, ${(1 - toPointer / POINTER_RADIUS) * theme.pointer})`;
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(pointer.x, pointer.y);
          ctx!.stroke();
        }
      }

      if (!reduceMotion && !document.hidden) frame = requestAnimationFrame(draw);
    }

    function onPointerMove(e: PointerEvent) {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    }
    function onPointerLeave() {
      pointer.x = pointer.y = -9999;
    }
    function onVisibility() {
      cancelAnimationFrame(frame);
      if (!document.hidden) draw();
    }
    function onResize() {
      cancelAnimationFrame(frame);
      resize();
      draw();
    }

    resize();
    draw();
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 -z-10 size-full" />;
}
