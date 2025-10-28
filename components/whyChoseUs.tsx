import Image from "next/image";
import CommonHeading from "./Shard/comonHeading";

export const WhyChoseUs = () => {
  return (
    <section className="py-18 text-center">
      <div className="pt-10 pb-5">
        <CommonHeading>Why Choose Us</CommonHeading>
        <div>
          <div>
            <div className="relative  h-[900px] bg-[url('/choseus1.png')] bg-cover bg-bottom flex flex-col items-center justify-end rounded-xl">
            <h1 className="text-3xl font-bold text-white">Trusted Data Transparency</h1>
            <p className="text-white">Give your customers verified accident, mileage, and ownership data from global and Chinese databases all under your own brand.</p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
