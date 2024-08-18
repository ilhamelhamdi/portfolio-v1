"use client";
import { ProjectCard } from "@/components";
import { PROJECTS } from "@/constants/projects";
import useScrollReveal from "@/hooks/scrollReveal/useScrollReveal";

export const ProjectsModule: React.FC = () => {
  useScrollReveal();
  return (
    <main className="container max-w-screen-lg mx-auto px-8 pt-[64px] md:pt-[80px] flex flex-col gap-y-8 md:gap-y-12 lg:gap-y-20 mb-20">
      <h1 className="scroll-reveal font-bold text-title text-dark-blue dark:text-rose text-center">
        Projects
      </h1>
      {PROJECTS.map((project, idx) => (
        <ProjectCard
          key={project.title}
          project={project}
          isOdd={idx % 2 !== 0}
        />
      ))}
    </main>
  );
};
