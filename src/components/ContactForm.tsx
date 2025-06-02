import { useState, useRef } from "react";

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    fonction: "",
    societe: "",
    email: "",
    telephone: "",
    message: "",
    consentement: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.nom ||
      !formData.email ||
      !formData.message ||
      !formData.consentement
    ) {
      setSubmitError(
        "Veuillez remplir tous les champs obligatoires et accepter les conditions d'utilisation des données."
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const googleFormUrl =
        "https://script.google.com/macros/s/AKfycbx0dzxNITqo4eWG_S526Vkkm_nhXQbiHskRgHjBMgQjzOrY1gxucX5hvhI5wy7MCIDONQ/exec";

      const dataToSend = {
        nom: formData.nom,
        prenom: formData.prenom,
        fonction: formData.fonction,
        societe: formData.societe,
        email: formData.email,
        telephone: formData.telephone,
        message: formData.message,
        consentement: formData.consentement,
        dateContact: new Date().toISOString(),
      };

      console.log("Tentative d'envoi des données:", dataToSend);
      console.log("URL du formulaire:", googleFormUrl);

      try {
        console.log("Envoi de la requête POST...");
        const response = await fetch(googleFormUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });

        console.log("Statut de la réponse:", response.status);
        console.log(
          "Headers de la réponse:",
          Object.fromEntries(response.headers.entries())
        );

        if (response.ok) {
          try {
            const result = await response.json();
            console.log("Réponse du serveur:", result);
            if (result.success) {
              setSubmitSuccess(true);
            } else {
              console.error("Erreur du serveur:", result.error);
              setSubmitError(
                result.error || "Une erreur est survenue lors de l'envoi."
              );
            }
          } catch (jsonError) {
            console.error("Erreur parsing JSON:", jsonError);
            setSubmitSuccess(true);
          }
        } else {
          console.error(
            "Réponse non-OK:",
            response.status,
            response.statusText
          );
          throw new Error("Réponse du serveur non valide: " + response.status);
        }
      } catch (corsError) {
        console.error("Erreur CORS:", corsError);
        console.log("Tentative avec no-cors...");

        await fetch(googleFormUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });

        setSubmitSuccess(true);
      }

      if (formRef.current) {
        formRef.current.reset();
      }
      setFormData({
        nom: "",
        prenom: "",
        fonction: "",
        societe: "",
        email: "",
        telephone: "",
        message: "",
        consentement: false,
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire de contact:", error);
      setSubmitError(
        "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer plus tard."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border-2 border-primary">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-primary flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Contactez-nous
        </h3>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200 text-secondary font-carlson font-black text-xl"
          aria-label="Fermer"
          popovertarget="contactForm"
          popoveraction="close"
        >
          X
        </button>
      </div>

      {submitSuccess ? (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md mb-6">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h4 className="text-green-800 font-bold">Message envoyé !</h4>
          </div>
          <p className="text-green-700 mt-2">
            Votre message a bien été reçu. Nous vous recontacterons très
            prochainement.
          </p>
          <button
            className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors duration-300"
            popovertarget="contactForm"
            popoveraction="close"
          >
            Fermer
          </button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          {submitError && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-red-600">{submitError}</p>
              </div>
            </div>
          )}

          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="nom"
                className="block text-gray-700 font-medium mb-1 text-sm"
              >
                Nom <span className="text-secondary">*</span>
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-primary rounded-lg focus:ring-primary focus:border-primary text-sm bg-blue-50"
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="prenom"
                className="block text-gray-700 font-medium mb-1 text-sm"
              >
                Prénom
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                value={formData.prenom}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-primary rounded-lg focus:ring-primary focus:border-primary text-sm bg-blue-50"
                placeholder="Votre prénom"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="fonction"
                className="block text-gray-700 font-medium mb-1 text-sm"
              >
                Fonction
              </label>
              <input
                type="text"
                id="fonction"
                name="fonction"
                value={formData.fonction}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-primary rounded-lg focus:ring-primary focus:border-primary text-sm bg-blue-50"
                placeholder="Votre fonction"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="societe"
                className="block text-gray-700 font-medium mb-1 text-sm"
              >
                Société
              </label>
              <input
                type="text"
                id="societe"
                name="societe"
                value={formData.societe}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-primary rounded-lg focus:ring-primary focus:border-primary text-sm bg-blue-50"
                placeholder="Votre société"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1 text-sm"
            >
              Email <span className="text-secondary">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-primary rounded-lg focus:ring-primary focus:border-primary text-sm bg-blue-50"
              placeholder="votreemail@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="telephone"
              className="block text-gray-700 font-medium mb-1 text-sm"
            >
              Téléphone
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-primary rounded-lg focus:ring-primary focus:border-primary text-sm bg-blue-50"
              placeholder="Votre numéro de téléphone"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-1 text-sm"
            >
              Message <span className="text-secondary">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-primary rounded-lg focus:ring-primary focus:border-primary text-sm bg-blue-50 resize-y"
              placeholder="Votre message..."
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="consentement" className="flex items-center">
              <input
                type="checkbox"
                id="consentement"
                name="consentement"
                checked={formData.consentement}
                onChange={handleInputChange}
                className="mr-2 border-primary focus:ring-primary"
              />
              <span className="text-gray-700">
                J'autorise ce site à conserver mes données personnelles
                transmises via ce formulaire. Aucune exploitation commerciale ne
                sera faite des données conservées. Voir notre politique de
                gestion des données personnelles
              </span>
            </label>
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className={`w-full bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 6v7m0 0l-3-3m3 3l3-3"
                    />
                  </svg>
                  Envoyer le message
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
