import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Code2, Compass, Layout, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

export const About: React.FC = () => {
  const principles = [
    {
      icon: <Layout className="w-5 h-5 text-blue-600" />,
      title: "Component Architecture",
      description:
        "Structuring reusable React and Next.js UI components with TypeScript for maintainable frontend codebases.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-blue-600" />,
      title: "API & Data Integration",
      description:
        "Connecting frontend interfaces with REST APIs, Go backends, PostgreSQL/Prisma, and IndexedDB storage.",
    },
    {
      icon: <Compass className="w-5 h-5 text-blue-600" />,
      title: "Bug Investigation & Git Flow",
      description:
        "Collaborating via Git pull requests and tracing cross-layer application bugs alongside QA and backend teams.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-blue-600" />,
      title: "Team & Org Leadership",
      description:
        "Leading an 8-member student division and coordinating orientation programs for 135 incoming students.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="About Me"
            title="Background & Focus."
            description="Informatics undergraduate at Universitas Airlangga focused on frontend development with React, Next.js, and TypeScript."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Narrative Column */}
          <ScrollReveal delay={0.1} className="lg:col-span-7 space-y-5 text-slate-600 leading-relaxed text-base sm:text-lg">
            <p>
              Hello! I&apos;m <strong className="text-slate-900 font-semibold">Defrian Bagus Dewanta Putra</strong>, 
              a Frontend Developer and{" "}
              <span className="text-slate-900 font-medium">D4 Teknik Informatika student at Universitas Airlangga</span>{" "}
              (expected graduation 2027, GPA 3.03/4.00).
            </p>
            <p>
              During my internship at <span className="text-slate-900 font-medium">PT Kuanta Prima Indonesia</span>, 
              I worked in a 7-person team to build more than 8 features for an LMS web application, including dashboards, 
              assessment forms, report cards, and a principal dashboard, while integrating{" "}
              <span className="text-blue-600 font-medium">React</span> interfaces with Go backend APIs.
            </p>
            <p>
              Across personal and academic projects such as POS-KOPIKU, AestheticCRM, Jelajah Trip, and Studio Web Showcase, 
              I focus on building functional web interfaces with{" "}
              <span className="text-blue-600 font-medium">React, Next.js, TypeScript, and Tailwind CSS</span>, 
              alongside handling Git pull requests and debugging.
            </p>
            <p className="text-slate-700 font-medium pt-2">
              I am currently open for a Frontend Developer internship next semester to contribute to production 
              web applications and grow within an engineering team.
            </p>
          </ScrollReveal>

          {/* Core Values / Focus Areas Column */}
          <StaggerContainer className="lg:col-span-5 grid grid-cols-1 gap-4" staggerDelay={0.1}>
            {principles.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="p-5 bg-white border border-slate-200/80 rounded-xl shadow-xs hover:border-blue-200 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-100/60 group-hover:scale-105 transition-transform duration-200">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm sm:text-base group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-normal pl-11">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
