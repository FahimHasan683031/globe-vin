"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CommonHeading from "./Shard/comonHeading";

export const History = () => {
  return (
    <section className="text-center py-10">
      <CommonHeading>Vehicle History Market Booming</CommonHeading>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch px-4 md:px-8 lg:px-0 mt-10">
        
        {/* Left Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
          className="relative rounded-2xl p-[2px] bg-gradient-to-r from-[#EEEEEE] to-[#ED1C24] shadow-md w-full"
        >
          <div className="bg-white rounded-2xl px-6 sm:px-10 md:px-16 lg:px-[100px] py-6 sm:py-8 md:py-10 lg:py-12 text-left">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-[poppins] text-sm md:text-3xl text-[#ED1C24] mb-3"
            >
              The Problem Most Entrepreneurs Face
            </motion.h1>

            {[
              "Building a vehicle history platform from scratch costs $200K+ and takes 18+ months",
              "CARFAX API access requires huge volume commitments and enterprise contracts",
              "International data sources are nearly impossible to access independently",
              "Technical infrastructure and maintenance requires a full development team",
              "Compliance, security, and data management are overwhelming",
            ].map((text, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex gap-2 items-center align-middle"
              >
                <Image
                  src="/cross.png"
                  alt="Globe VIN"
                  width={24}
                  height={24}
                  className="w-4 md:w-6 h-4 md:h-6"
                />
                <span className="text-[9px] md:text-base font-[roboto] py-2 md:py-4">{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          whileInView={{ scale: 1, opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2,
            ease: "easeOut"
          }}
          className="relative rounded-2xl p-[2px] bg-gradient-to-r from-[#008F05] to-[#EEEEEE] shadow-md w-full"
        >
          <div className="bg-white rounded-2xl px-6 sm:px-10 md:px-16 lg:px-[100px] py-6 sm:py-8 md:py-10 lg:py-12 text-left">
            <motion.h1 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-[poppins] text-sm md:text-3xl text-[#008F05] mb-3"
            >
              Our Solution: Everything Ready On Day One
            </motion.h1>

            {[
              "Complete white label platform ready in 24 hours - no coding required",
              "CARFAX integration already negotiated and included in your package",
              "Chinese and Japanese vehicle databases pre-integrated and ready to use",
              "Add unlimited local APIs through our flexible connector framework",
              "Fully managed infrastructure, security, and compliance - we handle everything technical",
            ].map((text, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex gap-1 md:gap-2 items-center align-middle"
              >
                <Image
                  src="/correct.png"
                  alt="Globe VIN"
                  width={24}
                  height={24}
                  className="w-4 md:w-6 h-4 md:h-6"
                />
                <span className="text-[9px] md:text-base font-[roboto] py-2 md:py-4">{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};