import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "./types";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

const ThemeProvider = ({
  children,
  defaultTheme = "dark",
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) return savedTheme;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "dark";
    return defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  const setTheme = (newTheme: Theme) => setThemeState(newTheme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
