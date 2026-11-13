import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TIMELINE_ITEMS } from "@/data/experience";
import { GraduationCap, Briefcase, Users, Calendar, MapPin } from "lucide-react";

export const Experience: React.FC = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-4 h-4 text-blue-600" />;
      case "experience":
        return <Briefcase className="w-4 h-4 text-emerald-600" />;
      case "organization":
        return <Users className="w-4 h-4 text-indigo-600" />;
      default:
        return <Briefcase className="w-4 h-4 text-blue-600" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "education":
        return "Education";
      case "experience":
        return "Practical Internship (PKL)";
      case "organization":
        return "Organization";
      default:
        return "Experience";
    }
  };

  return (
    <section id="experience" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Experience & Education"
          title="Background & Milestones."
          description="Academic foundation, practical internship experience (PKL), and collaborative organizational activities in informatics and software development."
        />

        <div className="relative border-l border-slate-200 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {TIMELINE_ITEMS.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-slate-300 group-hover:border-blue-600 flex items-center justify-center transition-colors">
                <span className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-blue-600 transition-colors" />
              </div>

              {/* Card Container */}
              <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-5 sm:p-6 transition-all duration-200 hover:border-slate-300 hover:bg-white hover:shadow-xs">
                {/* Header metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-white border border-slate-200 text-slate-700">
                    {getTypeIcon(item.type)}
                    <span>{getTypeLabel(item.type)}</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Title and Organization */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600 font-medium mt-0.5 mb-4">
                  <span>{item.organization}</span>
                  {item.location && (
                    <>
                      <span className="text-slate-300">•</span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {item.location}
                      </span>
                    </>
                  )}
                </div>

                {/* Bullet points description */}
                <ul className="space-y-2 mb-4 text-xs sm:text-sm text-slate-600 list-disc list-outside ml-4 leading-relaxed">
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>

                {/* Relevant technologies */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="pt-3 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
