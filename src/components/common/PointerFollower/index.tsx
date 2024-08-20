"use client";

import { ThemeContext } from "@/contexts";
import { useContext, useEffect, useState } from "react";

export const PointerFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      animationFrameId = requestAnimationFrame(() => {
        setPosition({ x: clientX, y: clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        className="fixed h-full w-full z-[0] top-0 left-0 pointer-events-none"
        style={{
          background: `radial-gradient(250px at ${position.x}px ${
            position.y
          }px, ${
            theme === "light" ? "rgba(47,101,104,0.2)" : "rgba(229,126,94,0.2)"
          }, transparent 100%)`,
        }}
      ></div>
      <div
        id="dot-pointer"
        className="hidden lg:block h-3 w-3 rounded-full bg-tosca dark:bg-salmon fixed z-[99] pointer-events-none"
        style={{ top: `${position.y - 10}px`, left: `${position.x}px` }}
      ></div>
    </>
  );
};
