"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type ParallaxBgProps = {
  /** The background content (e.g. a decorative div, SVG, etc.) that moves slower */
  bg: ReactNode;
  /** Foreground content, scrolls at normal speed */
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** How many px the background drifts vertically across the section height. Default: 80 */
  drift?: number;
};

/**
 * Section wrapper where the background layer scrolls at a slower rate
 * than the foreground content — classic parallax depth effect.
 */
export function ParallaxBg({ bg, children, className, style, drift = 80 }: ParallaxBgProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const bgEl = bgRef.current;
    if (!wrap || !bgEl) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgEl,
        { y: -drift / 2 },
        {
          y: drift / 2,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, wrapRef);

    return () => ctx.revert();
  }, [drift]);

  return (
    <div ref={wrapRef} className={cn("relative overflow-hidden", className)} style={style}>
      {/* Parallax background layer */}
      <div
        ref={bgRef}
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ willChange: "transform", height: `calc(100% + ${drift}px)`, top: -drift / 2 }}
      >
        {bg}
      </div>
      {/* Normal foreground content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
