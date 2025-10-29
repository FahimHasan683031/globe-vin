"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import { CommonButton } from "./Shard/comonButton";

export const Banner = () => {
  return (
    <section
      className="
        relative w-full max-w-[1872px] mx-auto 
        aspect-[2.05/1]     /* keeps same height ratio across devices */
        bg-[url('/hero-banner.jpg')] bg-cover bg-center
        flex flex-col items-center justify-end rounded-xl overflow-hidden
      "
    >
      {/* Search bar + Button (hidden on mobile) */}
      <div className="hidden md:flex gap-4 items-center mb-5">
        <div className="flex w-[500px] h-14 bg-[#C3C3C3]/10 backdrop-blur-lg border border-white/20 rounded-full overflow-hidden px-6 items-center">
          <Search className="w-6 h-6 text-gray-300 mr-3" />
          <input
            type="text"
            placeholder="Enter 17-digit VIN (e.g., 1HGCM82633A123456)"
            className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-sm md:text-base"
          />
        </div>
        <CommonButton>Search VIN</CommonButton>
      </div>

      {/* Bottom Info Card */}
      <div
        className="
          flex items-center justify-center gap-4 bg-white 
          p-2 rounded-t-2xl 
          w-[60%] sm:w-[380px] md:w-[480px] lg:w-[550px]
          transition-all duration-500
        "
      >
        <Image
          src="/Frame 4.png"
          alt="Carfax Logo"
          width={150}
          height={50}
          className="object-contain"
        />
        <p className="text-black text-[8px] sm:text-sm md:text-base font-normal text-left md:font-medium ">
          Launch your branded vehicle history business in 24 hours with our
          complete white label solution. CARFAX integration, global databases,
          and unlimited earning potential.
        </p>
      </div>
    </section>
  );
};
