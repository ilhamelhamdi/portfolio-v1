"use client";

import Image from "next/image";
import { ProjectCardProps } from "./interface";
import TiltCard from "@/components/utils/TiltCard";
import Link from "next/link";
import classNames from "classnames";
import { LetterAnimation } from "@/components/utils/LetterAnimation";
import useScrollReveal from "@/hooks/useScrollReveal";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isOdd,
  className,
}) => {
  useScrollReveal();
  return (
    <div
      className={classNames("mt-8 relative flex", {
        "justify-end": !isOdd,
        "justify-start": isOdd,
      })}
    >
      <div
        className={classNames(
          "w-[55%] z-10 absolute inset-y-0 flex flex-col gap-y-4 max-w-[80%]",
          { "left-0": !isOdd, "right-0 text-right items-end": isOdd }
        )}
      >
        <Link
          href={"/"}
          className="text-[48px] text-tosca dark:text-salmon font-bold hover:underline w-fit tracking-wide"
        >
          <LetterAnimation
            text={project.title}
            withUnderline={true}
            className="after:bg-tosca dark:after:bg-salmon"
          />
        </Link>
        <p className="text-xl text-black dark:text-white p-4 bg-white/10 shadow-xl backdrop-blur border border-white tracking-wide scroll-reveal">
          {project.description}
        </p>
        <div className="text-xl font-medium text-dark-blue dark:text-rose max-w-[80%] tracking-wider scroll-reveal">
          {project.techStack.join("  ·  ")}
        </div>
      </div>
      <div className="w-[55%] hover:z-20 scroll-reveal">
        <TiltCard className="drop-shadow-xl">
          <Image
            src={project.images[0].src}
            height={project.images[0].height}
            width={project.images[0].width}
            alt={project.images[0].alt}
            className="w-full z-30 filter grayscale hover:filter-none transition-all duration-100"
          ></Image>
        </TiltCard>
      </div>
    </div>
  );
};
