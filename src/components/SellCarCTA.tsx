"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const backgroundImages = [
  "/images/sell-car-bg-1.png",
  "/images/sell-car-bg-2.png",
  "/images/sell-car-bg-3.png",
];

const SellCarCTA = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Carrousel d’images */}
      {backgroundImages.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Voiture ${index + 1}`}
          fill
          className={`object-cover absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Contenu au-dessus */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#F7F6F9] mb-4">
          Prêt à vendre votre voiture ?
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-xl">
          Obtenez une évaluation rapide et bénéficiez de notre service
          personnalisé pour vendre votre véhicule en toute sérénité.
        </p>
        <Link
          href="/sell-cars"
          className="bg-[#8350f1] hover:bg-[#6e3ae5] text-white px-6 py-3 rounded-md text-lg font-semibold transition duration-300"
        >
          Vendre votre voiture
        </Link>
      </div>
    </section>
  );
};

export default SellCarCTA;
