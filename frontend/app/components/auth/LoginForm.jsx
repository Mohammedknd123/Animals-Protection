"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ThemeToggle } from "@/app/components/ui/ThemeToggle";

const formBoxVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      staggerChildren: 0.1, // Fait apparaître les inputs l'un après l'autre
      delayChildren: 0.2,
    },
  },
};

const inputRowVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

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

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col min-h-screen flex-1 items-center justify-center bg-white dark:bg-dark-blue px-4 overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-4 right-4"
      >
        <ThemeToggle />
      </motion.div>
      <motion.div
        variants={textFadeVariants}
        className="lg:hidden items-center gap-3 mb-16 flex"
      >
        <Image src="/logo.svg" width={40} height={40} alt="Logo" />
        <h3 className="text-3xl font-bold text-shadow-lg text-dark-blue dark:text-white">
          Animals Protection
        </h3>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={formBoxVariants}
        style={{ willChange: "transform, opacity" }}
        className="w-full max-w-md space-y-8 rounded-xl bg-white dark:bg-dark-blue p-8 shadow-lg dark:border-light-gray-color dark:border dark:shadow-light-gray-color/50"
      >
        <motion.div variants={inputRowVariants}>
          <h2 className="mt-6 font-semibold text-3xl text-dark-blue dark:text-white">
            Welcome Back!
          </h2>
          <p className="mt-2 text-sm text-light-gray-color">
            Ready to meet your new best friend?
          </p>
        </motion.div>

        <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
          <div className="space-y-8 rounded-md">
            {/* Champ Email */}
            <motion.div variants={inputRowVariants}>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-dark-blue dark:text-white mb-3"
              >
                Email Address
              </label>
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

            {/* Champ Password */}
            <motion.div variants={inputRowVariants}>
              <div className="flex items-center justify-between mb-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-dark-blue dark:text-white"
                >
                  Password
                </label>
                <Link
                  href="forgot-password"
                  className="text-sm text-blue-color hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-light-gray-color p-3 text-dark-blue dark:text-white placeholder:text-light-gray-color focus:border-none focus:outline-blue-color text-sm bg-transparent"
                placeholder="••••••••"
              />
            </motion.div>
          </div>

          {/* Bouton Connexion */}
          <motion.div variants={inputRowVariants}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative flex w-full justify-center rounded-lg bg-blue-color px-4 py-2 text-sm font-semibold text-white hover:bg-blue-color/95 shadow-md active:shadow-sm transition-shadow duration-200"
            >
              Login
            </motion.button>
          </motion.div>
        </form>

        {/* Footer d'inscription */}
        <motion.div
          variants={inputRowVariants}
          className="text-dark-blue dark:text-white text-sm"
        >
          New to Animals Protection?{" "}
          <Link
            href="/register"
            className="text-green-color font-bold hover:underline"
          >
            Join the Family
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
