"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sideVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const textFadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function LoginImage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sideVariants}
      className="relative hidden lg:block flex-2 h-full border-r border-gray-200 overflow-hidden"
    >
      {/* Zoom panoramique subtil sur l'image */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full h-screen"
        style={{ willChange: "transform" }}
      >
        <Image
          width={1000} // Augmenté pour éviter la pixelisation sur grand écran
          height={1000}
          src="/assets/auth/login-img4.jpg"
          alt="Login"
          priority
          className="object-cover object-center h-screen w-full"
        />
      </motion.div>

      <div className="absolute inset-0 w-full h-screen bg-linear-to-r to-light-blue-color/30 from-blue-color/50 dark:from-dark-blue p-16 flex flex-col gap-32">
        <motion.div
          variants={textFadeVariants}
          className="flex items-center gap-3"
        >
          <Image src="/logo.svg" width={40} height={40} alt="Logo" />
          <h3 className="text-3xl font-bold text-shadow-lg text-white">
            Animals Protection
          </h3>
        </motion.div>

        <motion.div variants={textFadeVariants} className="w-[70%]">
          <h1 className="text-6xl text-shadow-lg font-bold text-white leading-tight">
            Find your new furry best friend today.
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );
}
