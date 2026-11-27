"use client";

import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectScreenshot } from "@/types";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { cn } from "@/lib/utils";

interface ProjectGalleryCarouselProps {
  screenshots: ProjectScreenshot[];
  fallbackImage: string;
  projectTitle: string;
}

export const ProjectGalleryCarousel: React.FC<ProjectGalleryCarouselProps> = ({
  screenshots,
  fallbackImage,
  projectTitle,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const items: ProjectScreenshot[] =
    screenshots.length > 0
      ? screenshots
      : [
          {
            src: fallbackImage,
            alt: `${projectTitle} preview illustration`,
            width: 800,
            height: 450,
          },
        ];

  const total = items.length;
  const current = items[activeIndex] ?? items[0];

  const goTo = (index: number) => {
    setActiveIndex((index + total) % total);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || total <= 1) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const diff = touchStartX.current - endX;
    if (Math.abs(diff) > 40) {
      goTo(diff > 0 ? activeIndex + 1 : activeIndex - 1);
    }
    touchStartX.current = null;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (total <= 1) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(activeIndex - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(activeIndex + 1);
    }
  };

  return (
    <div
      className="mb-12"
      tabIndex={total > 1 ? 0 : undefined}
      onKeyDown={handleKeyDown}
      aria-roledescription={total > 1 ? "carousel" : undefined}
      aria-label={`${projectTitle} screenshots`}
    >
      <div
        className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-50 group"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <ProjectImage
          key={current.src}
          src={current.src}
          fallbackSrc={fallbackImage}
          alt={current.alt}
          width={current.width}
          height={current.height}
          sizes="(max-width: 1024px) 100vw, 896px"
          priority={activeIndex === 0}
          className="w-full h-full object-contain"
        />

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-slate-200/90 text-slate-700 hover:text-slate-900 shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-slate-200/90 text-slate-700 hover:text-slate-900 shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
          <p className="text-xs text-slate-600 font-medium">
            {current.caption || current.alt}
          </p>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Select screenshot">
              {items.map((item, idx) => (
                <button
                  key={item.src}
                  type="button"
                  role="tab"
                  aria-selected={idx === activeIndex}
                  aria-label={`View screenshot ${idx + 1} of ${total}`}
                  onClick={() => goTo(idx)}
                  className={cn(
                    "h-2 rounded-full transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600",
                    idx === activeIndex
                      ? "w-6 bg-blue-600"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  )}
                />
              ))}
            </div>
            <span className="text-xs font-mono text-slate-600">
              {activeIndex + 1} / {total}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
