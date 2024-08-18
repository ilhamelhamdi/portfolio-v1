import Image from "next/image";
import { ProjectCardProps } from "./interface";
import TiltCard from "@/components/utils/TiltCard";
import classNames from "classnames";
import { LetterAnimation } from "@/components/utils/LetterAnimation";
import { TransitionLink } from "@/components/utils/TransitionLink";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isOdd,
  className,
}) => {
  const title = (
    <TransitionLink
      href={`projects/${project.slug}`}
      className="text-button text-tosca dark:text-salmon font-bold hover:underline w-fit tracking-wide"
    >
      <LetterAnimation
        text={project.title}
        withUnderline={true}
        className="after:bg-tosca dark:after:bg-salmon"
      />
    </TransitionLink>
  );

  return (
    <div
      className={classNames(
        "mt-8 relative flex flex-col md:flex-row max-w-[480px] md:max-w-none mx-auto md:mx-0",
        {
          "md:justify-end": !isOdd,
          "md:justify-start": isOdd,
        }
      )}
    >
      <div className="block md:hidden mb-4">{title}</div>
      <TransitionLink
        href={`projects/${project.slug}`}
        className="md:w-[55%] hover:z-20 scroll-reveal"
      >
        <TiltCard className="drop-shadow-xl">
          <Image
            src={project.images[0].src}
            height={project.images[0].height}
            width={project.images[0].width}
            alt={project.images[0].alt}
            className="w-full z-30 filter grayscale hover:filter-none transition-all duration-100"
          ></Image>
        </TiltCard>
      </TransitionLink>
      <div
        className={classNames(
          "md:w-[55%] mt-4 md:mt-0 z-10 md:absolute md:inset-y-0 flex flex-col gap-y-2 lg:gap-y-4 md:max-w-[80%]",
          {
            "md:left-0": !isOdd,
            "md:right-0 md:text-right md:items-end": isOdd,
          }
        )}
      >
        <div className="hidden md:block">{title}</div>
        <p className="text-body text-black dark:text-white p-4 bg-white/10 shadow-xl backdrop-blur border border-white tracking-wide scroll-reveal">
          {project.description}
        </p>
        <div className="text-body font-medium text-dark-blue dark:text-rose lg:max-w-[80%] tracking-wider scroll-reveal">
          {project.techStack.join("  ·  ")}
        </div>
      </div>
    </div>
  );
};
