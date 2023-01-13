import { useContext } from "react";

//imported from themecontext
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  //context will be undefined if we try to use out context outside the scope of it
  if (context === undefined) {
    throw new Error("useTheme() must be used inside a them provider");
  }

  return context;
};
