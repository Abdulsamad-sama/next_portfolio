import Button from "@/components/buttons/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row items-center gap-7">
      <div className="flex-1 flex-col gap-2">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#53c2ab] to-[#bbb] text-transparent bg-clip-text">
          Better design for your digital product
        </h1>
        <br />
        <p className="pb-3">
          Turning your idea into reality. We bring together the teams from
          globals tech industry.
        </p>
        <Button btnName={"See my works"} btnUrl={"/portfolio"} />
      </div>
      <div className=" flex-1 h-[400px] relative">
        <Image
          fill={true}
          alt="HomePIc"
          src="/seo.jpg"
          className="animate-pulse object-contain"
        />
      </div>
    </div>
  );
}
