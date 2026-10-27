"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type ParallaxRevealProps = {
  children: ReactNode;
  className?: string;
  /**
   * Color of the wipe-in panel that reveals this section.
   * Should match (or complement) the section's own background color.
   */
  panelColor?: string;
};

/**
 * Each section wrapped in this component slides in over the previous one
 * via a scrub-driven wipe panel — creating a "card stack / page-turn" parallax.
 *
 * The wipe panel starts at yPercent 0 (covering the section), then scrubs to
 * yPercent -100 as the section enters the viewport, revealing the content beneath.
 */
export function ParallaxReveal({
  children,
  className,
  panelColor = "#060101",
}: ParallaxRevealProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const panel = panelRef.current;
    if (!wrap || !panel) return;

    const ctx = gsap.context(() => {
      // Scrub the wipe panel upward — from covering to gone — as section enters
      gsap.fromTo(
        panel,
        { yPercent: 0 },
        {
          yPercent: -101, // extra 1% to avoid sub-pixel seam
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: wrap,
            start: "top 85%",
            end: "top 5%",
            scrub: 1.5,
          },
        }
      );
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className={cn("relative overflow-hidden", className)}>
      {/* Wipe panel — scrubs upward to reveal section */}
      <div
        ref={panelRef}
        aria-hidden
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ backgroundColor: panelColor, willChange: "transform" }}
      />
      {/* Section content */}
      <div className="relative">{children}</div>
    </div>
  );
}
