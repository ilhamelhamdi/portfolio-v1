import { LetterAnimation } from "@/components/utils/LetterAnimation";
import { TransitionLink } from "@/components/utils/TransitionLink";

export const AboutOverview: React.FC = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="container lg:max-w-screen-lg px-8">
        <p className="flex flex-col gap-y-4 lg:gap-y-6 text-body-big text-black dark:text-white">
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
          className="block text-button font-bold text-tosca dark:text-salmon mt-4 lg:mt-10"
        >
          <LetterAnimation
            text="About Me"
            withUnderline={true}
            className="after:bg-tosca dark:after:bg-salmon"
          />
        </TransitionLink>
      </div>
    </section>
  );
};
