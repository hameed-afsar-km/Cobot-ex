"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Countdown } from "@/components/ui/Countdown";
import { eventConfig } from "@/config/event";

type HeroProps = {
  heroSrc: string | null;
  mobileHeroSrc: string | null;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero({ heroSrc, mobileHeroSrc }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

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
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-night text-paper"
    >
      {/* Background Images: mob.png for mobile/Android, hero.png for desktop */}
      <div className="absolute inset-0 z-0">
        <Image
          src={mobileBg}
          alt={eventConfig.assets.heroMobile.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />
        <Image
          src={desktopBg}
          alt={eventConfig.assets.hero.alt}
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center md:block"
        />
      </div>

      {/* Atmospheric Contrast Gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,5,4,0.65)_75%,rgba(10,5,4,0.92)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-40 bg-gradient-to-b from-black/85 via-black/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-80 bg-gradient-to-t from-night via-night/85 to-transparent"
      />

      {/* Clean Minimal Hero Content */}
      <div className="container-page relative z-10 flex flex-col items-center justify-center text-center px-4 pt-32 pb-10 sm:pt-40 sm:pb-14 translate-y-6 sm:translate-y-10">
        {/* 1. Event Name */}
        <motion.h1
          {...fadeUp(0.15)}
          className="font-hero text-[clamp(3.5rem,11vw,9.5rem)] font-black uppercase leading-[0.88] tracking-tight text-shadow-ink"
        >
          <span className="inline-block bg-gradient-to-b from-white via-paper to-white/75 bg-clip-text text-transparent drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
            COBOT
          </span>
          <span className="inline-block bg-gradient-to-b from-gold-bright via-gold to-crimson-bright bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(232,203,133,0.5)]">
            -EX
          </span>
        </motion.h1>

        {/* 2. Tagline */}
        <motion.p
          {...fadeUp(0.28)}
          className="mt-4 font-mono text-xs uppercase tracking-[0.26em] text-gold-bright sm:text-sm font-semibold"
        >
          {eventConfig.tagline}
        </motion.p>

        {/* 3. 3 CTAs */}
        <motion.div
          {...fadeUp(0.4)}
          className="mt-6 sm:mt-7 flex w-full max-w-sm flex-col items-center justify-center gap-2.5 sm:max-w-none sm:w-auto sm:flex-row sm:gap-4"
        >
          {/* Mobile: Expo & Hackathon in the same row | Desktop: inline items */}
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

        {/* 4. Countdown, with date above */}
        <motion.div {...fadeUp(0.52)} className="mt-7 sm:mt-10">
          <Countdown showDate />
        </motion.div>
      </div>
    </section>
  );
}
