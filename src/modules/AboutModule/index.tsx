"use client";
import useScrollReveal from "@/hooks/scrollReveal/useScrollReveal";
import { DetailAbout } from "./DetailAbout";
import { HeroAbout } from "./HeroAbout";

export const AboutModule: React.FC = () => {
  useScrollReveal();
  return (
    <main className="overflow-hidden">
      <HeroAbout />
      <DetailAbout />
    </main>
  );
};
