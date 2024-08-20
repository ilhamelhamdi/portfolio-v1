import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useScrollReveal = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray<HTMLElement>(".scroll-reveal").forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 32,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            // markers: true,
          },
        }
      );
    });
  }, []);
};

export default useScrollReveal;
