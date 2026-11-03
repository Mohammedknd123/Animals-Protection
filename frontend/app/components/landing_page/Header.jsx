"use client"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "../ui/ThemeToggle";
import {motion} from "framer-motion"
 
export default function Header() {
    const [dark, setDark] = useState("light")
    
  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 dark:bg-dark-blue/80 shadow-sm dark:shadow-light-blue-color/10 backdrop-blur-md transition-all duration-300">
      <div className="w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex h-21 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
            <Image
              src="/logo.svg"
              alt="Animals Protection Logo"
              width={40}
              height={40}
            />
            <h3 className="text-sm sm:text-2xl font-bold text-dark-blue dark:text-white">
              AnimalsProtection
            </h3>
          </Link>
          <div className="flex space-x-5 items-center justify-between">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link
                href="/login"
                className="bg-blue-color py-2 px-4 rounded-lg font-bold text-white cursor-pointer hover:bg-blue-color/80"
              >
                Login
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
}
