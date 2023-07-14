import Image from "next/image";
import React from "react";

const FullStackContainer = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="max-w-[460px] max-h-[300px] w-full h-full">
        <div className="p-6 flex flex-col items-start bg-[#d3e1d2] gap-y-4 rounded-lg shadow-2xl border-b-black/5 border-b-[.5px]">
          <div className="bg-black w-[26px] text-center rounded-[4px] mt-6 mb-3">
            <h1 className="text-white font-medium">P</h1>
          </div>
          <div className="w-full flex flex-row justify-between">
            <h2 className="font-semibold">Production</h2>
            <div className="text-black w-[18px] h-[18px] bg-transparent rounded-full border-[1px] border-black  relative text-xl">
              <span className="absolute bottom-[-1px] left-[17%]  tracking-[-1px]">
                ...
              </span>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex justify-between items-center gap-x-2">
              <div className="w-[10px] h-[10px] bg-black rounded-full translate-y-[1px]"></div>
              <h3 className="text-[12px] leading-tight font-bold text-black/40 ">
                Running
              </h3>
            </div>
            <div className="text-[12px] leading-tight font-bold text-black/40">
              146 RPM
            </div>
          </div>
          <div className="w-full flex justify-between relative -translate-x-1">
            <div className="flex justify-between items-center gap-x-1">
              <Image
                src="/git.svg"
                width={20}
                height={20}
                alt="git"
                className="opacity-40"
              />
              <div className="text-[11px] leading-tight font-bold text-black/40">
                02242023-2021
              </div>
            </div>
            <div className="flex items-center gap-x-1 translate-x-1">
              <div className="text-[11px] leading-tight font-bold text-black/40">
                Jun 15, 2023 - 13:47
              </div>
              <Image
                src="/upload.png"
                width={14.5}
                height={14.5}
                alt="upload"
                className="opacity-80 -translate-y-[1px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStackContainer;
