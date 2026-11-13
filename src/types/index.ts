export interface NavItem {
  label: string;
  href: string;
}

export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  status: ProjectStatus;
  techStack: string[];
  keyFeatures: string[];
  role: string;
  demoUrl?: string;
  githubUrl?: string;
  image: string;
  featured: boolean;
}

export type SkillCategory = "Frontend" | "Tools" | "Additional";

export interface SkillItem {
  name: string;
  category: SkillCategory;
  description?: string;
  icon?: string;
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

