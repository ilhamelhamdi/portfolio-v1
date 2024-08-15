import { ProjectCard } from "@/components/projects/ProjectCard";
import { LetterAnimation } from "@/components/utils/LetterAnimation";
import { PROJECTS } from "@/constants/projects";
import { TransitionLink } from "@/components/utils/TransitionLink";

export const FeaturedProjects: React.FC = () => {
  return (
    <section className="container mx-auto max-w-screen-lg z-20 px-6">
      <h2 className="text-[120px] font-bold text-dark-blue dark:text-rose text-center leading-none">
        <LetterAnimation text="Featured" />
        <LetterAnimation text="Projects" />
      </h2>
      <div className="flex flex-col mt-[120px] gap-y-16">
        {PROJECTS.slice(0, 3).map((project, idx) => (
          <ProjectCard key={idx} project={project} isOdd={idx % 2 !== 0} />
        ))}
      </div>
      <div className="flex justify-center items-center my-16">
        <TransitionLink
          href="/projects"
          className="font-bold text-3xl text-tosca dark:text-salmon text-center"
        >
          <LetterAnimation text="View More" withUnderline={true} className="after:bg-tosca after:dark:bg-salmon" />
        </TransitionLink>
      </div>
    </section>
  );
};
