const MentionsLegales: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-12 pt-28 md:pt-48 max-w-4xl">
      <h1 className="text-4xl font-bold text-[#8cc6e9] mb-8 text-center">
        Mentions légales
      </h1>

      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-[#8cc6e9] mb-4">
            Éditeur du site
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Le site learnsrh.fr, ci-après dénommé « le site » est édité par la
              Société LEARNS SAS, immatriculée au RCS de Versailles sous le
              numéro 94988663400011, code APE : 7022 Z au capital social de 5
              000 euros, dont le siège est situé 17, rue Wauthier 78100
              Saint-Germain en Laye.
            </p>
            <p>
              La société Learns est enregistré en tant qu'organisme de formation
              sous le numéro de déclaration : 11788604278.
            </p>
            <p>Directeur de la publication : Mr Auzanneau Xavier</p>
          </div>
        </section>
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-[#8cc6e9] mb-4">
            Hébergement
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>Le site est hébergé sur les plateformes suivantes :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107,
                États-Unis
                <br />
                Site web :{" "}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8cc6e9] hover:text-[#67b8d8] transition-colors duration-300"
                >
                  github.com
                </a>
              </li>
              <li>
                Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
                <br />
                Site web :{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8cc6e9] hover:text-[#67b8d8] transition-colors duration-300"
                >
                  vercel.com
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-[#8cc6e9] mb-4">
            Contact
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Pour toute information concernant le site, merci d'adresser un
              email à{" "}
              <a
                href="mailto:contact@learns.fr"
                className="text-[#8cc6e9] hover:text-[#67b8d8] transition-colors duration-300"
              >
                <i className="fas fa-envelope mr-2"></i>
                contact@learns.fr
              </a>
            </p>
          </div>
        </section>
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-[#8cc6e9] mb-4">
            Réalisation
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Ce site Web a été réalisé par{" "}
              <a
                href="mailto:cedric.ragot@ecole-hexagone.com"
                className="text-[#8cc6e9] hover:text-[#67b8d8] transition-colors duration-300"
              >
                <i className="fas fa-envelope mr-2"></i>
                Cédric Ragot
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MentionsLegales;
