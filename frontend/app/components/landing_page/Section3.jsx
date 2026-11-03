"use client";

import { motion } from "framer-motion";
import { FaRegBell } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { RiShieldCheckLine } from "react-icons/ri";

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

export default function SectionThree() {
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
          Empowering every{" "}
          <span className="text-blue-color">rescue mission</span>
        </h2>
      </motion.div>

      {/* Grille des Rôles / Outils */}
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Rôle 01 - Pet Parent */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.04, y: -5 }} // Géré proprement par Framer Motion
          whileTap={{ scale: 0.98 }}
          style={{ willChange: "transform, opacity" }} // Force le calcul GPU de bout en bout
          className="flex items-center flex-col gap-4 bg-white p-10 rounded-xl dark:bg-gray-blue shado
          w-full border border-light-gray-color/10 cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
        >
          <span className="relative shadow-md flex justify-center items-center p-8 bg-blue-color/20 rounded-full text-blue-color text-center">
            <FaRegBell size={40} />
          </span>
          <h3 className="dark:text-white text-blue-color text-2xl">
            Real-time requests
          </h3>
          <p className="text-light-gray-color text-lg text-center">
            Smart geofencing alerts volunteers based on proximity to an
            incident.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.04, y: -5 }} // Géré proprement par Framer Motion
          whileTap={{ scale: 0.98 }}
          style={{ willChange: "transform, opacity" }} // Force le calcul GPU de bout en bout
          className="flex items-center flex-col gap-4 bg-white p-10 rounded-xl dark:bg-gray-blue shado
          w-full border border-light-gray-color/10 cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
        >
          <span className="relative shadow-md flex justify-center items-center p-8 bg-blue-color/20 rounded-full text-blue-color text-center">
            <CiChat1 size={40} />
          </span>
          <h3 className="dark:text-white text-blue-color text-2xl">
            Secure Chat
          </h3>
          <p className="text-light-gray-color text-lg text-center">
            Direct communication between reporters and caregivers for seamless
            handoffs.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.04, y: -5 }} // Géré proprement par Framer Motion
          whileTap={{ scale: 0.98 }}
          style={{ willChange: "transform, opacity" }} // Force le calcul GPU de bout en bout
          className="flex items-center flex-col gap-4 bg-white p-10 rounded-xl dark:bg-gray-blue shado
          w-full border border-light-gray-color/10 cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
        >
          <span className="relative shadow-md flex justify-center items-center p-8 bg-blue-color/20 rounded-full text-blue-color text-center">
            <IoLocationOutline size={40} />
          </span>
          <h3 className="dark:text-white text-blue-color text-2xl">
            Location Tracking
          </h3>
          <p className="text-light-gray-color text-lg text-center">
            Monitor rescue transport units in real-time until they reach safety.
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.04, y: -5 }} // Géré proprement par Framer Motion
          whileTap={{ scale: 0.98 }}
          style={{ willChange: "transform, opacity" }} // Force le calcul GPU de bout en bout
          className="flex items-center flex-col gap-4 bg-white p-10 rounded-xl dark:bg-gray-blue shado
          w-full border border-light-gray-color/10 cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
        >
          <span className="relative shadow-md flex justify-center items-center p-8 bg-blue-color/20 rounded-full text-blue-color text-center">
            <RiShieldCheckLine size={40} />
          </span>
          <h3 className="dark:text-white text-blue-color text-2xl">
            Verified Pros
          </h3>
          <p className="text-light-gray-color text-lg text-center">
            Every vet and shelter goes through a rigorous verification process.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
