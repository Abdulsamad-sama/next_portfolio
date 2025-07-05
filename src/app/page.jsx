import { Button, AnchorTag } from "@/components/buttons/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center gap-7 px-4 md:px-12 py-8 mt-16">
      <main className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#53c2ab] to-[#bbb] text-transparent bg-clip-text">
          Hi, I’m Abdulsamad
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#53c2ab]">
          A Frontend Developer
        </h2>

        <br />
        <p className="pb-3 text-base sm:text-lg md:text-xl">
          I’m a software engineer specializing in building exceptional digital
          experiences. Currently, I’m focused on building accessible,
          human-centered products at Upstatement.
        </p>

        <AnchorTag btnName={"See My Works"} btnUrl={"/portfolio"} />

        <a
          href="/Abdulsamad_Hamzat_CV.pdf"
          download
          className="mt-4 text-[#53c2ab] hover:underline text-lg"
        >
          Download CV
        </a>
      </main>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative h-48 w-48 sm:h-64 sm:w-64 md:h-[400px] md:w-80">
          <Image
            src={"/abdulsamad.jpg"}
            fill={true}
            alt="HomePIc"
            className="animate-pulse object-contain"
            // sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
