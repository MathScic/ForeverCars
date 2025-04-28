"use client";

import CarCard from "@/components/CarCard";
import cars from "@/data/cars.json";

export default function CarsPage() {
  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Nos Voitures</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            name={car.name}
            price={car.price}
            image={car.image}
          />
        ))}
      </div>
    </section>
  );
}
