"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type SectionTransitionProps = {
  /** Color of the slash / accent element. Default is crimson. */
  accent?: "crimson" | "gold";
  className?: string;
};

/**
 * Decorative parallax divider between page sections.
 * It renders a full-width panel with a diagonal slash that
 * moves at a different scroll speed than the surrounding content,
 * creating a layered parallax depth effect.
 */
export function SectionTransition({
  accent = "crimson",
  className,
}: SectionTransitionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const slashRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    const slash = slashRef.current;
    const line = lineRef.current;
    const label = labelRef.current;
    if (!el || !slash || !line || !label) return;

    const ctx = gsap.context(() => {
      // Parallax: slash moves slower than page scroll (sticky-feel)
      gsap.fromTo(
        slash,
        { y: -40 },
        {
          y: 40,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Line expands from center on entry
      gsap.fromTo(
        line,
        { scaleX: 0, transformOrigin: "center" },
        {
          scaleX: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Label fades in
      gsap.fromTo(
        label,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const accentColor =
    accent === "gold"
      ? "rgba(232,203,133,0.7)"
      : "rgba(221,47,53,0.7)";

  return (
    <div
      ref={wrapperRef}
      className={cn("relative h-16 sm:h-20 overflow-hidden", className)}
      aria-hidden="true"
    >
      {/* Diagonal slash element with parallax */}
      <div
        ref={slashRef}
        className="absolute inset-0 flex items-center"
        style={{ willChange: "transform" }}
      >
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0 L1440 0 L1440 80 L0 80 Z"
            fill="transparent"
          />
          {/* Diagonal accent gash */}
          <path
            d={`M0 80 L160 0 L220 0 L60 80 Z`}
            fill={accent === "gold" ? "rgba(232,203,133,0.04)" : "rgba(221,47,53,0.04)"}
          />
          <path
            d={`M1220 80 L1380 0 L1440 0 L1440 20 L1280 80 Z`}
            fill={accent === "gold" ? "rgba(232,203,133,0.04)" : "rgba(221,47,53,0.04)"}
          />
        </svg>
      </div>

      {/* Horizontal line */}
      <div
        ref={lineRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-px"
        style={{
          transform: "scaleX(0) translateX(-50%) translateY(-50%)",
          transformOrigin: "center",
          background: `linear-gradient(to right, transparent, ${accentColor}, transparent)`,
          boxShadow: `0 0 8px ${accentColor.replace("0.7", "0.3")}`,
        }}
      />

      {/* Small label */}
      <span
        ref={labelRef}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-mono text-[7px] uppercase tracking-[0.35em] px-3 py-1"
        style={{
          opacity: 0,
          color: accent === "gold" ? "rgba(232,203,133,0.4)" : "rgba(221,47,53,0.4)",
        }}
      >
        &#9673;&nbsp;&nbsp;scroll
      </span>
    </div>
  );
}
