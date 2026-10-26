"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { eventConfig } from "@/config/event";

type HeroProps = {
  heroSrc: string | null;
  mobileHeroSrc: string | null;
};

const ease = [0.22, 1, 0.36, 1] as const;

const titleLetters = eventConfig.name.split("").map((letter, index) => ({
  letter,
  index,
  className: index >= 5 ? "text-gold-bright" : "text-paper",
}));

export function Hero({ heroSrc, mobileHeroSrc }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-night text-paper"
    >
      {mobileHeroSrc ? (
        <Image
          src={mobileHeroSrc}
          alt={eventConfig.assets.heroMobile.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />
      ) : null}

      {heroSrc ? (
        <Image
          src={heroSrc}
          alt={eventConfig.assets.hero.alt}
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center md:block"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_40%,#b5141b,#5e0a0e_60%,#171210)]" />
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-night/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(to_top,rgba(16,11,9,0.86)_0%,rgba(16,11,9,0.38)_52%,transparent_100%)]"
      />

      <div className="container-page relative z-10 flex min-h-[100svh] flex-col items-center justify-end pb-12 pt-32 text-center sm:pb-16">
        <motion.p
          {...fadeUp(0.05)}
          className="flex items-center gap-2.5 font-mono text-[8px] font-medium uppercase tracking-[0.22em] text-paper/75 sm:text-[9px]"
        >
          <span
            aria-hidden="true"
            className="size-1.5 animate-blink rounded-full bg-gold-bright"
          />
          {eventConfig.category}
        </motion.p>

        <h1 className="mt-5 font-hero text-[clamp(2.9rem,13.5vw,9rem)] font-extrabold leading-[0.88] tracking-[-0.06em] text-paper text-shadow-ink">
          <span className="sr-only">
            {eventConfig.name} — {eventConfig.category}
          </span>
          <span
            aria-hidden="true"
            className="inline-flex items-baseline justify-center whitespace-nowrap"
          >
            {titleLetters.map(({ letter, index, className }) => (
              <span
                key={`${letter}-${index}`}
                className="inline-flex overflow-hidden pb-[0.1em] -mb-[0.1em]"
              >
                <motion.span
                  initial={
                    shouldReduceMotion ? false : { y: "115%", opacity: 0 }
                  }
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.16 + index * 0.045,
                    ease,
                  }}
                  className={`inline-block ${className}`}
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </span>
        </h1>

        <motion.span
          aria-hidden="true"
          initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease }}
          className="mt-6 block h-px w-28 origin-center bg-gold-bright/80"
        />

        <motion.p
          {...fadeUp(0.34)}
          className="mt-5 font-hero text-lg font-medium tracking-[-0.01em] text-gold-bright sm:text-xl"
        >
          {eventConfig.tagline}
        </motion.p>

        <motion.div
          {...fadeUp(0.42)}
          className="mt-7 flex w-full max-w-xs flex-col items-stretch gap-3 xs:max-w-none xs:flex-row xs:items-center xs:justify-center"
        >
          <ButtonLink
            href="#expo"
            variant="crimson"
            icon
            className="w-full rounded-full xs:w-auto"
          >
            Register now
          </ButtonLink>
          <ButtonLink
            href="#details"
            variant="light"
            className="w-full rounded-full xs:w-auto"
          >
            Event details
          </ButtonLink>
        </motion.div>

        <motion.p
          {...fadeUp(0.5)}
          className="mt-7 font-mono text-[8px] uppercase tracking-[0.16em] text-paper/65 sm:text-[9px]"
        >
          {eventConfig.date.displayShort}
          <span aria-hidden="true" className="mx-2.5 text-gold-bright/70">
            /
          </span>
          {eventConfig.venue.name}
        </motion.p>

        <motion.a
          {...fadeUp(0.6)}
          href="#expo"
          className="group mt-7 inline-flex flex-col items-center gap-2 font-mono text-[7px] uppercase tracking-[0.22em] text-paper/40 transition-colors hover:text-gold-bright"
          aria-label="Scroll to explore the event"
        >
          <span>Scroll</span>
          <span className="relative h-8 w-px overflow-hidden bg-paper/20">
            <motion.span
              aria-hidden="true"
              animate={shouldReduceMotion ? undefined : { y: [-12, 32] }}
              transition={{
                duration: 1.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute inset-x-0 top-0 h-3 bg-gold-bright"
            />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
