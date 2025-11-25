"use client";

import React from "react";
// Removed Next.js specific imports (next/image, next/link) to resolve compilation errors

// 1. Project Data (includes multiple entries with the same slug for testing)
const projects = [
  {
    id: 1,
    slug: "websites",
    title: "Pumpmas - DeFi Web App",
    image: "/Pumpmas.png",
    description:
      "Built for a memecoin on the Ethereum (ETH) blockchain. This project highlights proficiency in presenting tokenomics, community links, and roadmap information for decentralized applications.",
    link: "https://leaves-rake-39990396.figma.site/",
  },
  {
    id: 2,
    slug: "saas",
    title: "PeerBeam - Real-Time File Transfer",
    image: "/peerBeam.png",
    description:
      "PeerBeam is a modern, real-time file transfer web application designed to facilitate quick and secure sharing of files between users.",
    link: "https://peer-beam-v01.vercel.app/",
  },
  {
    id: 3,
    slug: "websites",
    title: "Codeham Charity - NGO Website",
    image: "/codeham_charity.png",
    description:
      "A comprehensive, feature-rich website developed for CodeHam Charity, a non-governmental organization focused on facilitating donations, awareness, and community engagement.",
    link: "https://code-ham-charity.vercel.app/index.html",
  },
  {
    id: 4,
    slug: "websites",
    title: "Gladtidings - Landing Page Clone",
    image: "/gladtidings.png",
    description:
      "A landing page clone demonstrating strong front-end replication and design skills, specifically modeling a commercial website focused on selling data services.",
    link: "https://gladtidingsclone.vercel.app/",
  },
  {
    id: 5,
    slug: "websites",
    title: "The Tomio App - Memecoin on Solana",
    image: "/the_tomio.png",
    description:
      "Built for a memecoin on the Solana (SOL) blockchain. This app demonstrates adaptability to different blockchain ecosystems and knowledge of presenting key token data relevant to the high-speed Solana network.",
    link: "https://tomiotoken.netlify.app/",
  },
];

export default function ProjectDetail({ params }) {
  // Find ALL project objects matching the slug, returning an array.
  const matchedProjects = projects.filter((p) => p.slug === params.slug);

  console.log(params.slug);
  console.log(matchedProjects);

  if (!matchedProjects || matchedProjects.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen text-xl text-red-400 capitalize">
        No projects found for {params.slug}
      </div>
    );
  }

  // 2. Render all matched projects using .map()
  return (
    <div className="container mx-auto p-4 md:p-12 h-full">
      <h1 className="text-4xl font-extrabold mb-8 capitalize text-white">
        {params.slug}
      </h1>

      <div className="flex flex-col gap-16">
        {matchedProjects.map((project, index) => (
          <div
            // Use index as a key for this simple array, or ideally a unique ID if one exists
            className={`
              flex flex-col gap-8 justify-between items-center bg-gray-900 text-white rounded-xl p-6 shadow-2xl transition-all duration-500
              ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"}
            `}
            key={project.id}
          >
            {/* Image Container: Using standard <img> tag */}
            <div className="w-full lg:w-1/2 flex justify-center items-center rounded-lg overflow-hidden shadow-xl">
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%", maxWidth: "550px", height: "auto" }}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>

            {/* Text Content Container */}
            <div className="w-full lg:w-1/2 self-start p-4">
              <h2 className="text-3xl font-bold mb-4 text-white">
                {project.title}
              </h2>
              <p className="text-xl mb-6 text-gray-300 border-l-4 border-indigo-500 pl-4 italic">
                {project.description}
              </p>

              {/* Link: Using standard <a> tag */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out mt-4"
              >
                View Live Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
