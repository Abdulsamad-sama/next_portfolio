"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Head from "next/head";

<head>
  <title>Login | Abdulsamad Hamzat</title>
  <meta name="description" content="A dashboard to add blog post" />
</head>;

const register = () => {
  const [err, setErr] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      res.status === 201 &&
        router.push("/dashboard/login?success= Account has been created");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">Register</h1>

      <div className="flex flex-col md:flex-row">
        <form
          action=""
          className="flex flex-col flex-1 gap-4 relative"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            id="name"
            placeholder="Name"
            className=" border rounded text-[#bbb] p-3"
          />

          <input
            type="email"
            id="email"
            placeholder="Email"
            className=" border rounded text-[#bbb] p-3"
          />

          <input
            type="password"
            id="password"
            placeholder="Password"
            className=" border rounded text-[#bbb] p-3 "
          />
          {err && "Something went wrong"}
          <button
            className="bg-blue-500 text-white p-3 rounded cursor-pointer"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default register;
