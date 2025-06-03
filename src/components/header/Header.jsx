"use client";

import React from "react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // This effect handles closing the mobile menu when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between h-14 items-center">
      <div>
        <Link href="/" className="text-lg font-extrabold">
          Abdulsamad
        </Link>
      </div>

      <div className="flex gap-3 items-center">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Navigation Links */}
        <div className="hidden md:flex gap-3">
          {links.map((link) => (
            <Link key={link.id} href={link.url} className="p-2 ">
              {link.title}
            </Link>
          ))}
        </div>
        {/* Mobile Menu */}

        <div
          ref={menuRef}
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col items-center absolute top-18 right-5 bg-gray-800 w-25 text-white shadow-md md:hidden `}
        >
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="pb-3 text-center border-b-2 border-b-white hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button
            type="button"
            className="p-2 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <IoClose /> : <FaBars />}
          </button>
        </div>

        {/* logout button */}
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
