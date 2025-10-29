import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className=" py-3 flex ">
      <div className="flex-2 ">
        <div className=" text-lg md:text-[40px] lg:text-[80px] gap-1 flex md:gap-3 lg:gap-6 items-center py-3 font-medium  font-[poppins]">
          <h1>Turn </h1>
          <span>
            <Image
              src="/Frame 1.png"
              alt="logo"
              width={100}
              height={100}
              className=" h-[30] md:h-[60] lg:h-[100px] w-[70px] md:w-[150px] lg:w-[250px] rounded-full object-cover"
            />
          </span>
          <h1>History Reports </h1>
        </div>
        <div className=" text-lg md:text-[40px] lg:text-[80px]  items-center font-medium  font-[poppins] -mt-3">
          <h1>Into Your Revenue Stream</h1>
        </div>
      </div>

      <div className="flex gap-2 items-end ml-auto py-3 flex-1">
        <button
          className="group cursor-pointer relative flex items-center md:gap-2 px-2 md:px-8 py-2 md:py-3 text-white font-medium 
  rounded-full overflow-hidden transition-all duration-300
  shadow-[4px_2px_4px_0_rgba(255,255,255,0.6)_inset]"
          style={{
            borderRadius: "200px",
            background: "#764BA2",
          }}
        >
          <span className="relative z-10 text-[10px] md:text-base">
            Start Free 14 Days Trial
          </span>
          <ArrowUpRight className="w-5 h-5 hidden lg:block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

          {/* Soft glow effect on the left side */}
          <span
            className="absolute left-0 top-0 w-10 h-full bg-gradient-to-r from-white/40 to-transparent
    rounded-full blur-xl"
          ></span>
        </button>

        <button
          className="group hidden cursor-pointer relative md:flex items-center md:gap-2 px-2 md:px-8 py-1 md:py-3 text-black border border-black hover:bg-[#5b3590] hover:border-[#5b3590] hover:text-white rounded-full
      shadow-[inset_0_0_10px_rgba(255,255,255,0.3)]
      "
        >
          <span className="relative z-10">Watch 2 - Min Demo</span>
        </button>
      </div>
    </div>
  );
};
