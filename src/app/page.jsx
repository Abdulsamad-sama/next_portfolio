"use client";
import { Button, AnchorTag } from "@/components/buttons/Button";
import Image from "next/image";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Home() {
  const typedElementRef = useRef(null);

  useEffect(() => {
    // 2. Initialize Typed inside useEffect (runs after component mounts)
    if (typedElementRef.current) {
      // 3. Safety check: ensure the element exists
      const typed = new Typed(typedElementRef.current, {
        strings: ["A Software Developer", "A Computer Engineerer"],
        typeSpeed: 50,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="px-4 md:px-12 py-8 mt-16">
      <div className="flex flex-col-reverse sm:flex-row items-center gap-7">
        <main className="w-full md:w-1/2 flex flex-col text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl text-left md:text-5xl font-extrabold bg-gradient-to-r from-[#53c2ab] to-[#bbb] text-transparent bg-clip-text">
            <span className="lg:inline block">Hi,</span> I’m Abdulsamad
          </h1>

          <div>
            <span
              ref={typedElementRef}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-left text-[#53c2ab] mt-2"
            ></span>
          </div>

          <p className="pb-3 text-base text-justify sm:text-lg md:text-xl">
            Who specializing in building exceptional digital experiences.
            Currently, I’m focused on building accessible, human-centered
            products at Upstatement.
          </p>

          <AnchorTag btnName={"See My Works"} btnUrl={"/portfolio"} />

          <a
            href="/Abdulsamad_Hamzat_CV.pdf"
            download
            className="mt-4 text-[#53c2ab] hover:underline text-lg text-left"
          >
            Download CV
          </a>
        </main>
        <div className="w-full md:w-1/2 flex lg:justify-end justify-center">
          <div className="relative h-48 w-48 sm:h-64 sm:w-64 md:h-[400px] md:w-80 shadow shadow-gray-900 rounded-2xl">
            <Image
              src={"/abdulsamad.jpg"}
              fill={true}
              alt="HomePIc"
              className=" absolute animate-pulse object-cover rounded-2xl "
              // sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* About */}
      <section className="mt-20 mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left text-[#53c2ab] mb-8">
          About
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 md:border-r-2 pr-4">
            <h2 className="text-2xl font-bold mb-5">Who we are.</h2>
            <p className="mb-3 text-justify">
              We are a passionate and purpose-driven software development
              practice led by Abdulsamad Hamzat, a developer committed to
              delivering clean, efficient, and impactful technology solutions.
              With a background in Computer Engineering and hands-on experience
              in both technical training and software development, we combine
              deep technical skills with a strong focus on collaboration,
              problem-solving, and user-centered design. We believe in
              continuous learning, knowledge sharing, and building tools that
              solve real-world problems. Whether it's leading peer tutorials,
              training professionals on productivity software, or contributing
              to community projects, we approach every challenge with integrity,
              curiosity, and a commitment to excellence.
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
                Technical Prototyping & Visual Processing using tools like
                MATLAB and Python
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
      </section>

      {/* Portfolio */}
      <section className="mt-20 mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left text-[#53c2ab] mb-8">
          Projects
        </h2>

        <div className="flex flex-col gap-6">
          <div className="flex-1 border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="" alt="" srcset="" />
            <div>
              <h3 className="text-xl font-bold mb-2">Project One</h3>
              <p className="text-justify">
                A web application that allows users to track their tasks and
                manage projects efficiently. Built with React and Node.js.
              </p>
            </div>
          </div>
          <div className="flex-1 border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Project Two</h3>
            <p className="text-justify">
              An e-commerce platform designed for small businesses to sell
              products online. Developed using Next.js and MongoDB.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
