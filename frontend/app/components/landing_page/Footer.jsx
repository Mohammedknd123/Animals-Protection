import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-blue text-light-blue-color flex flex-col gap-10 shadow-sm shadow-dark-blue dark:shadow-light-blue-color p-16 mt-16">
      <div className="flex justify-between gap-8 w-full mx-auto mt-5">
        <div className="flex flex-col basis-1/3 gap-6">
          <h3 className="text-sm sm:text-2xl font-black text-blue-color">
            AnimalsProtection
          </h3>
          <p className="text-blue text-light-gray-color dark:text-light-gray-color">
            Bridging the gap in animal welfare through technology and a
            dedicated community of professionals and volunteers.
          </p>
          <div className="flex gap-4">
            <Link href="#"><FaFacebook className="hover:text-blue-color text-light-gray-color" size={20} /></Link>
            <Link href="#"><FaInstagram className="hover:text-blue-color text-light-gray-color" size={20} /></Link>
            <Link href="#"><FaYoutube className="hover:text-blue-color text-light-gray-color" size={20} /></Link>
          </div>
        </div>
        <div className="flex flex-col basis-2/3 gap-6">
          <h3 className="text-sm sm:text-2xl font-bold text-blue-color dark:text-white">
            Testimonials
          </h3>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://github.com/Mohammedknd123"
              className="p-4 text-light-gray-color rounded-xl shadow-sm shadow-blue-color cursor-pointer"
            >
              Mohammed Yacine Kendouci
            </Link>
            <Link
              href="https://github.com/moumenebissou07"
              className="p-4 text-light-gray-color rounded-xl shadow-sm shadow-blue-color cursor-pointer"
            >
              HALASSI Abdelmoumene
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center text-light-gray-color">
        © 2026 AnimalsAdoption. All rights reserved. Professional animal welfare
        platform.
      </div>
    </footer>
  );
}
