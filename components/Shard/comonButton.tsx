import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

export const CommonButton = ({ children }: { children: ReactNode }) => {
  return (
    <button
      className="group relative flex items-center md:gap-2 px-2 md:px-8 py-2 md:py-3 
      text-white text-[10px] md:text-base 
      rounded-full overflow-hidden transition-all duration-300 cursor-pointer
      shadow-[0_4px_10px_rgba(0,0,0,0.3),_4px_2px_4px_0_rgba(255,255,255,0.6)_inset]
      hover:brightness-110"
      style={{
        borderRadius: "200px",
        background: "#764BA2",
      }}
    >
      <span className="relative z-10">{children}</span>
      <ArrowUpRight className="w-5 h-5 hidden lg:block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

      {/* Soft glow effect on the left side */}
      <span
        className="absolute left-0 top-0 w-10 h-full bg-gradient-to-r from-white/40 to-transparent
        rounded-full blur-xl"
      ></span>
    </button>
  );
};
