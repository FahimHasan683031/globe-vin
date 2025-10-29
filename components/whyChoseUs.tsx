"use client";

import { motion, Variants } from "framer-motion";
import CommonHeading from "./Shard/comonHeading";

export const WhyChoseUs = () => {
  // Zoom-in animation variants
  const zoomIn: Variants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-12 text-center">
      <div className="pt-10 pb-5">
        <CommonHeading>Why Choose Us</CommonHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-start">
          {/* Card 1 */}
          <motion.div
            className="w-full max-w-[580px] mx-auto"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className="relative h-[377px] lg:h-[700px] w-full 
                        bg-[url('/choseus1.png')] bg-contain bg-no-repeat bg-bottom 
                        flex flex-col items-start p-3 justify-end rounded-[12px]"
            >
              <h1 className="text-sm md:text-3xl mb-2 font-[poppins] text-white">
                Trusted Data Transparency
              </h1>
              <p className="text-white text-left font-[roboto] text-xs md:text-base">
                Give your customers verified accident, mileage, and ownership
                data from global and Chinese databases all under your own brand.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="w-full max-w-[580px] mx-auto flex flex-col gap-4"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className="h-[180px] lg:h-[340px] w-full 
                        bg-[url('/choseus2.png')] bg-contain bg-no-repeat bg-bottom 
                        flex flex-col items-start p-3 justify-end rounded-[12px]"
            >
              <h1 className="text-sm md:text-3xl mb-2 font-[poppins] text-white">
                Verified Global Network
              </h1>
              <p className="text-white text-left font-[roboto] text-xs md:text-base">
                Access trusted data from CARFAX, AutoCheck, Chinese databases,
                and local registries all unified for accuracy.
              </p>
            </div>
            <div
              className="h-[180px] lg:h-[340px] w-full 
                        bg-[url('/choseus3.png')] bg-contain bg-no-repeat bg-bottom 
                        flex flex-col items-start p-3 justify-end rounded-[12px]"
            >
              <h1 className="text-sm md:text-3xl mb-2 font-[poppins] text-white">
                Expert Franchise Support
              </h1>
              <p className="text-white text-left font-[roboto] text-xs md:text-base">
                Get full support, training, and infrastructure from an
                international network of automotive data professionals and tech
                partners.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="w-full max-w-[580px] mx-auto"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className="h-[377px] lg:h-[700px] w-full 
                        bg-[url('/choseus4.png')] bg-contain bg-no-repeat bg-bottom 
                        flex flex-col items-start p-3 justify-end rounded-[12px]"
            >
              <h1 className="text-sm md:text-3xl mb-2 font-[poppins] text-white">
                Expert Franchise Support
              </h1>
              <p className="text-white text-left font-[roboto] text-xs md:text-base">
                Get full support, training, and infrastructure from an
                international network of automotive data professionals and tech
                partners.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
