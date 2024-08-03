import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext, useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { LayoutProps } from "./interface";
import { Menu } from "../Menu";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className={theme + " min-h-screen"}>
      <Menu isOpen={isMenuOpen} />
      <Header isMenuOpen={isMenuOpen} toggleMenu={() => setMenuOpen(!isMenuOpen)} />
      {children}
      <Footer />
      <div className="noise" />
    </div>
  );
};
