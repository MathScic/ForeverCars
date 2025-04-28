"use client";

import Link from "next/link";
import {
  FaCar,
  FaCheckCircle,
  FaUserFriends,
  FaShippingFast,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const advantages = [
  {
    icon: <FaCar size={40} />,
    title: "Large choix de véhicules",
    text: "Des modèles pour tous les goûts, soigneusement sélectionnés.",
  },
  {
    icon: <FaCheckCircle size={40} />,
    title: "Qualité garantie",
    text: "Chaque voiture est inspectée et certifiée par nos experts.",
  },
  {
    icon: <FaUserFriends size={40} />,
    title: "Service personnalisé",
    text: "Un accompagnement dédié à chaque étape de votre achat.",
  },
  {
    icon: <FaShippingFast size={40} />,
    title: "Livraison rapide",
    text: "Recevez votre voiture où que vous soyez, en toute sérénité.",
  },
];

const AdvantagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-[#1C1B1E] text-[#F7F6F9] py-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          Pourquoi choisir ForeverCars ?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="text-[#8350f1]">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AdvantagesSection;
