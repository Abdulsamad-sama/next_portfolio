import Image from "next/image";
import Link from "next/link";
import React from "react";

// SEO Metadata
export const metadata = {
  title: "Abdulsamad Hamzat | Blog – EchoesOfSamad",
  description:
    "Explore developer insights, software engineering tutorials, and project case studies by Abdulsamad Hamzat.",
};

// Fetch blog post data
const getData = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/posts`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch data");

    return res.json();
    
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const Blog = async () => {
  const data = await getData();

  return (
    <main className="mt-16 px-4">
      <section className="flex flex-col gap-12">
        {data.map((item) => (
          <article
            key={item._id}
            className="flex flex-col md:flex-row gap-6 border-b pb-8"
          >
            <Link href={`/blog/${item._id}`} className="block relative w-full md:w-[250px] h-[250px]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 250px"
                className="object-cover rounded-lg"
                priority={false}
              />
            </Link>

            <div className="flex flex-col justify-between">
              <header>
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              </header>

              <p className="text-lg text-gray-700">{item.desc}</p>

              <footer className="text-sm text-gray-500 mt-3">
                Author: {item.author}
              </footer>
            </div>
          </article>
        ))}
      </section>

      {/* Optional: JSON-LD Structured Data - inject per post or globally in Head */}
      {/* Example snippet (you may use next/head or similar): 
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      */}
    </main>
  );
};

export default Blog;
