"use client";

import Link from "next/link";

export default function AcheterVoitures() {
  return (
    <main className="px-6 py-16 bg-[#1C1B1E] text-[#F7F6F9] min-h-screen">
      {/* Titre principal */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Acheter votre prochaine voiture de luxe
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Découvrez notre processus simple et rapide pour acquérir le véhicule
          de vos rêves chez ForeverCars.
        </p>
      </div>

      {/* Nos engagements */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-[#8350f1] text-center">
          Nos engagements pour vous
        </h2>

        <ul className="space-y-6">
          <li className="bg-[#2D2B2B] p-6 rounded-lg shadow hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">
              ✔️ Véhicules certifiés
            </h3>
            <p className="text-gray-400">
              Tous nos véhicules sont soigneusement inspectés et validés par nos
              experts pour garantir votre satisfaction.
            </p>
          </li>

          <li className="bg-[#2D2B2B] p-6 rounded-lg shadow hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">
              🤝 Accompagnement personnalisé
            </h3>
            <p className="text-gray-400">
              Un conseiller dédié vous accompagne de la sélection à la livraison
              du véhicule.
            </p>
          </li>

          <li className="bg-[#2D2B2B] p-6 rounded-lg shadow hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold mb-2">
              💳 Solutions de financement
            </h3>
            <p className="text-gray-400">
              Nous proposons des solutions de financement adaptées à votre
              projet automobile.
            </p>
          </li>
        </ul>
      </section>

      {/* CTA bouton */}
      <div className="text-center mt-16">
        <Link
          href="/our-cars"
          className="inline-block bg-[#8350f1] hover:bg-[#6e3ae5] text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
        >
          Voir nos véhicules
        </Link>
      </div>
    </main>
  );
}
