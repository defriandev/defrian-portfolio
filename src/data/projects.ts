import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "pos-kopiku",
    title: "POS-KOPIKU",
    tagline: "Modern Offline-First Point of Sale & Cafe Management System",
    description:
      "A Point of Sale (POS) application developed to support coffee shop transaction management and cashier operations with offline-first local persistence, sales analytics, and automated COGS (HPP) calculations.",
    longDescription:
      "POS-KOPIKU was built to streamline daily operations in independent coffee shops and F&B businesses. The application features a rapid multi-category cashier checkout flow, offline-first transaction queueing via IndexedDB, automated Cost of Goods Sold (HPP) margin tracking, interactive sales analytics graphs, and 4-digit Owner PIN protection to secure sensitive financial reports.",
    status: "Completed",
    role: "Full Stack / Frontend Developer",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Zustand",
      "Dexie.js",
    ],
    keyFeatures: [
      "Rapid cashier order flow with variant modifiers (ice/hot, sugar levels) and barista notes",
      "Offline-first transaction persistence with IndexedDB sync engine (Dexie.js)",
      "Comprehensive sales reports with Gross Profit, COGS (HPP), and daily/monthly analytics graphs",
      "4-digit security PIN lock protecting owner financial dashboards from counter staff",
      "Instant cashier change calculator and digital receipt print/WhatsApp sharing",
      "Digital QR table management and self-order catalog support",
    ],
    image: "/images/projects/pos-kopiku.svg",
    demoUrl: undefined,
    githubUrl: "https://github.com/defriandev/POS-KOPIKU",
    featured: true,
  },
  {
    slug: "salon-crm",
    title: "AestheticCRM",
    tagline: "Beauty Clinic & Salon Practice Management System",
    description:
      "A modern practice management and client scheduling platform tailored for aesthetics clinics and premium salons, featuring conflict-free appointment booking, electronic treatment records, and automated client notifications.",
    longDescription:
      "Built with Next.js 14 App Router and PostgreSQL via Prisma ORM, AestheticCRM eliminates double-booking risks with atomic scheduling algorithms. It provides a client-facing booking interface requiring no upfront registration, alongside a secure administrative portal for tracking practitioner shifts, client medical/allergy consultation cards, and WhatsApp automated appointment confirmations.",
    status: "Completed",
    role: "Full Stack Developer",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Zod",
    ],
    keyFeatures: [
      "Public self-service booking flow without forced account registration",
      "Conflict-free automated scheduling algorithm preventing overlapping practitioner appointments",
      "Comprehensive client health records, skin condition histories, and past treatment tracking",
      "Automated WhatsApp follow-up reminders and appointment confirmation generation",
      "Role-based clinician schedule dashboard and service catalog management",
    ],
    image: "/images/projects/salon-crm.svg",
    demoUrl: undefined,
    githubUrl: "https://github.com/defriandev/salon-CRM",
    featured: true,
  },
  {
    slug: "jelajah-trip",
    title: "Jelajah Trip",
    tagline: "High-Concurrency Open Trip & Tour Booking Platform",
    description:
      "A high-performance tourism booking platform engineered with a Go Fiber backend and React frontend, implementing transactional seat reservations and enterprise-grade authentication.",
    longDescription:
      "Jelajah Trip connects travelers with curated Indonesian destinations through an intuitive, mobile-responsive booking flow. The platform is architected with a decoupled Go Fiber REST API and PostgreSQL database, enforcing atomic seat quota locks (SELECT ... FOR UPDATE) to eliminate overselling during high-demand campaigns, backed by secure HttpOnly JWT tokens with single-flight refresh rotations.",
    status: "Completed",
    role: "Full Stack Developer",
    techStack: [
      "Go",
      "Fiber",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "JWT",
    ],
    keyFeatures: [
      "Real-time seat inventory reservation with PostgreSQL row-level locks preventing race conditions",
      "Secure session management utilizing HttpOnly cookies with concurrent single-flight token refresh",
      "Interactive trip discovery catalog with multi-day itinerary timelines and package tiering",
      "Automated booking invoice generation and digital participant confirmation vouchers",
      "Responsive mobile-first interface optimized for travelers on cellular connections",
    ],
    image: "/images/projects/jelajah-trip.svg",
    demoUrl: undefined,
    githubUrl: "https://github.com/defriandev/jelajah-trip",
    featured: true,
  },
  {
    slug: "studio-web-showcase",
    title: "Studio Web Showcase",
    tagline: "Interactive Multi-Niche Editorial Web Showcase & Device Simulator",
    description:
      "A high-fidelity interactive digital agency showroom showcasing four curated industry client concepts with an integrated multi-viewport device simulator (Desktop, Tablet, Mobile).",
    longDescription:
      "Studio Web Showcase presents bespoke web architecture across four distinct commercial niches: Specialty Coffee (Kala Coffee), Men's Grooming (Fort Worth Barbershop), Corporate Advisory (NEXA), and Experiential Travel (Wonder Travel). Built with React 19, Vite, and Framer Motion, it features an interactive live viewport switcher, fluid Swiss editorial typography, and modular interactive prototypes for client pitches.",
    status: "Completed",
    role: "Frontend Developer",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "React Router",
    ],
    keyFeatures: [
      "Real-time interactive multi-viewport simulator toggling between Desktop, Tablet, and Mobile frames",
      "4 bespoke industry prototypes: Specialty Coffee, Men's Grooming, Corporate Finance, and Luxury Travel",
      "Swiss minimalist typography with micro-interactions and smooth Framer Motion layout transitions",
      "Dynamic quote estimation calculator and lead intake modal flows",
      "Production-ready lightweight architecture with zero layout shift",
    ],
    image: "/images/projects/studio-web-showcase.svg",
    demoUrl: undefined,
    githubUrl: "https://github.com/defriandev/demo-project",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
