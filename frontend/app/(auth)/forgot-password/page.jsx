"use client";

import { motion } from "framer-motion";
import Header from "@/app/components/landing_page/Header";
import Link from "next/link";
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

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("a code has been sent to your emailbox");
  };

  return (
    <div className="flex min-h-screen h-full justify-center bg-light-blue-color/50 dark:bg-dark-blue overflow-hidden px-4">
      <Header />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        style={{ willChange: "transform, opacity" }}
        className="flex flex-col justify-center h-fit items-center gap-6 mt-52 p-8 bg-white dark:bg-dark-blue mb-16 rounded-2xl shadow-lg dark:border-2 dark:border-light-gray-color/50 dark:shadow-light-gray-color/50 w-full max-w-md"
      >
        <motion.h1
          variants={itemVariants}
          className="text-dark-blue dark:text-white font-bold text-4xl text-center"
        >
          Forgot Password?
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-light-gray-color text-center"
        >
          Enter your email and we will send a reset code
        </motion.p>

        <form className="space-y-6 w-full" onSubmit={handleSubmit}>
          <motion.div variants={itemVariants}>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-light-gray-color p-3 text-dark-blue dark:text-white placeholder:text-light-gray-color focus:border-none focus:outline-blue-color text-sm bg-transparent"
              placeholder="nom@exemple.com"
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
              Send reset Link
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              href="/login"
              className="flex justify-center items-center text-blue-color hover:underline text-sm font-medium"
            >
              Back to Login
            </Link>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
