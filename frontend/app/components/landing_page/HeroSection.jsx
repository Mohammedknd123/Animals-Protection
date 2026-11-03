"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { IoPawSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }, 
  },
};

export default function Hero() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={heroVariants}
      className="w-full flex justify-center max-h-screen mb-18 bg-white dark:bg-dark-blue px-8 lg:px-16 md:px-8 sm:px-6 py-16 lg:py-8 relative overflow-hidden"
    >
      <div className="flex gap-8 flex-col w-full md:w-1/2 lg:w-1/2 sm:w-full h-full z-10">
        <motion.h1
          variants={textVariants}
          className="w-full text-dark-blue dark:text-white text-4xl lg:text-6xl sm:text-5xl leading-[1.2]"
        >
          Every Animal Deserves{" "}
          <span className="text-blue-color">A Second Chance.</span>
        </motion.h1>

        <motion.p
          variants={textVariants}
          className="text-light-gray-color lg:text-xl md:text-lg"
        >
          RescueConnect streamlines the reporting of animals in distress. Our
          professional platform bridges the gap between concerned citizens,
          expert veterinarians, and verified refuges.
        </motion.p>

        <motion.div variants={textVariants}>
          <Link
            className="flex w-fit text-white font-bold bg-blue-color px-5 py-3 rounded-2xl hover:bg-blue-color/90 hover:gap-2 transition-all duration-300"
            href="/login"
          >
            <span>Discover</span> <ArrowRight className="ml-1" />
          </Link>
        </motion.div>
      </div>

      {/* Right Image Graphic Wrapper */}
      <motion.div
        variants={imageVariants}
        className="flex items-start justify-end w-1/2 md:w-1/2 lg:w-1/2 ml-3 max-[700px]:hidden z-10"
      >
        <Image
          src="/assets/landing/hero-img1.jpg"
          alt="hero img"
          width={500}
          height={500}
          className="lg:w-110 lg:h-110 md:h-94 md:w-94 sm:h-64 sm:w-64 rounded-full shadow-2xl dark:shadow-light-blue-color/20 overflow-hidden hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute z-0 top-0 right-5 rotate-45"
      >
        <IoPawSharp
          size={60}
          className="text-blue-color opacity-10 dark:opacity-20"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 4.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5,
        }}
        className="absolute z-0 top-0 left-5 rotate-180"
      >
        <IoPawSharp
          size={60}
          className="text-blue-color opacity-10 dark:opacity-20"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{
          duration: 5.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
        className="absolute z-0 top-1/2 right-1/2 rotate-45"
      >
        <IoPawSharp
          size={60}
          className="text-blue-color opacity-10 dark:opacity-20"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.2,
        }}
        className="absolute z-0 top-[20%] right-1/2"
      >
        <IoPawSharp
          size={30}
          className="text-blue-color opacity-10 dark:opacity-20"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{
          duration: 4.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.7,
        }}
        className="absolute z-0 top-4 right-1/3 -rotate-45"
      >
        <IoPawSharp
          size={30}
          className="text-blue-color opacity-10 dark:opacity-20"
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{
          duration: 5.0,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1.2,
        }}
        className="absolute z-0 bottom-[20%] left-1/3 rotate-12"
      >
        <IoPawSharp
          size={35}
          className="text-blue-color opacity-10 dark:opacity-20"
        />
      </motion.div>
    </motion.div>
  );
}
