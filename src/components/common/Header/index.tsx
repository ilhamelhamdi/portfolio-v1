import { Logo, MoonIcon, SunIcon } from "@/icons";
import Link from "next/link";
import { useContext } from "react";
import { HeaderProps } from "./interface";
import { ThemeContext } from "@/contexts";

export const Header: React.FC<HeaderProps> = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    props.toggleMenu();
  };

  return (
    <header
      className={`w-full h-[64px] md:h-[80px] flex justify-between items-center px-[24px] md:px-[60px] z-30 fixed ${
        props.isMenuOpen ? "bg-transparent" : "bg-black/5 dark:bg-white/5"
      }`}
    >
      <Link href={"/"}>
        <Logo className="fill-dark-blue dark:fill-rose h-[32px] md:h-[48px]" />
      </Link>
      <div
        className="flex flex-col space-y-2 cursor-pointer"
        onClick={toggleMenu}
      >
        <div className="block w-[48px] md:w-[96px] h-[2px] md:h-[6px] bg-dark-blue dark:bg-rose"></div>
        <div className="block w-[48px] md:w-[96px] h-[2px] md:h-[6px] bg-dark-blue dark:bg-rose"></div>
      </div>
      <div onClick={toggleTheme} className="cursor-pointer">
        <SunIcon className="hidden dark:block h-[32px] md:h-[48px]" />
        <MoonIcon className="block dark:hidden h-[32px] md:h-[48px]" />
      </div>
    </header>
  );
};
