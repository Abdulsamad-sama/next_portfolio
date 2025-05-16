"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <div
        className={` h-full transition-colors duration-500 ease-in ${
          mode === "dark" ? "text-white bg-black" : "text-black bg-white"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
