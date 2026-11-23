"use client";

import { motion } from "framer-motion";
import Header from "@/app/components/landing_page/Header";
import { useState } from "react";

// Conteneur principal de la carte avec effet ressort doux
const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 25,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 16,
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

// Apparition séquentielle des éléments internes
const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function VerificationCode() {
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen h-full justify-center bg-light-blue-color/50 dark:bg-dark-blue overflow-hidden px-4">
      <Header />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={{ willChange: "transform, opacity" }}
        className="flex flex-col justify-center h-fit items-center gap-6 mt-52 p-8 bg-white dark:bg-dark-blue mb-16 rounded-2xl shadow-lg dark:border-2 dark:border-light-gray-color/50 dark:shadow-light-gray-color/50"
      >
        <motion.h1
          variants={itemVariants}
          className="text-dark-blue dark:text-white font-bold text-4xl text-center"
        >
          Enter Verification Code
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-light-gray-color text-center"
        >
          We have sent a code to your email
        </motion.p>

        <form className="space-y-6 w-full" onSubmit={handleSubmit}>
          <motion.div variants={itemVariants}>
            <input
              id="verification-code"
              name="code"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              required
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full rounded-2xl border border-light-gray-color p-3 text-dark-blue dark:text-white placeholder:text-light-gray-color focus:border-none focus:outline-blue-color text-sm bg-transparent text-center tracking-widest font-semibold"
              placeholder="123456"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              style={{ willChange: "transform" }}
              type="submit"
              className="group relative flex w-full justify-center rounded-lg bg-blue-color px-4 py-2 text-sm font-semibold text-white hover:bg-blue-color/95 shadow-md active:shadow-sm transition-shadow duration-200 cursor-pointer"
            >
              Verify Code
            </motion.button>
          </motion.div>
        </form>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          className="w-full flex justify-center items-center text-blue-color hover:underline text-sm font-medium cursor-pointer"
        >
          Resend Code
        </motion.button>
      </motion.div>
    </div>
  );
}
