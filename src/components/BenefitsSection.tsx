import DayTimeline from "./DayTimeline";

const BenefitsSection: React.FC = () => {
  return (
    <section className="pt-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8cc6e9] mb-4 relative inline-block">
            Pourquoi Participer ?
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-[#FF1C66] rounded-full transform -rotate-1"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez les avantages exclusifs de notre HR Summer session pour
            les professionnels RH.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl text-center shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-[#8cc6e9] relative">
            <div className="absolute -top-3 -right-3 bg-[#FF1C66] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-md transform rotate-12">
              1
            </div>

            <div className="w-16 h-16 bg-[#8cc6e9] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#8cc6e9] mb-4">
              Des experts à votre écoute
            </h3>
            <p className="text-gray-600">
              Nos formateurs ne sont pas seulement des théoriciens : ce sont des
              professionnels reconnus, avec une expérience terrain des enjeux RH
              d’aujourd’hui.
            </p>
            <div className="mt-4 bg-blue-50 p-3 rounded-lg">
              <p className="text-md font-bold text-[#8cc6e9]">
                Plus de 15 intervenants spécialisés
              </p>
              <p>
                Chacun apporte une approche pédagogique innovante, pour des
                formations concrètes, engageantes et directement applicables.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl text-center shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-[#FF1C66] relative">
            <div className="absolute -top-3 -right-3 bg-[#8cc6e9] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-md transform rotate-12">
              2
            </div>

            <div className="w-16 h-16 bg-[#FF1C66] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#8cc6e9] mb-4">
              Du networking Privilégié
            </h3>
            <p className="text-gray-600">
              Rencontrez, échangez, connectez. Des temps forts pour dialoguer
              avec des professionnels RH et enrichir votre réseau.
            </p>
            <div className="mt-4 bg-pink-50 p-3 rounded-lg">
              <p className="text-md text-[#FF1C66] font-bold">
                Des opportunités de connexion uniques
              </p>
              <p>
                Dans un{" "}
                <span className="font-semibold">
                  cadre convivial et propice à l’apprentissage
                </span>
                , favorisant les échanges authentiques et les rencontres
                durables.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl text-center shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-t-4 border-[#8cc6e9] relative">
            <div className="absolute -top-3 -right-3 bg-[#FF1C66] text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-md transform rotate-12">
              3
            </div>

            <div className="w-16 h-16 bg-[#8cc6e9] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
            </div>
            <h3 className="text-xl font-bold text-[#8cc6e9] mb-4">
              Des idées à embarquer
            </h3>
            <p className="text-gray-600">
              Des ateliers et conférences conçus pour l’action. Explorez des
              outils concrets, découvrez des solutions applicables à vos enjeux
              RH.
            </p>
            <div className="mt-4 bg-blue-50 p-3 rounded-lg">
              <p className="text-md font-bold">Repartez avec du concret</p>
              <ul className="text-sm text-[#8cc6e9] font-semibold">
                <li className="text-left">✔️ Des ressources pratiques</li>
                <li className="text-left">✔️ Des modèles prêts à l’emploi</li>
                <li className="text-left">
                  ✔️ De quoi agir dès votre retour en entreprise
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#8cc6e9] to-[#67b8d8] p-8 rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#FF1C66] rounded-full opacity-10"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[#FF1C66] rounded-full opacity-10"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Réservez votre place dès maintenant
              </h3>
              <p className="text-white text-opacity-90">
                Les places sont limitées à 20 participants par atelier pour
                garantir la qualité des échanges et des ateliers.
              </p>
            </div>
            <a
              href="#programme"
              className="inline-flex items-center bg-white text-[#8cc6e9] hover:bg-blue-50 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-[#FF1C66]"
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
              Je réserve maintenant
            </a>
          </div>
        </div>
      </div>
      <DayTimeline />
    </section>
  );
};

export default BenefitsSection;
