"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-[#2D2B2B] text-[#F7F6F9] py-16 px-6 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            À propos de ForeverCars
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            ForeverCars est bien plus qu’un simple vendeur de voitures. Nous
            vous proposons une expérience unique, personnalisée et haut de
            gamme. Nos experts sélectionnent avec soin des véhicules d’exception
            pour répondre à toutes vos attentes.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="/images/hero-car.jpg"
            alt="Voiture élégante"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
