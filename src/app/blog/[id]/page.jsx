import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

const blogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div>
      <div className="flex ">
        <div className=" flex flex-col flex-1 space-y-5">
          <h1 className="text-3xl font-extrabold">{data.title}</h1>
          <p>{data.desc}</p>
          <p>{data.author}</p>
        </div>
        <div className="flex-1 h-[250px] relative ">
          <Image
            src={data.img}
            alt={data.title}
            fill={true}
            className=" object-cotain "
          />
        </div>
      </div>
      <div className="mt-10">
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default blogPost;
