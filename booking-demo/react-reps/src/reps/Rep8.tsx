import React, { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const ctx = useContext(ThemeContext);
  if (!ctx) return null;

  return (
    <button onClick={ctx.toggle}>
      Current theme: {ctx.theme} — Toggle
    </button>
  );
}

function Rep8() {
  return (
    <ThemeProvider>
      <div style={{ padding: 40 }}>
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}

export default Rep8;
