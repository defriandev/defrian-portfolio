"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProjectImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  fallbackSrc,
  alt,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, 800px",
  className,
  priority = false,
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      quality={95}
      sizes={sizes}
      loading={priority ? undefined : "lazy"}
      priority={priority}
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
      className={className}
    />
  );
};
