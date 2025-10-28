import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className=" py-3 flex ">
      <div>
        <div className=" text-lg md:text-[40px] lg:text-[80px]  flex gap-6 items-center py-3 font-[poppins]">
          <h1>Turn </h1>
          <span>
            <Image
              src="/Frame 1.png"
              alt="logo"
              width={100}
              height={100}
              className="h-[100px] w-[250px] rounded-full object-cover"
            />
          </span>
          <h1>History Reports </h1>
        </div>
        <div className="text-lg md:text-[40px] lg:text-[80px]  font-[poppins] -mt-8">
          <h1>Into Your Revenue Stream</h1>
        </div>
      </div>
      <div className="flex gap-2 items-end ml-auto py-3 ">
        <button
          className="group cursor-pointer relative flex items-center md:gap-2 px-2 md:px-8 py-1 md:py-3 text-white font-medium 
      rounded-full overflow-hidden transition-all duration-300
      bg-[#6B3FA0] hover:bg-[#5b3590]
      shadow-[inset_0_0_10px_rgba(255,255,255,0.3)]
      "
        >
          <span className="relative z-10">Start Free 14 Days Trial</span>
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

          {/* Soft glow effect on the left side */}
          <span
            className="absolute left-0 top-0 w-10 h-full bg-gradient-to-r from-white/40 to-transparent
        rounded-full blur-xl"
          ></span>
        </button>

        <button
          className="group cursor-pointer relative flex items-center md:gap-2 px-2 md:px-8 py-1 md:py-3 text-black border border-black hover:bg-[#5b3590] hover:border-[#5b3590] hover:text-white rounded-full
      shadow-[inset_0_0_10px_rgba(255,255,255,0.3)]
      "
        >
          <span className="relative z-10">Watch 2 - Min Demo</span>

         
        </button>
      </div>
    </div>
  );
};
