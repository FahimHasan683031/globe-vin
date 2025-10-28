"use client";

import { ArrowUpRight, Search } from "lucide-react";
import Image from "next/image";
import { CommonButton } from "./Shard/comonButton";

export const Banner = () => {
  return (
    <section className="relative  h-[900px] bg-[url('/hero-banner.jpg')] bg-cover bg-center flex flex-col items-center justify-end rounded-xl">
      {/* Content */}
      <div className="flex gap-4 items-center align-middle mb-5">
        <div className="flex  w-[500px] h-14 bg-[#C3C3C3]/10 backdrop-blur-lg border border-white/20 rounded-full overflow-hidden px-6 items-center  ">
          <Search className="w-6 h-6 text-gray-300 mr-3" />
          <input
            type="text"
            placeholder="Enter 17-digit VIN (e.g., 1HGCM82633A123456)"
            className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-sm md:text-base"
          />
        </div>
        <CommonButton>Search VIN</CommonButton>
      </div>
      <div className="flex items-center justify-center gap-4 bg-white p-2 rounded-t-2xl w-[480px] ">
        <Image src="/Frame 4.png" alt="Carfax Logo" width={150} height={50} />
        <p className=" text-black text-sm md:text-base font-medium">
          Launch your branded vehicle history business in 24 hours with our
          complete white label solution. CARFAX integration, global databases,
          and unlimited earning potential.
        </p>
      </div>
    </section>
  );
};
