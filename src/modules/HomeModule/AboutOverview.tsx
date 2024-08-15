"use client";

import { LetterAnimation } from "@/components/utils/LetterAnimation";
import { TransitionLink } from "@/components/utils/TransitionLink";
import useScrollReveal from "@/hooks/useScrollReveal";

export const AboutOverview: React.FC = () => {
  useScrollReveal();

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="w-[800px]">
        <p className="flex flex-col gap-y-6 text-[32px] text-black dark:text-white">
          <span className="scroll-reveal">Hi, Hamdi here.</span>
          <span className="scroll-reveal">
            I am a software engineer, specializing in building frontend
            websites, who constantly seeks out innovative solutions to everyday
            problems.
          </span>
          <span className="scroll-reveal">
            For whatever reason it is you are here, welcome.
          </span>
        </p>
        <TransitionLink
          href="/about"
          className="block text-[48px] font-bold text-tosca dark:text-salmon mt-10"
        >
          <LetterAnimation text="About Me" withUnderline={true} className="after:bg-tosca dark:after:bg-salmon"/>
        </TransitionLink>
      </div>
    </section>
  );
};
