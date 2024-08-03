import { ProjectCardProps } from "@/components/projects/ProjectCard/interface";
import exampleImage from "../../../public/assets/images/tautin-1.png"
import { ProjectCard } from "@/components/projects/ProjectCard";
import Link from "next/link";
import { Project } from "@/models/project";

const PROJECTS: Project[] = [
  {
    title: "Tautin",
    description:
      "A platform for people to share their thoughts and opinions about various topics.",
    techStack: ["Next.js", "Tailwind CSS", "Firebase"],
    images: [{
      src: exampleImage,
      height: 400,
      width: 400,
      alt: "Tautin",
    }],
  },
  {
    title: "Tautin",
    description:
      "A platform for people to share their thoughts and opinions about various topics.",
    techStack: ["Next.js", "Tailwind CSS", "Firebase"],
    images: [{
      src: exampleImage,
      height: 400,
      width: 400,
      alt: "Tautin",
    }],
  },
];

export const FeaturedProjects: React.FC = () => {
  return (
    <section className="container mx-auto max-w-screen-lg z-20">
      <h2 className="text-[120px] font-bold text-dark-blue dark:text-rose text-center leading-none">
        Featured Projects
      </h2>
      <div className="flex flex-col mt-[120px] gap-y-16">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} isOdd={ idx % 2 !== 0} />
        ))}
      </div>
      <div className="flex justify-center items-center my-16">
        <Link href='/projects' className="font-bold text-3xl text-tosca dark:text-salmon text-center">View More</Link>
      </div>
    </section>
  );
};
