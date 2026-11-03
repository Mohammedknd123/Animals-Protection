"use client";

import { motion } from "framer-motion";
import { FaRegUser } from "react-icons/fa";
import { IoMedkitOutline } from "react-icons/io5";
import { LuMapPinHouse } from "react-icons/lu";

// Conteneur principal qui gère l'apparition en cascade (Stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Animation douce pour l'en-tête (Slide down léger)
const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Nouvelle animation pour les cartes : Révélation par expansion (Scale + Fade) sans aucun blink
const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.92, // Commence légèrement plus petit
    y: 15, // Léger décalage vers le bas
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 16,
      mass: 1,
    },
  },
};

export default function SectionTwo() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className="w-full flex flex-col justify-between items-center bg-white dark:bg-dark-blue px-8 lg:px-16 md:px-8 sm:px-6 py-22 mb-10 gap-22 overflow-hidden"
    >
      {/* En-tête : Titre & Description */}
      <motion.div
        variants={headerVariants}
        className="flex flex-col gap-4 w-1/2"
      >
        <h2 className="text-dark-blue dark:text-white text-center lg:text-6xl text-4xl font-black">
          Powerful tools for{" "}
          <span className="text-blue-color">your mission</span>
        </h2>
        <p className="text-light-gray-color text-center lg:text-2xl md:text-xl sm:text-lg">
          Every role matters in the journey of recovery. We provide the
          professional infrastructure needed to coordinate rescue efforts with
          precision and care.
        </p>
      </motion.div>

      {/* Grille des Rôles / Outils */}
      <div className="flex justify-between gap-12 lg:flex-row md:flex-row flex-col w-full">
        {/* Rôle 01 - Pet Parent */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.04, y: -5 }} // Géré proprement par Framer Motion
          whileTap={{ scale: 0.98 }}
          style={{ willChange: "transform, opacity" }} // Force le calcul GPU de bout en bout
          className="w-full flex justify-between items-start flex-col gap-6 bg-white p-16 rounded-xl dark:bg-gray-blue shadow-lg border border-light-gray-color/10 cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
        >
          <span className="relative shadow-md flex justify-center items-center p-8 bg-blue-color/20 rounded-xl text-blue-color">
            <FaRegUser size={40} />
          </span>
          <h3 className="text-blue-color text-2xl font-bold">Pet Parent</h3>
          <p className="text-light-gray-color text-xl">
            Report distress calls, track rescue progress, and donate to specific
            cases in your area. Be the eyes on the ground that make a
            difference.
          </p>
        </motion.div>

        {/* Rôle 02 - Veterinarian */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.04, y: -5 }}
          whileTap={{ scale: 0.98 }}
          style={{ willChange: "transform, opacity" }}
          className="w-full flex justify-between items-start flex-col gap-6 bg-white p-16 rounded-xl dark:bg-gray-blue shadow-lg border border-light-gray-color/10 cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
        >
          <span className="relative shadow-md flex justify-center items-center p-8 bg-blue-color/20 rounded-xl text-blue-color">
            <IoMedkitOutline size={40} />
          </span>
          <h3 className="text-blue-color text-2xl font-bold">Veterinarian</h3>
          <p className="text-light-gray-color text-xl">
            Provide expert medical care. Access emergency reports and coordinate
            with transport teams for immediate intervention.
          </p>
        </motion.div>

        {/* Rôle 03 - Refuge / Shelter */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.04, y: -5 }}
          whileTap={{ scale: 0.98 }}
          style={{ willChange: "transform, opacity" }}
          className="w-full flex justify-between items-start flex-col gap-6 bg-white p-16 rounded-xl dark:bg-gray-blue shadow-lg border border-light-gray-color/10 cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
        >
          <span className="relative shadow-md flex justify-center items-center p-8 bg-blue-color/20 rounded-xl text-blue-color">
            <LuMapPinHouse size={40} />
          </span>
          <h3 className="text-blue-color text-2xl font-bold">
            Refuge / Shelter
          </h3>
          <p className="text-light-gray-color text-xl">
            Host animals awaiting adoption. Manage shelter capacity and adoption
            requests with ease.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
