import Link from "next/link";
import React from "react";
import { MENU_ITEMS } from "./constant";
import { usePathname } from "next/navigation";
import classNames from "classnames";

interface MenuItemProps {
  isOpen: boolean;
}

export const Menu: React.FC<MenuItemProps> = (props) => {
  const pathname = usePathname();

  if (!props.isOpen) return null;
  const formatTwoDigits = (num: number) => num.toString().padStart(2, "0");
  return (
    <div className="h-screen w-screen bg-cream dark:bg-dark-blue fixed z-20 flex flex-col items-center justify-center">
      <nav className="font-clash flex flex-col">
        {MENU_ITEMS.map((item, index) => (
          <Link
            href={item.url}
            key={item.title}
            className={classNames(
              "py-2",
              {
              "dark:text-salmon text-dark-blue": pathname === item.url,
              "dark:text-rose text-tosca": pathname !== item.url,
            })}
          >
            <span className="text-2xl md:text-4xl mr-4">{formatTwoDigits(index + 1)}</span>
            <span className="text-5xl md:text-8xl font-semibold tracking-wide">{item.title}</span>
          </Link>
        ))}
      </nav>
      <section className="flex flex-col items-center fixed bottom-12">
          <span className="text-lg md:text-3xl dark:text-white text-black">Want to start a project?</span>
          <Link href='mailto:ilham.abdillah.alhamdi@gmail.com' className="text-3xl md:text-5xl font-semibold text-dark-blue dark:text-salmon">Let&apos;s Talk</Link>
      </section>
    </div>
  );
};
