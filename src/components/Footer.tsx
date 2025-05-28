import { Link } from "react-router";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-[#8cc6e9] to-[#0e376a] text-white pt-16 pb-8 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-16 bg-blue-400 opacity-10 transform -skew-y-3"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FF1C66] rounded-full opacity-5 -mr-32 -mb-32"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#FF1C66] rounded-full opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold tracking-tight mb-6 flex items-center">
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
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <div>
                <span className="text-white">HR</span>
                <span className="text-[#FF1C66] italic font-cursive">
                  Summer
                </span>
                <span className="text-white">SESSION</span>
              </div>
            </div>
            <p className="mb-6 bg-white text-white bg-opacity-10 p-4 rounded-lg">
              <span className="font-semibold">
                Votre nouveau rendez-vous incontournable pour le développement
                des compétences RH.
              </span>
              <br />
              Une première édition pensée comme une vraie parenthèse avant l’été
              : inspiration, formation de qualité et convivialité garantie. Une
              expérience immersive pour prendre de la hauteur, faire le plein
              d’idées concrètes et tisser des liens durables.
              <br />
              <span className="font-bold">
                HR Summer Session 2025 : l’événement à ne pas manquer pour
                préparer sereinement la rentrée RH.
              </span>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Contact
            </h3>
            <div className="bg-white text-white bg-opacity-10 p-4 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-1 mr-3 text-[#FF1C66]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    Learning Lab La Défense
                    <br />
                    Galerie du passage de l'Arche
                    <br />
                    40 Passage de l'Arche, 92800 Puteaux
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-1 mr-3 text-[#FF1C66]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a href="tel:+33180873180">+33 1 80 87 31 80</a>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-1 mr-3 text-[#FF1C66]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a href="mailto:contact@learns.fr">contact@learns.fr</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-8 text-center text-sm">
          <div className="flex flex-col md:flex-row items-center justify-center mb-4">
            <div className="flex items-center mb-2 md:mb-0 md:mr-4">
              <img
                src="/logos/logo-learns.svg"
                alt="Learns RH"
                className="h-8 mr-3"
              />
            </div>
            <span className="hidden md:inline mx-2">|</span>
            <div className="flex items-center">
              <img
                src="logos//logo-pragma.webp"
                alt="Châteauform'"
                className="w-full h-20 mr-3"
              />
            </div>
            <span className="hidden md:inline mx-2">|</span>
            <div className="flex items-center">
              <img
                src="logos//logo-chateauform-noBG.webp"
                alt="Châteauform'"
                className="w-full h-28 mr-3"
              />
            </div>
          </div>
          <p>
            &copy; 2025 HR Summer Camp. Tous droits réservés. |{" "}
            <Link
              to="/cgv"
              className="hover:text-[#FF1C66] transition-colors duration-300 cursor-pointer underline"
            >
              Conditions Générales de Vente
            </Link>{" "}
            |{" "}
            <Link
              to="/mentions-legales"
              className="hover:text-[#FF1C66] transition-colors duration-300 cursor-pointer underline"
            >
              Mentions légales
            </Link>{" "}
            |{" "}
            <Link
              to="/politique-de-confidentialite"
              className="hover:text-[#FF1C66] transition-colors duration-300 cursor-pointer underline"
            >
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
