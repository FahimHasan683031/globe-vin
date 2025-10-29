import { CommonButton } from "./Shard/comonButton";

export const BannerBottom = () => {
  return (
    <section className="py-3 md:py-[190] px-12 mt-5 text-left max-w-[1800px] mx-auto bg-[url('/bottom-banner.png')] bg-cover bg-center rounded-[8px] md:rounded-xl mb-10">
      <div className=" max-w-[1000px] mr-auto">
        <h1 className="text-[14px] md:text-[40px] lg:text-[64px]  text-white font-[poppins] font-semibold mb-1 md:mb-4">
          Get Accurate Vehicle Reports <span className="italic">Instantly</span>
        </h1>
        <p className="text-[10px] md:text-[24px] text-white font-[roboto] mb-3 md:mb-8">
          Search any VIN and access trusted global data instantly. Build your
          business and empower clients with reliable vehicle insights.
        </p>
      </div>
      <CommonButton>Search VIN</CommonButton>
    </section>
  );
};
