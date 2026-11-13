"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, Check, Copy, ArrowUpRight, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "defrian.dev@gmail.com";

  const handleCopyEmail = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Contact"
            title="Let's Build Something Together."
            description="Whether you have an upcoming project, an engineering opening, or just want to connect, feel free to reach out."
          />
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start" staggerDelay={0.12}>
          {/* Main Contact Card */}
          <StaggerItem className="md:col-span-7">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-300">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-medium text-emerald-700 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to Frontend Developer Opportunities
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Direct Communication
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                I am actively seeking Frontend Developer roles and collaborations. 
                The fastest way to reach me is via email or LinkedIn.
              </p>

              {/* Email Box with One-Click Copy & Micro-interaction */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 transition-colors hover:border-blue-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 text-blue-600 shadow-2xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Email Address</span>
                    <span className="text-sm sm:text-base font-semibold text-slate-900 font-mono">
                      {email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-all active:scale-95 cursor-pointer shadow-2xs"
                    aria-label="Copy email address"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.span
                          key="copied"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          className="inline-flex items-center gap-1.5"
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 font-semibold">Copied!</span>
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          className="inline-flex items-center gap-1.5"
                        >
                          <Copy className="w-3.5 h-3.5 text-slate-500" />
                          <span>Copy</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>

                  <Button
                    href={`mailto:${email}?subject=Inquiry%20from%20Portfolio`}
                    variant="primary"
                    size="sm"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                    iconPosition="right"
                  >
                    Send Email
                  </Button>
                </div>
              </div>

              <p className="text-xs text-slate-500">
                ⚡ Typical response time: Within 24 hours on business days.
              </p>
            </div>
          </StaggerItem>

          {/* Social Profiles & Channels */}
          <StaggerItem className="md:col-span-5 space-y-4">
            {/* GitHub Card */}
            <a
              href="https://github.com/defriandev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-900 text-white group-hover:scale-105 transition-transform duration-200 shadow-xs">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    GitHub Profile
                  </h4>
                  <p className="text-xs text-slate-500">@defriandev • Code repositories & contributions</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/defrian"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#0A66C2] text-white group-hover:scale-105 transition-transform duration-200 shadow-xs">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    LinkedIn Network
                  </h4>
                  <p className="text-xs text-slate-500">Professional profile & background</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Quick Consultation / Chat Note */}
            <div className="p-5 bg-blue-50/70 border border-blue-200/60 rounded-xl hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-blue-900 uppercase tracking-wide">
                    Hiring Managers & HR
                  </h5>
                  <p className="text-xs text-blue-800/80 mt-1 leading-relaxed">
                    Looking for a dedicated Frontend Developer ready to create impact? I am open to full-time, contract, and internship opportunities.
                  </p>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};
