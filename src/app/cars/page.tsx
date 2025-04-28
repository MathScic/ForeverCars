import CarCard from "@/components/CarCard";
import cars from "@/data/cars.json";

export default function NosVoituresPages() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Nos Voitures disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            name={car.name}
            price={car.price}
            image={car.image}
            description={car.description}
          />
        ))}
      </div>
    </main>
  );
}
