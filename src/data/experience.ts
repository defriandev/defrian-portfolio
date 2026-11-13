import { TimelineItem } from "@/types";

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "edu-unair",
    title: "D4 Teknik Informatika (Applied Bachelor in Informatics)",
    organization: "Universitas Airlangga",
    location: "Surabaya, Indonesia",
    period: "Undergraduate Studies",
    type: "education",
    description: [
      "Focused on software engineering principles, frontend and web application development, algorithms, and data structures.",
      "Completed hands-on practical coursework in modern programming paradigms, database systems, and UI/UX design fundamentals.",
      "Collaborated on multidisciplinary team projects developing functional software solutions.",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Python", "SQL", "Tailwind CSS"],
  },
  {
    id: "pkl-experience",
    title: "Frontend Developer Intern (Praktik Kerja Lapangan / PKL)",
    organization: "Industry Practical Apprenticeship (PKL)",
    location: "Indonesia",
    period: "Academic Internship",
    type: "experience",
    description: [
      "Collaborated in translating user interfaces and business requirements into responsive web components.",
      "Assisted in frontend bug fixes, styling consistency improvements, and REST API consumption.",
      "Worked in Git-driven team environments following standard branching and code review practices.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Git", "REST API"],
  },
  {
    id: "org-involvement",
    title: "Student Organization & Departmental Activities",
    organization: "Himpunan / Informatics Student Community, Universitas Airlangga",
    location: "Surabaya, Indonesia",
    period: "Active Member",
    type: "organization",
    description: [
      "Participated in technology seminars, departmental workshops, and collaborative academic initiatives.",
      "Engaged in technical knowledge sharing with peers in web design and programming fundamentals.",
    ],
    technologies: ["Teamwork", "Public Speaking", "Project Planning"],
  },
];
