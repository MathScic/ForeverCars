import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { modele, annee, kilometrage, description } = body;

    if (!modele || !annee || !kilometrage || !description) {
      return new Response("Les informations sont manquantes.", { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "Nouvelle demande pour vendre une voiture",
      text: `Modèle: ${modele}\nAnnée: ${annee}\nKilométrage: ${kilometrage}\nDescription: ${description}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response("Formulaire soumis avec succès.", { status: 200 });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);
    return new Response("Erreur de traitement des données", { status: 500 });
  }
}
