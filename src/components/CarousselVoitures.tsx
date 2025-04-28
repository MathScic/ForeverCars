"use client";

import { useEffect, useState } from "react";
import cars from "@/data/cars.json";
import Image from "next/image";

const CarousselVoitures = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % cars.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const voiture = cars[index];

  return (
    <div className="w-full px-4">
      <div className="max-w-4xl mx-auto bg-[#1C1B1E] text-[#F7F6F9] rounded-xl shadow-xl overflow-hidden">
        <div
          className={`relative h-64 sm:h-80 md:h-96 w-full transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={voiture.image}
            alt={voiture.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-2xl font-semibold mb-2">{voiture.name}</h3>
          <p className="text-[#8350f1] text-lg font-bold">{voiture.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CarousselVoitures;
