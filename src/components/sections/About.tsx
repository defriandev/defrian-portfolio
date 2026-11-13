import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Code2, Compass, Layout, Sparkles } from "lucide-react";

export const About: React.FC = () => {
  const principles = [
    {
      icon: <Layout className="w-5 h-5 text-blue-600" />,
      title: "User-Centric Architecture",
      description:
        "Building interfaces with clean component hierarchies, clear visual rhythm, and intuitive user experiences.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-blue-600" />,
      title: "Clean & Maintainable Code",
      description:
        "Writing type-safe, modular, and documented TypeScript code following modern React standards.",
    },
    {
      icon: <Compass className="w-5 h-5 text-blue-600" />,
      title: "Continuous Exploration",
      description:
        "Constantly refining skills in modern web technologies, UI engineering, and full-stack integration.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-blue-600" />,
      title: "Attention to Detail",
      description:
        "Ensuring smooth micro-interactions, responsive adaptability across devices, and accessible markup.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Bridging Design and Engineering."
          description="A dedicated Frontend Developer with an academic background in Informatics and a passion for crafting polished digital experiences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 leading-relaxed text-base sm:text-lg">
            <p>
              Hello! I&apos;m <strong className="text-slate-900 font-semibold">Defrian Bagus Dewanta Putra</strong>, 
              a Frontend Developer from Indonesia pursuing a degree in{" "}
              <span className="text-slate-900 font-medium">D4 Teknik Informatika at Universitas Airlangga</span>.
            </p>
            <p>
              My journey in software development began with a curiosity for how design, data, and code converge to 
              deliver seamless human interactions on the web. Over the course of my academic and practical projects, 
              I have focused on mastering modern JavaScript/TypeScript ecosystems, specifically{" "}
              <span className="text-blue-600 font-medium">React, Next.js, and Tailwind CSS</span>.
            </p>
            <p>
              I take pride in translating complex functional requirements into clean, intuitive, and responsive 
              user interfaces. Beyond frontend code, I also appreciate working with backend APIs, database structures, 
              and design tools like Figma to ensure cohesive product development.
            </p>
            <p className="text-slate-700 font-medium pt-2">
              My career aspiration is to contribute as a Frontend / Software Engineer in an environment that values 
              code quality, user empathy, and forward-thinking engineering standards.
            </p>
          </div>

          {/* Core Values / Focus Areas Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {principles.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-white border border-slate-200/80 rounded-xl shadow-xs hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-blue-50 border border-blue-100/60">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-normal pl-11">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
