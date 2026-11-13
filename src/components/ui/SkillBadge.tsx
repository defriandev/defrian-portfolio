import React from "react";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  category?: string;
  icon?: React.ReactNode;
  className?: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({
  name,
  category,
  icon,
  className,
}) => {
  return (
    <div
      className={cn(
        "group inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-slate-800 bg-white border border-slate-200/90 rounded-lg shadow-xs hover:border-blue-400 hover:text-blue-700 hover:shadow-sm transition-all duration-200",
        className
      )}
    >
      {icon && (
        <span className="text-slate-500 group-hover:text-blue-600 transition-colors">
          {icon}
        </span>
      )}
      <span>{name}</span>
      {category && (
        <span className="text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-blue-500 ml-1">
          {category}
        </span>
      )}
    </div>
  );
};

