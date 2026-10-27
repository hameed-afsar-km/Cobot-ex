import type { Metadata, Viewport } from "next";
import { Anton, Archivo_Black, JetBrains_Mono, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const archivo = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "COBOT-EX | Inter-College Technology Event",
  description:
    "An open platform for students to showcase original, practical and impactful technology-based solutions to real-world problems. Build. Solve. Compete.",
  applicationName: "COBOT-EX",
  keywords: [
    "COBOT-EX",
    "inter-college technology event",
    "project expo",
    "hackathon",
    "engineering competition",
    "Chennai",
  ],
  openGraph: {
    title: "COBOT-EX | Inter-College Technology Event",
    description:
      "Build. Solve. Compete. A project expo and hackathon for students solving real-world problems through technology.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "COBOT-EX | Inter-College Technology Event",
    description:
      "Build. Solve. Compete. A project expo and hackathon for students solving real-world problems through technology.",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f4ecdf",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-svh bg-cream text-ink antialiased">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-32 border border-gold bg-crimson px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-white transition-transform duration-200 focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

