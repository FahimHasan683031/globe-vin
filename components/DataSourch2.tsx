"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CommonHeading from "./Shard/comonHeading";

export const DataSourch2 = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-0 md:py-10 lg:py-18 mt-5 text-center w-full max-w-[1500px] mx-auto sm:px-6 md:px-8"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="pt-10 pb-5"
      >
        <CommonHeading>Our Trusted Data Sources</CommonHeading>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="flex justify-center items-center"
      >
        <Image
          src="/App.png"
          alt="dataSourch"
          width={1500}
          height={100}
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </motion.section>
  );
};
