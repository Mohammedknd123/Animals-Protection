"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillLampFill } from "react-icons/bs";

const sideVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function RegisterLeftSide() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sideVariants}
      className="lg:flex hidden flex-col px-4 py-8 gap-8 items-center flex-2 bg-light-blue-color rounded-l-xl dark:bg-gray-blue"
    >
      <motion.div
        variants={childVariants}
        className="items-start gap-2 flex w-[90%] ml-3"
      >
        <Image src="/logo.svg" width={30} height={30} alt="Logo" />
        <h3 className="text-2xl font-bold text-dark-blue dark:text-white">
          Animals <span className="text-blue-color">Protection</span>
        </h3>
      </motion.div>

      <motion.div
        variants={childVariants}
        className="w-[90%] border-4 border-white h-72 rounded-2xl overflow-hidden shadow-md"
        style={{ willChange: "transform" }}
      >
        <Image
          width={1000}
          height={1000}
          src="/assets/auth/register-img.png"
          alt="Register"
          priority
          className="object-cover object-center w-full h-full"
        />
      </motion.div>

      <motion.div variants={childVariants} className="w-[90%]">
        <h1 className="mb-6 text-2xl font-semibold text-dark-blue dark:text-white">
          Master the Mission
        </h1>
        <p className="font-extralight text-light-gray-color dark:text-gray-300">
          You are joining a network of over 2,400+ rescuers worldwide. Every
          profile helps save more lives.
        </p>
      </motion.div>

      <motion.div
        variants={childVariants}
        className="w-[90%] flex flex-col gap-4 p-4 bg-white rounded-xl dark:bg-dark-blue dark:text-white shadow-sm"
      >
        <h3 className="flex items-center gap-2 text-blue-color font-semibold">
          <BsFillLampFill /> RESCUE TIPS
        </h3>
        <div className="flex items-start gap-2 text-sm">
          <FaCheckCircle className="text-blue-color shrink-0 mt-0.5" />
          <p>
            <span className="font-semibold">Safety First:</span> Never put
            yourself in danger to reach an animal.
          </p>
        </div>
        <div className="flex items-start gap-2 text-sm">
          <FaCheckCircle className="text-blue-color shrink-0 mt-0.5" />
          <p>
            <span className="font-semibold">Gather Info:</span> Note breed,
            color, and behavior details.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
