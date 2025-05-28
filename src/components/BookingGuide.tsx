const BookingGuide: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-16 border-2 border-[#8cc6e9] bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')]">
      <h3 className="text-2xl font-bold text-[#8cc6e9] mb-4 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mr-2 text-[#FF1C66]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        Guide de l'explorateur : comment réserver vos sessions ?
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center bg-blue-50 p-4 rounded-lg transform hover:scale-102 transition-transform duration-300">
          <div className="w-12 h-12 bg-[#8cc6e9] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
            <span className="text-white text-xl font-bold">1</span>
          </div>
          <div>
            <h4 className="text-lg font-bold text-[#8cc6e9] mb-2">
              Réservez vos journées
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold text-[#FF1C66]">
                  Journée complète à 200€, ou le pass 3 jours à 500€:
                </span>{" "}
                Consultez le planning de chaque journée.
              </li>
              <li>
                <span className="font-semibold text-[#FF1C66]">
                  Des conférences communes le matin et des ateliers au choix
                  l’après-midi :
                </span>{" "}
                Choisissez spécifiquement les sessions qui vous intéressent.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center bg-blue-50 p-4 rounded-lg transform hover:scale-102 transition-transform duration-300">
          <div className="w-12 h-12 bg-[#8cc6e9] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
            <span className="text-white text-xl font-bold">2</span>
          </div>
          <div>
            <h4 className="text-lg font-bold text-[#8cc6e9] mb-2">
              Pour les réservations de journée
            </h4>
            <p className="text-gray-700">
              Après avoir sélectionné une journée complète, vous devrez choisir
              2 ateliers de l'après-midi ceux proposées. Ceux-ci seront mises en
              évidence et vous pourrez cliquer dessus pour faire votre
              sélection.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center bg-blue-50 p-4 rounded-lg transform hover:scale-102 transition-transform duration-300">
          <div className="w-12 h-12 bg-[#8cc6e9] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
            <span className="text-white text-xl font-bold">3</span>
          </div>
          <div>
            <h4 className="text-lg font-bold text-[#8cc6e9] mb-2">
              Réservation de sessions individuelles
            </h4>
            <p className="text-gray-700">
              Consultez le planning et cliquez sur "Réserver" pour chaque
              atelier qui vous intéresse. Vous pouvez en choisir 2 parmis ceux
              proposés.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center bg-blue-50 p-4 rounded-lg transform hover:scale-102 transition-transform duration-300">
          <div className="w-12 h-12 bg-[#FF1C66] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
            <span className="text-white text-xl font-bold">4</span>
          </div>
          <div>
            <h4 className="text-lg font-bold text-[#8cc6e9] mb-2">
              Validation de votre réservation
            </h4>
            <p className="text-gray-700">
              Vos sélections apparaissent automatiquement dans le formulaire à
              droite. Complétez vos informations personnelles et validez pour
              confirmer votre participation.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 border-l-4 border-[#8cc6e9] p-4 rounded-r flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mr-2 text-[#FF1C66]"
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
        <p className="text-blue-800">
          <span className="font-bold">Bonus :</span> Toute réservation (journée
          complète ou activité individuelle) vous donne accès à l'afterwork du
          mercredi soir !
        </p>
      </div>
    </div>
  );
};

export default BookingGuide;
