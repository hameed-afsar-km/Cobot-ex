"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { BrandLogo } from "@/components/ui/BrandLogo";
import { eventConfig, navLinks } from "@/config/event";
import { cn } from "@/lib/utils";

type NavbarProps = {
  logoSrc: string | null;
};

export function Navbar({ logoSrc }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const shouldReduceMotion = useReducedMotion();

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);

      let current = "";
      for (const link of navLinks) {
        const section = document.getElementById(link.href.slice(1));
        if (section && section.getBoundingClientRect().top <= 160) {
          current = link.href;
        }
      }
      setActiveHref(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const handleDesktop = () => {
      if (desktopQuery.matches) {
        closeMenu();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleDesktop);
    };
  }, [closeMenu, isMenuOpen]);

  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 px-2 transition-all duration-300 sm:px-3 lg:px-4",
          isScrolled || isMenuOpen ? "pt-1.5 sm:pt-2" : "pt-2 sm:pt-2.5",
        )}
      >
        <div
          className={cn(
            "mx-auto flex h-14 items-center justify-between gap-3 rounded-full border backdrop-blur-xl transition-all duration-300 sm:h-16 lg:h-[4rem]",
            isScrolled || isMenuOpen
              ? "max-w-[min(88rem,calc(100%-1rem))] border-line/90 bg-cream/95 px-3.5 ring-1 ring-black/5 shadow-[0_18px_50px_rgba(26,13,11,0.14)] sm:px-5 lg:px-6"
              : "max-w-[min(90rem,calc(100%-0.75rem))] border-white/15 bg-night/80 px-3 ring-1 ring-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.5)] sm:px-4 lg:px-6",
          )}
        >
          {/* Club Identity (Organizing Body) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <BrandLogo
              src={logoSrc}
              size="md"
              className="size-9 shrink-0 transition-transform duration-300 hover:scale-105 sm:size-10"
            />
            <div className="flex flex-col text-left">
              <span
                className={cn(
                  "font-mono text-[7px] uppercase tracking-[0.22em] font-semibold transition-colors sm:text-[8px] max-w-[130px] sm:max-w-none leading-tight",
                  isScrolled || isMenuOpen ? "text-ink" : "text-gold-bright",
                )}
              >
                {eventConfig.clubName}
              </span>
              <span
                className={cn(
                  "font-mono text-[6px] uppercase tracking-[0.2em] transition-colors sm:text-[7px]",
                  isScrolled || isMenuOpen ? "text-mist" : "text-paper/60",
                )}
              >
                Presents
              </span>
            </div>
          </div>

          {/* Event Brand & Navigation Links */}
          <div className="hidden items-center gap-6 lg:flex">
            <a
              href="#top"
              className={cn(
                "font-display text-xl uppercase tracking-[0.04em] transition-colors hover:text-crimson sm:text-2xl",
                isScrolled || isMenuOpen ? "text-ink" : "text-paper",
              )}
            >
              {eventConfig.name}
            </a>

            <span
              className={cn(
                "h-4 w-px",
                isScrolled || isMenuOpen ? "bg-line" : "bg-white/20",
              )}
            />

            <nav aria-label="Primary navigation" className="flex items-center gap-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={activeHref === link.href}
                  isDark={!isScrolled && !isMenuOpen}
                />
              ))}
            </nav>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center justify-end gap-2.5 sm:gap-3">
            <a
              href="#expo"
              className="group hidden h-9 items-center gap-2 rounded-full bg-crimson px-4 font-mono text-[7px] font-medium uppercase tracking-[0.16em] text-white shadow-[0_8px_24px_rgba(181,20,27,0.35)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-crimson-bright hover:shadow-[0_0_20px_rgba(221,47,53,0.5)] sm:inline-flex"
            >
              Register
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className={cn(
                "inline-flex h-9 items-center gap-2 rounded-full border px-3.5 font-mono text-[7px] font-medium uppercase tracking-[0.16em] transition-colors lg:hidden",
                isScrolled || isMenuOpen
                  ? "border-line bg-cream/90 text-ink hover:border-crimson hover:text-crimson"
                  : "border-white/20 bg-white/10 text-paper hover:border-crimson hover:text-white",
              )}
            >
              {isMenuOpen ? (
                <X aria-hidden="true" className="size-4" />
              ) : (
                <Menu aria-hidden="true" className="size-4" />
              )}
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-3 bottom-0 top-[4.5rem] z-40 overflow-y-auto rounded-3xl border border-line bg-cream/98 backdrop-blur-xl shadow-[0_40px_80px_rgba(26,13,11,0.16)] lg:hidden"
          >
            <div className="mx-auto flex h-full max-w-[90rem] flex-col px-5 pb-7 pt-6 sm:px-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-mist">
                  {eventConfig.clubName}
                </p>
                <p className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-crimson">
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-crimson"
                  />
                  Registration open
                </p>
              </div>

              <nav aria-label="Mobile navigation" className="mt-2">
                {navLinks.map((link, index) => {
                  const isActive = activeHref === link.href;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={isActive ? "location" : undefined}
                      className="group flex items-center justify-between gap-4 border-b border-line/70 py-5"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-[8px] text-crimson/60">
                          0{index + 1}
                        </span>
                        <span
                          className={cn(
                            "font-display text-[clamp(2.25rem,9vw,3.5rem)] uppercase leading-none transition-colors",
                            isActive
                              ? "text-crimson"
                              : "text-ink group-hover:text-crimson",
                          )}
                        >
                          {link.label}
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-5 text-crimson/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  );
                })}
              </nav>

              <div className="mt-auto pt-8">
                <a
                  href="#expo"
                  onClick={closeMenu}
                  className="inline-flex h-12 w-full items-center justify-between gap-3 rounded-full bg-crimson px-6 font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-crimson-bright"
                >
                  Register your team
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
                <p className="mt-4 text-center font-mono text-[7px] uppercase tracking-[0.18em] text-mist">
                  {eventConfig.date.display} / {eventConfig.venue.name}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  href,
  label,
  isActive,
  isDark = false,
}: {
  href: string;
  label: string;
  isActive: boolean;
  isDark?: boolean;
}) {
  return (
    <a
      href={href}
      aria-current={isActive ? "location" : undefined}
      className={cn(
        "group relative py-2 font-mono text-[8px] font-medium uppercase tracking-[0.16em] transition-colors",
        isActive
          ? isDark
            ? "text-gold-bright font-bold"
            : "text-ink"
          : isDark
            ? "text-paper/70 hover:text-white"
            : "text-mist hover:text-ink",
      )}
    >
      {label}
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-crimson transition-transform duration-300",
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </a>
  );
}

