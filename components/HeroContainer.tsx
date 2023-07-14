import Image from "next/image";
import React from "react";
import { Parallax } from "react-scroll-parallax";

const HeroContainer = () => {
  return (
    <div className="h-screen w-full">
      <div className="xl:flex items-center h-screen mx-auto">
        {/* Left Hero */}
        <div className="bg-white xl:w-[50%] h-full flex flex-col items-center justify-center p-20">
          <div className="container flex flex-col items-center xl:items-start justify-between gap-y-4 xl:gap-y-16">
            <h1 className="text-[72px] xl:text-[110px] leading-[1em] font-semibold mt-20 mb-2 text-left">
              Build Better Backends
            </h1>
            <p className="text-[24px] xl:text-[30px] leading-[1em] font-normal text-left font-sans">
              The only platform that gives AI the ability to autonomously build
              web services.
            </p>
          </div>
        </div>
        {/* Right Hero */}
        <div className="hidden xl:block bg-black/30 xl:w-[50%] h-full relative">
          <div className="absolute top-[-9%] left-[26%] xl:w-[600px]">
            <Image src="/deploy.png" width={700} height={350} alt="deploy" />
          </div>
          
          <Parallax
            translateY={[0, -200]}
            speed={-5}
            className="absolute top-[55%] left-[-200px]"
          >
            <Image
              src="/env-card.png"
              width={659}
              height={314}
              alt="env-card"
            />
          </Parallax>
          <Parallax
            translateY={[0, -500]}
            speed={10}
            className="absolute top-[90%] left-[200px]"
          >
            <Image src="/modal.png" width={462} height={519} alt="env-card" />
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
