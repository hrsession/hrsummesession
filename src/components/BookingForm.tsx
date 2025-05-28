import { useState, useRef } from "react";
import type { Workshop } from "../types";
import workshopData from "../data/workshops.json";

interface BookingFormProps {
  selectedDays: string[];
  afternoonWorkshops: {
    [key: string]: string[];
  };
  calculateTotal: () => number;
}

const BookingForm: React.FC<BookingFormProps> = ({
  selectedDays,
  afternoonWorkshops,
  calculateTotal,
}) => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    entreprise: "",
    fonction: "",
    acceptConditions: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const getDayName = (day: string) => {
    switch (day) {
      case "jour1":
        return "Lundi 7 juillet";
      case "jour2":
        return "Mardi 8 juillet";
      case "jour3":
        return "Mercredi 9 juillet";
      default:
        return day;
    }
  };

  const getWorkshopInfo = (workshopId: string) => {
    const workshop = (workshopData as Workshop[]).find(
      (w) => w.id === workshopId
    );
    return workshop
      ? `${workshop.atelier} (${workshop.intervenant})`
      : workshopId;
  };

  const isLongWorkshopSelected = (day: string) => {
    if (day !== "jour2") return false;

    const selectedWorkshopsForDay = afternoonWorkshops[day] || [];
    return selectedWorkshopsForDay.some((workshopId) => {
      const workshop = (workshopData as Workshop[]).find(
        (w) => w.id === workshopId
      );
      return workshop && workshop.atelier.includes("Le RH est il un psy ?");
    });
  };

  const getRequiredWorkshopsCount = (day: string) => {
    return isLongWorkshopSelected(day) ? 1 : 2;
  };

  const canReserveDay = (day: string) => {
    const selectedCount = (afternoonWorkshops[day] || []).length;
    const requiredCount = getRequiredWorkshopsCount(day);
    return selectedCount >= requiredCount;
  };

  const formatSelections = () => {
    let selections = "";

    if (selectedDays.length > 0) {
      selections += "Journées complètes :\n";
      selectedDays.forEach((day) => {
        selections += `- ${getDayName(day)}\n`;

        if (afternoonWorkshops[day] && afternoonWorkshops[day].length > 0) {
          selections += "  Ateliers PM sélectionnés :\n";
          afternoonWorkshops[day].forEach((workshopKey) => {
            const workshopId = `${day.slice(-1)}${workshopKey.slice(-1)}`;
            selections += `  - ${getWorkshopInfo(`j${workshopId}`)}\n`;
          });

          if (isLongWorkshopSelected(day)) {
            selections += "  (Atelier de 3h30 - exclusif pour l'après-midi)\n";
          }
        }
      });
      selections += "\n";
    }

    return selections;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nom || !formData.prenom || !formData.email) {
      setSubmitError("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    if (!formData.acceptConditions) {
      setSubmitError(
        "Vous devez accepter les conditions générales pour continuer."
      );
      return;
    }

    if (selectedDays.length === 0) {
      setSubmitError("Veuillez sélectionner au moins une journée.");
      return;
    }

    for (const day of selectedDays) {
      if (!canReserveDay(day)) {
        const required = getRequiredWorkshopsCount(day);
        const dayName = getDayName(day);
        setSubmitError(
          `${dayName} : vous devez sélectionner ${required} atelier${
            required > 1 ? "s" : ""
          } de l'après-midi.`
        );
        return;
      }
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const googleFormUrl =
        "https://script.google.com/macros/s/AKfycbyKyPqw8b3w_AW2le3T1RFn27QVoeBC3jKrKjeQGjLH2Hdr1J3my2ijzfLyS4RgA9Px/exec";

      const formattedSelections = formatSelections();
      const totalAmount = calculateTotal();

      const dataToSend = {
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        telephone: formData.telephone,
        entreprise: formData.entreprise,
        fonction: formData.fonction,
        selections: formattedSelections,
        montantTotal: totalAmount,
        dateInscription: new Date().toISOString(),
      };

      try {
        const response = await fetch(googleFormUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });

        if (response.ok) {
          try {
            const result = await response.json();
            if (result.success) {
              setSubmitSuccess(true);
            } else {
              setSubmitError(
                result.error || "Une erreur est survenue lors de l'envoi."
              );
            }
          } catch (jsonError) {
            setSubmitSuccess(true);
          }
        } else {
          throw new Error("Réponse du serveur non valide: " + response.status);
        }
      } catch (corsError) {
        console.log(
          "Échec avec CORS activé, tentative avec no-cors",
          corsError
        );

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
        email: "",
        telephone: "",
        entreprise: "",
        fonction: "",
        acceptConditions: false,
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setSubmitError(
        "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer plus tard."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="sticky top-32 flex flex-col max-h-[calc(100vh-120px)] bg-white rounded-xl shadow-lg border-2 border-primary overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-primary-light text-white p-4 flex items-center">
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
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a4.5 4.5 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
        <h3 className="text-xl font-bold">Fiche d'inscription</h3>
      </div>

      <div
        className="overflow-y-auto flex-grow p-6 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')]"
        style={{ scrollbarWidth: "thin" }}
      >
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
              <h4 className="text-green-800 font-bold">
                Inscription réussie !
              </h4>
            </div>
            <p className="text-green-700 mt-2">
              Votre inscription a bien été prise en compte. Vous recevrez un
              email de confirmation dans quelques instants. Merci de votre
              participation au HR Summer Camp 2025 !
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors duration-300"
            >
              Nouvelle inscription
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            {/* Récapitulatif des sélections */}
            <div className="mb-6">
              {selectedDays.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-bold text-secondary mb-2 text-sm flex items-center">
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Journées complètes :
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {selectedDays.includes("jour1") && (
                      <li className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-start justify-between">
                          <span className="flex items-start">
                            <span className="text-secondary mr-2">✓</span>
                            <span>
                              Lundi 7 juillet - HR Intelligence Collective
                            </span>
                          </span>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              canReserveDay("jour1")
                                ? "bg-green-100 text-green-800"
                                : "bg-orange-100 text-orange-800"
                            }`}
                          >
                            {(afternoonWorkshops["jour1"] || []).length}/2
                          </span>
                        </div>
                      </li>
                    )}
                    {selectedDays.includes("jour2") && (
                      <li className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-start justify-between">
                          <span className="flex items-start">
                            <span className="text-secondary mr-2">✓</span>
                            <span>Mardi 8 juillet - RH et Soft Skills</span>
                          </span>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              canReserveDay("jour2")
                                ? "bg-green-100 text-green-800"
                                : "bg-orange-100 text-orange-800"
                            }`}
                          >
                            {(afternoonWorkshops["jour2"] || []).length}/
                            {getRequiredWorkshopsCount("jour2")}
                          </span>
                        </div>
                        {isLongWorkshopSelected("jour2") && (
                          <div className="mt-2 text-xs text-blue-600 bg-blue-100 p-2 rounded flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            Atelier de 3h30 sélectionné - occupe tout
                            l'après-midi
                          </div>
                        )}
                      </li>
                    )}
                    {selectedDays.includes("jour3") && (
                      <li className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex items-start justify-between">
                          <span className="flex items-start">
                            <span className="text-secondary mr-2">✓</span>
                            <span>
                              Mercredi 9 juillet - Droit & Organisation
                            </span>
                          </span>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              canReserveDay("jour3")
                                ? "bg-green-100 text-green-800"
                                : "bg-orange-100 text-orange-800"
                            }`}
                          >
                            {(afternoonWorkshops["jour3"] || []).length}/2
                          </span>
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-inner">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-primary flex items-center">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Total :
                </span>
                <span className="text-xl font-bold text-primary bg-white px-3 py-1 rounded-lg shadow">
                  {calculateTotal()}€
                </span>
              </div>
              <div className="flex items-center bg-white bg-opacity-50 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <p className="text-xs text-gray-600">
                  <span className="font-semibold">Inclut l'accès</span> à
                  l'afterwork de cloture du mercredi 9 juillet.
                </p>
              </div>
            </div>

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
            <div className="mt-6">
              <h4 className="font-bold text-secondary mb-3 text-sm flex items-center">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Informations personnelles
              </h4>
              <div className="grid grid-cols-1 gap-3">
                <div>
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
                <div>
                  <label
                    htmlFor="prenom"
                    className="block text-gray-700 font-medium mb-1 text-sm"
                  >
                    Prénom <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-primary rounded-lg focus:ring-primary focus:border-primary text-sm bg-blue-50"
                    placeholder="Votre prénom"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-1 text-sm"
                  >
                    Email professionnel{" "}
                    <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-primary rounded-lg focus:ring-primary focus:border-primary text-sm bg-blue-50"
                    placeholder="votreemail@entreprise.com"
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
                    placeholder="Votre téléphone"
                  />
                </div>
                <div>
                  <label
                    htmlFor="entreprise"
                    className="block text-gray-700 font-medium mb-1 text-sm"
                  >
                    Entreprise <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    id="entreprise"
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-primary rounded-lg focus:ring-primary focus:border-primary text-sm bg-blue-50"
                    placeholder="Nom de votre entreprise"
                    required
                  />
                </div>
                <div>
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
              </div>
            </div>

            <div className="flex items-start mt-4 bg-white p-3 rounded-lg">
              <input
                type="checkbox"
                id="acceptConditions"
                name="acceptConditions"
                checked={formData.acceptConditions}
                onChange={handleInputChange}
                className="w-4 h-4 text-secondary border-primary rounded focus:ring-primary mt-1"
                required
              />
              <label htmlFor="acceptConditions" className="ml-2 text-xs">
                J'accepte les conditions générales de vente et la politique de
                confidentialité
              </label>
            </div>

            <div className="text-center mt-6">
              <button
                type="submit"
                className={`w-full bg-secondary hover:bg-secondary-light text-white font-bold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting || selectedDays.length === 0}
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
                    Traitement en cours...
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Confirmer mon inscription
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
