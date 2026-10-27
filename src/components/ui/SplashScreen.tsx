"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { eventConfig } from "@/config/event";

type SplashScreenProps = {
  logoSrc: string | null;
};

const SLAT_COUNT = 7;

export function SplashScreen({ logoSrc }: SplashScreenProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const clubRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    // Lock scrolling while splash is active
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const wrap = wrapRef.current;
    if (!wrap) return;

    const letters = wrap.querySelectorAll<HTMLSpanElement>(".splash-letter");
    const slats = wrap.querySelectorAll<HTMLDivElement>(".splash-slat");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Logo zoom & glow in
      tl.fromTo(
        logoRef.current,
        { scale: 0.5, opacity: 0, filter: "blur(14px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.5 },
        0.05
      );

      // 2. Club presenter badge
      tl.fromTo(
        clubRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4 },
        0.25
      );

      // 3. Letters 3D slam in with stagger
      tl.fromTo(
        letters,
        {
          opacity: 0,
          y: 45,
          rotateX: -60,
          scale: 0.85,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.55,
          stagger: 0.04,
          ease: "back.out(1.7)",
        },
        0.35
      );

      // 4. Center laser line expansion
      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.55, ease: "power2.inOut" },
        0.65
      );

      // 5. Date & Venue badge
      tl.fromTo(
        metaRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4 },
        0.85
      );

      // 6. Punchy hold (crisp & confident, no dead delay)
      tl.to({}, { duration: 0.35 });

      // 7. UNIQUE ANIMATED TRANSITION OUT
      // Content zooms forward with a lens bloom / warp blur
      tl.to(
        contentRef.current,
        {
          opacity: 0,
          scale: 1.14,
          filter: "blur(16px)",
          duration: 0.35,
          ease: "power2.in",
        },
        "exit"
      );

      // Background slats slice away in an alternating kinetic wave.
      // Even slats shoot UP (-102%), odd slats shoot DOWN (+102%), smoothly revealing the hero!
      slats.forEach((slat, index) => {
        const direction = index % 2 === 0 ? "-102%" : "102%";
        tl.to(
          slat,
          {
            y: direction,
            duration: 0.65,
            ease: "power4.inOut",
          },
          `exit+=${0.05 + index * 0.035}`
        );
      });

      // 8. Immediate handoff — restore scrolling and unmount (ZERO empty screen pause)
      tl.call(() => {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        setActive(false);
      });
    }, wrap);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (!active) return null;

  const word = "COBOT-EX";

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-[9999] pointer-events-none select-none overflow-hidden"
      role="dialog"
      aria-label="COBOT-EX intro"
    >
      {/* ── KINETIC EXIT SLATS (These ARE the background curtain!) ── */}
      <div className="absolute inset-0 flex h-full w-full pointer-events-none">
        {Array.from({ length: SLAT_COUNT }).map((_, idx) => (
          <div
            key={idx}
            className="splash-slat relative h-full flex-1"
            style={{
              backgroundColor: "#060101",
              boxShadow:
                idx % 2 === 0
                  ? "0 10px 40px rgba(221,47,53,0.3)"
                  : "0 -10px 40px rgba(232,203,133,0.2)",
              borderRight: idx < SLAT_COUNT - 1 ? "1px solid rgba(255,255,255,0.03)" : "none",
            }}
          >
            {/* Ambient inner glow per slat */}
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                background:
                  idx === Math.floor(SLAT_COUNT / 2)
                    ? "radial-gradient(circle at center, rgba(181,20,27,0.35) 0%, transparent 70%)"
                    : "radial-gradient(circle at center, rgba(181,20,27,0.12) 0%, transparent 60%)",
              }}
            />
            {/* Leading edge laser trim on bottom / top of each slat */}
            <div
              className={`absolute inset-x-0 ${
                idx % 2 === 0 ? "bottom-0" : "top-0"
              } h-[2px]`}
              style={{
                background:
                  idx % 2 === 0
                    ? "linear-gradient(90deg, transparent, rgba(221,47,53,0.9), transparent)"
                    : "linear-gradient(90deg, transparent, rgba(232,203,133,0.85), transparent)",
                boxShadow:
                  idx % 2 === 0
                    ? "0 0 14px rgba(221,47,53,0.7)"
                    : "0 0 14px rgba(232,203,133,0.6)",
              }}
            />
          </div>
        ))}
      </div>

      {/* ── FOREGROUND CONTENT ── */}
      <div
        ref={contentRef}
        className="relative z-20 flex h-full w-full flex-col items-center justify-center px-4 text-center"
        style={{ perspective: "800px" }}
      >
        {/* Logo */}
        <div ref={logoRef} className="mb-5">
          {logoSrc ? (
            <div
              className="relative size-16 sm:size-20"
              style={{ filter: "drop-shadow(0 0 24px rgba(232,203,133,0.45))" }}
            >
              <Image
                src={logoSrc}
                alt={eventConfig.clubName}
                fill
                priority
                sizes="(max-width: 640px) 64px, 80px"
                className="object-contain"
              />
            </div>
          ) : (
            <div className="flex size-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
              <span className="font-mono text-[11px] uppercase tracking-widest text-gold-bright">
                CCC
              </span>
            </div>
          )}
        </div>

        {/* Club Label */}
        <div
          ref={clubRef}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 font-mono text-[9px] uppercase tracking-[0.34em] text-white/50 backdrop-blur-sm sm:text-[10px]"
        >
          <span className="size-1.5 rounded-full bg-crimson animate-ping" />
          <span>{eventConfig.clubName} &middot; Presents</span>
        </div>

        {/* Slamming Letters */}
        <h1
          className="font-hero text-[clamp(4.5rem,16vw,12.5rem)] font-black uppercase leading-none tracking-tighter"
          aria-label={word}
        >
          {word.split("").map((ch, i) => {
            const isAccent = i >= 5; // "-EX"
            return (
              <span
                key={i}
                className={`splash-letter inline-block ${
                  isAccent
                    ? "bg-gradient-to-b from-gold-bright via-gold to-crimson-bright bg-clip-text text-transparent [filter:drop-shadow(0_0_30px_rgba(221,47,53,0.6))]"
                    : "bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text text-transparent [filter:drop-shadow(0_10px_35px_rgba(0,0,0,0.95))]"
                }`}
              >
                {ch}
              </span>
            );
          })}
        </h1>

        {/* Glowing Laser Center Line */}
        <div
          ref={lineRef}
          aria-hidden
          className="mt-6 h-px w-64 sm:w-88"
          style={{
            transformOrigin: "center",
            background:
              "linear-gradient(to right, transparent, rgba(221,47,53,0.9), rgba(232,203,133,0.85), transparent)",
            boxShadow: "0 0 18px rgba(221,47,53,0.55)",
          }}
        />

        {/* Event Date & Campus Meta */}
        <div
          ref={metaRef}
          className="mt-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] sm:text-[11px]"
        >
          <span className="text-white/35">Chennai</span>
          <span className="text-white/20">&middot;</span>
          <span className="font-bold text-gold-bright">
            {eventConfig.date.display}
          </span>
          <span className="text-white/20">&middot;</span>
          <span className="text-white/35">Crescent Campus</span>
        </div>
      </div>
    </div>
  );
}
