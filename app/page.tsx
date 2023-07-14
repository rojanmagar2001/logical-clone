"use client";
import FullStackContainer from "@/components/FullStackContainer";
import HeroContainer from "@/components/HeroContainer";
import NavBar from "@/components/NavBar";
import VisualContainer from "@/components/VisualContainer";
import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="">
        <NavBar />
        <div className="relative overflow-hidden">
          <HeroContainer />
          <Parallax
            translateX={[0, 500]}
            translateY={[0, 300]}
            easing="easeInOut"
            speed={-10}
            className="absolute w-[400px] bottom-[900px] right-[40px]"
          >
            <Image src="/type.png" width={740} height={1180} alt="type" />
          </Parallax>
          <VisualContainer />
        </div>
        <FullStackContainer />
      </div>
    </ParallaxProvider>
  );
}
