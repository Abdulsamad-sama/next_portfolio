import Image from "next/image";
import React from "react";
const category = ({ params }) => {
  return (
    <div>
      <h2 className="text-3xl font-extrabold mb-6">{params.slug}</h2>

      <div className="flex flex-col">
        <div className=" flex relative h-75 ">
          <Image />

          <div>
            <h3 className="text-2xl ">Title</h3>
            <p>Desc</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default category;
