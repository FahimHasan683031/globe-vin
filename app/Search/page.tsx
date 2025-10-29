"use client";

import CommonHeading from "@/components/Shard/comonHeading";
import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

export default function VINSearch() {
  const [input, setInput] = useState("");
  const maxChars = 17;

  const handleValidate = () => {
    if (input.trim()) {
      console.log("Validating:", input);
    }
  };

  return (
    <div>
      {/* Heading */}
      <div className="text-center my-10 px-4 sm:px-6 md:px-8">
        <CommonHeading>Enter Vehicle Identification Number</CommonHeading>
        <p className="text-[#45556C] text-base sm:text-lg md:text-[30px] font-normal font-[roboto]">
          Get instant access to comprehensive vehicle history reports
        </p>
      </div>

      <main className=" bg-gradient-to-b max-w-[1800px]  ">
        {/* Input Section */}
        <div className="flex justify-center items-center w-full">
          <div
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-3
                  h-[244px] w-full 
                  px-[20px] sm:px-[80px] md:px-[318px] py-[40px] sm:py-[80px] 
                  bg-[#F4F4F4] border border-[#DDD] rounded-[16px] 
                  shadow-[1px_2px_4px_0_rgba(0,0,0,0.12)]"
          >
            {/* Input Field */}
            <div className="relative flex-1">
              <SearchIcon
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value.slice(0, maxChars))}
                onKeyDown={(e) => e.key === "Enter" && handleValidate()}
                placeholder="Enter 17-digit VIN (e.g., 1HGCM82633A004352)"
                className="w-full rounded-full border border-slate-200 bg-white px-12 py-3 text-sm sm:text-base placeholder-slate-400 outline-none transition-all focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
              />
              
            </div>
            

            <button
              onClick={handleValidate}
              className="group relative flex items-center gap-2 md:gap-2 px-6 py-3 text-white font-medium 
             rounded-full overflow-hidden transition-all duration-300
             shadow-[inset_-2px_-2px_2px_rgba(255,255,255,0.4),inset_2px_2px_2px_rgba(255,255,255,0.4),2px_2px_10px_8px_rgba(118,75,162,0.3)] cursor-pointer"
              style={{ background: "#764BA2", borderRadius: "200px" }}
            >
              {/* Button Text */}
              <span className="relative z-10 text-[12px] md:text-base">
                Validate
              </span>

              {/* Search Icon */}
              <SearchIcon className="w-4 h-4 md:w-5 md:h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

              {/* Soft glow effect on the left side */}
              <span
                className="absolute left-0 top-0 w-10 h-full bg-gradient-to-r from-white/40 to-transparent
                   rounded-full blur-xl"
              ></span>
            </button>

            
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="text-lg font-bold text-[#B69AD3]">1M+</div>
                <div className="mt-2 text-sm text-[#45556C]">
                  Reports Delivered
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="text-lg font-bold text-[#B69AD3]">50+</div>
                <div className="mt-2 text-sm text-slate-600">Data Sources</div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="text-lg font-bold text-[#B69AD3]">99.9%</div>
                <div className="mt-2 text-sm text-slate-600">Accuracy Rate</div>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="text-lg font-bold text-[#B69AD3]">24/7</div>
                <div className="mt-2 text-sm text-slate-600">
                  Customer Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
