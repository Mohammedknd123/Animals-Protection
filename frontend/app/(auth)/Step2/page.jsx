"use client";

import { motion, AnimatePresence } from "framer-motion";
import Header from "@/app/components/landing_page/Header";
import { FaUser, FaCheck, FaBriefcaseMedical } from "react-icons/fa";
import { FaHouseChimney, FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";

// Conteneur principal orchestrateur
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

// Animation pour les titres et blocs de boutons
const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Animation des cartes (Scale + Slide) sans clignotement
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      mass: 1,
    },
  },
};

export default function StepTwo() {
  const [role, setRole] = useState("individual");
  const roleRoutes = {
    individual: "/step3",
    veterinarian: "/vetForm",
    shelter: "/shelterForm",
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex min-h-screen h-full justify-center bg-light-blue-color/50 dark:bg-dark-blue overflow-hidden"
    >
      <Header />
      <div className="w-full flex flex-col items-center gap-16 mt-32 p-8 dark:bg-dark-blue mb-16">
        {/* Barre de progression */}
        <motion.div
          variants={rowVariants}
          className="flex flex-col w-[70%] lg:w-[50%]"
        >
          <span className="font-bold text-light-gray-color">STEP 2 OF 3</span>
          <div className="mt-3 flex w-full gap-2">
            <span className="w-1/3 h-1.5 bg-blue-color rounded-full"></span>
            <span className="w-1/3 h-1.5 bg-blue-color rounded-full"></span>
            <span className="w-1/3 h-1.5 bg-light-gray-color rounded-full"></span>
          </div>
        </motion.div>

        {/* Titre & Description */}
        <motion.div
          variants={rowVariants}
          className="flex flex-col items-center gap-4 text-center"
        >
          <h1 className="lg:text-6xl text-4xl font-semibold text-dark-blue dark:text-white">
            Create your account
          </h1>
          <p className="text-light-gray-color text-lg w-2/3">
            Choose the role that best describes you to get started with animal
            welfare management and community rescue.
          </p>
        </motion.div>

        {/* Grille des Rôles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 w-[80%]">
          {/* Rôle : Individual */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
            style={{ willChange: "transform, opacity" }}
            className={`relative group w-full flex flex-col p-6 gap-6 rounded-xl shadow-lg border-2 ${
              role === "individual"
                ? "border-blue-color"
                : "border-light-gray-color/10"
            } bg-white dark:bg-dark-blue cursor-pointer transition-colors duration-300 hover:shadow-xl`}
            onClick={() => setRole("individual")}
          >
            <span className="flex items-center justify-center bg-light-gray-color/20 w-14 p-3 rounded-xl group-hover:bg-blue-color/20 transition-all duration-300">
              <FaUser
                size={25}
                className={`${role === "individual" ? "text-blue-color" : "text-light-gray-color/70"} group-hover:text-blue-color`}
              />
            </span>
            <h3 className="text-2xl font-bold text-dark-blue dark:text-white">
              Individual
            </h3>
            <p className="text-light-gray-color text-lg">
              Report stray animals, track local welfare, and volunteer in your
              local community.
            </p>
            <AnimatePresence>
              {role === "individual" && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute p-2 rounded-full bg-orange-color right-6"
                >
                  <FaCheck className="text-white" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Rôle : Veterinarian */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
            style={{ willChange: "transform, opacity" }}
            className={`relative group w-full flex flex-col p-6 gap-6 rounded-xl shadow-lg border-2 ${
              role === "veterinarian"
                ? "border-blue-color"
                : "border-light-gray-color/10"
            } bg-white dark:bg-dark-blue cursor-pointer transition-colors duration-300 hover:shadow-xl`}
            onClick={() => setRole("veterinarian")}
          >
            <span className="flex items-center justify-center bg-light-gray-color/20 w-14 p-3 rounded-xl group-hover:bg-blue-color/20 transition-all duration-300">
              <FaBriefcaseMedical
                size={25}
                className={`${role === "veterinarian" ? "text-blue-color" : "text-light-gray-color/70"} group-hover:text-blue-color`}
              />
            </span>
            <h3 className="text-2xl font-bold text-dark-blue dark:text-white">
              Veterinarian
            </h3>
            <p className="text-light-gray-color text-lg">
              Manage clinical records, coordinate with rescues, and offer
              emergency aid.
            </p>
            <AnimatePresence>
              {role === "veterinarian" && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute p-2 rounded-full bg-orange-color right-6"
                >
                  <FaCheck className="text-white" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Rôle : Shelter */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -4 }}
            whileTap={{ scale: 0.98 }}
            style={{ willChange: "transform, opacity" }}
            className={`relative group w-full flex flex-col p-6 gap-6 rounded-xl shadow-lg border-2 ${
              role === "shelter"
                ? "border-blue-color"
                : "border-light-gray-color/10"
            } bg-white dark:bg-dark-blue cursor-pointer transition-colors duration-300 hover:shadow-xl`}
            onClick={() => setRole("shelter")}
          >
            <span className="flex items-center justify-center bg-light-gray-color/20 w-14 p-3 rounded-xl group-hover:bg-blue-color/20 transition-all duration-300">
              <FaHouseChimney
                size={25}
                className={`${role === "shelter" ? "text-blue-color" : "text-light-gray-color/70"} group-hover:text-blue-color`}
              />
            </span>
            <h3 className="text-2xl font-bold text-dark-blue dark:text-white">
              Shelter
            </h3>
            <p className="text-light-gray-color text-lg">
              Handle intake requests, manage capacity, and track animal recovery
              status.
            </p>
            <AnimatePresence>
              {role === "shelter" && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute p-2 rounded-full bg-orange-color right-6"
                >
                  <FaCheck className="text-white" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Boutons de Navigation */}
        <motion.div
          variants={rowVariants}
          className="flex flex-col gap-6 items-center justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ willChange: "transform" }}
          >
            <Link
              className="flex justify-center items-center text-center w-64 p-4 bg-blue-color rounded-xl text-white text-2xl font-semibold hover:bg-blue-color/90 shadow-md transition-colors duration-200"
              href={roleRoutes[role]}
            >
              Next <FaArrowRight className="ml-6" size={25} />
            </Link>
          </motion.div>

          <Link
            href="/register"
            className="flex items-center text-light-gray-color hover:text-blue-color text-xl transition-colors duration-200"
          >
            <FaArrowLeft className="mr-3" size={20} /> Back to step 1
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
