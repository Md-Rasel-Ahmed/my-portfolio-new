"use client";

import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const updateEffects = () => {
      if (window.matchMedia("(pointer: fine)").matches) {
        layer.style.setProperty("--pointer-x", `${pointerX}px`);
        layer.style.setProperty("--pointer-y", `${pointerY}px`);
        layer.classList.add("has-pointer");
      }

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0
          ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight))
          : 0;
      const marker = layer.querySelector<SVGCircleElement>(
        ".scroll-orbit-marker",
      );
      if (marker) {
        const y = 42 + progress * 916;
        const x = 50 - Math.sin(progress * Math.PI * 4) * 32;
        marker.setAttribute("cx", x.toFixed(2));
        marker.setAttribute("cy", y.toFixed(2));
      }

      frame = 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(updateEffects);
    };

    const onScrollOrResize = () => {
      if (!frame) frame = window.requestAnimationFrame(updateEffects);
    };

    const onPointerLeave = () => {
      layer.classList.remove("has-pointer");
    };

    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onPointerLeave);
    }
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    onScrollOrResize();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <div ref={layerRef} aria-hidden="true" className="ambient-effects">
      <div className="ambient-grid" />
      <div className="ambient-orb ambient-orb-one" />
      <div className="ambient-orb ambient-orb-two" />
      <div className="ambient-orb ambient-orb-three" />
      <div className="ambient-pointer-glow" />
      <svg
        className="scroll-orbit"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter
            id="scroll-orbit-glow"
            x="-200%"
            y="-20%"
            width="500%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <linearGradient id="scroll-orbit-gradient" x1="0" x2="0" y1="0" y2="1">
            <stop stopColor="#22d3ee" stopOpacity=".1" />
            <stop offset=".5" stopColor="#a78bfa" stopOpacity=".48" />
            <stop offset="1" stopColor="#f472b6" stopOpacity=".12" />
          </linearGradient>
        </defs>
        <path
          className="scroll-orbit-trail"
          d="M50 0 C8 65 8 185 50 250 C92 315 92 435 50 500 C8 565 8 685 50 750 C92 815 92 935 50 1000"
        />
        <circle
          className="scroll-orbit-aura"
          cx="50"
          cy="42"
          r="12"
          filter="url(#scroll-orbit-glow)"
        />
        <circle className="scroll-orbit-marker" cx="50" cy="42" r="4.5" />
        <circle className="scroll-orbit-core" cx="50" cy="42" r="1.5" />
      </svg>
      <div className="ambient-code-fragment">
        <span>const</span> build = <span>() =&gt;</span> {"{"}
        <br />
        &nbsp;&nbsp;return <span>&quot;ideas → interfaces&quot;</span>;
        <br />
        {"}"}
        <i />
      </div>
    </div>
  );
}
