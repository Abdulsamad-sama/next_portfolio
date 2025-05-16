import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const blog = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col gap-9 mt-10">
      {data.map((item) => (
        <Link key={item.id} href={`/blog/${item._id}`} className="flex gap-7">
          <div className=" h-[250]  w-[250] relative ">
            <Image
              src={item.img}
              alt={item.title}
              fill={true}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl mb-2">{item.title}</h1>
            <p className="text-xl">{item.desc}</p>
            <p className="text-sm  mt-2">Author: {item.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default blog;
