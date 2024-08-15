"use client";

import Link from "next/link";
import React, { useContext, useRef } from "react";
import { MENU_ITEMS } from "./constant";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { MenuOpenContext } from "@/contexts/MenuOpenContext";
import { LetterAnimation } from "../../utils/LetterAnimation";
import { TransitionLink } from "@/components/utils/TransitionLink";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Menu: React.FC = () => {
  const { isMenuOpen, setMenuOpen } = useContext(MenuOpenContext);
  const pathname = usePathname();
  const navRef = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.fromTo(
  //       ".menu-nav",
  //       { y: 20, opacity: 0, scrollTrigger: { trigger: ".menu-nav" } },
  //       { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
  //     );
  //   },
  //   { scope: navRef, dependencies: [] }
  // );

  const formatTwoDigits = (num: number) => num.toString().padStart(2, "0");
  return (
    <div
      className={classNames(
        "h-screen w-screen bg-cream dark:bg-dark-blue fixed z-20 flex flex-col items-center justify-center transition-all duration-300",
        { "top-0": isMenuOpen, "-top-full": !isMenuOpen }
      )}
    >
      <nav ref={navRef} id="menu" className="font-clash flex flex-col">
        {MENU_ITEMS.map((item, index) => (
          <TransitionLink
            href={item.url}
            key={item.title}
            onClick={() => {
              setMenuOpen(false);
            }}
            className={classNames("menu-nav py-2 flex items-end", {
              "dark:text-salmon text-dark-blue": pathname === item.url,
              "dark:text-rose text-tosca": pathname !== item.url,
            })}
          >
            <span className="inline-block text-2xl md:text-4xl mb-4 mr-4">
              {formatTwoDigits(index + 1)}
            </span>
            <span className="text-5xl md:text-8xl font-semibold flex items-end">
              <LetterAnimation
                text={item.title}
                withUnderline
                className={classNames({
                  "after:dark:bg-salmon after:bg-dark-blue":
                    pathname === item.url,
                  "after:dark:bg-rose after:bg-tosca": pathname !== item.url,
                })}
              />
            </span>
          </TransitionLink>
        ))}
      </nav>
      <section
        className={classNames("flex flex-col items-center fixed bottom-12", {
          hidden: !isMenuOpen,
        })}
      >
        <span className="text-lg md:text-3xl dark:text-white text-black">
          Want to start a project?
        </span>
        <Link
          href="mailto:ilham.abdillah.alhamdi@gmail.com"
          className="text-3xl md:text-5xl font-semibold text-dark-blue dark:text-salmon"
        >
          Let&apos;s Talk
        </Link>
      </section>
    </div>
  );
};
