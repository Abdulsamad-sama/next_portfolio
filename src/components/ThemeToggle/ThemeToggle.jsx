"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { mode, toggle } = useContext(ThemeContext);
  return (
    <div
      className="  border rounded-2xl flex cursor-pointer relative items-center p-0.5"
      onClick={toggle}
    >
      <div className="text-[12px]">🌙</div>
      <div className="text-[12px]">🔆</div>
      <div
        className={`h-4 w-4 absolute rounded-full bg-gray-200 ${
          mode === "dark" ? "right-[3px]" : "left-[3px]"
        }`}
      ></div>
    </div>
  );
};

export default ThemeToggle;
