import { createContext } from "react";

export const initialThemeState = {
  theme: "light",
  setTheme: () => null,
};

const ThemeContext = createContext(initialThemeState);
export default ThemeContext;
