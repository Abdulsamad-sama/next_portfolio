import React from "react";
import Link from "next/link";
import {} from "react-icons/ri";

export const Button = ({ btnName, btnUrl, type }) => {
  if (type === "submit") {
    return (
      <button
        type="submit"
        className="p-3 bg-[#53c2ab] rounded text-black cursor-pointer border-none w-max "
      >
        {btnName || "Button"}
      </button>
    );
  }
  return (
    <Link href={btnUrl}>
      <button className="p-3 bg-[#53c2ab] rounded text-black cursor-pointer border-none w-max ">
        {`${btnName}`}
      </button>
    </Link>
  );
};

export const AnchorTag = ({ btnName, btnUrl }) => {
  return (
    <a
      href={btnUrl}
      className="active:bg-transparent p-3 bg-[#53c2ab] rounded text-black cursor-pointer border-none w-max "
    >
      {btnName}
    </a>
  );
};

Button.AnchorTag = AnchorTag;

Button.defaultProps = {
  btnName: "Button",
  btnUrl: "#",
  type: "button",
};
