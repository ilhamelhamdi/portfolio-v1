"use client";

import { LogoCompostion } from "@/icons";
import anime from "animejs/lib/anime.es";
import { useEffect } from "react";

interface SplashScreenProps {
  finishLoading?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = (props) => {
  const animate = () => {
    const animation = anime.timeline({ complete: props.finishLoading });

    animation.add({
      targets: "#logo-splash-screen",
      opacity: [0, 1],
      easing: "easeInQuad",
      duration: 50,
    });

    animation.add({
      targets: "#logo-splash-screen path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function (el, i) {
        return i * 50;
      },
      direction: "reverse",
    });

    animation.add({
      targets: "#logo-splash-screen path",
      fill: "#f4ede6", // cream
      duration: 300,
      easing: "linear",
      endDelay: 600,
    });

    animation.add({
      targets: "#background-splash-screen",
      opacity: 0,
      duration: 300,
      easing: "easeInQuad",
      endDelay: 200,
    });
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <div
      id="background-splash-screen"
      className="fixed h-screen w-screen bg-cream dark:bg-dark-blue flex justify-center items-center"
    >
      <div id="logo-splash-screen" className="opacity-0">
        <LogoCompostion
          backgroundClass="fill-dark-blue dark:fill-cream"
          foregroundClass="stroke-cream dark:stroke-dark-blue stroke-[6px]"
          className="h-[100px] sm:h-[180px] md:h-[240px]"
        />
      </div>
    </div>
  );
};
