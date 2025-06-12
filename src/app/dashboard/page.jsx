"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Head from "next/head";

<head>
  <title>DashBoard</title>
  <meta name="description" content="A dashboard to add blog post" />
</head>;

const dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const [desc, setDesc] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  console.log(session);
  console.log(desc);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const author = session.data.user.name;
    const extUrl = e.target.extImg.value;
    // const img = e.target.img.files[0];
    const img = imageUrl;
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desc,
        content,
        author,
        img,
      }),
    });
  };
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/dashboard/login");
    }
  }, [session.status, router]);

  if (session.status === "authenticated") {
    return (
      <div className="flex gap-10 justify-center mt-16 items-center">
        <div className="flex-1 flex flex-col">
          <h1 className="text-2xl font-bold text-center mb-10">
            Welcome to the Dashboard
          </h1>
          <div className="flex flex-1 justify-center">
            <div>
              <h2 className="text-2xl font-bold">
                Hello, {session.data.user.name}
              </h2>
              <p className="text-lg">You are logged in!</p>
            </div>
          </div>
        </div>

        {/* to add blog */}
        <div className="flex-1 border">
          <h2 className="text-2xl font-bold text-center my-2">Add Blog</h2>

          <form className="flex flex-col p-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              className="mb-4 p-2 border rounded"
              name="title"
            />
            <span className="text-sm text-right text-gray-500">
              {desc.length}/150
            </span>
            <textarea
              placeholder="Description"
              className="mb-4 p-2 border rounded resize-none"
              maxLength={150}
              rows={3}
              name="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />

            <textarea
              name="content"
              placeholder="Content"
              className="mb-4 p-2 border rounded resize-none"
              rows={3}
              cols={50}
            />
            {/* upload image */}
            <div className="flex gap-4">
              <input
                name="extImg"
                type="text"
                placeholder="Image URL"
                value={imageUrl}
                onChange={() => setimageUrl(e.target.value)}
                className="mb-4 p-2 border rounded w-[80%]"
              />

              <div className="relative inline-block overflow-hidden border rounded w-50 h-10 text-center bg-blue-500 text-white">
                <label className=" mb-2 text-sm font-medium rounded cursor-pointer w-32 h-10 flex items-center justify-center">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  name="fileImg"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setimageUrl(reader.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className=" cursor-pointer absolute top-0 right-0 opacity-0 focus:outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-1/2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default dashboard;
