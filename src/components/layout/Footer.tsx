import { ArrowUp } from "lucide-react";

import { BrandLogo } from "@/components/ui/BrandLogo";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { CircuitLines } from "@/components/visuals/CircuitLines";
import { RobotMark } from "@/components/visuals/RobotMark";
import { eventConfig, navLinks } from "@/config/event";

type FooterProps = {
  logoSrc: string | null;
};

export function Footer({ logoSrc }: FooterProps) {
  return (
    <footer className="relative overflow-hidden bg-night text-paper">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-cream opacity-40" />
        <CircuitLines className="absolute inset-0 size-full text-gold/15 opacity-50" />
        <div className="absolute -right-24 -top-32 size-[26rem] rounded-full bg-crimson/20 blur-[110px]" />
        <div className="absolute -left-32 bottom-0 size-[24rem] rounded-full bg-gold/10 blur-[110px]" />
        <RobotMark className="absolute -right-10 top-10 hidden h-[30rem] w-auto text-gold/10 xl:block" />
      </div>

      <div className="container-page relative z-10 py-14 sm:py-16">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-3 border-b border-paper/10 pb-5 font-mono text-[8px] uppercase tracking-[0.2em] text-paper/40">
          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-1.5 animate-blink bg-crimson-bright"
            />
            System online
          </span>
          <span>SYS.01 / COBOT-EX / 2026</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-16">
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-3"
              aria-label={`${eventConfig.name} home`}
            >
              <BrandLogo
                src={logoSrc}
                size="lg"
                className="size-14 transition-transform duration-300 hover:scale-105"
              />
              <span className="flex flex-col">
                <span className="font-display text-2xl leading-none tracking-[0.04em] text-paper">
                  {eventConfig.name}
                </span>
                <span className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.2em] text-gold-bright">
                  Organized by {eventConfig.clubName}
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[13px] leading-6 text-paper/60">
              {eventConfig.description}
            </p>
            <p className="mt-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-gold-bright">
              <span aria-hidden="true" className="size-1.5 bg-crimson-bright" />
              {eventConfig.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-gold-bright">
              Explore
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/60 transition-colors hover:text-paper"
                  >
                    <span className="text-[7px] text-gold/60">
                      0{index + 1}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-gold-bright">
              Event
            </h2>
            <dl className="mt-5 space-y-4">
              <div>
                <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-paper/40">
                  {eventConfig.date.label}
                </dt>
                <dd className="mt-1 text-[13px] text-paper/85">
                  {eventConfig.date.display}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-paper/40">
                  {eventConfig.deadline.label}
                </dt>
                <dd className="mt-1 text-[13px] text-paper/85">
                  {eventConfig.deadline.display}, {eventConfig.deadline.time}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-paper/40">
                  {eventConfig.venue.label}
                </dt>
                <dd className="mt-1 text-[13px] text-paper/85">
                  {eventConfig.venue.display}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-paper/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper/40">
            © <CurrentYear /> {eventConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center justify-between gap-6 sm:justify-end">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper/40">
              Build. Solve. Compete.
            </p>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 border border-paper/15 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.16em] text-paper/60 transition-colors hover:border-gold hover:text-gold-bright"
            >
              Back to top
              <ArrowUp
                aria-hidden="true"
                className="size-3 transition-transform group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 overflow-hidden"
      >
        <p className="select-none text-center font-display text-[18vw] leading-[0.7] text-outline-cream opacity-15">
          COBOT-EX
        </p>
      </div>
    </footer>
  );
}
