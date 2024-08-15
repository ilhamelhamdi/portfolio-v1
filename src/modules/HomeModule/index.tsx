"use client";

import { AboutOverview } from "./AboutOverview";
import { FeaturedProjects } from "./FeaturedProjects";
import { HeroSection } from "./HeroSection";

export const HomeModule: React.FC = () => {
  return (
    <main className="z-0">
      <HeroSection />
      <AboutOverview />
      <FeaturedProjects />
    </main>
  );
};
