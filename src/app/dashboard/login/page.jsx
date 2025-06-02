"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">Login</h1>

      <div className="flex flex-col md:flex-row">
        <form
          className="flex flex-col flex-1 gap-4 relative"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border rounded text-[#bbb] p-3"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border rounded text-[#bbb] p-3"
          />
          <button
            className="bg-blue-500 text-white p-3 rounded cursor-pointer hover:scale-105 transition-all duration-300 active:bg-pink-400"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>

      <br />
      <p>OR</p>

      <button
        className="p-3 bg-blue-500 text-white rounded w-max cursor-pointer border-none"
        onClick={() => signIn("google")}
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
