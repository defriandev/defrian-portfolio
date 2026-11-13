import { SkillCategory } from "@/types";

export interface SkillGroup {
  category: SkillCategory;
  description: string;
  skills: {
    name: string;
    level?: string;
    description: string;
  }[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    description: "Core technologies used to build responsive, performant, and interactive user interfaces.",
    skills: [
      { name: "TypeScript", description: "Type-safe development for scalable frontend applications" },
      { name: "React", description: "Component-driven architecture and modern state management" },
      { name: "Next.js", description: "App Router, SSR, SSG, and full-stack React capabilities" },
      { name: "Tailwind CSS", description: "Utility-first design system and responsive styling" },
      { name: "JavaScript", description: "ES6+ standards, async operations, and DOM manipulation" },
      { name: "HTML5", description: "Semantic markup and accessibility (a11y) standards" },
      { name: "CSS3", description: "Flexbox, Grid layout, and fluid CSS animations" },
    ],
  },
  {
    category: "Tools",
    description: "Development tools and platforms utilized for workflow automation, version control, and deployment.",
    skills: [
      { name: "Git", description: "Version control, branching strategy, and code history" },
      { name: "GitHub", description: "Collaborative development, pull requests, and CI/CD" },
      { name: "VS Code", description: "Primary IDE configured with linting and formatting tooling" },
      { name: "Vercel", description: "Production deployments, serverless functions, and preview environments" },
    ],
  },
  {
    category: "Additional",
    description: "Supporting technologies and competencies covering backend communication, data, and design.",
    skills: [
      { name: "REST API", description: "Client-side API consumption, error handling, and data caching" },
      { name: "UI/UX Design", description: "Wireframing, prototyping, and user-centric interface design" },
      { name: "Figma", description: "Component library mapping and design handoff" },
      { name: "Python", description: "Scripting, machine learning fundamentals, and backend logic" },
      { name: "SQL", description: "Relational database querying and data modeling basics" },
    ],
  },
];

