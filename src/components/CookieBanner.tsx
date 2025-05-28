import React, { useState, useEffect } from "react";

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setIsVisible(true);
      // Empêcher le défilement du body quand le modal est visible
      document.body.style.overflow = "hidden";
    }
    return () => {
      // Réactiver le défilement quand le composant est démonté
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
    document.body.style.overflow = "auto";
  };

  const handleReject = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setIsVisible(false);
    document.body.style.overflow = "auto";
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay flouté */}
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" />

      {/* Modal centré */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full transform transition-all">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-[#8cc6e9] mb-4">
              Politique de cookies
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Nous utilisons des cookies pour améliorer votre expérience sur
                notre site. En continuant à naviguer, vous acceptez
                l'utilisation des cookies. Pour plus d'informations, consultez
                notre{" "}
                <a
                  href="/politique-confidentialite"
                  className="text-[#8cc6e9] hover:text-[#67b8d8] transition-colors duration-300"
                >
                  politique de confidentialité
                </a>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-end mt-6">
                <button
                  onClick={handleReject}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Refuser
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 bg-[#8cc6e9] text-white rounded-md hover:bg-[#67b8d8] transition-colors duration-300"
                >
                  Accepter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
