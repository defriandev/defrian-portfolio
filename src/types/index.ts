export interface NavItem {
  label: string;
  href: string;
}

export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
  device?: "desktop" | "mobile";
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  status: ProjectStatus;
  role: string;
  techStack: string[];
  keyFeatures: string[];
  /** Case study structured sections (optional; renders TODO if omitted) */
  problem?: string;
  keyFrontendDecisions?: string[];
  challenges?: string;
  result?: string;
  liveUrl?: string;
  repoUrl?: string;
  screenshots: ProjectScreenshot[];
  fallbackImage: string;
  featured: boolean;
}

export type SkillCategory = "Frontend" | "Tools" | "Additional";

export interface SkillItem {
  name: string;
  description: string;
}

export interface SkillGroup {
  category: SkillCategory;
  description: string;
  skills: SkillItem[];
}

export type ExperienceType = "education" | "experience" | "organization";

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location?: string;
  period: string;
  type: ExperienceType;
  description: string[];
  technologies?: string[];
}

export interface CertificateItem {
  id: string;
  name: string;
  issuer: string;
  issuedDate: string;
  credentialId?: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}

export interface ContactInfo {
  email: string;
  whatsappUrl: string;
  whatsappDisplay: string;
  githubUrl: string;
  githubHandle: string;
  linkedinUrl: string;
}
