import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-7xl font-extrabold mb-9">My Works</h1>
      {children}
    </div>
  );
};

export default layout;
