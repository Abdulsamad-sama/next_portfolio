"use client";

import React from "react";
import Link from "next/link";
import { useState, useRef } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    url: "/",
    title: "Home",
  },
  {
    id: 2,
    url: "/portfolio",
    title: "Portfolio",
  },
  {
    id: 3,
    url: "/blog",
    title: "Blog",
  },
  {
    id: 4,
    url: "/about",
    title: "About",
  },
  {
    id: 5,
    url: "/contact",
    title: "Contact",
  },
  {
    id: 6,
    url: "/dashboard",
    title: "Dashboard",
  },
];

const Header = () => {
  const session = useSession();
  return (
    <div className="flex justify-between h-23 items-center">
      <div>
        <Link href="/" className="text-lg font-extrabold">
          Abdulsamad
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        {/* Theme Toggle */}
        <ThemeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="p-2 text-[#bbb] ">
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <button
            type="button"
            onClick={signOut}
            className="bg-[#53c2ab] p-1 rounded text-black cursor-pointer"
          >
            LogOut
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
