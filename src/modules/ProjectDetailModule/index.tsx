import { PROJECTS } from "@/constants/projects";
import { ProjectInfo } from "./ProjectInfo";

interface ProjectDetailModuleProps {
  slug: string;
}

const ProjectDetailModule:React.FC<ProjectDetailModuleProps> = (props) => {
  const project = PROJECTS.find(project => project.slug === props.slug);
  if (!project) {
    return <div>Project not found</div>
  }

  return <>
    <ProjectInfo project={project} />
  </>
}

export default ProjectDetailModule;