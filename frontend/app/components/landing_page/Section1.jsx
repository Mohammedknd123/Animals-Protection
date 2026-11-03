"use client";

import { motion } from "framer-motion";
import { RiUserVoiceFill } from "react-icons/ri";
import { PiVectorTwoBold } from "react-icons/pi";
import { LuHandshake } from "react-icons/lu";

// 1. Parent container variant that triggers and controls children sequence
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time gap (0.2s) between the appearance of each step
      delayChildren: 0.1, // Slight delay before starting the step sequence
    },
  },
};

// 2. Individual card/content animation states
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 14, // Gives it a smooth, realistic motion instead of a hard bounce
    },
  },
};

export default function SectionOne() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Triggers once when 20% of the section is visible
      variants={containerVariants}
      className="w-full flex flex-col justify-between items-center bg-light-blue-color dark:bg-gray-blue px-8 lg:px-16 md:px-8 sm:px-6 py-22 mb-10 gap-22"
    >
      {/* Title & Description Header */}
      <motion.div variants={itemVariants} className="flex flex-col gap-4 w-1/2">
        <h2 className="text-dark-blue dark:text-white text-center lg:text-6xl text-4xl font-black">
          How it <span className="text-blue-color">Works</span>
        </h2>
        <p className="text-light-gray-color text-center lg:text-2xl md:text-xl sm:text-lg">
          Our streamlined approach ensures every rescue mission is efficient,
          coordinated, and successful. We have built the infrastructure so you
          can focus on the care.
        </p>
      </motion.div>

      {/* Grid of Steps */}
      <div className="flex justify-between gap-32 lg:flex-row md:flex-row flex-col w-full">
        {/* Step 01 */}
        <motion.div
          variants={itemVariants}
          className="w-full flex justify-between items-center flex-col gap-6 "
        >
          <span className="relative shadow-lg flex justify-center items-center p-8 bg-white dark:bg-dark-blue rounded-xl text-blue-color hover:text-white dark:hover:text-white hover:bg-blue-color transition-colors duration-300">
            <RiUserVoiceFill size={40} />
            <div className="absolute -top-3 -right-3 bg-blue-color text-white font-bold px-2 py-1 rounded-full">
              01
            </div>
          </span>
          <h3 className="text-dark-blue dark:text-white text-2xl font-bold">
            Report Animal
          </h3>
          <p className="text-light-gray-color text-lg text-center">
            Instantly share the location and critical details of an animal in
            distress through our mobile interface.{" "}
          </p>
        </motion.div>

        {/* Step 02 */}
        <motion.div
          variants={itemVariants}
          className="w-full flex justify-between items-center flex-col gap-6 "
        >
          <span className="relative shadow-lg flex justify-center items-center p-8 bg-white dark:bg-dark-blue rounded-xl text-blue-color hover:text-white dark:hover:text-white hover:bg-blue-color transition-colors duration-300">
            <PiVectorTwoBold size={40} />
            <div className="absolute -top-3 -right-3 bg-blue-color text-white font-bold px-2 py-1 rounded-full">
              02
            </div>
          </span>
          <h3 className="text-dark-blue dark:text-white text-2xl font-bold">
            Smart Dispatch
          </h3>
          <p className="text-light-gray-color text-lg text-center">
            AI-powered routing alerts the nearest certified veterinarians and
            transport volunteers in real-time.
          </p>
        </motion.div>

        {/* Step 03 */}
        <motion.div
          variants={itemVariants}
          className="w-full flex justify-between items-center flex-col gap-6 "
        >
          <span className="relative shadow-lg flex justify-center items-center p-8 bg-white dark:bg-dark-blue rounded-xl text-blue-color hover:text-white dark:hover:text-white hover:bg-blue-color transition-colors duration-300">
            <LuHandshake size={40} />
            <div className="absolute -top-3 -right-3 bg-blue-color text-white font-bold px-2 py-1 rounded-full">
              03
            </div>
          </span>
          <h3 className="text-dark-blue dark:text-white text-2xl font-bold">
            Recovery & Care
          </h3>
          <p className="text-light-gray-color text-lg text-center">
            Coordinated care paths lead from emergency stabilization to
            placement in a verified refuge.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
