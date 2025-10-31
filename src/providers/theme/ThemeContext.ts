import { createContext } from "react";
import type { Theme } from "./types";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (newTheme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
