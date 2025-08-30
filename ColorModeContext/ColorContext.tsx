import React, { useContext } from "react";
import { createContext } from "react";
import { darkColors, lightColors } from "./Color";

const ThemeContext = createContext({
  theme: "light",
  colors: lightColors,
  toggleTheme: () => {},
});

export const ColorContext = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<string>("light");

  const colors = theme === "light" ? lightColors : darkColors;

  const toggleTheme = () => {
    setTheme((prevtheme) => (prevtheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
