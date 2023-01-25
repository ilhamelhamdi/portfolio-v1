import { ThemeContext } from "@/common/contexts"
import { Logo, MoonIcon, SunIcon } from "@/common/icons"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"

export const Header: React.FC = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <header className="w-full h-[100px] bg-black/10 dark:bg-white/5 flex justify-between items-center px-[60px]">
            <Link href={"/"}>
                <Logo className="fill-dark-blue dark:fill-rose"/>
            </Link>
            <div className="flex flex-col space-y-2">
                <div className="block w-[96px] h-[6px] bg-dark-blue dark:bg-rose"></div>
                <div className="block w-[96px] h-[6px] bg-dark-blue dark:bg-rose"></div>
            </div>
            <div onClick={toggleTheme} className="cursor-pointer">
                <SunIcon className="hidden dark:block" />
                <MoonIcon className="block dark:hidden" />
            </div>
        </header>
    )
}
