"use client";

import { Logo, MoonIcon, SunIcon } from "@/icons";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@/contexts";
import { MenuOpenContext } from "@/contexts/MenuOpenContext";
import { HamburgerMenu } from "./HamburgerMenu";
import anime from "animejs";
import { TransitionLink } from "@/components/utils/TransitionLink";

export const Header: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { isMenuOpen } = useContext(MenuOpenContext);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    anime({
      targets: "header",
      translateY: [-100, 0],
      easing: "easeOutExpo",
      duration: 1000,
    })
  }, []);

  return (
    <header
      className={`w-full h-[64px] md:h-[80px] flex justify-between items-center px-[24px] md:px-[60px] z-30 fixed backdrop-blur-[3px] ${
        isMenuOpen ? "bg-transparent" : "bg-black/10 dark:bg-white/10"
      }`}
    >
      <TransitionLink href={"/"}>
        <Logo className="h-[32px] md:h-[48px] fill-dark-blue dark:fill-rose" />
      </TransitionLink>
      <HamburgerMenu />
      <div onClick={toggleTheme} className="cursor-pointer">
        <SunIcon className="hidden dark:block h-[32px] md:h-[48px]" />
        <MoonIcon className="block dark:hidden h-[32px] md:h-[48px]" />
      </div>
    </header>
  );
};
