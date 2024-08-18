"use client";

import { PROJECTS } from "@/constants/projects";
import Image from "next/image";
import { ProjectInfo } from "./ProjectInfo";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LetterAnimation } from "@/components/utils/LetterAnimation";
import { TransitionLink } from "@/components/utils/TransitionLink";

interface ProjectDetailModuleProps {
  slug: string;
}

const ProjectDetailModule: React.FC<ProjectDetailModuleProps> = (props) => {
  const project = PROJECTS.find((project) => project.slug === props.slug);
  const projectInfoRef = useRef<HTMLDivElement>(null);
  const projectImagesRef = useRef<HTMLDivElement>(null);

  const getNextProject = (currentSlug: string) => {
    const currentIndex = PROJECTS.findIndex(
      (project) => project.slug === currentSlug
    );
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    return PROJECTS[nextIndex];
  };

  const nextProject = getNextProject(props.slug);

  useGSAP(() => {
    if (!projectInfoRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(projectInfoRef.current, {
      opacity: 0,
      scale: 0.7,
      y: 64,
      scrollTrigger: {
        trigger: projectImagesRef.current,
        start: "top 70%",
        end: "top 10%",
        scrub: 1,
        onUpdate: (self) => {
          requestAnimationFrame(() => {
            projectInfoRef.current!.style.filter = `blur(${
              self.progress * 10
            }px)`;
          });
        },
      },
    });
  }, [projectInfoRef.current]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="pverflow-hidden">
      <div ref={projectInfoRef} className="sticky top-0">
        <ProjectInfo project={project} />
      </div>
      <section
        ref={projectImagesRef}
        className="container max-w-screen-lg mx-auto px-6 my-20 flex flex-col items-center gap-y-6"
      >
        {project.images.map((image, index) => (
          <Image
            key={index}
            {...image}
            alt={image.alt}
            className="w-full shadow-lg"
          />
        ))}
      </section>
      <section className="flex flex-col justify-center items-center my-20">
        <h2 className="text-button">NEXT PROJECT</h2>
        <TransitionLink
          href={`/projects/${nextProject.slug}`}
          className="text-subtitle font-bold text-dark-blue dark:text-salmon"
        >
          <LetterAnimation
            text={nextProject.title}
            withUnderline
            className="after:bg-dark-blue dark:after:bg-salmon justify-center"
          />
        </TransitionLink>
      </section>
    </main>
  );
};

export default ProjectDetailModule;
