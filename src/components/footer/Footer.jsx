import React from "react";

const Dates = new Date();
const date = Dates.getFullYear();

const footer = () => {
  return (
    <div className="h-12 flex items-center ">
      {`@${date}. Tomio, All right researved`}
      <div></div>
    </div>
  );
};

export default footer;
