import Button from "@/components/buttons/Button";
import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <div className="flex flex-col gap-3 relative">
      {/* hero */}
      <div className=" h-[320px] relative mb-4">
        <Image
          src={"/seo.jpg"}
          alt="About"
          fill={true}
          className=" object-cover grayscale-100"
        />

        <div className="absolute bottom-3 left-4 bg-[#53c2ab] p-3 rounded-md">
          <h2 className="text-xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            atque blanditii.
          </p>
        </div>
      </div>
      {/* text */}
      <div className="flex gap-2">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-5">Who we are.</h2>
          <p className="mb-3 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            aliquid quod nisi fugit facere ad, adipisci sed rem, eveniet
            quisquam beatae mollitia at architecto eaque voluptatem numquam!
            Officia, repellat amet necessitatibus quia, cum fugiat alias
            distinctio at quos nulla eligendi magnam, commodi saepe nemo autem
            <br />
            <br />
            numquam quas deserunt ex culpa vel error nisi. Itaque tenetur facere
            nisi enim, voluptatibus illo quasi hic dolores nostrum harum
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-5">What we do.</h2>
          <p className="mb-3 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            aliquid quod nisi fugit facere ad, adipisci sed rem, eveniet
            quisquam beatae mollitia at architecto eaque voluptatem numquam!
            Officia, repellat amet necessitatibus quia, cum fugiat alias
            distinctio at quos nulla eligendi magnam, commodi saepe nemo autem
            numquam quas deserunt ex culpa vel error nisi. Itaque tenetur facere
            nisi enim, voluptatibus illo quasi hic dolores nostrum harum eos
            aut, eum dolorum consequuntur. Vel perspiciatis mollitia optio ab
            molestiae iste ipsa voluptatibus! Temporibus sapiente necessitatibus
            voluptatum dignissimos provident, expedita harum nostrum aliquid
            iste sint cum dolores facilis vitae repudiandae quas esse, in non?
          </p>
          <Button btnName={"Contact"} btnUrl={"/contact"} />
        </div>
      </div>
    </div>
  );
};

export default about;
