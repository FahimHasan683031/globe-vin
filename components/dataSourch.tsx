import Image from "next/image";
import CommonHeading from "./Shard/comonHeading";

export const DataSourch = () => {
  return (
    <section className="py-18 text-center">
     <div className="pt-10 pb-5">
       <CommonHeading>Our Trusted Data Sources</CommonHeading>

     </div>
      <div className="flex  justify-center items-center gap-6">
        <div className=" p-6 md:p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer group w-[350px] ">
          <div>
            <Image
              src="/data1.png"
              alt="dataSourch"
              width={100}
              height={100}
              className="w-[220px] h-[250px] mx-auto"
            />
          </div>
          <div>
            <h1 className="text-xl mt-6 font-[roboto]">CARFAX USA</h1>
          </div>
        </div>
        <div className=" p-6 md:p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer group w-[350px]">
          <div>
            <Image
              src="/data2.png"
              alt="dataSourch"
              width={100}
              height={100}
              className="w-[220px] h-[250px] mx-auto"
            />
          </div>
           <div>
            <h1 className="text-xl mt-6 font-[roboto]">CARFAX Canada</h1>
          </div>
        </div>
        <div className=" p-6 md:p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer group w-[350px]">
          <div>
            <Image
              src="/data3.png"
              alt="dataSourch"
              width={100}
              height={100}
              className="w-[220px] h-[250px] mx-auto"
            />
          </div>
           <div>
            <h1 className="text-xl mt-6 font-[roboto]">China Auto Database</h1>
          </div>
        </div>
        <div className=" p-6 md:p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer group w-[350px]">
          <div>
            <Image
              src="/data4.png"
              alt="dataSourch"
              width={100}
              height={100}
              className="w-[220px] h-[250px] mx-auto"
            />
          </div>
           <div>
            <h1 className="text-xl mt-6 font-[roboto]">Japan Vehicle Registry</h1>
          </div>
        </div>
        <div className=" p-6 md:p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer group w-[360px]">
          <div>
            <Image
              src="/data5.png"
              alt="dataSourch"
              width={100}
              height={100}
              className="w-[220px] h-[250px] mx-auto"
            />
          </div>
           <div>
            <h1 className="text-xl mt-6 font-[roboto]">Custom API Support</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
