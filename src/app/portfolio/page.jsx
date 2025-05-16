import Image from "next/image";
import Link from "next/link";
import React from "react";

const portfolio = () => {
  return (
    <div className="relative font-extrabold">
      <h2 className="text-4xl font-extrabold mb-6">Choose a gallery</h2>

      <div className="flex gap-6">
        <Link href={"/portfolio/websites"} className=" relative h-[350] w-75 ">
          <Image
            src={"/web.jpg"}
            fill={true}
            alt="Websites"
            className="object-cover peer"
          />
          <p className="absolute bottom-3 right-3 text-2xl peer-hover:text-[#53c2ab]">
            Websites
          </p>
        </Link>

        <Link href={"/portfolio/ai-agent"} className=" relative h-[350] w-75">
          <Image
            src={"/ai.jpg"}
            fill={true}
            alt="AI Agent"
            className="object-cover peer"
          />
          <p className="absolute bottom-3 right-3 text-2xl peer-hover:text-[#53c2ab]">
            AI Agent
          </p>
        </Link>

        <Link href={"/portfolio/saas"} className=" relative h-[350] w-75">
          <Image
            src={"/saas.jpg"}
            fill={true}
            alt="SAAS"
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
