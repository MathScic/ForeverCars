"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSubOpen, setIsMobileSubOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownVisible(false);
    }, 200);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#2D2B2B] text-[#F7F6F9] fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-[#8350f1] hover:text-[#6e3ae5] transition-all"
        >
          <img
            src="/images/Small-logo.png"
            alt="Logo ForeverCars"
            className="w-36 md:w-40"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="font-medium hover:text-[#8350f1] transition cursor-pointer">
              Nos voitures
            </button>
            <AnimatePresence>
              {dropdownVisible && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-2 w-60 bg-[#333] text-white border border-gray-600 rounded-lg shadow-lg z-50"
                >
                  <Link
                    href="/our-cars"
                    className="block px-4 py-2 hover:bg-[#444]"
                  >
                    🚗 Nos voitures
                  </Link>
                  <Link
                    href="/buy-cars"
                    className="block px-4 py-2 hover:bg-[#444]"
                  >
                    💰 Acheter
                  </Link>
                  <Link
                    href="/sell-cars"
                    className="block px-4 py-2 hover:bg-[#444]"
                  >
                    📝 Vendre
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#8350f1] transition">
              À propos
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="bg-[#8350f1] hover:bg-[#6e3ae5] text-white px-5 py-2 rounded-md font-semibold transition duration-300 shadow-md"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#2D2B2B] px-6 py-4"
          >
            <Link
              href="/"
              className="block py-2 hover:text-[#8350f1]"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>

            {/* Sous-menu mobile toggle */}
            <div className="block py-2">
              <button
                onClick={() => setIsMobileSubOpen((prev) => !prev)}
                className="w-full text-left font-medium flex justify-between items-center"
              >
                Nos voitures
                <span>{isMobileSubOpen ? "▲" : "▼"}</span>
              </button>

              <AnimatePresence>
                {isMobileSubOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-4 mt-2 space-y-1"
                  >
                    <Link
                      href="/our-cars"
                      className="block hover:text-[#8350f1]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      🚗 Nos voitures
                    </Link>
                    <Link
                      href="/buy-cars"
                      className="block hover:text-[#8350f1]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      💰 Acheter
                    </Link>
                    <Link
                      href="/sell-cars"
                      className="block hover:text-[#8350f1]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      📝 Vendre
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="block py-2 hover:text-[#8350f1]"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="mt-4 inline-block w-full text-center bg-[#8350f1] hover:bg-[#6e3ae5] text-white py-2 rounded-md font-semibold transition duration-300 shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
