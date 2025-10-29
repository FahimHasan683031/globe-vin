"use client";

import Image from "next/image";
import CommonHeading from "./Shard/comonHeading";
import { motion, Variants } from "framer-motion";

export const DataSourch = () => {
  const cards = [
    { img: "/data1.png", title: "CARFAX USA" },
    { img: "/data2.png", title: "CARFAX Canada" },
    { img: "/data3.png", title: "China Auto Database" },
    { img: "/data4.png", title: "Japan Vehicle Registry" },
    { img: "/data5.png", title: "Custom API Support" },
  ];

  // Correct Variants type
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: custom * 0.15, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-2 md:py-12 text-center">
      <div className="pt-10 pb-5">
        <CommonHeading>Our Trusted Data Sources</CommonHeading>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 justify-center items-center gap-2 md:gap-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            custom={index} // pass index to the variant function
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="px-[20px] md:px-[50px] lg:px-[70px] py-[22px] md:p-8 
                       border border-gray-200 rounded-lg 
                       hover:shadow-lg transition-shadow duration-300 cursor-pointer group 
                       w-[180px] md:w-[250px] lg:w-[350px] flex flex-col items-center"
          >
            <Image
              src={card.img}
              alt={card.title}
              width={100}
              height={100}
              className="w-[121px] md:w-[170px] lg:w-[220px] h-[121px] md:h-[170px] lg:h-[220px] mx-auto object-contain"
            />

            <h1 className="text-sm md:text-lg lg:text-xl mt-6 font-roboto">
              {card.title}
            </h1>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
