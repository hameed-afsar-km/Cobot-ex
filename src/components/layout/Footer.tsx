"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowUp, Compass, Cpu, Radio, Sparkles, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BrandLogo } from "@/components/ui/BrandLogo";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { eventConfig, navLinks } from "@/config/event";

gsap.registerPlugin(ScrollTrigger);

type FooterProps = {
  logoSrc: string | null;
};

export function Footer({ logoSrc }: FooterProps) {
  const footerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  // Mouse / Touch spotlight tracking coordinates (for desktop)
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  // Live IST Clock
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // GSAP Entrance Animations (for desktop)
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const ctx = gsap.context(() => {
      // Main headline smooth reveal
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footer,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Interactive Action buttons
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            delay: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footer,
              start: "top 78%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Bottom bar
      if (bottomBarRef.current) {
        gsap.fromTo(
          bottomBarRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: footer,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, footer);

    return () => ctx.revert();
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = footerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const interactiveLetters = "COBOT-EX".split("");

  return (
    <footer
      ref={footerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -1000, y: -1000 });
      }}
      className="relative flex flex-col justify-between overflow-hidden border-t border-white/[0.08] select-none h-auto lg:h-[70vh] lg:min-h-[70vh]"
      style={{
        background: "radial-gradient(ellipse at 50% 10%, #110304 0%, #060101 60%, #030000 100%)",
      }}
    >
      {/* ── Interactive Pointer Spotlight (Desktop) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 hidden lg:block"
        style={{
          opacity: isHovered ? 1 : 0.45,
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(221,47,53,0.22) 0%, rgba(232,203,133,0.07) 35%, transparent 70%)`,
        }}
      />

      {/* ── Mobile Ambient Glow (Mobile) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[320px] w-[500px] rounded-full lg:hidden"
        style={{
          background:
            "radial-gradient(circle at center, rgba(221,47,53,0.22) 0%, rgba(232,203,133,0.06) 45%, transparent 70%)",
        }}
      />

      {/* ── Cyber Micro-Grid Background ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Top Laser Accent Line ── */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(221,47,53,0.85) 20%, rgba(232,203,133,0.9) 50%, rgba(221,47,53,0.85) 80%, transparent 100%)",
          boxShadow: "0 0 20px rgba(221,47,53,0.5)",
        }}
      />

      {/* =========================================================================
          1. DEDICATED ANDROID / MOBILE DESIGN (VISIBLE ONLY ON MOBILE < lg)
      ========================================================================= */}
      <div className="lg:hidden relative z-10 flex flex-col px-4 pt-6 pb-8 gap-6 w-full">
        {/* Mobile Top Navigation Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <BrandLogo src={logoSrc} size="sm" className="size-8 shrink-0 opacity-90" />
            <div className="flex flex-col">
              <span className="font-hero font-black text-xs uppercase tracking-wider text-white">
                {eventConfig.name}
              </span>
              <span className="font-mono text-[8px] uppercase tracking-widest text-gold-bright">
                {eventConfig.date.display}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-crimson/30 bg-crimson/10 px-2.5 py-1 font-mono text-[7px] uppercase tracking-widest text-crimson-bright">
              <span className="size-1 rounded-full bg-crimson-bright animate-ping" />
              <span>LIVE</span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[8px] uppercase tracking-wider text-white/50 active:scale-95 transition-transform"
            >
              <span>Top</span>
              <ArrowUp className="size-2.5 text-gold-bright" />
            </button>
          </div>
        </div>

        {/* Mobile Center Hero Card */}
        <div className="flex flex-col items-center text-center py-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[8px] uppercase tracking-[0.25em] text-white/70 backdrop-blur-md mb-2">
            <Sparkles className="size-2.5 text-gold-bright animate-spin" style={{ animationDuration: "8s" }} />
            <span>Chennai &middot; Crescent Campus</span>
          </div>

          <h2 className="font-hero font-black uppercase tracking-tight leading-none text-white text-[clamp(2.8rem,13vw,4.2rem)] my-2">
            COBOT<span className="bg-gradient-to-r from-gold-bright to-crimson-bright bg-clip-text text-transparent">-EX</span>
          </h2>

          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/45">
            Inter-College Technology Convergence
          </p>
        </div>

        {/* Mobile Action Cards (High-Contrast, Touch-Optimized) */}
        <div className="flex flex-col gap-3 w-full">
          {/* Expo Action Card */}
          <a
            href={eventConfig.registrationLinks.expo}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between rounded-xl border border-crimson/60 bg-gradient-to-r from-crimson/25 via-crimson/15 to-transparent p-4 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(181,20,27,0.25)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg border border-crimson/50 bg-crimson/20 text-crimson-bright">
                <Cpu className="size-5" />
              </div>
              <div className="text-left">
                <div className="font-hero font-black uppercase text-sm tracking-wide text-white group-hover:text-gold-bright">
                  Register for Expo
                </div>
                <div className="font-mono text-[8px] uppercase tracking-wider text-white/45">
                  Robotics & Project Showcase
                </div>
              </div>
            </div>
            <div className="flex size-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
              <ChevronRight className="size-4 text-white/60 group-hover:text-white" />
            </div>
          </a>

          {/* Hackathon Action Card */}
          <a
            href={eventConfig.registrationLinks.hackathon}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between rounded-xl border border-gold/50 bg-gradient-to-r from-gold/20 via-gold/10 to-transparent p-4 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(201,164,92,0.15)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg border border-gold/40 bg-gold/15 text-gold-bright">
                <Compass className="size-5" />
              </div>
              <div className="text-left">
                <div className="font-hero font-black uppercase text-sm tracking-wide text-white group-hover:text-gold-bright">
                  Join Hackathon
                </div>
                <div className="font-mono text-[8px] uppercase tracking-wider text-white/45">
                  24-Hour Code & Build Challenge
                </div>
              </div>
            </div>
            <div className="flex size-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
              <ChevronRight className="size-4 text-white/60 group-hover:text-white" />
            </div>
          </a>
        </div>

        {/* Mobile Quick-Links Bar */}
        <div className="flex items-center justify-around border-y border-white/[0.08] py-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/55">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-1 px-2 text-white/60 active:text-gold-bright transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Bottom Coordinates & Copyright */}
        <div className="flex flex-col items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-white/30 text-center">
          <div>&copy; <CurrentYear /> {eventConfig.clubName}</div>
          <div className="text-gold-bright/50">12.8797&deg; N, 80.0833&deg; E &middot; Chennai</div>
        </div>
      </div>

      {/* =========================================================================
          2. DESKTOP DESIGN (100% PRESERVED & UNTOUCHED FOR DESKTOP >= lg)
      ========================================================================= */}
      <div className="hidden lg:flex container-page relative z-10 h-full flex-col justify-between py-10">
        {/* Top Status & Telemetry Bar */}
        <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <BrandLogo src={logoSrc} size="sm" className="size-8 shrink-0 opacity-80" />
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/50">
                {eventConfig.clubName}
              </span>
              <span className="text-white/20">&middot;</span>
              <div className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-gold-bright">
                <Radio className="size-3 text-crimson-bright animate-pulse" />
                <span>ONLINE</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
            {timeString && (
              <span className="text-white/60 tabular-nums">
                {timeString} IST
              </span>
            )}

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex items-center gap-2 transition-colors hover:text-white"
            >
              <span>Top</span>
              <span className="flex size-7 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-gold group-hover:bg-gold/10 group-hover:text-gold-bright">
                <ArrowUp className="size-3" />
              </span>
            </button>
          </div>
        </div>

        {/* Center Interactive Kinetic Arena */}
        <div className="my-auto py-10 flex flex-col items-center text-center">
          <div ref={headlineRef} style={{ opacity: 0 }} className="w-full max-w-4xl">
            {/* Ambient Label with interactive ping */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-white/60 mb-4 backdrop-blur-md">
              <Sparkles className="size-3 text-gold-bright animate-spin" style={{ animationDuration: "8s" }} />
              <span>Inter-College Tech Event &middot; Chennai</span>
            </div>

            {/* Interactive Kinetic Letters */}
            <h2
              className="font-hero font-black uppercase tracking-tighter leading-none text-white text-[clamp(2.75rem,11.5vw,6.5rem)] my-3 select-none"
              aria-label="COBOT-EX"
            >
              {interactiveLetters.map((char, index) => {
                const isAccent = index >= 5; // -EX
                return (
                  <span
                    key={index}
                    className={`inline-block transition-all duration-200 cursor-pointer hover:scale-115 hover:-translate-y-2 hover:rotate-2 ${
                      isAccent
                        ? "bg-gradient-to-b from-gold-bright via-gold to-crimson-bright bg-clip-text text-transparent hover:drop-shadow-[0_0_30px_rgba(232,203,133,0.8)]"
                        : "bg-gradient-to-b from-white via-white/90 to-white/60 bg-clip-text text-transparent hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.7)]"
                    }`}
                  >
                    {char}
                  </span>
                );
              })}
            </h2>

            <p className="mt-3 font-mono text-xs uppercase tracking-[0.24em] text-white/45">
              10 November 2026 &middot; Crescent Campus
            </p>
          </div>

          {/* Interactive Magnetic CTA Portals */}
          <div
            ref={ctaRef}
            style={{ opacity: 0 }}
            className="mt-8 flex flex-row items-center justify-center gap-5 w-full"
          >
            {/* Expo Interactive Portal */}
            <a
              href={eventConfig.registrationLinks.expo}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-w-[210px] items-center justify-between gap-4 overflow-hidden rounded-2xl border border-crimson/50 bg-crimson/15 px-6 py-3.5 backdrop-blur-md transition-all duration-300 hover:border-crimson hover:bg-crimson hover:shadow-[0_0_35px_rgba(221,47,53,0.5)] hover:-translate-y-1"
            >
              <div className="flex items-center gap-2.5">
                <Cpu className="size-4 text-crimson-bright group-hover:text-white transition-colors" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  Register Expo
                </span>
              </div>
              <ArrowUpRight className="size-4 text-white/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
            </a>

            {/* Hackathon Interactive Portal */}
            <a
              href={eventConfig.registrationLinks.hackathon}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-w-[210px] items-center justify-between gap-4 overflow-hidden rounded-2xl border border-gold/40 bg-gold/10 px-6 py-3.5 backdrop-blur-md transition-all duration-300 hover:border-gold-bright hover:bg-gold/25 hover:shadow-[0_0_35px_rgba(232,203,133,0.35)] hover:-translate-y-1"
            >
              <div className="flex items-center gap-2.5">
                <Compass className="size-4 text-gold-bright transition-colors" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  Join Hackathon
                </span>
              </div>
              <ArrowUpRight className="size-4 text-gold-bright transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Bottom Minimal Telemetry Bar */}
        <div
          ref={bottomBarRef}
          style={{ opacity: 0 }}
          className="flex flex-row items-center justify-between gap-3 border-t border-white/[0.08] pt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35"
        >
          {/* Quick Nav Links */}
          <div className="flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Coordinates and Copyright */}
          <div className="flex items-center gap-2">
            <span>&copy; <CurrentYear /> {eventConfig.clubName}</span>
            <span>&middot;</span>
            <span className="text-gold-bright/70">12.8797&deg; N, 80.0833&deg; E</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
