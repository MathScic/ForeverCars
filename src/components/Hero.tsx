"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-car.png"
          alt="Voiture élégante"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Contenu par-dessus */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-[#F7F6F9] mb-4">
          L’élégance sur quatre roues
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl">
          Des véhicules haut de gamme, une expérience unique. Bienvenue chez
          ForeverCars.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/our-cars"
            className="bg-[#8350f1] hover:bg-[#6e3ae5] text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            Voir nos voitures
          </Link>
          <Link
            href="/contact"
            className="border border-[#8350f1] text-[#8350f1] hover:bg-[#8350f1] hover:text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </section>
  );
}
