import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { PROJECTS, CERTIFICATES } from "@/data/portfolio";
import { getPrimaryProjectImage, getAvailableCertificates } from "@/lib/assets";

export default function Home() {
  const primaryImages = Object.fromEntries(
    PROJECTS.map((project) => [project.slug, getPrimaryProjectImage(project)])
  );
  const availableCertificates = getAvailableCertificates(CERTIFICATES);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-700">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects primaryImages={primaryImages} />
        <Experience certificates={availableCertificates} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
