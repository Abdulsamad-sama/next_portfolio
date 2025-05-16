import Button from "@/components/buttons/Button";
import Image from "next/image";
import React from "react";

const contact = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10">
        Get in touch with us
      </h1>

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 relative h-[400px]">
          <Image
            fill={true}
            alt="Contact us"
            className=" object-contain animate-bounce"
          />
        </div>

        <form action="" className="flex flex-col flex-1 gap-4 relative">
          <input
            type="text"
            id="name"
            placeholder="Name"
            className=" border rounded text-[#bbb] p-3  "
          />

          <input
            type="email"
            id="email"
            placeholder="Email"
            className=" border rounded text-[#bbb] p-3"
          />

          <textarea
            type="text"
            id="message"
            placeholder="Message"
            cols={"20"}
            rows={"10"}
            className=" border rounded text-[#bbb] p-3 "
          />

          <Button btnName={"Send"} btnUrl={"#"} />
        </form>
      </div>
    </div>
  );
};

export default contact;
