import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - ForeverCars",
  description:
    "Contactez ForeverCars pour toute question, demande ou prise de rendez-vous.",
};

const ContactPage = () => {
  return (
    <main className="px-6 py-10 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">Nous Contacter</h1>
      <p className="mb-8">
        Une question ? Une demande spécifique ? Remplissez le formulaire
        ci-dessous et nous reviendrons vers vous rapidement.
      </p>
      <ContactForm />
    </main>
  );
};

export default ContactPage;
