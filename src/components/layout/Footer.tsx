"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/#home"
              className="flex items-center gap-1.5 text-base font-bold tracking-tight text-slate-900"
            >
              <span className="w-2 h-2 rounded-sm bg-blue-600" />
              <span>Defrian</span>
              <span className="text-blue-600 font-mono text-xs">.dev</span>
            </Link>
            <p className="text-xs text-slate-500 mt-1">
              Defrian Bagus Dewanta Putra • Frontend Developer
            </p>
          </div>

          {/* Quick Section Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-slate-600">
            <Link href="/#home" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/#about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="/#skills" className="hover:text-blue-600 transition-colors">Skills</Link>
            <Link href="/#projects" className="hover:text-blue-600 transition-colors">Projects</Link>
            <Link href="/#experience" className="hover:text-blue-600 transition-colors">Experience</Link>
            <Link href="/#contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/defriandev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/defrian"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <Link
              href="/#home"
              aria-label="Scroll back to top"
              className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors ml-1"
            >
              <ArrowUp className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© 2026 Defrian Bagus Dewanta Putra. All rights reserved.</p>
          <p className="font-mono text-[11px] text-slate-500">
            Engineered with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
