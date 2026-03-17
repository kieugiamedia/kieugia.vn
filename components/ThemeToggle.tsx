"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeToggleProps = {
  showLabel?: boolean;
  className?: string;
};

const THEME_KEY = "theme";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  window.localStorage.setItem(THEME_KEY, theme);
};

export default function ThemeToggle({
  showLabel = true,
  className = "",
}: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    applyTheme(theme);
  }, [theme, mounted]);

  const isDark = theme === "dark";
  const label = isDark ? "Tối" : "Sáng";
  const nextLabel = isDark ? "Chuyển sang sáng" : "Chuyển sang tối";

  return (
    <button
      type="button"
      aria-label={nextLabel}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`brand-panel group inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium text-[var(--text-secondary)] transition hover:bg-[var(--surface-3)] hover:text-[var(--brand-blue-deep)] dark:hover:bg-white/10 dark:hover:text-white ${className}`}
    >
      <span className="brand-icon flex h-7 w-7 items-center justify-center rounded-full transition group-hover:scale-105">
        {isDark ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </span>
      {showLabel && (
        <span className="text-[11px] uppercase tracking-[0.3em]">
          {mounted ? label : "Sáng"}
        </span>
      )}
    </button>
  );
}
