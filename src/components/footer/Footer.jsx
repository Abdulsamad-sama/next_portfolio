import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiMailSendLine } from "react-icons/ri";

const Dates = new Date();
const date = Dates.getFullYear();

const footer = () => {
  return (
    <div className="h-12 flex items-center justify-between bg-[#0d1117] text-white px-2">
      {`@${date}. Tomio, All right researved`}
      <div className=" space-x-4">
        <a
          href="https://https://github.com/Abdulsamad-sama"
          className="text-[#53c2ab] hover:underline text-xl"
        >
          <FaGithub className="inline mr-2" />
        </a>
        <a
          href="https://wa.me/2347056232049"
          className="text-[#53c2ab] hover:underline text-xl"
        >
          <FaWhatsapp className="inline mr-2" />
        </a>
        <a
          href="https://linkedin.com/in/hamzat-abdulsamad"
          className="text-[#53c2ab] hover:underline text-xl"
        >
          <FaLinkedin className="inline mr-2" />
        </a>
        <a
          href="https://x.com/coolham"
          className="text-[#53c2ab] hover:underline text-xl"
        >
          <FaXTwitter className="inline mr-2" />
        </a>
        <a
          href="mailto:hamzatabdulsamad34@gmail.com"
          className="text-[#53c2ab] hover:underline text-xl"
        >
          <RiMailSendLine className="inline mr-2" />
        </a>
      </div>
    </div>
  );
};

export default footer;
