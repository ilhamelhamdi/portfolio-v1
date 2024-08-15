import anime from "animejs";
import { useEffect } from "react";

export const HeroSection: React.FC = () => {
  useEffect(() => {
    anime
      .timeline({ loop: false })
      .add(animateTitleText())
      .add(animateRoleText())
      .add(animateDescriptionText(), "-=500");
  }, []);

  const animateTitleText = () => {
    return {
      targets: ".hamdi-hero-text",
      translateX: ["-100vw", 0], // Start off-screen to the left and move to original position
      easing: "easeOutElastic(1, .8)",
      duration: 1000,
      delay: anime.stagger(50, {start: 1000}), // Stagger the animation for each letter
    };
  };

  const animateRoleText = () => {
    let roleTextWrapper = document.querySelectorAll(".role-hero-text");
    roleTextWrapper.forEach((el) => {
      el.innerHTML = el.textContent!.replace(
        /\S/g,
        "<span class='inline-block'>$&</span>"
      );
    });

    return {
      targets: ".role-hero-text span",
      translateY: ["1.1em", 0],
      duration: 500,
      delay: (el: Element, i: number) => 50 * i,
    };
  };

  const animateDescriptionText = () => {
    return {
      targets: "#description-hero-text",
      translateY: ["1.1em", 0],
      opacity: [0, 1],
      duration: 500,
      easing: "easeOutExpo",
    };
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="font-bold text-[240px] leading-[320px] text-dark-blue dark:text-rose flex gap-x-4 relative">
        <span className="hamdi-hero-text -translate-x-[100vw]">h</span>
        <span className="hamdi-hero-text relative top-[40px] -translate-x-[100vw]">
          a
        </span>
        <span className="hamdi-hero-text relative bottom-[24px] -translate-x-[100vw]">
          m
        </span>
        <span className="hamdi-hero-text relative top-[24px] -translate-x-[100vw]">
          d
        </span>
        <span className="hamdi-hero-text relative bottom-[16px] -translate-x-[100vw]">
          i
        </span>
      </div>
      <div className="text-[64px] text-tosca dark:text-salmon tracking-wider">
        <span className="role-hero-text inline-block overflow-hidden whitespace-nowrap mr-6">
          I am a
        </span>
        <span className="role-hero-text inline-block overflow-hidden whitespace-nowrap font-bold">
          Software Engineer.
        </span>
      </div>
      <div className="w-[900px] flex justify-end mt-12">
        <p
          id="description-hero-text"
          className="w-[400px] text-right text-[24px] font-medium tracking-wide dark:text-white"
        >
          Available for part-time roles or freelance projects remotely
        </p>
      </div>
    </section>
  );
};
