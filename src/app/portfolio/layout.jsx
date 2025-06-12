import React from "react";

export const metadata = {
  title: "Abdulsamad Hamzat | Porftfolio",
  description:
    "Personal Projects and portfolio showcasing my work as a software engineer and web developer.",
};

const layout = ({ children }) => {
  return (
    <div className="mt-16">
      <h1 className="text-7xl font-extrabold mb-4">My Works</h1>
      {children}
    </div>
  );
};

export default layout;
