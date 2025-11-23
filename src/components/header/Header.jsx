"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { signOut, useSession } from "next-auth/react";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";

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
  const menuRef = useRef(null);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const SCROLL_THRESHOLD = 50;

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    // set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` fixed top-0 left-0 w-full flex justify-between z-50 items-center px-8 py-2 duration-300 transition-all ease-in-out ${
        isScrolled
          ? "backdrop-blur-xl shadow-2xl" // Solid color when scrolled
          : "bg-transparent backdrop-blur-sm" // Transparent when at the top
      }`}
    >
      <div>
        <Link href="/" className="text-xl font-extrabold">
          Abdulsamad
        </Link>
      </div>

      <div className="flex gap-3 items-center">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Navigation Links */}
        <div className="hidden md:flex gap-3">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={`p-2 ${
                pathname === link.url
                  ? "text-[#53c2ab] font-extrabold underline"
                  : ""
              } `}
            >
              {link.title}
            </Link>
          ))}
        </div>
        {/* Mobile Menu */}

        <div
          ref={menuRef}
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col items-center absolute z-50 top-18 right-5 bg-gray-800 w-25 text-white shadow-md md:hidden `}
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
