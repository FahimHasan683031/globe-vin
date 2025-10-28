import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

export const CommonButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="group flex items-center gap-2 px-6 md:px-8 py-3 bg-[#6B3FA0] hover:bg-[#5b3590]
    text-white text-sm md:text-base font-medium rounded-full transition-all duration-300 cursor-pointer">
      {children}
      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </button>
  );
};