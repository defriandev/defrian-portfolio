import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILL_GROUPS } from "@/data/skills";
import { Code, Wrench, Layers } from "lucide-react";

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Code className="w-5 h-5 text-blue-600" />;
      case "Tools":
        return <Wrench className="w-5 h-5 text-blue-600" />;
      default:
        return <Layers className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Tools & Technologies."
          description="A curated overview of my frontend specializations, developer tooling, and complementary software engineering capabilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="flex flex-col bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 sm:p-7 hover:border-slate-300 hover:shadow-xs transition-all duration-200"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  {getCategoryIcon(group.category)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{group.category}</h3>
                  <span className="text-xs text-blue-600 font-medium">
                    {group.skills.length} Technologies
                  </span>
                </div>
              </div>

              {/* Category Description */}
              <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                {group.description}
              </p>

              {/* Skills List with Modern Editorial Badges */}
              <div className="flex-1 space-y-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 bg-white border border-slate-200/80 rounded-xl hover:border-blue-300 hover:shadow-xs transition-all duration-150 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 leading-normal">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
