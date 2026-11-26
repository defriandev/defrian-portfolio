import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS, CONTACT_INFO } from "@/data/portfolio";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

interface PrimaryImageMap {
  [slug: string]: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

interface ProjectsProps {
  primaryImages?: PrimaryImageMap;
}

export const Projects: React.FC<ProjectsProps> = ({ primaryImages }) => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Projects"
            title="Selected Projects."
            description="Web applications built with React, Next.js, TypeScript, and Go/PostgreSQL integrations."
          />
        </ScrollReveal>

        {/* Project Grid with Staggered Entrance */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch" staggerDelay={0.12}>
          {PROJECTS.map((project) => (
            <StaggerItem key={project.slug} className="flex">
              <ProjectCard
                project={project}
                primaryImage={primaryImages?.[project.slug]}
                className="w-full"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Repository & Live Demo note */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 p-4 bg-white border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              <span>
                Source repositories are available on GitHub; live demos are linked where deployed.
              </span>
            </div>
            <a
              href={CONTACT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium shrink-0 inline-flex items-center gap-1 hover:translate-x-0.5 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              Explore all repositories on GitHub &rarr;
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
