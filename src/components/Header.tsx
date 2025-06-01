import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ContactForm from "./ContactForm";

declare module "react" {
  interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    popovertarget?: string;
    popoveraction?: string;
  }
  interface HTMLAttributes<T> {
    popover?: string;
  }
}

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSpeakersClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      const speakersSection = document.getElementById("speakers");
      if (speakersSection) {
        speakersSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-primary to-primary-light text-white shadow-md z-50">
      <div className="bg-secondary text-white text-center py-1 font-bold tracking-widest text-sm">
        <p>SAVE THE DATE! Du 07 Juillet au 09 Juillet !</p>
      </div>

      <div className="container w-full max-w-[100rem] mx-auto p-4 flex justify-between items-center md:h-28 ">
        <div className="flex items-center flex-col w-1/4 min-w-[14rem] max-w-[20rem]">
          <Link
            to="/#hero"
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("hero")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              } else {
                document
                  .getElementById("hero")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <img
              src="logos/logo-header.webp"
              className=""
              alt="Logo de LearnsRH"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-white hover:text-secondary transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            Accueil
          </Link>
          <a
            href="/#speakers"
            onClick={handleSpeakersClick}
            className="text-white hover:text-secondary transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            Les intervenants
          </a>
          <button className="bg-gradient-to-r from-[#8cc6e9] to-[#ff1c6824] border-solid border-2 border-secondary  hover:bg-secondary text-white py-2 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            <Link to="/programme">Je m'inscris</Link>
          </button>
          <button
            className="w-1/2 mx-auto bg-gradient-to-l from-[#ff1c66] to-[#8cc5e912] bg-secondary border-solid border-2 border-secondary hover:bg-primary text-white py-2 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            popovertarget="contactForm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            Demande d'information
          </button>
        </nav>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none cursor-pointer whitespace-nowrap"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-primary-light w-full">
          <nav className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
              className="text-white hover:text-secondary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <a
              href="/#speakers"
              onClick={(e) => {
                handleSpeakersClick(e);
                setIsMenuOpen(false);
              }}
              className="text-white hover:text-secondary transition-colors duration-300"
            >
              Les intervenants
            </a>
            <Link
              to="/programme"
              className="w-1/2 mx-auto bg-gradient-to-r from-[#8cc6e9] to-[#ff1c6824] border-solid border-2 border-secondary hover:bg-secondary text-white py-2 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
              Je m'inscris
            </Link>
            <button
              className="w-1/2 mx-auto bg-gradient-to-l from-[#ff1c66] to-[#8cc5e912] bg-secondary border-solid border-2 border-secondary hover:bg-primary text-white py-2 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              popovertarget="contactForm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
              Demande d'information
            </button>
          </nav>
        </div>
      )}
      <div id="contactForm" className="w-3/4 rounded-xl p-0" popover="auto">
        <ContactForm onClose={() => setIsMenuOpen(true)} />
      </div>
    </header>
  );
};

export default Header;
