"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProjectImageProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  fallbackSrc,
  alt,
  width,
  height,
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
