import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2, ShieldCheck, Layers } from "lucide-react";
import { PROJECTS, getProjectBySlug } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Defrian.dev",
    };
  }

  return {
    title: `${project.title} | Case Study — Defrian.dev`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Defrian Bagus Dewanta Putra`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const statusStyles = {
    Completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "In Progress": "bg-amber-50 text-amber-700 border-amber-200",
    Planned: "bg-slate-50 text-slate-600 border-slate-200",
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back button */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all projects</span>
            </Link>
          </div>

          {/* Project Header */}
          <header className="mb-10 pb-8 border-b border-slate-200">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[project.status]}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {project.status}
              </span>

              <span className="text-xs text-slate-500 font-medium">
                Role: {project.role}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              {project.tagline}
            </p>

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center gap-3.5 mt-6">
              {project.demoUrl ? (
                <Button
                  href={project.demoUrl}
                  variant="primary"
                  size="md"
                  icon={<ExternalLink className="w-4 h-4" />}
                  iconPosition="right"
                  target="_blank"
                >
                  Live Demo
                </Button>
              ) : (
                <span className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  Live demo unavailable during active model development
                </span>
              )}

              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  variant="outline"
                  size="md"
                  icon={<GithubIcon className="w-4 h-4" />}
                  iconPosition="left"
                  target="_blank"
                >
                  Source Code
                </Button>
              )}
            </div>
          </header>

          {/* Project Details Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Narrative Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Detailed Overview */}
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-blue-600" />
                  Project Overview
                </h2>
                <p className="text-slate-600 leading-relaxed text-base">
                  {project.longDescription || project.description}
                </p>
              </section>

              {/* Key Features & Functional Modules */}
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  Key Implementations & Features
                </h2>
                <div className="space-y-3">
                  {project.keyFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl"
                    >
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-sm text-slate-700 font-medium leading-normal">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technical Architecture Note */}
              <section className="p-6 bg-slate-50/70 border border-slate-200 rounded-2xl">
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  Architecture & Engineering Focus
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Engineered with emphasis on component modularity, strict TypeScript typing,
                  responsive mobile behavior, and resilient asynchronous REST API state management.
                </p>
              </section>
            </div>

            {/* Sidebar Column: Tech Specs */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-5 sm:p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  Technical Specifications
                </h3>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-slate-500 font-medium block mb-1">
                      Role & Responsibility
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      {project.role}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-500 font-medium block mb-1">
                      Project Status
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      {project.status}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-500 font-medium block mb-2">
                      Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-md shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Callout */}
              <div className="bg-blue-50/80 border border-blue-200/70 rounded-2xl p-5">
                <h4 className="text-sm font-bold text-blue-900 mb-1">Interested in this project?</h4>
                <p className="text-xs text-blue-800/80 mb-3 leading-relaxed">
                  I would be glad to discuss the technical tradeoffs and architectural choices made during implementation.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900 underline underline-offset-4"
                >
                  Discuss this project &rarr;
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
