"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2D2B2B] text-[#F7F6F9] py-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
        {/* Logo Image */}
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 text-center">
          <img
            src="/images/Small-logo.png"
            alt="Logo ForeverCars"
            className="w-50 mb-4"
          />
          <p className="text-sm text-gray-400">
            L’élégance et la performance réunies. Achetez ou vendez votre
            voiture haut de gamme en toute confiance.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-[#8350f1]">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/our-cars" className="hover:text-[#8350f1]">
                Nos voitures
              </Link>
            </li>
            <li>
              <Link href="/sell-cars" className="hover:text-[#8350f1]">
                Vendre un véhicule
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#8350f1]">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#8350f1]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#8350f1]">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-[#8350f1]">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-[#8350f1]">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ForeverCars. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
