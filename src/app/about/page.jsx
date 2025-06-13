import { Button } from "@/components/buttons/Button";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Abdulsamad Hamzat | Porftfolio",
  description: "About Abdulsamad Hamzat.",
};

const about = () => {
  return (
    <div className="flex flex-col gap-3 mt-16 relative">
      {/*  hero */}
      <div className="h-[320px] relative mb-4">
        <Image
          src={"/abdulsamad_ghibli.png"}
          alt="About Abdulsamad Hamzat"
          fill={true}
          className="object-cover object-center  grayscale-100"
        />

        <div className="absolute bottom-3 left-4 bg-[#53c2ab] p-3 rounded-md">
          <h2 className="text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            atque blanditii.
          </p>
        </div>
      </div>
      {/* text */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 md:border-r-2 pr-4">
          <h2 className="text-2xl font-bold mb-5">Who we are.</h2>
          <p className="mb-3 text-justify">
            We are a passionate and purpose-driven software development practice
            led by Abdulsamad Hamzat, a developer committed to delivering clean,
            efficient, and impactful technology solutions. With a background in
            Computer Engineering and hands-on experience in both technical
            training and software development, we combine deep technical skills
            with a strong focus on collaboration, problem-solving, and
            user-centered design. We believe in continuous learning, knowledge
            sharing, and building tools that solve real-world problems. Whether
            it's leading peer tutorials, training professionals on productivity
            software, or contributing to community projects, we approach every
            challenge with integrity, curiosity, and a commitment to excellence.
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-5">What we do.</h2>
          <p className="mb-3 text-justify">
            We design and build scalable, user-friendly software solutions
            tailored to individual, academic, and business needs. <br />
            Our work spans:
          </p>
          <ul className="list-disc list-inside mb-3 text-justify">
            <li>
              Full-Stack Web Development using JavaScript, Node.js,React, and
              Next.js
            </li>
            <li className="mt-2">
              Custom Software Training & Consulting in Microsoft Office tools
              for improved productivity
            </li>
            <li>
              Technical Prototyping & Visual Processing using tools like MATLAB
              and Python
            </li>
            <li>
              Community Learning through mentorship, academic tutorials, and
              peer support
            </li>
            <li>
              Open Source Contributions and freelance collaboration on
              client-centered projects
            </li>
          </ul>
          <Button btnName={"Contact"} btnUrl={"/contact"} />
        </div>
      </div>
    </div>
  );
};

export default about;
