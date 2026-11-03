"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaBullhorn,
  FaCheckCircle,
  FaEye,
  FaLightbulb,
  FaQuestionCircle,
  FaChartLine,
} from "react-icons/fa";

const rescueTips = [
  <>
    <strong>Check Fences:</strong> Walk your perimeter to ensure there are no
    loose boards or gaps.
  </>,
  <>
    <strong>Pet-proof the Kitchen:</strong> Keep chemicals and toxic foods like
    chocolate out of reach.
  </>,
  <>
    <strong>Identify Local Vets:</strong> Save the number of the nearest 24/7
    emergency clinic.
  </>,
];

const helpSteps = [
  {
    icon: FaEye,
    title: "Spot & Assess",
    description:
      "Carefully observe your pet's body language and behavior in their new environment.",
  },
  {
    icon: FaBullhorn,
    title: "Signal the Team",
    description:
      "Use the app to communicate any concerns or updates with our network of specialists.",
  },
  {
    icon: FaChartLine,
    title: "Track Progress",
    description:
      "Monitor health milestones and behavioral improvements through your dashboard.",
  },
];

// Orchestrateur global de la cascade
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Animation pour l'en-tête et les éléments textuels
const rowVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Entrée de la section de gauche (Glissement latéral)
const leftSectionVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 75, damping: 15 },
  },
};

// Entrée de la section de droite (Glissement vertical)
const rightSectionVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 75, damping: 15 },
  },
};

// Révélation étape par étape pour la liste numérotée (Timeline)
const stepItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function StepThree() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-light-blue-color/50 px-4 py-8 dark:bg-dark-blue sm:px-6 overflow-hidden">
      <motion.main
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ willChange: "transform, opacity" }}
        className="w-full max-w-5xl overflow-hidden rounded-lg border border-light-gray-color/10 bg-white shadow-2xl dark:bg-gray-blue"
      >
        {/* Barre de progression */}
        <motion.div
          variants={rowVariants}
          className="w-full bg-light-gray-color/20 p-6"
        >
          <span className="font-bold text-light-gray-color">STEP 3 OF 3</span>
          <div className="mt-3 flex w-full gap-2">
            <span className="h-1.5 w-1/3 rounded-full bg-blue-color"></span>
            <span className="h-1.5 w-1/3 rounded-full bg-blue-color"></span>
            <span className="h-1.5 w-1/3 rounded-full bg-blue-color"></span>
          </div>
        </motion.div>

        <div className="px-5 pb-8 pt-8 sm:px-8 lg:px-10">
          {/* Titre & Description principale */}
          <motion.div
            variants={rowVariants}
            className="mx-auto mb-8 max-w-2xl text-center"
          >
            <h1 className="text-3xl font-bold text-dark-blue dark:text-white sm:text-4xl">
              Master the Mission
            </h1>
            <p className="mt-3 text-base leading-relaxed text-gray-blue dark:text-light-blue-color sm:text-lg">
              Congratulations on completing your registration! You&apos;re now
              part of a dedicated community of pet parents. We&apos;re here to
              help you every step of the way as you embark on this rewarding
              journey.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-6 lg:gap-8">
            {/* Section de Gauche : RESCUE TIPS */}
            <motion.section
              variants={leftSectionVariants}
              className="rounded-lg border border-amber-200 bg-amber-50 p-5 sm:p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400 text-white">
                  <FaLightbulb size={20} />
                </span>
                <h2 className="text-lg font-bold text-amber-900">
                  RESCUE TIPS
                </h2>
              </div>

              {/* Conteneur image avec zoom cinématique doux au chargement */}
              <div className="relative mb-5 h-40 overflow-hidden rounded-md shadow-md sm:h-48">
                <motion.div
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full h-full relative"
                  style={{ willChange: "transform" }}
                >
                  <Image
                    src="/assets/auth/step3-img.png"
                    alt="A happy golden retriever"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <ul className="space-y-3 text-sm leading-5 text-amber-900 sm:text-base">
                {rescueTips.map((tip, index) => (
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <FaCheckCircle
                      className="mt-0.5 shrink-0 text-amber-500"
                      aria-hidden="true"
                    />
                    <span>{tip}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Section de Droite : HOW TO HELP */}
            <motion.section variants={rightSectionVariants} className="pt-1">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-color text-white">
                  <FaQuestionCircle size={20} />
                </span>
                <h2 className="text-lg font-bold text-dark-blue dark:text-white">
                  HOW TO HELP
                </h2>
              </div>

              <ol className="relative space-y-7 before:absolute before:bottom-5 before:left-5 before:top-5 before:w-px before:bg-blue-200">
                {helpSteps.map(({ icon: Icon, title, description }) => (
                  <motion.li
                    variants={stepItemVariants}
                    key={title}
                    className="relative flex gap-5"
                  >
                    <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-color text-white shadow-lg shadow-blue-color/20">
                      <Icon size={17} />
                    </span>
                    <div className="pt-0.5">
                      <h3 className="font-bold text-dark-blue dark:text-white">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-5 text-gray-blue dark:text-light-blue-color sm:text-base">
                        {description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </motion.section>
          </div>
        </div>

        {/* Bouton du bas de page */}
        <motion.div
          variants={rowVariants}
          className="border-t border-light-gray-color/10 px-5 py-6 sm:px-8 lg:px-10"
        >
          <motion.div
            whileHover={{ scale: 1.01, y: -2 }}
            whileTap={{ scale: 0.99 }}
            style={{ willChange: "transform" }}
          >
            <Link
              href="/login"
              className="flex w-full items-center justify-center gap-3 rounded-lg bg-blue-color px-5 py-4 font-bold text-white shadow-lg shadow-blue-color/20 transition-all hover:bg-blue-color/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-color"
            >
              Go to Login
              <FaArrowRight
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
}
