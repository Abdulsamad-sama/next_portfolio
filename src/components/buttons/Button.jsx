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
      <button className="mt-4 inline-block text-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500/50 transition duration-300 ease-in-out w-full sm:w-auto transform hover:scale-[1.02]">
        {`${btnName}`}
      </button>
    </Link>
  );
};

export const AnchorTag = ({ btnName, btnUrl }) => {
  return (
    <a
      href={btnUrl}
      className="mt-4 inline-block text-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500/50 transition duration-300 ease-in-out w-full sm:w-auto transform hover:scale-[1.02]"
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
