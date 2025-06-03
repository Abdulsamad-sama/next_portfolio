"use client";
import Button from "@/components/buttons/Button";
import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiMailSendLine } from "react-icons/ri";

const contact = () => {
  // Function to handle form submission
  // This function will open the user's email client with pre-filled details
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    // Prevent spamming by disabling the button after submit
    if (e.target.submitted) return;
    e.target.submitted = true;
    setTimeout(() => {
      e.target.submitted = false;
    }, 3000);

    const subject = encodeURIComponent(
      `Contact from your portfolio website: ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:hamzatabdulsamad34@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-6">
        Get in touch with us
      </h1>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1 mr-3 flex flex-col justify-center gap-4 p-6">
          <h2 className="text-3xl font-bold text-[#53c2ab]">
            Let’s build something amazing together
          </h2>
          <p className="mt-4">
            We are always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <p className="mb-2">
            Feel free to reach out and start a conversation!
          </p>

          <div className=" space-x-4">
            <a
              href="https://https://github.com/Abdulsamad-sama"
              className="text-[#53c2ab] hover:underline text-xl"
            >
              <FaGithub className="inline mr-2" />
            </a>
            <a
              href="https://wa.me/2347056232049"
              className="text-[#53c2ab] hover:underline text-xl"
            >
              <FaWhatsapp className="inline mr-2" />
            </a>
            <a
              href="https://linkedin.com/in/hamzat-abdulsamad"
              className="text-[#53c2ab] hover:underline text-xl"
            >
              <FaLinkedin className="inline mr-2" />
            </a>
            <a
              href="https://x.com/coolham"
              className="text-[#53c2ab] hover:underline text-xl"
            >
              <FaXTwitter className="inline mr-2" />
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-1 gap-2 relative"
          autoComplete="off"
        >
          <input
            type="text"
            id="name"
            name="name"
            autoFocus
            autoComplete="off"
            autoCapitalize="on"
            placeholder="Name"
            className=" border rounded text-[#bbb] p-3  "
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Email"
            className=" border rounded text-[#bbb] p-3"
            required
          />

          <textarea
            id="message"
            name="message"
            autoComplete="off"
            autoCapitalize="on"
            placeholder="Message"
            className=" border capitalize resize-none rounded text-[#bbb] p-3 "
            rows={8}
            required
          />

          <Button btnName={"Send To mail"} btnUrl={"#"} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default contact;
