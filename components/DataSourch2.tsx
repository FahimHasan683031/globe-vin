import Image from "next/image";
import CommonHeading from "./Shard/comonHeading";

export const DataSourch2 = () => {
  return (
    <section className="py-18 text-center ">
      <div className="pt-10 pb-5">
        <CommonHeading>Our Trusted Data Sources</CommonHeading>
      </div>
      <Image
        src="/datraSourch.png"
        alt="dataSourch"
        width={1500}
        height={100}
        className="h-auto mx-auto "
      />
    </section>
  );
};
