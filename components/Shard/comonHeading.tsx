import { ReactNode } from "react";

const CommonHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className=" text-2xl md:text-[40px] lg:text-[60px]  text-black font-[poppins] font-semibold mb-1 md:mb-6 lg:mb-4">
      {children}
    </h1>
  );
};

export default CommonHeading;