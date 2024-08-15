import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const useScrollReveal = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sr = ScrollReveal();
    sr.reveal(".scroll-reveal", {
      origin: "bottom",
      distance: "150%",
      duration: 1000,
      viewOffset: { top: 0 },
    });
    return () => sr.clean(".scroll-reveal");
  }, []);
};

export default useScrollReveal;