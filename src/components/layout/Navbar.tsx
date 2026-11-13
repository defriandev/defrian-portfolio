"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy based on elements on current page
      const sections = NAV_ITEMS.map((item) => item.href.replace(/^\/?#/, ""));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with micro-interaction */}
          <Link
            href="/#home"
            className="group flex items-center gap-1.5 text-lg font-bold tracking-tight text-slate-900 focus:outline-none"
          >
            <motion.span
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="w-2.5 h-2.5 rounded-sm bg-blue-600 inline-block"
            />
            <span>Defrian</span>
            <span className="text-blue-600 font-mono text-sm">.dev</span>
          </Link>

          {/* Desktop Navigation with Animated Active Indicator */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace(/^\/?#/, "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200",
                    isActive
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-blue-50/90 rounded-lg -z-10"
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1 text-xs font-semibold px-3.5 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all shadow-xs active:scale-95 will-change-transform"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform active:scale-95 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown with AnimatePresence */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden mt-3 pt-3 pb-4 px-2 bg-white/95 backdrop-blur-lg border border-slate-200 rounded-xl shadow-lg"
            >
              <nav className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const sectionId = item.href.replace(/^\/?#/, "");
                  const isActive = activeSection === sectionId;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "px-4 py-2.5 text-sm font-medium rounded-lg transition-colors",
                        isActive
                          ? "text-blue-600 bg-blue-50"
                          : "text-slate-700 hover:bg-slate-100"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="pt-2 mt-2 border-t border-slate-100 px-2">
                  <Link
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full inline-flex items-center justify-center gap-1.5 text-sm font-medium px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get in Touch
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
