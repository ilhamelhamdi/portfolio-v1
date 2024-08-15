import { PageTrasitionContext } from "@/contexts/PageTransitionContext";
import { Logo } from "@/icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext, useRef } from "react";

export const TransitionScreen: React.FC = () => {
  const { isTransitioning, setTransitioning } =
    useContext(PageTrasitionContext);
  const screenRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  const onTransitionEnd = () => {
    setTimeout(() => {
      setTransitioning(false);
    }, 500);
  };

  useGSAP(() => {
    if (!screenRef.current || !logoRef.current) return;

    if (isTransitioning) {
      gsap
        .timeline({ onComplete: onTransitionEnd })
        .fromTo(
          screenRef.current,
          { xPercent: -100, opacity: 1 },
          { xPercent: 0, duration: 0.3, ease: "power2.inOut" }
        )
        .fromTo(
          logoRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power2.inOut" }
        );
    } else {
      gsap.timeline().to(screenRef.current, {
        xPercent: 100,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isTransitioning]);

  return (
    <div
      id="background-transition-screen"
      ref={screenRef}
      className="fixed h-screen top-0 left-0 opacity-0 w-screen z-50 bg-dark-blue dark:bg-black flex justify-center items-center"
    >
      <div ref={logoRef} id="logo-transition-screen" className="opacity-0">
        <Logo className="fill-cream dark:fill-white h-[180px] md:h-[240px]"/>
      </div>
    </div>
  );
};
