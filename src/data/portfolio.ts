import {
  Project,
  SkillGroup,
  TimelineItem,
  CertificateItem,
  ContactInfo,
} from "@/types";

export const CONTACT_INFO: ContactInfo = {
  email: "defrianbagus1@gmail.com",
  whatsappUrl: "https://wa.me/62859183875494",
  whatsappDisplay: "+62 859-1838-75494",
  githubUrl: "https://github.com/defriandev",
  githubHandle: "@defriandev",
  linkedinUrl: "https://linkedin.com/in/defrian",
};

export const PROJECTS: Project[] = [
  {
    slug: "pos-kopiku",
    // TODO: Isi problem, keyFrontendDecisions, challenges, result jika sudah siap
    title: "POS-KOPIKU",
    tagline: "Modern Offline-First Point of Sale & Cafe Management System",
    description:
      "A Point of Sale (POS) application developed to support coffee shop transaction management and cashier operations with offline-first local persistence, sales analytics, and automated COGS (HPP) calculations.",
    longDescription:
      "POS-KOPIKU was built to streamline daily operations in independent coffee shops and F&B businesses. The application features a rapid multi-category cashier checkout flow, offline-first transaction queueing via IndexedDB, automated Cost of Goods Sold (HPP) margin tracking, interactive sales analytics graphs, and 4-digit Owner PIN protection to secure sensitive financial reports.",
    status: "Completed",
    role: "Frontend & Full-Stack Developer",
    // Frontend technologies ordered first
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Dexie.js",
      "Supabase",
    ],
    keyFeatures: [
      "Rapid cashier order flow with variant modifiers (ice/hot, sugar levels) and barista notes",
      "Offline-first transaction persistence with IndexedDB sync engine (Dexie.js)",
      "Comprehensive sales reports with Gross Profit, COGS (HPP), and daily/monthly analytics graphs",
      "4-digit security PIN lock protecting owner financial dashboards from counter staff",
      "Instant cashier change calculator and digital receipt print/WhatsApp sharing",
      "Digital QR table management and self-order catalog support",
    ],
    liveUrl: undefined,
    repoUrl: "https://github.com/defriandev/POS-KOPIKU",
    fallbackImage: "/images/projects/pos-kopiku.svg",
    screenshots: [
      {
        src: "/images/projects/pos-kopiku-desktop.png",
        alt: "POS-KOPIKU cashier terminal desktop interface",
        caption: "Cashier order terminal & variant selection (Desktop)",
        device: "desktop",
        width: 1280,
        height: 720,
      },
      {
        src: "/images/projects/pos-kopiku-analytics.png",
        alt: "POS-KOPIKU sales analytics and COGS dashboard",
        caption: "Owner financial analytics & COGS report (Desktop)",
        device: "desktop",
        width: 1280,
        height: 720,
      },
      {
        src: "/images/projects/pos-kopiku-mobile.png",
        alt: "POS-KOPIKU mobile responsive cashier view",
        caption: "Mobile cashier & QR order view",
        device: "mobile",
        width: 390,
        height: 844,
      },
    ],
    featured: true,
  },
  {
    slug: "salon-crm",
    // TODO: Isi problem, keyFrontendDecisions, challenges, result jika sudah siap
    title: "AestheticCRM",
    tagline: "Beauty Clinic & Salon Practice Management System",
    description:
      "A modern practice management and client scheduling platform tailored for aesthetics clinics and premium salons, featuring conflict-free appointment booking, electronic treatment records, and automated client notifications.",
    longDescription:
      "Built with Next.js 14 App Router and PostgreSQL via Prisma ORM, AestheticCRM eliminates double-booking risks with atomic scheduling algorithms. It provides a client-facing booking interface requiring no upfront registration, alongside a secure administrative portal for tracking practitioner shifts, client medical/allergy consultation cards, and WhatsApp automated appointment confirmations.",
    status: "Completed",
    role: "Frontend & Full-Stack Developer",
    // Frontend technologies ordered first
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "Prisma",
      "PostgreSQL",
    ],
    keyFeatures: [
      "Public self-service booking flow without forced account registration",
      "Conflict-free automated scheduling algorithm preventing overlapping practitioner appointments",
      "Comprehensive client health records, skin condition histories, and past treatment tracking",
      "Automated WhatsApp follow-up reminders and appointment confirmation generation",
      "Role-based clinician schedule dashboard and service catalog management",
    ],
    liveUrl: undefined,
    repoUrl: "https://github.com/defriandev/salon-CRM",
    fallbackImage: "/images/projects/salon-crm.svg",
    screenshots: [
      {
        src: "/images/projects/salon-crm-desktop.png",
        alt: "AestheticCRM clinic appointment calendar desktop view",
        caption: "Clinician schedule & conflict-free booking calendar (Desktop)",
        device: "desktop",
        width: 1280,
        height: 720,
      },
      {
        src: "/images/projects/salon-crm-records.png",
        alt: "AestheticCRM patient consultation and treatment record interface",
        caption: "Client treatment history & consultation record (Desktop)",
        device: "desktop",
        width: 1280,
        height: 720,
      },
      {
        src: "/images/projects/salon-crm-mobile.png",
        alt: "AestheticCRM mobile public booking interface",
        caption: "Public self-service booking flow (Mobile)",
        device: "mobile",
        width: 390,
        height: 844,
      },
    ],
    featured: true,
  },
  {
    slug: "jelajah-trip",
    // TODO: Isi problem, keyFrontendDecisions, challenges, result jika sudah siap
    title: "Jelajah Trip",
    tagline: "High-Concurrency Open Trip & Tour Booking Platform",
    description:
      "A high-performance tourism booking platform engineered with a Go Fiber backend and React frontend, implementing transactional seat reservations and enterprise-grade authentication.",
    longDescription:
      "Jelajah Trip connects travelers with curated Indonesian destinations through an intuitive, mobile-responsive booking flow. The platform is architected with a decoupled Go Fiber REST API and PostgreSQL database, enforcing atomic seat quota locks (SELECT ... FOR UPDATE) to eliminate overselling during high-demand campaigns, backed by secure HttpOnly JWT tokens with single-flight refresh rotations.",
    status: "Completed",
    role: "Frontend & Full-Stack Developer",
    // Frontend technologies ordered first
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Go",
      "Fiber",
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
    liveUrl: "https://jelajah-trip.vercel.app/",
    repoUrl: "https://github.com/defriandev/jelajah-trip",
    fallbackImage: "/images/projects/jelajah-trip.svg",
    screenshots: [
      {
        src: "/images/projects/jelajah-trip-desktop.jpg",
        alt: "Jelajah Trip landing page and trip search interface",
        caption: "Homepage & Trip Search Filter (Desktop)",
        device: "desktop",
        width: 1024,
        height: 540,
      },
      {
        src: "/images/projects/jelajah-trip-destinations.jpg",
        alt: "Jelajah Trip curated Indonesian destinations catalog",
        caption: "Curated Indonesian Destinations Catalog (Desktop)",
        device: "desktop",
        width: 1024,
        height: 540,
      },
      {
        src: "/images/projects/jelajah-trip-auth.png",
        alt: "Jelajah Trip user authentication and login interface",
        caption: "Account Authentication Flow (Desktop)",
        device: "desktop",
        width: 1024,
        height: 540,
      },
    ],
    featured: true,
  },
  {
    slug: "studio-web-showcase",
    // TODO: Isi problem, keyFrontendDecisions, challenges, result jika sudah siap
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
    liveUrl: "https://demo-project-lovat-beta.vercel.app/",
    repoUrl: "https://github.com/defriandev/demo-project",
    fallbackImage: "/images/projects/studio-web-showcase.svg",
    screenshots: [
      {
        src: "/images/projects/studio-web-showcase-desktop.png",
        alt: "Studio Web Showcase landing page and Katalog Live Demo overview",
        caption: "Main Showcase & Katalog Live Demo (Desktop)",
        device: "desktop",
        width: 1280,
        height: 676,
      },
      {
        src: "/images/projects/studio-web-showcase-cafe.jpg",
        alt: "Kala Roastery F&B demo template inside Studio Web Showcase",
        caption: "01 / Cafe — Kala Roastery Demo",
        device: "desktop",
        width: 1024,
        height: 540,
      },
      {
        src: "/images/projects/studio-web-showcase-barber.jpg",
        alt: "Fort Worth Barbershop grooming demo template inside Studio Web Showcase",
        caption: "02 / Barbershop — Fort Worth Demo",
        device: "desktop",
        width: 1024,
        height: 540,
      },
      {
        src: "/images/projects/studio-web-showcase-company.png",
        alt: "NEXA_SYS corporate architecture demo template inside Studio Web Showcase",
        caption: "03 / Company — NEXA_SYS Demo",
        device: "desktop",
        width: 1024,
        height: 540,
      },
      {
        src: "/images/projects/studio-web-showcase-travel.jpg",
        alt: "Wonder Tour travel demo template inside Studio Web Showcase",
        caption: "04 / Travel — Wonder Tour Demo",
        device: "desktop",
        width: 1024,
        height: 540,
      },
    ],
    featured: true,
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    description: "Core technologies used across internship work and personal web projects.",
    skills: [
      { name: "TypeScript", description: "Type-safe frontend and full-stack Next.js development" },
      { name: "React", description: "Component architecture used in LMS internship and web projects" },
      { name: "Next.js", description: "App Router, static generation, and full-stack web apps" },
      { name: "Tailwind CSS", description: "Responsive utility-first layouts and component styling" },
      { name: "JavaScript", description: "ES6+ syntax, async API handling, and browser APIs" },
      { name: "HTML5 & CSS3", description: "Semantic markup, Flexbox, Grid, and responsive design" },
    ],
  },
  {
    category: "Tools",
    description: "Version control, editor, and deployment tools used in daily development.",
    skills: [
      { name: "Git", description: "Branching, pull requests, and bug-fix tracking" },
      { name: "GitHub", description: "Repository hosting and collaborative pull request workflows" },
      { name: "VS Code", description: "Primary code editor with TypeScript and ESLint integration" },
      { name: "Vercel", description: "Frontend hosting and preview deployments" },
    ],
  },
  {
    category: "Additional",
    description: "Backend integration, data persistence, and organizational soft skills.",
    skills: [
      { name: "REST API", description: "Integrating React interfaces with Go and Node.js backend endpoints" },
      { name: "PostgreSQL & Prisma", description: "Relational schema querying and ORM integration in web apps" },
      { name: "Team Leadership", description: "Led an 8-member PSDM division and 135-student onboarding" },
      { name: "Event & Cross-Team Coordination", description: "Coordinated orientation committees and 7-person dev workflows" },
      { name: "Bug Investigation", description: "Tracing and reporting cross-layer issues with QA and backend teams" },
    ],
  },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "edu-unair",
    title: "D4 Teknik Informatika (Applied Bachelor in Informatics)",
    organization: "Universitas Airlangga",
    location: "Surabaya, Indonesia",
    period: "Expected Graduation: 2027",
    type: "education",
    description: [
      "Undergraduate Informatics student with a current GPA of 3.03 / 4.00.",
      "Earned IBM SkillsBuild certificate: Dasar-Dasar Komputasi Awan (Cloud Computing Fundamentals, Apr 2026).",
      "Earned Cisco Networking Academy certificate: Partner: NDG Linux Unhatched (Oct 2024).",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: "pkl-experience",
    title: "Frontend Developer Intern (PKL)",
    organization: "PT Kuanta Prima Indonesia",
    location: "Indonesia",
    period: "15 Aug 2026 - 15 Nov 2026",
    type: "experience",
    description: [
      "Built 8+ features for a Learning Management System (LMS) web application in React, including dashboards, assessment forms, student report cards, and a principal overview dashboard.",
      "Integrated frontend UI components with Go backend APIs inside a 7-person team (backend, QA, and PM).",
      "Managed source changes through Git pull requests and resolved reported frontend bug issues.",
      "Investigated and reported cross-layer application bugs outside the frontend scope to assist QA troubleshooting.",
    ],
    technologies: ["React", "Go (API Integration)", "REST API", "Git"],
  },
  {
    id: "org-psdm-himti",
    title: "Head of Human Resource Development (Kepala PSDM)",
    organization: "HIMTI Universitas Airlangga",
    location: "Surabaya, Indonesia",
    period: "Jan 2025 - Dec 2025",
    type: "organization",
    description: [
      "Led a division of around 8 members to plan and execute internal member development programs.",
      "Organized departmental onboarding and orientation activities for 135 incoming Informatics students.",
    ],
    technologies: ["Team Leadership", "People Development", "Event Coordination"],
  },
  {
    id: "org-inisialisasi-himti",
    title: "Initialization Coordinator (Koordinator Inisialisasi)",
    organization: "HIMTI Universitas Airlangga",
    location: "Surabaya, Indonesia",
    period: "Apr 2024",
    type: "organization",
    description: [
      "Led the planning and execution of the new student orientation program.",
      "Coordinated organizing committee divisions and managed event rundown execution.",
    ],
    technologies: ["Event Planning", "Cross-Team Coordination"],
  },
  {
    id: "org-wakil-angkatan",
    title: "Vice Class Representative — Cohort 2023 (Wakil Ketua Angkatan)",
    organization: "D4 Teknik Informatika, Universitas Airlangga",
    location: "Surabaya, Indonesia",
    period: "Cohort 2023",
    type: "organization",
    description: [
      "Served as a communication bridge between Informatics cohort 2023 students and faculty administration.",
    ],
    technologies: ["Student Communication"],
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-ibm-cloud",
    name: "Dasar-Dasar Komputasi Awan (Cloud Computing Fundamentals)",
    issuer: "IBM SkillsBuild",
    issuedDate: "17 Apr 2026",
    credentialId: "PLAN-2EC3A305F2C3",
    image: "/images/certs/ibm-skillsbuild-cloud.png",
    alt: "IBM SkillsBuild completion certificate for Dasar-Dasar Komputasi Awan awarded to Defrian Bagus Dewanta Putra",
    width: 1024,
    height: 625,
  },
  {
    id: "cert-cisco-linux",
    name: "Partner: NDG Linux Unhatched",
    issuer: "Cisco Networking Academy",
    issuedDate: "11 Oct 2024",
    image: "/images/certs/cisco-ndg-linux.jpg",
    alt: "Cisco Networking Academy certificate for Partner: NDG Linux Unhatched awarded to Defrian Bagus Dewanta Putra",
    width: 1120,
    height: 790,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
