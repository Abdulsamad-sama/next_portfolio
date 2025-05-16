import React from "react";
import Link from "next/link";

const Button = ({ btnName, btnUrl }) => {
  return (
    <Link href={btnUrl}>
      <button className="p-3 bg-[#53c2ab] rounded text-black cursor-pointer border-none w-max ">
        {btnName}
      </button>
    </Link>
  );
};

export default Button;
