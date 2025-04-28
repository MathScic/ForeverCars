import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";
import AdvantagesSection from "@/components/AdvantageSection";
import SellCarCTA from "@/components/SellCarCTA";

// SEO
export const metadata: Metadata = {
  title: "ForeverCars | Voitures de luxe",
  description:
    "ForeverCars propose des véhicules haut de gamme soigneusement sélectionnés pour une expérience de conduite unique.",
  keywords: [
    "voitures de luxe",
    "ForeverCars",
    "vente de voitures",
    "autos haut de gamme",
  ],
  openGraph: {
    title: "ForeverCars | Voitures de luxe",
    description:
      "Découvrez notre sélection de voitures haut de gamme. ForeverCars vous accompagne pour un achat en toute confiance.",
    url: "https://forevercars.com",
    siteName: "ForeverCars",
    images: [
      {
        url: "/images/Cars-1.jpg",
        width: 1200,
        height: 630,
        alt: "Voiture de luxe - ForeverCars",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="text-white bg-transparent ">
      {/* Hero Section */}
      <Hero />

      {/* About */}
      <section id="voitures" className="w-full px-6 py-16 bg-[#2D2B2B]">
        <AboutSection />
      </section>

      {/* Voitures */}
      <section id="voitures" className="w-full bg-[#2D2B2B]">
        <AdvantagesSection />
        <SellCarCTA />
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-16 bg-[#2D2B2B]">
        <ContactForm />
      </section>
    </main>
  );
}
