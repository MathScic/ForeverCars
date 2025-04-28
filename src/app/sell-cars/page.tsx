"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SellCarPage() {
  const [formData, setFormData] = useState({
    modele: "",
    annee: "",
    kilometrage: "",
    description: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          modele: "",
          annee: "",
          kilometrage: "",
          description: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erreur de soumission :", error);
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero de page */}
      <div className="relative h-[45vh] w-full overflow-hidden">
        <Image
          src="/images/sell-header.png" // ➜ place ici l'image générée renommée
          alt="Vendre votre voiture"
          fill
          className="object-cover object-[center_60%]"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F7F6F9] mb-2">
            Vendre votre véhicule
          </h1>
          <p className="text-gray-300 max-w-xl">
            Une solution rapide, simple et professionnelle pour revendre votre
            voiture.
          </p>
        </div>
      </div>

      {/* Formulaire */}
      <main className="min-h-screen bg-[#1C1B1E] text-[#F7F6F9] px-6 pt-24 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto bg-[#2D2B2B] p-8 rounded-lg shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1">Modèle :</label>
              <input
                type="text"
                name="modele"
                value={formData.modele}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-500 rounded bg-[#1C1B1E] text-white"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Année :</label>
              <input
                type="text"
                name="annee"
                value={formData.annee}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-500 rounded bg-[#1C1B1E] text-white"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Kilométrage :</label>
              <input
                type="text"
                name="kilometrage"
                value={formData.kilometrage}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-500 rounded bg-[#1C1B1E] text-white"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Description :</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-500 rounded bg-[#1C1B1E] text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#8350f1] hover:bg-[#6e3ae5] text-white font-semibold py-3 px-6 rounded-md transition duration-300 w-full"
            >
              Envoyer
            </button>

            {status === "success" && (
              <p className="mt-4 text-green-400 text-center">
                ✔ Votre demande a bien été envoyée !
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-500 text-center">
                ❌ Une erreur est survenue, réessayez plus tard.
              </p>
            )}
          </form>
        </motion.div>
      </main>
    </>
  );
}
