import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Abdulsamad Hamzat | Porftfolio",
  description:
    "Personal Projects and portfolio showcasing my work as a software engineer and web developer.",
};

const portfolio = () => {
  return (
    <div className="relative font-extrabold">
      <h2 className=" text-2xl md:text-4xl font-extrabold mb-4 ">
        Choose a gallery
      </h2>

      <div className="flex flex-col  items-center justify-evenly md:flex-row  gap-5">
        <Link href={"/portfolio/websites"} className=" relative h-[330] w-75 ">
          <Image
            src={"/web.jpg"}
            fill={true}
            alt="Portfolio/Websites"
            className="object-cover peer"
          />
          <p className="absolute bottom-3 right-3 text-2xl peer-hover:text-[#53c2ab]">
            Websites
          </p>
        </Link>

        <Link href={"/portfolio/ai-agent"} className=" relative h-[330] w-75">
          <Image
            src={"/ai.jpg"}
            fill={true}
            alt="Portfolio/AI Agent"
            className="object-cover peer"
          />
          <p className="absolute bottom-3 right-3 text-2xl peer-hover:text-[#53c2ab]">
            AI Agent
          </p>
        </Link>

        <Link href={"/portfolio/saas"} className=" relative h-[330] w-75">
          <Image
            src={"/saas.jpg"}
            fill={true}
            alt="Portfolio/SAAS"
            className="object-cover peer"
          />
          <p className="absolute bottom-3 right-3 text-2xl peer-hover:text-[#53c2ab]">
            SAAS
          </p>
        </Link>
      </div>
    </div>
  );
};

export default portfolio;
