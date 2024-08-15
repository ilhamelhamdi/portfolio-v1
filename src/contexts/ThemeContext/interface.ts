export type Theme = "dark" | "light";

export interface ThemeContextInter {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
