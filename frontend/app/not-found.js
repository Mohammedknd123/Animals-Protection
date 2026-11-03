"use client";

import { motion } from "framer-motion";
import { IoPawSharp } from "react-icons/io5";

// Orchestrateur de la page
const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Animation élastique pour les éléments textuels et boutons
const elementVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

// Effet de tampon/saut pour la patte du milieu (le "0")
const pawCenterVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10, // Plus faible pour créer un rebond dynamique amusant
      delay: 0.2,
    },
  },
};

export default function NotFound() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="relative h-screen overflow-hidden w-screen flex flex-col gap-8 justify-center items-center bg-light-blue-color"
    >
      {/* Grand titre 404 */}
      <motion.h1
        variants={elementVariants}
        className="font-bold text-9xl text-dark-blue flex gap-6 items-center select-none"
      >
        <motion.span
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          4
        </motion.span>

        <motion.div
          variants={pawCenterVariants}
          whileHover={{ rotate: 20, scale: 1.1 }}
        >
          <IoPawSharp
            size={120}
            className="text-blue-color cursor-pointer transition-transform duration-200"
          />
        </motion.div>

        <motion.span
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          4
        </motion.span>
      </motion.h1>

      {/* Textes explicatifs */}
      <motion.h2
        variants={elementVariants}
        className="font-bold text-3xl text-dark-blue"
      >
        Not Found
      </motion.h2>

      <motion.p
        variants={elementVariants}
        className="text-dark-blue px-4 text-center text-lg"
      >
        This page not found, please try again !!
      </motion.p>

      {/* Bouton Retour interactif */}
      <motion.button
        variants={elementVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ willChange: "transform" }}
        className="bg-blue-color py-3 px-6 text-white rounded-xl font-bold shadow-md hover:shadow-blue-color/20 transition-shadow duration-300"
        onClick={() => window.history.back()}
      >
        Back
      </motion.button>

      {/* PATTES DÉCORATIVES EN ARRIÈRE-PLAN (Mouvement de flottaison asymétrique) */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [90, 95, 90] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 -left-10 text-blue-color/20 pointer-events-none"
      >
        <IoPawSharp size={200} />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-0 right-0 text-blue-color/20 pointer-events-none"
      >
        <IoPawSharp size={100} />
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-10 -left-10 text-blue-color/20 pointer-events-none"
      >
        <IoPawSharp size={120} />
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [-45, -40, -45] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="absolute -bottom-10 -right-15 text-blue-color/20 pointer-events-none"
      >
        <IoPawSharp size={200} />
      </motion.div>
    </motion.div>
  );
}
