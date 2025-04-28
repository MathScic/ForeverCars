"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="text-3xl text-center font-bold mb-6">Contactez-nous</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-[#333] p-6 rounded-lg shadow-lg space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-white-700">
            Nom
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-white-700">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full p-3 border border-gray-300 rounded-lg text-white"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Envoyer
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center">
            Message envoyé avec succès !
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center">Une erreur est survenue.</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
