"use client";

import React from "react";
import Image from "next/image";

type ModalProps = {
  name: string;
  price: string;
  image: string;
  description: string;
  onClose: () => void;
};

const CarModal = ({ name, price, image, description, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-[#2D2B2B] rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 relative text-[#F7F6F9]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold hover:text-[#8350f1]"
        >
          ✖
        </button>

        <div className="relative w-full h-60 mb-6">
          <Image src={image} alt={name} fill className="object-cover rounded" />
        </div>

        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-xl mb-4">{price}</p>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default CarModal;
