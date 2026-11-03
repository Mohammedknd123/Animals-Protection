"use client";

import { motion } from "framer-motion";

// Define the animation states
const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 40, // Starts 40px lower down
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1], // Smooth custom cubic-bezier ease-out
    },
  },
};

export default function FadeInSection({ children }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true, // Only animate once when opening the site
        amount: 0.25, // Triggers when 25% of the section enters the screen
      }}
      variants={sectionVariants}
      className="w-full min-h-screen flex items-center justify-center"
    >
      {children}
    </motion.section>
  );
}
