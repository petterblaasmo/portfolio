import React, { useContext } from "react";
import { Icon } from "../lib/functions";

import ThemeContext from "./ThemeContext";

export default function SetTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <button
        className="changeColorMode"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Icon icon="sun" /> : <Icon icon="moon" />}
      </button>
    </>
  );
}
