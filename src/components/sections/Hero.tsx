"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, CalendarDays, Clock3, MapPin } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { HudCorners } from "@/components/ui/HudCorners";
import { StatusChip } from "@/components/ui/StatusChip";
import { CircuitLines } from "@/components/visuals/CircuitLines";
import { RobotMark } from "@/components/visuals/RobotMark";
import { eventConfig } from "@/config/event";

type HeroProps = {
  heroSrc: string | null;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero({ heroSrc }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section
      id="top"
      className="relative isolate min-h-svh overflow-hidden bg-night text-paper"
    >
      {heroSrc ? (
        <Image
          src={heroSrc}
          alt={eventConfig.assets.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_45%,#b5141b,#5e0a0e_60%,#1a0d0b)]" />
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-night/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[82%] bg-[linear-gradient(to_top,rgba(20,11,9,0.97)_0%,rgba(20,11,9,0.82)_26%,rgba(20,11,9,0.36)_58%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-fine-cream opacity-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 scanlines opacity-20"
      />
      <CircuitLines className="pointer-events-none absolute inset-0 size-full text-gold-bright/20 opacity-50" />

      <RobotMark className="pointer-events-none absolute -right-16 top-24 hidden h-[68svh] w-auto animate-float text-gold/15 lg:block" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 hidden sm:block lg:inset-6"
      >
        <HudCorners className="text-paper/20" />
        <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-gold-bright/60" />
        <span className="absolute bottom-0 left-1/2 h-3 w-px -translate-x-1/2 bg-gold-bright/60" />
        <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-gold-bright/60" />
        <span className="absolute right-0 top-1/2 h-px w-3 -translate-y-1/2 bg-gold-bright/60" />
      </div>

      <div className="container-page relative z-10 flex min-h-svh flex-col justify-end pb-8 pt-32 sm:pb-10">
        <div className="mb-10 hidden items-center justify-between sm:flex">
          <StatusChip className="text-gold-bright/80">
            System online / registration open
          </StatusChip>
          <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-paper/45">
            SYS.01 / COBOT-EX / 2026
          </p>
        </div>

        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <motion.p
              {...fadeUp(0.05)}
              className="flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-gold-bright"
            >
              <span aria-hidden="true" className="h-px w-9 bg-gold-bright" />
              {eventConfig.category}
            </motion.p>

            <h1 className="mt-5 font-display text-[clamp(4.6rem,12vw,10.5rem)] leading-[0.78] tracking-[0.01em] text-paper text-shadow-ink">
              <span className="sr-only">
                COBOT-EX — {eventConfig.category}
              </span>
              <span
                aria-hidden="true"
                className="inline-flex overflow-hidden pb-[0.09em] -mb-[0.09em]"
              >
                <motion.span
                  initial={
                    shouldReduceMotion ? false : { y: "110%", opacity: 0 }
                  }
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.1, ease }}
                  className="inline-block"
                >
                  COBOT
                </motion.span>
                <motion.span
                  initial={
                    shouldReduceMotion ? false : { y: "110%", opacity: 0 }
                  }
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.22, ease }}
                  className="inline-block text-gold-bright"
                >
                  -EX
                </motion.span>
              </span>
            </h1>

            <motion.p
              {...fadeUp(0.32)}
              className="mt-5 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-bright sm:text-xs"
            >
              <span aria-hidden="true" className="size-2 bg-crimson-bright" />
              {eventConfig.tagline}
            </motion.p>

            <motion.p
              {...fadeUp(0.4)}
              className="mt-6 max-w-xl text-[15px] leading-7 text-paper/70 sm:text-base sm:leading-8"
            >
              {eventConfig.registration.description}
            </motion.p>

            <motion.div
              {...fadeUp(0.48)}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <ButtonLink
                href="#expo"
                variant="crimson"
                icon
                className="w-full sm:w-auto"
              >
                Register for Expo
              </ButtonLink>
              <ButtonLink
                href="#hackathon"
                variant="light"
                icon
                className="w-full sm:w-auto"
              >
                Hackathon form
              </ButtonLink>
            </motion.div>

            <motion.div
              {...fadeUp(0.55)}
              className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[8px] uppercase tracking-[0.16em] text-paper/50"
            >
              <span className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="size-1.5 animate-blink bg-crimson-bright"
                />
                Registration closes {eventConfig.deadline.display},{" "}
                {eventConfig.deadline.time}
              </span>
              <a
                href="#brochure"
                className="border-b border-paper/20 pb-0.5 transition-colors hover:text-gold-bright"
              >
                Scan for brochure
              </a>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp(0.45)}
            className="relative w-full justify-self-end lg:max-w-md"
          >
            <div className="relative overflow-hidden border border-paper/15 bg-night/60 p-5 backdrop-blur-md sm:p-6">
              <HudCorners className="text-gold-bright/50" />

              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.24em] text-gold-bright">
                    {eventConfig.registration.label}
                  </p>
                  <p className="mt-2 font-display text-2xl uppercase leading-none text-paper">
                    Mission brief
                  </p>
                </div>
                <RobotMark className="h-14 w-auto shrink-0 text-gold-bright" />
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-paper/10 pt-5">
                <div>
                  <dt className="font-mono text-[7px] uppercase tracking-[0.18em] text-paper/40">
                    Team size
                  </dt>
                  <dd className="mt-1.5 text-[13px] text-paper/85">
                    {eventConfig.registration.teamSize}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[7px] uppercase tracking-[0.18em] text-paper/40">
                    Registration fee
                  </dt>
                  <dd className="mt-1.5 text-[13px] text-paper/85">
                    {eventConfig.registration.fee}
                  </dd>
                </div>
              </dl>

              <div className="mt-5 space-y-3.5 border-t border-paper/10 pt-5">
                <InfoRow
                  icon={Clock3}
                  label={eventConfig.deadline.label}
                  value={`${eventConfig.deadline.display} · ${eventConfig.deadline.time}`}
                />
                <InfoRow
                  icon={CalendarDays}
                  label={eventConfig.date.label}
                  value={eventConfig.date.display}
                />
                <InfoRow
                  icon={MapPin}
                  label={eventConfig.venue.label}
                  value={eventConfig.venue.display}
                />
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between px-1 font-mono text-[7px] uppercase tracking-[0.18em] text-paper/35">
              <span>Data link / secure</span>
              <span className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="size-1 animate-blink bg-gold-bright"
                />
                Live
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.62)}
          className="mt-10 flex flex-col gap-4 border-t border-paper/10 pt-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <a
            href="#expo"
            className="group inline-flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.2em] text-paper/55 transition-colors hover:text-gold-bright"
          >
            <span className="flex h-8 w-5 items-start justify-center border border-paper/20 p-1">
              <motion.span
                aria-hidden="true"
                animate={
                  shouldReduceMotion ? undefined : { y: [0, 9, 0] }
                }
                transition={{
                  duration: 1.8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="size-1 bg-gold-bright"
              />
            </span>
            Scroll to explore
            <ArrowDown
              aria-hidden="true"
              className="size-3 transition-transform group-hover:translate-y-0.5"
            />
          </a>

          <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-paper/40">
            {eventConfig.date.displayShort} / {eventConfig.venue.area}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock3;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon
        aria-hidden="true"
        className="mt-0.5 size-3.5 shrink-0 text-gold-bright"
        strokeWidth={1.7}
      />
      <div className="min-w-0">
        <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-paper/40">
          {label}
        </p>
        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.08em] text-paper/80">
          {value}
        </p>
      </div>
    </div>
  );
}
