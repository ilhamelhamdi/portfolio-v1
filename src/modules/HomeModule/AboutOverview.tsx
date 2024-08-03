import Link from "next/link";

export const AboutOverview: React.FC = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="w-[800px]">
        <p className="flex flex-col gap-y-6 text-[32px] text-black dark:text-white">
          <span>Hi, Hamdi here.</span>
          <span>
            I am a software engineer, specializing in building frontend
            websites, who constantly seeks out innovative solutions to everyday
            problems.
          </span>
          <span>For whatever reason it is you are here, welcome.</span>
        </p>
        <Link
          href="/about"
          className="text-[48px] font-bold text-tosca dark:text-salmon mt-10"
        >
          About Me
        </Link>
      </div>
    </section>
  );
};
