import Image from "next/image";
import CommonHeading from "./Shard/comonHeading";

export const WhyChoseUs = () => {
  return (
    <section className="py-18 text-center">
      <div className="pt-10 pb-5">
        <CommonHeading>Why Choose Us</CommonHeading>

        <div className="flex gap-2 h-[700px]  ">
          <div>
            <div className="relative h-full  bg-[url('/choseus1.png')] bg-contain bg-no-repeat bg-bottom flex flex-col items-start p-3 justify-end rounded-[12px]">
            <h1 className="text-3xl mb-2 font-[poppins]  text-white">Trusted Data Transparency</h1>
            <p className="text-white text-left font-[roboto] text-base">Give your customers verified accident, mileage, and ownership data from global and Chinese databases all under your own brand.</p>
            </div>
          </div>

          <div className="flex flex-col gap-1 h-full">
             <div className="h-full  bg-[url('/choseus2.png')] bg-contain bg-no-repeat bg-bottom flex flex-col items-start p-3 justify-end rounded-[12px]">
            <h1 className="text-3xl mb-2 font-[poppins] text-white">Verified Global Network</h1>
            <p className="text-white text-left font-[roboto] text-base">Access trusted data from CARFAX, AutoCheck, Chinese databases, and local registries all unified for accuracy.</p>
            </div> 
            <div className="h-full   bg-[url('/choseus3.png')] bg-contain bg-no-repeat bg-bottom flex flex-col items-start p-3 justify-end rounded-[12px]">
            <h1 className="text-3xl mb-2 font-[poppins] text-white">Expert Franchise Support</h1>
            <p className="text-white text-left font-[roboto] text-base">Get full support, training, and infrastructure from an international network of automotive data professionals and tech partners.</p>
            </div>
          </div>

          <div>
             <div className="relative h-full  bg-[url('/choseus4.png')] bg-contain bg-no-repeat bg-bottom flex flex-col items-start p-3 justify-end rounded-[12px]">
            <h1 className="text-3xl mb-2 font-[poppins] text-white">Expert Franchise Support</h1>
            <p className="text-white text-left font-[roboto] text-base">Get full support, training, and infrastructure from an international network of automotive data professionals and tech partners.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
