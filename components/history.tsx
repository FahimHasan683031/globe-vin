import Image from "next/image";
import CommonHeading from "./Shard/comonHeading";

export const History = () => {
  return (
    <section className="text-center">
      <CommonHeading>Vehicle History Market Booming</CommonHeading>

      <div className="flex gap-4">


        <div className="rounded-xl  border border-red-400 w-full px-[100px] py-12 text-left">
           <h1 className="font-[poppins] text-3xl text-[#ED1C24] mb-3">
            The Problem Most Entrepreneurs Face
          </h1>
          <div className="flex gap-2 items-center align-middle">
            <Image
              src="/cross.png"
              alt="Globe VIN"
              width={100}
              height={100}
              className=" w-6 h-6"
            />
            <span className="text-base font-[roboto] py-4">
              Building a vehicle history platform from scratch costs $200K+ and
              takes 18+ months
            </span>
          </div>
          <div className="flex gap-2 items-center align-middle">
            <Image
              src="/cross.png"
              alt="Globe VIN"
              width={100}
              height={100}
              className=" w-6 h-6"
            />
            <span className="text-base font-[roboto] py-4">
              CARFAX API access requires huge volume commitments and enterprise contracts

            </span>
          </div>
          <div className="flex gap-2 items-center align-middle">
            <Image
              src="/cross.png"
              alt="Globe VIN"
              width={100}
              height={100}
              className=" w-6 h-6"
            />
            <span className="text-base font-[roboto] py-4">
             International data sources are nearly impossible to access independently

            </span>
          </div>
          <div className="flex gap-2 items-center align-middle">
            <Image
              src="/cross.png"
              alt="Globe VIN"
              width={100}
              height={100}
              className=" w-6 h-6"
            />
            <span className="text-base font-[roboto] py-4">
              Technical infrastructure and maintenance requires a full development team

            </span>
          </div>
          <div className="flex gap-2 items-center align-middle">
            <Image
              src="/cross.png"
              alt="Globe VIN"
              width={100}
              height={100}
              className=" w-6 h-6"
            />
            <span className="text-base font-[roboto] py-4">
              Compliance, security, and data management are overwhelming

            </span>
          </div>
        </div>


        <div className="rounded-xl  border border-red-400 w-full px-[100px] py-12 text-left">
          <h1 className="font-[poppins] text-3xl text-[#008F05] mb-3">
            Our Solution: Everything Ready On Day One
          </h1>

          <div className="flex gap-2 items-center align-middle">
            <Image
              src="/correct.png"
              alt="Globe VIN"
              width={100}
              height={100}
              className=" w-6 h-6"
            />
            <span className="text-base font-[roboto] py-4">
              Complete white label platform ready in 24 hours - no coding required
            </span>
          </div>
          <div className="flex gap-2 items-center align-middle">
            <Image
              src="/correct.png"
              alt="Globe VIN"
              width={100}
              height={100}
              className=" w-6 h-6"
            />
            <span className="text-base font-[roboto] py-4">
              CARFAX integration already negotiated and included in your package
            </span>
          </div>
          <div className="flex gap-2 items-center align-middle">
            <Image
              src="/correct.png"
              alt="Globe VIN"
              width={100}
              height={100}
              className=" w-6 h-6"
            />
            <span className="text-base font-[roboto] py-4">
              Chinese and Japanese vehicle databases pre-integrated and ready to use
            </span>
          </div>
          <div className="flex gap-2 items-center align-middle">
            <Image
              src="/correct.png"
              alt="Globe VIN"
              width={100}
              height={100}
              className=" w-6 h-6"
            />
            <span className="text-base font-[roboto] py-4">
             Add unlimited local APIs through our flexible connector framework
            </span>
          </div>
          <div className="flex gap-2 items-center align-middle">
            <Image
              src="/correct.png"
              alt="Globe VIN"
              width={100}
              height={100}
              className=" w-6 h-6"
            />
            <span className="text-base font-[roboto] py-4">
              Fully managed infrastructure, security, and compliance - we handle everything technical

            </span>
          </div>
        </div>


      </div>
    </section>
  );
};
