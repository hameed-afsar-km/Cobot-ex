export const eventConfig = {
  name: "COBOT-EX",
  clubName: "Technical Club",
  category: "Inter-College Technology Event",
  tagline: "Build. Solve. Compete.",
  description:
    "An open platform for students to showcase original, practical and impactful technology-based solutions to real-world problems.",
  registration: {
    label: "Registration",
    description:
      "An open platform for students to showcase original, practical and impactful technology-based solutions to real-world problems.",
    teamSize: "Individual or up to 3 members",
    fee: "₹250 per team",
  },
  date: {
    label: "Event date",
    display: "10 November 2026",
    displayShort: "10 NOV 2026",
    iso: "2026-11-10T09:00:00+05:30",
  },
  deadline: {
    label: "Registration deadline",
    display: "5 November 2026",
    time: "11:59 PM",
    iso: "2026-11-05T23:59:00+05:30",
  },
  venue: {
    label: "Venue",
    name: "Crescent Campus",
    area: "Vandalur, Chennai",
    display: "Crescent Campus, Vandalur, Chennai",
  },
  registrationLinks: {
    expo: "https://docs.google.com/forms/d/e/1FAIpQLSc-pQH3vwWTZBTeM84OfQ23zJIwgFUNq8tRjSlp1GNR-ENIdQ/viewform",
    hackathon:
      "https://docs.google.com/forms/d/e/1FAIpQLSf2JNpb-o2_2CKPSsb7L9F8n7vYgmSeUwinkVxzrh2K6ksFTQ/viewform",
  },
  brochure: {
    title: "Scan for brochure",
    description:
      "Explore the event details, competition information, and everything you need to prepare for COBOT-EX.",
    url: null as string | null,
  },
  assets: {
    hero: {
      label: "COBOT-EX event hero",
      alt: "COBOT-EX inter-college technology event",
      candidates: [
        "hero.jpeg",
        "hero.jpg",
        "hero.webp",
        "hero.png",
        "hero.avif",
        "hero-image.jpeg",
        "hero-image.jpg",
        "hero-image.webp",
        "hero-image.png",
      ],
    },
    heroMobile: {
      label: "COBOT-EX mobile event hero",
      alt: "COBOT-EX inter-college technology event",
      candidates: [
        "mob.jpeg",
        "mob.jpg",
        "mob.webp",
        "mob.png",
        "hero-mobile.jpeg",
        "hero-mobile.jpg",
        "hero-mobile.webp",
        "hero-mobile.png",
      ],
    },
    logo: {
      label: "COBOT-EX logo",
      alt: "COBOT-EX logo",
      candidates: [
        "logo.png",
        "logo.svg",
        "logo.webp",
        "club-logo.png",
        "club-logo.svg",
        "club-logo.webp",
      ],
    },
    qr: {
      label: "Event brochure QR code",
      alt: "QR code to scan the COBOT-EX brochure",
      candidates: [
        "qr.png",
        "qr.svg",
        "brochure-qr.png",
        "brochure-qr.svg",
        "brochure-qr.webp",
        "qr-code.png",
        "qr-code.svg",
      ],
    },
  },
} as const;

export type EventConfig = typeof eventConfig;

export type Competition = {
  id: "expo" | "hackathon";
  track: string;
  title: string;
  description: string;
  cta: string;
  url: string;
  accent: "crimson" | "gold";
  icon: "rounds" | "code";
  meta: { label: string; value: string }[];
  tags: string[];
};

export const competitions: Competition[] = [
  {
    id: "expo",
    track: "01",
    title: "Inter-College Expo",
    description:
      "A competitive, round-based problem-solving event where participants tackle progressively challenging technical problems, compete through a live leaderboard, and complete a side quest.",
    cta: "Register for Inter-College Expo",
    url: eventConfig.registrationLinks.expo,
    accent: "crimson",
    icon: "rounds",
    meta: [
      { label: "Team size", value: "Up to 2 participants" },
      { label: "Team registration", value: "₹250" },
      { label: "Individual registration", value: "₹150" },
    ],
    tags: ["Round-based", "Live leaderboard", "Side quest"],
  },
  {
    id: "hackathon",
    track: "02",
    title: "Inter-College Hackathon",
    description:
      "A competitive, collaborative coding experience where teams turn ideas into working solutions through rapid problem-solving and development.",
    cta: "Register for Hackathon",
    url: eventConfig.registrationLinks.hackathon,
    accent: "gold",
    icon: "code",
    meta: [],
    tags: [],
  },
];

export const navLinks = [
  { label: "Expo", href: "#expo" },
  { label: "Hackathon", href: "#hackathon" },
  { label: "Brochure", href: "#brochure" },
  { label: "Event Details", href: "#details" },
] as const;
