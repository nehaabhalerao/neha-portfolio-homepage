"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const hasSavedPreference = useRef(false);

  const applyTheme = useCallback((nextTheme: Theme) => {
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    let savedTheme: string | null = null;
    try {
      savedTheme = window.localStorage.getItem("portfolio-theme");
    } catch (error) {
      console.error("Could not read the saved theme preference.", error);
    }

    hasSavedPreference.current = savedTheme === "light" || savedTheme === "dark";
    const initialTheme: Theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : root.dataset.theme === "light"
          ? "light"
          : "dark";
    applyTheme(initialTheme);

    const colorScheme = window.matchMedia("(prefers-color-scheme: light)");
    const handleColorSchemeChange = (event: MediaQueryListEvent) => {
      if (!hasSavedPreference.current) {
        applyTheme(event.matches ? "light" : "dark");
      }
    };

    colorScheme.addEventListener("change", handleColorSchemeChange);
    return () => colorScheme.removeEventListener("change", handleColorSchemeChange);
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    hasSavedPreference.current = true;
    applyTheme(nextTheme);
    try {
      window.localStorage.setItem("portfolio-theme", nextTheme);
    } catch (error) {
      console.error("Could not save the theme preference.", error);
    }
  }, [applyTheme, theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider.");
  }
  return context;
}
