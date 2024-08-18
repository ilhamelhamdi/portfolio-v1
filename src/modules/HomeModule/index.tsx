"use client";
import useScrollReveal from "@/hooks/scrollReveal/useScrollReveal";
import { AboutOverview } from "./AboutOverview";
import { FeaturedProjects } from "./FeaturedProjects";
import { HeroSection } from "./HeroSection";

export const HomeModule: React.FC = () => {
  useScrollReveal();
  return (
    <main className="overflow-hidden z-0">
      <HeroSection />
      <AboutOverview />
      <FeaturedProjects />
    </main>
  );
};
