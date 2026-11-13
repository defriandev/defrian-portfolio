import { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    slug: "jobfinder-dashboard",
    title: "JobFinder Dashboard",
    tagline: "Modern Job Search & Application Tracking Platform",
    description:
      "A comprehensive job search web application designed to simplify employment discovery with dynamic multi-parameter filtering, REST API integration, and bookmarking capabilities.",
    longDescription:
      "JobFinder Dashboard was built to address the friction in navigating modern employment boards. The application provides an intuitive, high-performance user interface featuring real-time keyword search, location and salary filtering, job bookmarking, and seamless REST API data consumption.",
    status: "Completed",
    role: "Frontend Developer",
    techStack: ["React", "TypeScript", "Tailwind CSS", "REST API", "Lucide React"],
    keyFeatures: [
      "Dynamic search and multi-criteria filtering (role, location, job type)",
      "RESTful API integration for real-time job listings",
      "Local bookmarking and application tracking state",
      "Fully responsive and mobile-optimized user interface",
      "Accessible design with keyboard navigation support",
    ],
    image: "/images/projects/jobfinder.svg",
    demoUrl: "https://jobfinder-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/defriandev/jobfinder-dashboard",
    featured: true,
  },
  {
    slug: "data-management-dashboard",
    title: "Data Management Dashboard",
    tagline: "Interactive Analytics & CRUD Management Suite",
    description:
      "An administrative dashboard providing real-time data visualization, full CRUD operations, database integration, and business metrics analytics.",
    longDescription:
      "This dashboard application serves as a centralized management tool for business data administration. It enables operators to visualize key performance indicators, perform create-read-update-delete records securely, and monitor time-series metric graphs with a high-contrast minimalist interface.",
    status: "Completed",
    role: "Frontend Developer",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "SQL", "REST API"],
    keyFeatures: [
      "Interactive data visualizations and metrics graphs",
      "Comprehensive CRUD operations with modal workflows",
      "Relational database integration and query handling",
      "Real-time data sorting, pagination, and search",
      "Role-based UI state handling and feedback toasts",
    ],
    image: "/images/projects/data-management.svg",
    demoUrl: "https://data-management-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/defriandev/data-management-dashboard",
    featured: true,
  },
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
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
