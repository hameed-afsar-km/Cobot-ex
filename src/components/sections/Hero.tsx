"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Countdown } from "@/components/ui/Countdown";
import { eventConfig } from "@/config/event";

gsap.registerPlugin(ScrollTrigger);

type HeroProps = {
  heroSrc: string | null;
  mobileHeroSrc: string | null;
};

const ease = [0.22, 1, 0.36, 1] as const;

// Floating orb data
const ORBS = [
  { size: 320, x: "12%", y: "18%", delay: 0, duration: 7, color: "rgba(181,20,27,0.13)" },
  { size: 200, x: "78%", y: "22%", delay: 1.5, duration: 9, color: "rgba(232,203,133,0.10)" },
  { size: 260, x: "65%", y: "70%", delay: 0.8, duration: 8, color: "rgba(181,20,27,0.09)" },
  { size: 180, x: "22%", y: "72%", delay: 2.2, duration: 10, color: "rgba(232,203,133,0.07)" },
  { size: 140, x: "88%", y: "55%", delay: 3, duration: 6, color: "rgba(181,20,27,0.11)" },
];

export function Hero({ heroSrc, mobileHeroSrc }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Background parallax — image drifts slower than page
  useEffect(() => {
    if (shouldReduceMotion) return;
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bg,
        { yPercent: 0 },
        {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  const desktopBg = heroSrc || "/assets/hero.png";
  const mobileBg = mobileHeroSrc || "/assets/mob.png";

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-night text-paper"
    >
      {/* ── Parallax background ── */}
      <div ref={bgRef} className="absolute inset-0 z-0" style={{ willChange: "transform" }}>
        <Image
          src={mobileBg}
          alt={eventConfig.assets.heroMobile.alt}
          fill priority sizes="100vw"
          className="object-cover object-center md:hidden"
        />
        <Image
          src={desktopBg}
          alt={eventConfig.assets.hero.alt}
          fill priority sizes="100vw"
          className="hidden object-cover object-center md:block"
        />
      </div>

      {/* ── Atmospheric gradients ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,5,4,0.62)_75%,rgba(10,5,4,0.9)_100%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-44 bg-gradient-to-b from-black/80 via-black/35 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-72 bg-gradient-to-t from-night via-night/80 to-transparent" />

      {/* ── Animated loop decorative elements ── */}
      {!shouldReduceMotion && (
        <div aria-hidden className="pointer-events-none absolute inset-0 z-[3] overflow-hidden">

          {/* Floating ambient orbs */}
          {ORBS.map((orb, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: orb.size,
                height: orb.size,
                left: orb.x,
                top: orb.y,
                background: `radial-gradient(ellipse at center, ${orb.color} 0%, transparent 70%)`,
                filter: "blur(2px)",
              }}
              animate={{
                y: [0, -28, 0, 18, 0],
                x: [0, 12, -8, 0],
                scale: [1, 1.08, 0.96, 1.04, 1],
              }}
              transition={{
                duration: orb.duration,
                delay: orb.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Pulsing concentric radar rings */}
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-crimson/20"
              style={{ width: ring * 260, height: ring * 260 }}
              animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.15, 0.4] }}
              transition={{
                duration: 3.5,
                delay: ring * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Rotating outer arc */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: 900, height: 900 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 900 900" fill="none" className="size-full opacity-[0.07]">
              <circle cx="450" cy="450" r="440" stroke="rgba(232,203,133,1)" strokeWidth="1" strokeDasharray="8 24" />
            </svg>
          </motion.div>

          {/* Counter-rotating inner arc */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: 660, height: 660 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 660 660" fill="none" className="size-full opacity-[0.06]">
              <circle cx="330" cy="330" r="320" stroke="rgba(221,47,53,1)" strokeWidth="1.5" strokeDasharray="3 18" />
            </svg>
          </motion.div>

          {/* Scanning horizontal beam */}
          <motion.div
            className="absolute inset-x-0 h-px"
            style={{
              background: "linear-gradient(to right, transparent 0%, rgba(221,47,53,0.25) 30%, rgba(232,203,133,0.4) 50%, rgba(221,47,53,0.25) 70%, transparent 100%)",
              boxShadow: "0 0 12px rgba(221,47,53,0.2)",
            }}
            animate={{ top: ["20%", "80%", "20%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Corner accent lines — top left */}
          <div className="absolute top-20 left-8 sm:left-14 opacity-30">
            <div className="h-8 w-px bg-gradient-to-b from-gold-bright/80 to-transparent" />
            <div className="h-px w-8 bg-gradient-to-r from-gold-bright/80 to-transparent" />
          </div>
          {/* Corner accent lines — top right */}
          <div className="absolute top-20 right-8 sm:right-14 opacity-30 flex flex-col items-end">
            <div className="h-8 w-px bg-gradient-to-b from-gold-bright/80 to-transparent" />
            <div className="h-px w-8 bg-gradient-to-l from-gold-bright/80 to-transparent" />
          </div>

          {/* Floating particles */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`p-${i}`}
              className="absolute size-1 rounded-full"
              style={{
                left: `${8 + (i * 7.8) % 85}%`,
                top: `${15 + (i * 11.3) % 70}%`,
                background: i % 2 === 0 ? "rgba(221,47,53,0.5)" : "rgba(232,203,133,0.45)",
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.9, 0.3],
              }}
              transition={{
                duration: 3 + (i % 4),
                delay: i * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* ── Content ── */}
      <div className="container-page relative z-10 flex flex-col items-center justify-center text-center px-4 pt-24 pb-8 sm:pt-36 sm:pb-14">
        <motion.h1
          {...fadeUp(0.15)}
          className="font-hero text-[clamp(2.75rem,11.5vw,9.5rem)] font-black uppercase leading-[0.9] tracking-tight text-shadow-ink"
        >
          <span className="inline-block bg-gradient-to-b from-white via-paper to-white/75 bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
            COBOT
          </span>
          <span className="inline-block bg-gradient-to-b from-gold-bright via-gold to-crimson-bright bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(232,203,133,0.5)]">
            -EX
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.28)}
          className="mt-3 sm:mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-gold-bright sm:text-sm font-semibold"
        >
          {eventConfig.tagline}
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="mt-6 sm:mt-7 flex w-full max-w-sm flex-col items-center justify-center gap-2.5 sm:max-w-none sm:w-auto sm:flex-row sm:gap-4"
        >
          <div className="grid grid-cols-2 gap-2.5 w-full sm:flex sm:w-auto sm:items-center sm:gap-4">
            <ButtonLink
              href="#expo"
              variant="crimson"
              size="lg"
              icon
              className="w-full rounded-full shadow-[0_0_35px_rgba(181,20,27,0.5)] hover:shadow-[0_0_45px_rgba(221,47,53,0.7)] px-3 sm:px-6"
            >
              <span className="sm:hidden">Expo</span>
              <span className="hidden sm:inline">Register for Expo</span>
            </ButtonLink>

            <ButtonLink
              href="#hackathon"
              variant="gold"
              size="lg"
              icon
              className="w-full rounded-full shadow-[0_0_30px_rgba(201,164,92,0.35)] hover:shadow-[0_0_40px_rgba(232,203,133,0.5)] px-3 sm:px-6"
            >
              <span className="sm:hidden">Hackathon</span>
              <span className="hidden sm:inline">Join Hackathon</span>
            </ButtonLink>
          </div>

          <ButtonLink
            href="#brochure"
            variant="light"
            size="lg"
            className="w-full sm:w-auto rounded-full border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/15"
          >
            Event Brochure
          </ButtonLink>
        </motion.div>

        <motion.div {...fadeUp(0.52)} className="mt-7 sm:mt-10">
          <Countdown showDate />
        </motion.div>
      </div>
    </section>
  );
}
