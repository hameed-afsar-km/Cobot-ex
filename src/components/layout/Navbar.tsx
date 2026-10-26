"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/ui/BrandLogo";
import { eventConfig, navLinks } from "@/config/event";
import { cn } from "@/lib/utils";

type NavbarProps = {
  logoSrc: string | null;
};

export function Navbar({ logoSrc }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

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
        setIsMenuOpen(false);
      }
    };

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const handleDesktop = () => {
      if (desktopQuery.matches) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleDesktop);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleDesktop);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const isOnDark = !isScrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        isOnDark
          ? "border-transparent bg-transparent"
          : "border-line bg-cream/95 shadow-[0_14px_40px_rgba(26,13,11,0.09)] backdrop-blur-xl",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <a
          href="#top"
          onClick={closeMenu}
          className="flex min-w-0 flex-col"
          aria-label={`${eventConfig.name} home`}
        >
          <span
            className={cn(
              "font-display text-xl leading-none tracking-[0.04em] transition-colors duration-300 sm:text-2xl",
              isOnDark ? "text-paper" : "text-ink",
            )}
          >
            {eventConfig.name}
          </span>
          <span
            className={cn(
              "mt-1.5 font-mono text-[8px] uppercase tracking-[0.2em] transition-colors duration-300",
              isOnDark ? "text-gold-bright" : "text-mist",
            )}
          >
            {eventConfig.category}
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "group relative py-2 font-mono text-[10px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 focus-visible:text-gold-bright",
                isOnDark
                  ? "text-paper/70 hover:text-paper"
                  : "text-mist hover:text-ink",
              )}
            >
              {link.label}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100",
                  isOnDark ? "bg-gold-bright" : "bg-crimson",
                )}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#expo"
            className="hidden h-10 items-center gap-2 border border-crimson bg-crimson px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-[0_8px_24px_rgba(181,20,27,0.22)] transition-[background-color,border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-crimson-bright hover:bg-crimson-bright active:translate-y-0 md:inline-flex"
          >
            Register
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </a>

          <span
            aria-hidden="true"
            className={cn(
              "hidden h-7 w-px transition-colors duration-300 md:block",
              isOnDark ? "bg-paper/20" : "bg-line",
            )}
          />

          <a
            href="#top"
            className="shrink-0 border border-gold/60 bg-ink p-0.5 shadow-[0_2px_8px_rgba(26,13,11,0.24)]"
            aria-label={`${eventConfig.clubName} home`}
          >
            <BrandLogo src={logoSrc} size="md" />
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className={cn(
              "-mr-2 flex size-11 items-center justify-center transition-colors duration-300 lg:hidden",
              isOnDark
                ? "text-paper hover:text-gold-bright"
                : "text-ink hover:text-crimson",
            )}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
            animate={
              shouldReduceMotion ? undefined : { opacity: 1, height: "auto" }
            }
            exit={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "overflow-hidden border-t backdrop-blur-xl lg:hidden",
              isOnDark
                ? "border-paper/15 bg-night/95"
                : "border-line bg-cream/95",
            )}
          >
            <nav
              aria-label="Mobile navigation"
              className="container-page flex flex-col pb-6 pt-2"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={cn(
                    "border-b py-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] transition-colors",
                    isOnDark
                      ? "border-paper/10 text-paper/70 hover:text-paper"
                      : "border-line text-mist hover:text-ink",
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#expo"
                onClick={closeMenu}
                className="mt-5 inline-flex h-12 items-center justify-center gap-2 border border-crimson bg-crimson px-5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-crimson-bright"
              >
                Register
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
