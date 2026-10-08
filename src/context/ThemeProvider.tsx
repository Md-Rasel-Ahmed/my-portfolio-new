"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

let theme: Theme = "dark";
const listeners = new Set<() => void>();

function emitChange() {
  listeners.forEach((listener) => listener());
}

function setThemeStore(next: Theme) {
  theme = next;
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(next);
  try {
    window.localStorage.setItem("theme", next);
  } catch {
    /* ignore storage errors */
  }
  emitChange();
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function getSnapshot() {
  return theme;
}

function getServerSnapshot() {
  return theme;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const currentTheme = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    let stored: Theme | null = null;
    try {
      stored = window.localStorage.getItem("theme") as Theme | null;
    } catch {
      /* ignore storage errors */
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const resolved: Theme = stored ?? (prefersDark ? "dark" : "light");
    if (resolved !== theme) {
      setThemeStore(resolved);
    } else {
      const root = document.documentElement;
      root.classList.remove("dark", "light");
      root.classList.add(resolved);
    }
  }, []);

  const toggleTheme = () =>
    setThemeStore(currentTheme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}