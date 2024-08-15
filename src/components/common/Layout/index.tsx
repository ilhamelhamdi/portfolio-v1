"use client";

import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext, useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { LayoutProps } from "./interface";
import { Menu } from "../Menu";
import { SplashScreen } from "../SplashScreen";
import { TransitionScreen } from "../TransitionScreen";
import { PointerFollower } from "../PointerFollower";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [isLaunching, setLaunching] = useState(true);

  return (
    <div className={theme + " min-h-screen -z-20"}>
      {isLaunching ? (
        <SplashScreen finishLoading={() => setLaunching(false)} />
      ) : (
        <>
          <Menu />
          <Header />
          {children}
          <Footer />
          <TransitionScreen />
          <PointerFollower/>
        </>
      )}
      <div className="noise z-10" />
    </div>
  );
};
