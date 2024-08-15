import { ProjectCard } from "@/components";
import { PROJECTS } from "@/constants/projects";

export const ProjectsModule: React.FC = () => {
  return (
    <main className="container max-w-screen-lg mx-auto pt-[64px] md:pt-[80px] flex flex-col gap-y-20">
      <h1 className="font-bold text-[120px] text-dark-blue dark:text-rose text-center">Projects</h1>
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
