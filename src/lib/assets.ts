import fs from "node:fs";
import path from "node:path";
import { CertificateItem, Project, ProjectScreenshot } from "@/types";

export function publicAssetExists(relativePath: string): boolean {
  const cleanPath = relativePath.replace(/^\/+/, "");
  const fullPath = path.join(process.cwd(), "public", cleanPath);
  return fs.existsSync(fullPath);
}

export function getAvailableScreenshots(project: Project): ProjectScreenshot[] {
  return project.screenshots.filter((shot) => publicAssetExists(shot.src));
}

export function getPrimaryProjectImage(project: Project): {
  src: string;
  alt: string;
  width: number;
  height: number;
  isFallback: boolean;
} {
  const available = getAvailableScreenshots(project);
  if (available.length > 0) {
    return {
      src: available[0].src,
      alt: available[0].alt,
      width: available[0].width,
      height: available[0].height,
      isFallback: false,
    };
  }

  return {
    src: project.fallbackImage,
    alt: `${project.title} preview illustration`,
    width: 800,
    height: 450,
    isFallback: true,
  };
}

export function getAvailableCertificates(
  certificates: CertificateItem[]
): CertificateItem[] {
  return certificates.filter((cert) => publicAssetExists(cert.image));
}
