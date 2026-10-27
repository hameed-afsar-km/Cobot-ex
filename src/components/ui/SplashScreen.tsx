"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import { eventConfig } from "@/config/event";

type SplashScreenProps = {
  logoSrc: string | null;
};

export function SplashScreen({ logoSrc }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling while splash screen is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Auto-dismiss after 1.8 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = originalOverflow;
    }, 1800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onClick={handleDismiss}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-night text-paper cursor-pointer select-none"
          role="dialog"
          aria-label="Loading splash screen"
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[420px] rounded-full bg-crimson/20 blur-[100px]"
          />

          {/* Center Brand Showcase */}
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            {/* Club Crest Logo */}
            {logoSrc && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative size-16 sm:size-20 mb-4"
              >
                <Image
                  src={logoSrc}
                  alt={eventConfig.clubName}
                  fill
                  priority
                  className="object-contain drop-shadow-[0_0_25px_rgba(201,164,92,0.4)]"
                />
              </motion.div>
            )}

            {/* Club Name */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="font-mono text-[9px] uppercase tracking-[0.25em] text-gold-bright sm:text-[10px]"
            >
              {eventConfig.clubName}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="mt-1 font-mono text-[7px] uppercase tracking-[0.3em] text-paper/50 sm:text-[8px]"
            >
              Presents
            </motion.p>

            {/* Event Name Reveal */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 font-hero text-4xl sm:text-6xl font-black uppercase tracking-tight"
            >
              <span className="bg-gradient-to-b from-white via-paper to-white/70 bg-clip-text text-transparent">
                COBOT
              </span>
              <span className="bg-gradient-to-b from-gold-bright via-gold to-crimson-bright bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(232,203,133,0.5)]">
                -EX
              </span>
            </motion.h1>

            {/* High-Tech Loading Bar */}
            <div className="mt-6 w-36 sm:w-48 h-[2px] bg-white/10 overflow-hidden rounded-full">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="size-full bg-gradient-to-r from-transparent via-crimson-bright to-gold-bright"
              />
            </div>
          </div>

          {/* Quick Dismiss Cue */}
          <span className="absolute bottom-6 font-mono text-[8px] uppercase tracking-[0.2em] text-paper/30">
            Click anywhere to enter
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
