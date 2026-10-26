"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type ScrollTextLine = {
  text: string;
  className?: string;
};

type ScrollTextProps = {
  lines: ScrollTextLine[];
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  delay?: number;
  once?: boolean;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function ScrollText({
  lines,
  as = "h2",
  className,
  delay = 0,
  once = true,
}: ScrollTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = as;

  const wordVariants = {
    hidden: shouldReduceMotion
      ? { y: 0, opacity: 1 }
      : { y: "115%", opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.68, ease },
    },
  };

  return (
    <Tag className={cn(className)}>
      <span className="sr-only">
        {lines.map((line) => line.text).join(" ")}
      </span>
      <span aria-hidden="true" className="block">
        {lines.map((line, lineIndex) => {
          const words = line.text.split(" ");

          return (
            <span
              key={`${line.text}-${lineIndex}`}
              className="block overflow-hidden pb-[0.08em] -mb-[0.08em]"
            >
              <motion.span
                initial={shouldReduceMotion ? false : "hidden"}
                whileInView="show"
                viewport={{ once, margin: "-10% 0px" }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: shouldReduceMotion ? 0 : 0.06,
                      delayChildren: shouldReduceMotion ? 0 : delay + lineIndex * 0.07,
                    },
                  },
                }}
                className={cn("inline-block", line.className)}
              >
                {words.map((word, wordIndex) => (
                  <span key={`${word}-${wordIndex}`}>
                    <motion.span
                      variants={wordVariants}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                    {wordIndex < words.length - 1 ? " " : null}
                  </span>
                ))}
              </motion.span>
            </span>
          );
        })}
      </span>
    </Tag>
  );
}
