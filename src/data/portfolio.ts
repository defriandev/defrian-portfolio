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
    tagline: "Point of Sale & Cafe Management System Prototype",
    description:
      "A Point of Sale (POS) web application built with sample data to demonstrate coffee shop cashier workflows, menu catalog management, QR table tracking, and owner profit analytics.",
    longDescription:
      "POS-KOPIKU is a demonstration POS workspace for a cafe workflow. It features a cashier terminal with category filters and dine-in/take-away order carts, menu item creation with stock and variant options, QR table management, a 4-digit Owner PIN lock, and an owner analytics view showing revenue, COGS (HPP), and gross profit charts.",
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
      "Cashier terminal with category tabs, item search, dine-in/take-away toggle, and table selection",
      "Menu catalog management with stock modes and variant support",
      "Table and QR self-order token overview (occupied vs. available status)",
      "4-digit Owner PIN lock screen protecting financial reports",
      "Owner analytics dashboard displaying revenue, COGS (HPP), gross profit, and 12-month bar charts",
    ],
    liveUrl: undefined,
    repoUrl: "https://github.com/defriandev/POS-KOPIKU",
    fallbackImage: "/images/projects/pos-kopiku.svg",
    screenshots: [
      {
        src: "/images/projects/pos-kopiku-desktop.jpg",
        alt: "POS-KOPIKU cashier terminal showing categorized coffee and food menu cards with an order cart sidebar",
        caption: "Cashier Terminal & Order Cart (Desktop)",
        device: "desktop",
        width: 1024,
        height: 540,
      },
      {
        src: "/images/projects/pos-kopiku-analytics.png",
        alt: "POS-KOPIKU owner analytics dashboard displaying total revenue, COGS, gross profit cards, and a 12-month bar chart",
        caption: "Owner Analytics & COGS Report (Desktop)",
        device: "desktop",
        width: 1024,
        height: 540,
      },
      {
        src: "/images/projects/pos-kopiku-qr.png",
        alt: "POS-KOPIKU table and QR self-order management grid showing table numbers and occupancy badges",
        caption: "Table & QR Self-Order Management (Desktop)",
        device: "desktop",
        width: 1024,
        height: 540,
      },
      {
        src: "/images/projects/pos-kopiku-pin.png",
        alt: "POS-KOPIKU 4-digit owner PIN keypad lock screen protecting financial reports",
        caption: "4-Digit Owner PIN Lock Screen (Desktop)",
        device: "desktop",
        width: 1024,
        height: 540,
      },
    ],
    featured: true,
  },
  {
    slug: "salon-crm",
    // TODO: Isi problem, keyFrontendDecisions, challenges, result jika sudah siap
    title: "AestheticCRM",
    tagline: "Beauty Clinic & Salon Booking Concept Platform",
    description:
      "A practice management and appointment booking demo for an aesthetic clinic concept, featuring a treatment catalog, self-service booking without login, and an admin schedule dashboard.",
    longDescription:
      "Built with Next.js App Router, TypeScript, Prisma, and PostgreSQL, AestheticCRM demonstrates a three-part clinic workflow: a public treatment showcase, a 4-step self-service booking flow that prevents overlapping appointments through availability checks, and an internal admin portal for reservation status tracking, service/therapist management, and pre-filled WhatsApp follow-up links.",
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
      "Public treatment catalog with category filtering, pricing, duration, and therapist profiles",
      "4-step self-service booking flow without requiring patient account registration",
      "Prevents overlapping appointments through real-time therapist and slot availability checks",
      "Generates pre-filled WhatsApp links for appointment consultation and follow-up",
      "Admin dashboard for reservation status filtering (Pending, Confirmed, Completed, Cancelled) and service management",
    ],
    liveUrl: undefined,
    repoUrl: "https://github.com/defriandev/salon-CRM",
    fallbackImage: "/images/projects/salon-crm.svg",
    screenshots: [
      {
        src: "/images/projects/salon-crm-desktop.png",
        alt: "AestheticCRM platform overview page showing three navigation cards for public catalog, patient booking, and admin CRM",
        caption: "Platform Overview & Entry Points (Desktop)",
        device: "desktop",
        width: 1024,
        height: 540,
      },
      {
        src: "/images/projects/salon-crm-catalog.png",
        alt: "GlowLab Aesthetic Clinic treatment catalog displaying four skincare services with category filters and prices",
        caption: "Public Treatment Catalog (Desktop)",
        device: "desktop",
        width: 1024,
        height: 540,
      },
      {
        src: "/images/projects/salon-crm-booking.png",
        alt: "AestheticCRM booking flow step showing therapist selection, date picker, and available time slots",
        caption: "Self-Service Booking: Therapist & Time Slot Selection (Desktop)",
        device: "desktop",
        width: 1024,
        height: 540,
      },
      {
        src: "/images/projects/salon-crm-admin.png",
        alt: "AestheticCRM admin reservation schedule dashboard with status summary cards and filter tabs",
        caption: "Admin Reservation Dashboard (Desktop)",
        device: "desktop",
        width: 1024,
        height: 540,
      },
      {
        src: "/images/projects/salon-crm-services.png",
        alt: "AestheticCRM admin configuration table listing clinic treatments, categories, durations, prices, and active status",
        caption: "Admin Service & Therapist Configuration (Desktop)",
        device: "desktop",
        width: 1024,
        height: 540,
      },
    ],
    featured: true,
  },
  {
    slug: "jelajah-trip",
    // TODO: Isi problem, keyFrontendDecisions, challenges, result jika sudah siap
    title: "Jelajah Trip",
    tagline: "Open Trip & Tour Booking Platform Prototype",
    description:
      "A tourism booking platform prototype engineered with a Go Fiber backend and React frontend, featuring destination discovery, date/participant search, and user authentication.",
    longDescription:
      "Jelajah Trip is a concept tour booking web application built with a decoupled Go Fiber REST API, PostgreSQL database, and React frontend. It presents curated Indonesian destination cards, search filters by destination, departure date, and group size, along with account login and order lookup flows using sample tour data.",
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
      "Landing page with destination, departure date, and participant count search bar",
      "Curated Indonesian destinations catalog (Raja Ampat, Labuan Bajo, Bromo, Nusa Penida, Danau Toba, Yogyakarta)",
      "User authentication flow (login and registration) backed by JWT session handling",
      "Decoupled React frontend communicating with a Go Fiber REST API and PostgreSQL database",
      "Responsive layout structured for desktop and mobile browsing",
    ],
    liveUrl: "https://jelajah-trip.vercel.app/",
    repoUrl: "https://github.com/defriandev/jelajah-trip",
    fallbackImage: "/images/projects/jelajah-trip.svg",
    screenshots: [
      {
        src: "/images/projects/jelajah-trip-desktop.jpg",
        alt: "Jelajah Trip homepage hero section with coastal destination photo and trip search bar",
        caption: "Homepage & Trip Search Filter (Desktop)",
        device: "desktop",
        width: 1024,
        height: 540,
      },
      {
        src: "/images/projects/jelajah-trip-destinations.jpg",
        alt: "Jelajah Trip destination gallery cards featuring Raja Ampat, Labuan Bajo, Bromo, Nusa Penida, Danau Toba, and Yogyakarta",
        caption: "Curated Indonesian Destinations Catalog (Desktop)",
        device: "desktop",
        width: 1024,
        height: 540,
      },
      {
        src: "/images/projects/jelajah-trip-auth.png",
        alt: "Jelajah Trip split-screen login page with email and password form",
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
    tagline: "Interactive Multi-Niche Concept & Demo Catalog",
    description:
      "An interactive web showcase presenting four concept/demo templates across F&B, grooming, corporate, and travel niches with category filtering and WhatsApp inquiry links.",
    longDescription:
      "Studio Web Showcase is a concept/demo catalog built with React, TypeScript, Tailwind CSS, and Framer Motion. It demonstrates four distinct visual directions—Kala Roastery (Cafe), Fort Worth (Barbershop), NEXA_SYS (Company), and Wonder Tour (Travel)—accessible through a unified demo switcher and filterable catalog.",
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
      "4 concept/demo templates: Cafe (Kala Roastery), Barbershop (Fort Worth), Company (NEXA_SYS), and Travel (Wonder Tour)",
      "Interactive category filter tabs (All, F&B, Grooming, Corporate, Travel) in Katalog Live Demo",
      "Top demo switcher bar allowing instant navigation between the four concept templates",
      "Pre-filled WhatsApp consultation links integrated into the navigation and floating bar",
      "Smooth page and component transitions powered by Framer Motion and React Router",
    ],
    liveUrl: "https://demo-project-lovat-beta.vercel.app/",
    repoUrl: "https://github.com/defriandev/demo-project",
    fallbackImage: "/images/projects/studio-web-showcase.svg",
    screenshots: [
      {
        src: "/images/projects/studio-web-showcase-desktop.png",
        alt: "Studio Web Showcase landing page with headline and Katalog Live Demo category filter tabs",
        caption: "Main Concept Showcase & Katalog Live Demo (Desktop)",
        device: "desktop",
        width: 1280,
        height: 676,
      },
      {
        src: "/images/projects/studio-web-showcase-cafe.jpg",
        alt: "Kala Roastery cafe concept demo template with warm serif typography and menu buttons",
        caption: "01 / Cafe — Kala Roastery Concept Demo",
        device: "desktop",
        width: 1024,
        height: 540,
      },
      {
        src: "/images/projects/studio-web-showcase-barber.jpg",
        alt: "Fort Worth barbershop concept demo template with dark brick background and booking CTA",
        caption: "02 / Barbershop — Fort Worth Concept Demo",
        device: "desktop",
        width: 1024,
        height: 540,
      },
      {
        src: "/images/projects/studio-web-showcase-company.png",
        alt: "NEXA_SYS corporate concept demo template with dark theme and metric cards",
        caption: "03 / Company — NEXA_SYS Concept Demo",
        device: "desktop",
        width: 1024,
        height: 540,
      },
      {
        src: "/images/projects/studio-web-showcase-travel.jpg",
        alt: "Wonder Tour travel concept demo template with split-screen ocean photo and serif headline",
        caption: "04 / Travel — Wonder Tour Concept Demo",
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
