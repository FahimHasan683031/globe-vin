import { ReactNode } from "react";

const CommonHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="text-[48px]  text-black font-[poppins] font-semibold mb-8">
      {children}
    </h1>
  );
};

export default CommonHeading;