"use client";

import CarCard from "@/components/CarCard";
import cars from "@/data/cars.json";
import { useState } from "react";

const CarsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 20;

  // Pagination
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(cars.length / carsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="p-8 bg-[#1C1B1E] min-h-screen">
      <h1 className="text-4xl font-bold text-center text-[#F7F6F9] mb-10">
        Nos Voitures Disponibles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentCars.map((car) => (
          <CarCard key={car.id} {...car} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 space-x-4">
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx + 1}
            onClick={() => handlePageChange(idx + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === idx + 1
                ? "bg-[#8350f1] text-white"
                : "bg-[#2D2B2B] border border-[#8350f1] text-[#F7F6F9]"
            } hover:bg-[#6e3ae5] transition`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </main>
  );
};

export default CarsPage;
