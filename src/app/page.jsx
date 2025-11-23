"use client";
import { Button, AnchorTag } from "@/components/buttons/Button";
import Image from "next/image";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Link from "next/link";
// import { Home, Zap, Code, Menu } from 'lucide-react';

const techStack = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Figma",
  "Python",
  "MATLAB",
];

export default function Home() {
  const typedElementRef = useRef(null);

  useEffect(() => {
    if (typedElementRef.current) {
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
    <div className="mt-16">
      <div className="flex flex-col-reverse sm:flex-row items-center gap-7 px-4 md:px-12 py-8">
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

          <div className="mb-4 ">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-block  bg-gradient-to-r from-[#53c2ab] to-[#bbb] text-gray-800 text-sm font-medium px-3 py-1 rounded-full mr-2 mb-2"
              >
                {tech}
              </span>
            ))}
          </div>

          <AnchorTag btnName={"See My Works"} btnUrl={"/portfolio"} />

          <a
            href="/Abdulsamad_Hamzat_CV.pdf"
            download
            className="mt-4 text-[#53c2ab] hover:underline text-lg text-left"
          >
            Download CV
          </a>
        </main>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative shadow-md shadow-gray-400 rounded-4xl z-50 overflow-hidden">
            <Image
              src={"/abdulsamad.jpg"}
              // fill={true}
              width={450}
              height={450}
              alt="A picture of Abdulsamad Hamzat"
              className=" animate-pulse object-cover"
              // sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* About */}
      <section className="mt-20 mb-10 px-4 md:px-12 py-8">
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
            </p>
            <ul className="list-disc list-inside mb-3 text-justify">
              Our work spans:
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
      <section className="mt-20 mb-10 px-4 md:px-12 py-8 bg-gray-900">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left text-[#53c2ab] mb-8">
          Projects
        </h2>

        <div className="flex flex-col gap-6">
          <Link
            className="flex flex-col md:flex-row gap-8 justify-between items-center peer transition-hover duration-300 p-2 mb-20"
            href={"https://leaves-rake-39990396.figma.site/"}
          >
            <Image
              src={"/Pumpmas.png"}
              alt="Pumpmas"
              width={550}
              height={500}
              className="flex-1/2 "
            />
            <div className="flex-1/2 self-start md:pl-8">
              <h3 className="text-2xl font-bold mb-2 text-[#53c2ab] peer-hover:underline">
                Pumpmas - Decentralized Finance &#40;DeFi&#41; Web Apps
              </h3>
              <p className="text-justify">
                Built for a memecoin on the Ethereum &#40;ETH&#41; blockchain.
                This project highlights proficiency in presenting tokenomics,
                community links, and roadmap information for decentralized
                applications.
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col md:flex-row-reverse gap-8 justify-between items-center peer transition-hover duration-300 p-2 mb-20"
            href={"https://peer-beam-v01.vercel.app/"}
          >
            <Image
              src={"/peerBeam.png"}
              alt="peerBeam"
              width={550}
              height={500}
              className="flex-1/2 ml-4"
            />
            <div className="flex-1/2 self-start md:pl-8">
              <h3 className="text-2xl font-bold mb-2 text-[#53c2ab] peer-hover:underline">
                PeerBeam
              </h3>
              <p className="text-justify">
                PeerBeam is a modern, real-time file transfer web application
                designed to facilitate quick and secure sharing of files between
                users.
              </p>
            </div>
          </Link>
          <Link
            className="flex flex-col md:flex-row gap-8 justify-between items-center peer transition-hover duration-300 p-2 mb-20"
            href={"https://code-ham-charity.vercel.app/index.html"}
          >
            <Image
              src={"/codeham_charity.png"}
              alt="Codeham Charity"
              width={550}
              height={500}
              className="flex-1/2 "
            />
            <div className="flex-1/2 self-start md:pl-8">
              <h3 className="text-2xl font-bold mb-2 text-[#53c2ab] peer-hover:underline">
                Codeham Charity
              </h3>
              <p className="text-justify">
                A comprehensive, feature-rich website developed for CodeHam
                Charity, a non-governmental organization focused on facilitating
                donations, awareness, and community engagement.
              </p>
            </div>
          </Link>

          <Link
            className="flex flex-col md:flex-row-reverse gap-8 justify-between items-center peer transition-hover duration-300 p-2 mb-20"
            href={"https://gladtidingsclone.vercel.app/"}
          >
            <Image
              src={"/gladtidings.png"}
              alt="Gladtidings"
              width={550}
              height={500}
              className="flex-1/2 ml-4"
            />
            <div className="flex-1/2 self-start md:pl-8">
              <h3 className="text-2xl font-bold mb-2 text-[#53c2ab] peer-hover:underline">
                Gladtidings
              </h3>
              <p className="text-justify">
                A landing page clone demonstrating strong front-end replication
                and design skills, specifically modeling a commercial website
                focused on selling data services.
              </p>
            </div>
          </Link>

          <Link
            className="flex flex-col md:flex-row gap-8 justify-between items-center peer transition-hover duration-300 p-2 mb-20"
            href={"https://tomiotoken.netlify.app/"}
          >
            <Image
              src={"/the_tomio.png"}
              alt="The Tomio"
              width={550}
              height={500}
              className="flex-1/2 "
            />
            <div className="flex-1/2 self-start md:text-left pl-8">
              <h3 className="text-2xl font-bold mb-2 text-[#53c2ab] peer-hover:underline">
                The Tomio
              </h3>
              <p className="text-justify">
                Built for a memecoin on the Solana &#40;SOL&#41; blockchain.
                This app demonstrates adaptability to different blockchain
                ecosystems and knowledge of presenting key token data relevant
                to the high-speed Solana network.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
