import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  primaryImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  primaryImage,
  className,
}) => {
  const statusStyles = {
    Completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "In Progress": "bg-amber-50 text-amber-700 border-amber-200",
    Planned: "bg-slate-50 text-slate-600 border-slate-200",
  };

  const imageSrc = primaryImage?.src || project.fallbackImage;
  const imageAlt = primaryImage?.alt || `${project.title} preview`;
  const imageWidth = primaryImage?.width || 800;
  const imageHeight = primaryImage?.height || 450;

  return (
    <article
      className={cn(
        "group relative flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200/80 hover:shadow-lg hover:shadow-blue-500/5",
        className
      )}
    >
      {/* Project Thumbnail Image */}
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title} case study`}
        className="block relative aspect-video w-full bg-slate-100 overflow-hidden border-b border-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
      >
        <ProjectImage
          src={imageSrc}
          fallbackSrc={project.fallbackImage}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </Link>

      {/* Card Header: Frontend Role first, then Status */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="text-xs text-blue-700 bg-blue-50 border border-blue-200/70 px-2.5 py-1 rounded-full font-semibold">
            {project.role}
          </span>

          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border transition-colors",
              statusStyles[project.status]
            )}
          >
            <span
              className={cn(
                "w-1.5 h-1.5 rounded-full",
                project.status === "Completed"
                  ? "bg-emerald-500"
                  : project.status === "In Progress"
                  ? "bg-amber-500 animate-pulse"
                  : "bg-slate-400"
              )}
            />
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          <Link
            href={`/projects/${project.slug}`}
            className="focus-visible:outline-none focus-visible:underline"
          >
            {project.title}
          </Link>
        </h3>

        {/* Tagline */}
        <p className="mt-1 text-sm font-medium text-slate-600">{project.tagline}</p>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-600 line-clamp-3 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech Stack Chips (Frontend ordered first) */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="inline-block px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-md group-hover:bg-slate-200/60 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer with Case Study, GitHub, and conditional Live Demo Links */}
      <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-2 z-10">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
        >
          <span>View Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${project.title}`}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200/80 rounded-md transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.title}`}
              className="p-1.5 text-slate-600 hover:text-slate-900 transition-all rounded-md hover:bg-slate-200/60 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
