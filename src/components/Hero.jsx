import Image from "next/image";
import LogoSlider from "./LogoSlider";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#6664FD] to-[#122959] relative z-[1]">
      <div className="absolute -top-[580px] inset-0 bg-repeat bg-cover bg-center bg-grid-bg z-[10]" />
      <div className="relative z-[20] w-full pt-[5rem] pb-10 flex flex-col items-center text-center">
        <h1 className="heading__1">
          Turn Engineering 1:1s from Time <br />
          sinks into Career Catalysts
        </h1>
        <p className="para__1 my-10">
          Turn one-on-one meetings into growth drivers with OneSync, maximizing{" "}
          <br />
          impact for managers and teams.
        </p>
        <div className="relative">
          <button className="px-6 py-3 bg-white rounded-xl font-bold">
            Elevate your 1:1s Today
          </button>
          <Image
            className="absolute top-14 left-56"
            alt="cursor"
            width={37}
            height={30}
            src={"/cursor.svg"}
          />
        </div>
        <Image
          className="w-full px-32 py-20 rounded-2xl"
          alt="hero__image"
          height={500}
          width={500}
          src={"/hero.svg"}
        />
        <div className="pt-5">
          <p className="para__2">Trusted by Teams around the world</p>
          <LogoSlider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
