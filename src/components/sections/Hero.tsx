import React from "react";
import { ArrowDown, Download, MapPin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Frontend & Software Engineering Roles</span>
          </div>

          {/* Subheading / Name Identity */}
          <div className="flex items-center gap-2 text-sm md:text-base font-medium text-blue-600 mb-4 tracking-tight">
            <span>Defrian Bagus Dewanta Putra</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">Frontend Developer</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Building Digital Experiences with{" "}
            <span className="text-blue-600 underline decoration-blue-200 decoration-wavy decoration-2 underline-offset-8">
              Modern Web
            </span>{" "}
            Technologies.
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8">
            I&apos;m a Frontend Developer focused on building responsive, accessible,
            and user-friendly web applications with clean architecture and scalable code.
          </p>

          {/* Quick Context Chips */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-500 mb-10">
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-slate-400" />
              <span>D4 Teknik Informatika, Universitas Airlangga</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>Indonesia</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-12">
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              icon={<ArrowDown className="w-4 h-4" />}
              iconPosition="right"
            >
              View My Projects
            </Button>
            <Button
              href="/cv/Defrian_Bagus_Dewanta_Putra_CV.pdf"
              variant="outline"
              size="lg"
              icon={<Download className="w-4 h-4" />}
              iconPosition="left"
              download
            >
              Download CV
            </Button>
          </div>

          {/* Social Links & Trust Indicator */}
          <div className="pt-8 border-t border-slate-200/80 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Connect
              </span>
              <a
                href="https://github.com/defrian"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 rounded-lg transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/defrian"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 hover:text-blue-600 border border-slate-200 rounded-lg transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="text-xs text-slate-500 font-mono">
              Next.js 16 • React 19 • TypeScript
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

