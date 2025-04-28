"use client";

import React, { useState } from "react";
import Image from "next/image";
import CarModal from "./CarModal";

type Car = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
};

const CarCard = ({ name, price, image, description }: Car) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-[#2D2B2B] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
        <div className="relative w-full h-48">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div className="p-4 text-[#F7F6F9]">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-lg mb-2">{price}</p>
          <p className="text-sm text-gray-400 mb-4">
            {description.slice(0, 60)}...
          </p>
          <button
            onClick={toggleModal}
            className="w-full py-2 bg-[#8350f1] rounded hover:bg-[#6e3ae5] transition"
          >
            En savoir plus
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <CarModal
          name={name}
          price={price}
          image={image}
          description={description}
          onClose={toggleModal}
        />
      )}
    </>
  );
};

export default CarCard;
