import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Layers,
  UserCheck,
  AlertCircle,
  Wrench,
  Trophy,
  Link2,
} from "lucide-react";
import { PROJECTS, getProjectBySlug } from "@/data/portfolio";
import { getAvailableScreenshots, getPrimaryProjectImage } from "@/lib/assets";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/Icons";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Case Study — Defrian.dev`,
      description: project.description,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const primaryImage = getPrimaryProjectImage(project);
  const availableScreenshots = getAvailableScreenshots(project);

  const hasRealText = (value?: string): value is string =>
    Boolean(
      value &&
        value.trim().length > 0 &&
        !value.trim().toUpperCase().startsWith("TODO")
    );

  const realFrontendDecisions = (project.keyFrontendDecisions ?? []).filter(
    (decision) => hasRealText(decision)
  );

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
          <ScrollReveal delay={0.05} duration={0.4}>
            <div className="mb-8">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to all projects</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Project Header: Frontend Role first */}
          <ScrollReveal delay={0.1} duration={0.5}>
            <header className="mb-10 pb-8 border-b border-slate-200">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/80">
                  {project.role}
                </span>

                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${statusStyles[project.status]}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {project.status}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                {project.title}
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
                {project.tagline}
              </p>

              {/* Actions Bar: Live Demo (only if present) + GitHub */}
              <div className="flex flex-wrap items-center gap-3.5 mt-6">
                {project.liveUrl && (
                  <Button
                    href={project.liveUrl}
                    variant="primary"
                    size="md"
                    icon={<ExternalLink className="w-4 h-4" />}
                    iconPosition="right"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                )}

                {project.repoUrl && (
                  <Button
                    href={project.repoUrl}
                    variant="outline"
                    size="md"
                    icon={<GithubIcon className="w-4 h-4" />}
                    iconPosition="left"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                  </Button>
                )}
              </div>
            </header>
          </ScrollReveal>

          {/* Primary Project Preview Image */}
          <ScrollReveal delay={0.12} duration={0.5}>
            <div className="mb-12 relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-50">
              <ProjectImage
                src={primaryImage.src}
                fallbackSrc={project.fallbackImage}
                alt={primaryImage.alt}
                width={primaryImage.width}
                height={primaryImage.height}
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
                className="w-full h-full object-cover object-top"
              />
            </div>
          </ScrollReveal>

          {/* Project Details Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main Narrative Column (Structured Case Study) */}
            <div className="lg:col-span-8 space-y-8">
              {/* 1. Role */}
              <ScrollReveal delay={0.14}>
                <section>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-blue-600" />
                    Role &amp; Overview
                  </h2>
                  <p className="text-sm font-semibold text-blue-700 mb-2">
                    {project.role}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {project.longDescription || project.description}
                  </p>
                </section>
              </ScrollReveal>

              {/* 2. Problem (only rendered when filled with real text) */}
              {hasRealText(project.problem) && (
                <ScrollReveal delay={0.16}>
                  <section className="p-5 bg-slate-50/70 border border-slate-200/80 rounded-xl">
                    <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600" />
                      Problem
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {project.problem}
                    </p>
                  </section>
                </ScrollReveal>
              )}

              {/* 3. Key Frontend Decisions (only rendered when filled with real text) */}
              {realFrontendDecisions.length > 0 && (
                <ScrollReveal delay={0.18}>
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-blue-600" />
                      Key Frontend Decisions
                    </h2>
                    <ul className="space-y-2.5 list-disc list-outside ml-5 text-sm text-slate-700">
                      {realFrontendDecisions.map((decision, idx) => (
                        <li key={idx}>{decision}</li>
                      ))}
                    </ul>
                  </section>
                </ScrollReveal>
              )}

              {/* Implemented Features */}
              {project.keyFeatures.length > 0 && (
                <ScrollReveal delay={0.19}>
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      Implemented Features
                    </h2>
                    <div className="space-y-3">
                      {project.keyFeatures.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl hover:border-slate-300 transition-colors"
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
                </ScrollReveal>
              )}

              {/* 4. Challenges (only rendered when filled with real text) */}
              {hasRealText(project.challenges) && (
                <ScrollReveal delay={0.2}>
                  <section className="p-5 bg-slate-50/70 border border-slate-200/80 rounded-xl">
                    <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-slate-700" />
                      Challenges
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {project.challenges}
                    </p>
                  </section>
                </ScrollReveal>
              )}

              {/* 5. Result (only rendered when filled with real text) */}
              {hasRealText(project.result) && (
                <ScrollReveal delay={0.22}>
                  <section className="p-5 bg-slate-50/70 border border-slate-200/80 rounded-xl">
                    <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-emerald-600" />
                      Result
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {project.result}
                    </p>
                  </section>
                </ScrollReveal>
              )}

              {/* Screenshot Gallery (2-3 desktop/mobile images if available in public/images/projects/) */}
              {availableScreenshots.length > 0 && (
                <ScrollReveal delay={0.24}>
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">
                      Screenshots
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {availableScreenshots.map((shot) => (
                        <figure
                          key={shot.src}
                          className="bg-slate-50 border border-slate-200/80 rounded-xl overflow-hidden"
                        >
                          <ProjectImage
                            src={shot.src}
                            fallbackSrc={project.fallbackImage}
                            alt={shot.alt}
                            width={shot.width}
                            height={shot.height}
                            sizes="(max-width: 640px) 100vw, 440px"
                            className="w-full h-auto object-cover"
                          />
                          {shot.caption && (
                            <figcaption className="px-3.5 py-2.5 text-xs text-slate-600 border-t border-slate-200/60">
                              {shot.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  </section>
                </ScrollReveal>
              )}
            </div>

            {/* Sidebar Column: Tech Stack & Links */}
            <aside className="lg:col-span-4 space-y-6">
              <ScrollReveal delay={0.2}>
                <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-5 sm:p-6">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 pb-2 border-b border-slate-200">
                    Tech Stack &amp; Details
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <span className="text-xs text-slate-600 font-medium block mb-1">
                        Role
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {project.role}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs text-slate-600 font-medium block mb-1">
                        Status
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {project.status}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs text-slate-600 font-medium block mb-2">
                        Tech Stack
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

                    <div className="pt-3 border-t border-slate-200/80">
                      <span className="text-xs text-slate-600 font-medium flex items-center gap-1.5 mb-2">
                        <Link2 className="w-3.5 h-3.5" />
                        Links
                      </span>
                      <div className="flex flex-col gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-between px-3 py-2 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200/80 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                          >
                            <span>GitHub Repository</span>
                            <GithubIcon className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Contact Callout */}
              <ScrollReveal delay={0.25}>
                <div className="bg-blue-50/80 border border-blue-200/70 rounded-2xl p-5 hover:border-blue-300 transition-colors">
                  <h2 className="text-sm font-bold text-blue-900 mb-1">Interested in this project?</h2>
                  <p className="text-xs text-blue-800/80 mb-3 leading-relaxed">
                    Feel free to reach out to discuss the frontend implementation or source code.
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
                  >
                    Discuss this project &rarr;
                  </Link>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
