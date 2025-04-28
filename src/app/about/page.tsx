import AboutContent from "@/components/AboutContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos - ForeverCars",
  description:
    "En savoir plus sur ForeverCars, notre passion pour les voitures de luxe, notre mission et notre vision.",
};

const AboutPage = () => {
  return (
    <main className="px-6 py-10 max-w-5xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">À propos de ForeverCars</h1>
      <AboutContent />
    </main>
  );
};

export default AboutPage;
