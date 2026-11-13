import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  align = "left",
  className,
}) => {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        isCentered ? "text-center mx-auto items-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase text-blue-700 bg-blue-50 border border-blue-200/60 rounded-full",
            isCentered ? "mx-auto" : ""
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          {badge}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 text-base sm:text-lg text-slate-600 leading-relaxed",
            isCentered ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

