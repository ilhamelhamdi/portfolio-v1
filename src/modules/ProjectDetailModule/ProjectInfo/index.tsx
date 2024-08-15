import { Project } from "@/models/project";
import { ProjectInfoItem } from "./ProjectInfoItem";
import Link from "next/link";

interface ProjectInfoProps {
  project: Project;
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => {
  return (
    <section className="h-screen container max-w-screen-lg mx-auto px-6 flex flex-col justify-center gap-y-4">
      <h1 className="text-8xl font-bold text-dark-blue dark:text-salmon">{project.title}</h1>
      <ProjectInfoItem title="Year" value={project.year} />
      <ProjectInfoItem title="Description" value={project.description} />
      <ProjectInfoItem
        title="Tech Stack"
        value={project.techStack.join(", ")}
      />
      {project.role && <ProjectInfoItem title="Role" value={project.role} />}
      {project.collaborator && (
        <ProjectInfoItem
          title="Collaborator"
          value={project.collaborator
            .map((c) => <Link href={c.github} target="__blank" key={c.github}>{c.name}</Link>)
            .join()}
        />
      )}
    </section>
  );
};
