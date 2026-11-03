"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// Conteneur principal qui gère l'apparition en cascade (Stagger)
const formContainerVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

// Animation pour chaque ligne d'input / bloc de texte
const rowVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={formContainerVariants}
      style={{ willChange: "transform, opacity" }}
      className="flex w-full flex-3 flex-col gap-6 bg-white p-6 dark:bg-dark-blue sm:p-8 lg:gap-10 lg:rounded-r-xl lg:p-12 relative overflow-hidden"
    >
      {/* Barre d'étapes de progression */}
      <motion.div
        variants={rowVariants}
        className="flex w-full items-start justify-between gap-4"
      >
        <div className="min-w-0 flex-1">
          <span className="text-md text-blue-color font-semibold tracking-wider">
            STEP 1 OF 3
          </span>
          <div className="mt-3 flex w-full gap-2">
            <span className="bg-blue-color h-1.5 flex flex-1 rounded-full"></span>
            <span className="bg-light-gray-color h-1.5 flex flex-1 rounded-full"></span>
            <span className="bg-light-gray-color h-1.5 flex flex-1 rounded-full"></span>
          </div>
        </div>
      </motion.div>

      {/* Titres */}
      <motion.div variants={rowVariants}>
        <h1 className="text-3xl font-semibold text-dark-blue dark:text-white">
          Create your profile
        </h1>
        <p className="mt-3 w-full text-light-gray-color font-extralight sm:w-[90%]">
          Provide your details to help us coordinate animal rescue and welfare
          efforts in your local community.
        </p>
      </motion.div>

      {/* Formulaire complet */}
      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Ligne Prénom / Nom */}
        <motion.div
          variants={rowVariants}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          <div>
            <label
              htmlFor="first-name"
              className="mb-2 block text-sm font-medium text-dark-blue dark:text-white"
            >
              First Name
            </label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-2xl border border-light-gray-color bg-transparent p-3 text-sm text-dark-blue placeholder:text-light-gray-color focus:border-none focus:outline-blue-color dark:text-white"
              placeholder="First name"
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="mb-2 block text-sm font-medium text-dark-blue dark:text-white"
            >
              Last Name
            </label>
            <input
              id="last-name"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-2xl border border-light-gray-color bg-transparent p-3 text-sm text-dark-blue placeholder:text-light-gray-color focus:border-none focus:outline-blue-color dark:text-white"
              placeholder="Last name"
            />
          </div>
        </motion.div>

        {/* Adresse E-mail */}
        <motion.div variants={rowVariants}>
          <label
            htmlFor="email-address"
            className="mb-2 block text-sm font-medium text-dark-blue dark:text-white"
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
            className="w-full rounded-2xl border border-light-gray-color bg-transparent p-3 text-sm text-dark-blue placeholder:text-light-gray-color focus:border-none focus:outline-blue-color dark:text-white"
            placeholder="nom@exemple.com"
          />
        </motion.div>

        {/* Mot de passe */}
        <motion.div variants={rowVariants}>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-dark-blue dark:text-white"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-2xl border border-light-gray-color bg-transparent p-3 text-sm text-dark-blue placeholder:text-light-gray-color focus:border-none focus:outline-blue-color dark:text-white"
            placeholder="••••••••"
          />
        </motion.div>

        {/* Localisation */}
        <motion.div variants={rowVariants}>
          <label
            htmlFor="location"
            className="mb-2 block text-sm font-medium text-dark-blue dark:text-white"
          >
            Location (City, Postal Code)
          </label>
          <input
            id="location"
            name="location"
            type="text"
            autoComplete="address-level2"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full rounded-2xl border border-light-gray-color bg-transparent p-3 text-sm text-dark-blue placeholder:text-light-gray-color focus:border-none focus:outline-blue-color dark:text-white"
            placeholder="City, postal code"
          />
        </motion.div>

        {/* Bouton Sign Up Intégré & Animé */}
        <motion.div variants={rowVariants} className="pt-2">
          <Link href="/Step2"
            type="submit"
            className="group relative flex w-full justify-center rounded-lg bg-blue-color px-4 py-2 text-sm font-semibold text-white hover:bg-blue-color/95 shadow-md active:shadow-sm transition-shadow duration-200"
          >
            Sign up
          </Link>
        </motion.div>

        {/* Redirection vers Login Intégrée & Animée */}
        <motion.div
          variants={rowVariants}
          className="text-dark-blue dark:text-white text-sm w-full text-center"
        >
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-green-color font-bold hover:underline"
          >
            Login
          </Link>
        </motion.div>
      </form>
    </motion.div>
  );
}
