"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Featured Projects"
            title="Engineered with Purpose."
            description="A selection of web applications showcasing frontend architecture, API integration, interactive data visualizations, and modern design implementations."
          />
        </ScrollReveal>

        {/* Project Grid with Staggered Entrance */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch" staggerDelay={0.12}>
          {PROJECTS.map((project) => (
            <StaggerItem key={project.slug} className="flex">
              <ProjectCard project={project} className="w-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Transparency note regarding project statuses */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 p-4 bg-white border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              <span>
                All project metrics and statuses are actively maintained. Ongoing initiatives are explicitly marked as <strong>In Progress</strong>.
              </span>
            </div>
            <a
              href="https://github.com/defriandev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium shrink-0 inline-flex items-center gap-1 hover:translate-x-0.5 transition-transform"
            >
              Explore all repositories on GitHub &rarr;
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
