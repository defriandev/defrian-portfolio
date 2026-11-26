import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, ArrowUpRight, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { CONTACT_INFO } from "@/data/portfolio";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const Contact: React.FC = () => {
  const email = CONTACT_INFO.email;

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
                Open for Internship
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Direct Communication
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                I am actively seeking a Frontend Developer internship for next semester. 
                The fastest way to reach me is via email,{" "}
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  WhatsApp
                </a>
                , or LinkedIn.
              </p>

              {/* Email Box with One-Click Copy */}
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
                  <CopyEmailButton email={email} />

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
              href={CONTACT_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-900 text-white group-hover:scale-105 transition-transform duration-200 shadow-xs">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    GitHub Profile
                  </h3>
                  <p className="text-xs text-slate-600">{CONTACT_INFO.githubHandle} • Code repositories &amp; contributions</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={CONTACT_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group active:scale-[0.99]"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#0A66C2] text-white group-hover:scale-105 transition-transform duration-200 shadow-xs">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    LinkedIn Network
                  </h3>
                  <p className="text-xs text-slate-600">Professional profile &amp; background</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Quick Consultation / Chat Note */}
            <div className="p-5 bg-blue-50/70 border border-blue-200/60 rounded-xl hover:border-blue-300 transition-colors">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold text-blue-900 uppercase tracking-wide">
                    Internship Inquiries &amp; WhatsApp
                  </h3>
                  <p className="text-xs text-blue-800/80 mt-1 leading-relaxed">
                    Looking for a Frontend Developer intern next semester? Reach out via email or message me directly on{" "}
                    <a
                      href={CONTACT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline hover:text-blue-950"
                    >
                      WhatsApp ({CONTACT_INFO.whatsappDisplay})
                    </a>
                    .
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
