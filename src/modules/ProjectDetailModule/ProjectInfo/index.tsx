import { Project } from "@/models/project";
import React from "react";
import { ProjectInfoItem } from "./ProjectInfoItem";
import Link from "next/link";
import { LetterAnimation } from "@/components/utils/LetterAnimation";

export interface ProjectInfoItemProps {
  project: Project;
}

export const ProjectInfo: React.FC<ProjectInfoItemProps> = ({ project }) => {
  return (
    <section className="min-h-screen container max-w-screen-lg mx-auto px-6 pt-24 flex flex-col justify-start gap-y-4">
      <h1 className="text-title font-bold text-dark-blue dark:text-salmon">
        <LetterAnimation text={project.title} />
      </h1>
      {project.demo && (
        <ProjectInfoItem title="Demo">
          <Link href={project.demo} className="">
            {project.demo}
          </Link>
        </ProjectInfoItem>
      )}
      {project.github && (
        <ProjectInfoItem title="Github Repo">
          <Link href={project.github} className="">
            {project.github}
          </Link>
        </ProjectInfoItem>
      )}
      <ProjectInfoItem title="Year">{project.year}</ProjectInfoItem>
      <ProjectInfoItem title="Description">
        {project.description}
      </ProjectInfoItem>
      <ProjectInfoItem title="Tech Stack">
        {project.techStack.join(", ")}
      </ProjectInfoItem>
      {project.role && (
        <ProjectInfoItem title="Role">{project.role}</ProjectInfoItem>
      )}
      {project.collaborator && (
        <ProjectInfoItem title="Collaborator">
          {project.collaborator.map((c, index) => (
            <React.Fragment key={c.github}>
              <Link href={c.github} target="__blank">
                {c.name}
              </Link>
              {index < project.collaborator!.length - 1 && ", "}
            </React.Fragment>
          ))}
        </ProjectInfoItem>
      )}
    </section>
  );
};
