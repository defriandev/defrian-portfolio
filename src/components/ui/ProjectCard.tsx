import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  const statusStyles = {
    Completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "In Progress": "bg-amber-50 text-amber-700 border-amber-200",
    Planned: "bg-slate-50 text-slate-600 border-slate-200",
  };

  return (
    <article
      className={cn(
        "group relative flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-md",
        className
      )}
    >
      {/* Card Header & Status */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        <div className="flex items-center justify-between gap-3 mb-4">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border",
              statusStyles[project.status]
            )}
          >
            <span
              className={cn(
                "w-1.5 h-1.5 rounded-full",
                project.status === "Completed"
                  ? "bg-emerald-500"
                  : project.status === "In Progress"
                  ? "bg-amber-500"
                  : "bg-slate-400"
              )}
            />
            {project.status}
          </span>

          <span className="text-xs text-slate-500 font-medium">{project.role}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          <Link href={`/projects/${project.slug}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {project.title}
          </Link>
        </h3>

        {/* Tagline */}
        <p className="mt-1 text-sm font-medium text-slate-500">{project.tagline}</p>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-600 line-clamp-3 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-block px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer with Links */}
      <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between z-10">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
        >
          View Case Study
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              className="p-1.5 text-slate-500 hover:text-slate-900 transition-colors rounded-md hover:bg-slate-200/60"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${project.title}`}
              className="p-1.5 text-slate-500 hover:text-blue-600 transition-colors rounded-md hover:bg-slate-200/60"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
