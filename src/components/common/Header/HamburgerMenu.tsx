import { MenuOpenContext } from "@/contexts/MenuOpenContext";
import anime from "animejs";
import { useContext } from "react";

export const HamburgerMenu: React.FC = () => {
  const { isMenuOpen, setMenuOpen } = useContext(MenuOpenContext);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const onOpenMenu = () => {
    anime({
      targets: "#hamburger-top",
      rotate: "225deg",
      translateY: "-8px",
      duration: 1500,
    });
    anime({
      targets: "#hamburger-bottom",
      rotate: "-225deg",
      translateY: "8px",
      duration: 1500,
    });
  };

  const onCloseMenu = () => {
    anime({
      targets: "#hamburger-top",
      rotate: "0deg",
      translateY: "0px",
    });
    anime({
      targets: "#hamburger-bottom",
      rotate: "0deg",
      translateY: "0px",
    });
  };

  isMenuOpen ? onOpenMenu() : onCloseMenu();

  return (
    <div
      className="flex flex-col cursor-pointer space-y-2"
      onClick={toggleMenu}
    >
      <div
        id="hamburger-top"
        className="block w-[48px] md:w-[72px] h-[2px] md:h-[4px] bg-dark-blue dark:bg-rose"
      ></div>
      <div
        id="hamburger-bottom"
        className="block w-[48px] md:w-[72px] h-[2px] md:h-[4px] bg-dark-blue dark:bg-rose"
      ></div>
    </div>
  );
};
