import { createContext, useState } from "react";
import { Theme, ThemeContextInter, ThemeProviderProps } from "./interface";

const initialTheme: ThemeContextInter = {
    theme: "light",
    setTheme: (theme: Theme) => { }
}

export const ThemeContext = createContext<ThemeContextInter>(initialTheme)

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme.theme)
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}