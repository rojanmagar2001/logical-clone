"use client";
import Image from "next/image";
import React from "react";
import { Parallax, useParallax } from "react-scroll-parallax";

const NavBar = () => {
  const iconParallex = useParallax<HTMLDivElement>({
    easing: "easeInOutQuad",
    translateX: [-20000, 0],
    rotate: [-360, 0],
  });
  return (
    <div className="fixed z-20 flex items-center justify-between w-full p-[6rem]">
      <h1 className="text-5xl font-semibold text-[#989D9D] pointer-events-none">
        logical
      </h1>
      <div ref={iconParallex.ref}>
        <Image
          src="/logo.svg"
          width={80}
          height={80}
          alt="logo"
          //   className="rotate-[45deg]"
        />
      </div>
    </div>
  );
};

export default NavBar;
