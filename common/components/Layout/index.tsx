import { ThemeContext } from "@/common/contexts/ThemeContext"
import { useContext, useEffect } from "react"
import { Footer } from "../Footer";
import { Header } from "../Header";
import { LayoutProps } from "./interface"

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={theme + " min-h-screen"}>
            <Header />
            {children}
            <Footer />
            <div className="noise"/>
        </div>
    )
}