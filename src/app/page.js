import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Menu from "./components/Menu";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {//
  return (
    <main className="flex min-h-screen flex-col bg-[#011747e8]">
      <div className="container mx-auto px-12 py-6">
      <Menu />
      <HeroSection />
      <AboutSection />
      <ProjectsSection/>
      <ContactSection/>
      </div>
    </main>
  );
}
