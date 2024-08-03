export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="font-bold text-[240px] leading-[240px] text-dark-blue dark:text-rose flex gap-x-4">
        <span>h</span>
        <span>a</span>
        <span>m</span>
        <span>d</span>
        <span>i</span>
      </div>
      <div className="text-[64px] text-tosca dark:text-salmon tracking-wider">
        <span className="mr-6">I am a</span>
        <span className="font-bold">Software Engineer.</span>
      </div>
      <div className="w-[900px] flex justify-end mt-12">
        <p className="w-[400px] text-right text-[24px] font-medium tracking-wide dark:text-white">
          Available for part-time roles or freelance projects remotely
        </p>
      </div>
    </section>
  );
};
