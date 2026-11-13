import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data/projects";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Projects"
          title="Engineered with Purpose."
          description="A selection of web applications showcasing frontend architecture, API integration, interactive data visualizations, and modern design implementations."
        />

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Transparency note regarding project statuses */}
        <div className="mt-12 p-4 bg-white border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
            <span>
              All project metrics and statuses are actively maintained. Ongoing initiatives are explicitly marked as <strong>In Progress</strong>.
            </span>
          </div>
          <a
            href="https://github.com/defrian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium shrink-0"
          >
            Explore all repositories on GitHub &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
