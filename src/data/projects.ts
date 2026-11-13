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
    image: "/images/projects/jobfinder.png",
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
    image: "/images/projects/data-management.png",
    demoUrl: "https://data-management-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/defriandev/data-management-dashboard",
    featured: true,
  },
  {
    slug: "aquarecommend-ai",
    title: "AquaRecommend AI",
    tagline: "AI-Powered Aquaculture Monitoring & Disease Recommendation",
    description:
      "An intelligent recommendation system integrating Python machine learning models to assess water quality metrics and diagnose freshwater fish diseases.",
    longDescription:
      "AquaRecommend AI bridges artificial intelligence and practical aquaculture management. The system processes water parameter inputs (pH, temperature, dissolved oxygen) and diagnostic observations to recommend corrective aquaculture actions and disease treatment protocols.",
    status: "In Progress",
    role: "Frontend & Integration Developer",
    techStack: ["Python", "Machine Learning", "React", "Tailwind CSS", "REST API"],
    keyFeatures: [
      "Machine learning inference API integration for disease prediction",
      "Water quality parameters scoring and alert thresholds",
      "Interactive diagnosis questionnaire and symptom assessment",
      "Actionable recommendations for pond maintenance and treatment",
      "Clear status reporting for active model training and refinement",
    ],
    image: "/images/projects/aquarecommend.png",
    demoUrl: undefined, // Currently in progress
    githubUrl: "https://github.com/defriandev/aquarecommend-ai",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

