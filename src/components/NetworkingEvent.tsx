const NetworkingEvent: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#8cc6e9] to-[#67b8d8] text-white rounded-xl shadow-lg p-6 mb-8 relative overflow-hidden transform transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FF1C66] via-[#FF7E00] to-transparent opacity-60"></div>

      <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="mb-6 md:mb-0 md:mr-8">
          <div className="flex items-center mb-4">
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
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <h3 className="w-auto mx-auto text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-11 relative inline-block text-center">
              Afterwork & Networking
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-[#FF1C66] rounded-full transform -rotate-1"></div>
            </h3>
          </div>
          <div className="bg-white text-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
            <p className="mb-2 font-semibold">
              Incluse avec toute réservation de journée ou d'activité !
            </p>
            <p>
              Rejoignez-nous pour une soirée d'échanges professionnels dans une
              ambiance conviviale. Networking, partage d'expériences et moments
              de convivialité garantis !
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Apéritif sous la forme d’un Cocktail </span>
              </li>
              <li className="flex items-center">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Partage & convivialité</span>
              </li>
              <li className="flex items-center">
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
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Une intervention à ne pas manquer</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <img
            src="/logos/logo-processcomedy.webp"
            alt="Soirée networking"
            className="rounded-lg shadow-lg w-full p-3 bg-black md:w-80 h-auto object-cover border-4 border-white"
          />
          <div className="absolute -bottom-3 -right-3 bg-[#FF1C66] text-white py-1 px-3 rounded-full font-semibold transform rotate-3 shadow-md">
            Mercredi soir
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkingEvent;
