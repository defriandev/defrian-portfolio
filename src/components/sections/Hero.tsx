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
          <div className="mb-8 animate-hero-item" style={{ animationDelay: "0ms" }}>
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700 shadow-2xs hover:border-slate-300 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open for Internship</span>
            </div>
          </div>

          {/* Subheading / Name Identity */}
          <div
            className="flex items-center gap-2 text-sm md:text-base font-medium text-blue-600 mb-4 tracking-tight animate-hero-item"
            style={{ animationDelay: "60ms" }}
          >
            <span>Defrian Bagus Dewanta Putra</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">Frontend Developer</span>
          </div>

          {/* Main Editorial Headline (LCP element - paints immediately) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6 animate-hero-lcp">
            Frontend Developer Building{" "}
            <span className="text-blue-600 underline decoration-blue-200 decoration-wavy decoration-2 underline-offset-8">
              Web Applications
            </span>{" "}
            with React &amp; Next.js.
          </h1>

          {/* Description */}
          <p
            className="max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 animate-hero-item"
            style={{ animationDelay: "120ms" }}
          >
            D4 Teknik Informatika student at Universitas Airlangga (GPA 3.03/4.00) with
            internship experience building 8+ LMS features in React and shipping web
            projects with TypeScript and Next.js.
          </p>

          {/* Quick Context Chips */}
          <div
            className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-500 mb-10 animate-hero-item"
            style={{ animationDelay: "180ms" }}
          >
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
          <div
            className="flex flex-wrap items-center gap-3.5 mb-12 animate-hero-item"
            style={{ animationDelay: "220ms" }}
          >
            <Button
              href="/#projects"
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
          <div
            className="pt-8 border-t border-slate-200/80 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-hero-item"
            style={{ animationDelay: "260ms" }}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Connect
              </span>
              <a
                href="https://github.com/defriandev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 rounded-lg transition-all duration-150 hover:scale-[1.03] active:scale-95"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/defrian"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 hover:text-blue-600 border border-slate-200 rounded-lg transition-all duration-150 hover:scale-[1.03] active:scale-95"
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
