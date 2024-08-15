"use client";

import { LetterAnimation } from "@/components/utils/LetterAnimation";
import useScrollReveal from "@/hooks/useScrollReveal";

export const DetailAbout: React.FC = () => {
  useScrollReveal();
  const techStack = [
    "JavaScript (ES6++)",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "TailwindCSS",
    "Flutter",
    "Django",
    "Spring Boot",
    "NestJS",
    "ExpressJS",
    "PostgreSQL",
    "MongoDB",
  ];
  return (
    <section className="container mx-auto max-w-screen-md text-[32px] flex flex-col gap-y-[180px] tracking-wide dark:text-white mb-[150px]">
      <p className="scroll-reveal font-medium">
        I am a software engineer specializing in web development with a focus on
        frontend technologies.
      </p>
      <p className="scroll-reveal">
        My journey in the world of coding began in high school, where I
        discovered my love for technology and problem-solving. This passion led
        me to pursue a degree in Computer Science, where I&apos;ve honed my
        skills in various programming languages and frameworks.
      </p>
      <p className="scroll-reveal">
        Fast forward to today, I&apos;ve had privilege to work on different
        projects with many teams. My main focus today is to develop product
        solution with current technologies.
      </p>
      <p>
        <span className="scroll-reveal">
          Here are a few technology that I&apos;ve been working on my projects
          recently :
        </span>
        <ul className="grid grid-cols-2 list-disc mx-8 mt-4">
          {techStack.map((tech) => (
            <li key={tech} className="scroll-reveal">
              {tech}
            </li>
          ))}
        </ul>
      </p>
      <p className="scroll-reveal">
        For me each project is a new opportunity to learn new things, meet
        people with different ideas, and discover things about myself that I
        never knew.
      </p>
      <p className="scroll-reveal">
        I want to leave a positive mark behind me and create something impactful
        for people I work with.
      </p>
      <span className="font-bold text-[172px] text-dark-blue dark:text-rose">
        <LetterAnimation text="READY?" />
      </span>
      <p className="scroll-reveal">I can make your new project comes to life</p>
    </section>
  );
};
