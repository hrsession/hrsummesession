const PolitiqueConfidentialite: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pb-12 pt-28 md:pt-48 max-w-4xl">
      <h1 className="text-4xl font-bold text-[#8cc6e9] mb-8 text-center">
        Politique de confidentialité
      </h1>

      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-[#8cc6e9] mb-4">
            Protection des données personnelles Learns
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Soucieux de protéger la vie privée de ses clients, Learns s'engage
              dans la protection des données personnelles. La présente Charte a
              pour objet de rappeler nos principes et nos actions visant au
              respect de la réglementation applicable en matière de protection
              des données à caractère personnel.
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-[#8cc6e9] mb-4">
            Informations sur les Cookies
          </h2>
          <div className="space-y-4 text-gray-700">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Généralités sur les cookies
            </h3>
            <p>
              Un cookie est un petit fichier texte, souvent crypté, stocké dans
              le navigateur internet. Lors de la visite d'un site Web, ce
              dernier envoie des informations au navigateur qui crée alors un
              fichier texte sur le terminal de réception (PC, téléphone,
              tablette, ou tout autre appareil), et qui contient des
              informations de visite sur ledit site. Les cookies sont
              nécessaires pour faciliter la navigation et la rendre plus
              conviviale, et ils n'endommagent pas l'ordinateur.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Cookies utilisés par le site web de Learns
            </h3>
            <p>
              Les cookies utilisés par (https://learnsrh.fr) permettent de
              personnaliser le contenu du site afin d'optimiser l'expérience du
              visiteur ou du client. Ils permettent également d'offrir des
              fonctionnalités relatives aux médias sociaux et d'analyser le
              trafic.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Types de cookies utilisés
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">
                  (I) Les cookies techniques de navigation
                </h4>
                <p>
                  Les cookies techniques sont ceux utilisés tout au long de la
                  navigation qui sont soit strictement nécessaires à la
                  fourniture du site, soit permettant de faciliter et d'exécuter
                  certaines fonctions sur le site.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  (II) Les cookies de mesure d'audience
                </h4>
                <p>
                  Les cookies de mesure d'audience permettent d'établir des
                  statistiques de fréquentation, évaluer l'ergonomie du site
                  mais également de détecter des problèmes de navigation dans le
                  site ou encore d'organiser certains contenus.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  (III) Les cookies publicitaires
                </h4>
                <p>
                  Les cookies publicitaires permettent de reconnaitre un
                  utilisateur qui revient sur le site ou consulte un autre site
                  internet. Grâce à ces cookies, il est possible d'effectuer le
                  suivi des visiteurs au travers du site Web.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Paramétrage des navigateurs */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-[#8cc6e9] mb-4">
            Paramétrage des différents navigateurs
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                1/ si vous utilisez le navigateur Internet Explorer
              </h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Dans Internet Explorer, cliquez sur le bouton Outils, puis sur
                  Options Internet.
                </li>
                <li>
                  Sous l'onglet Général, sous Historique de navigation, cliquez
                  sur Paramètres.
                </li>
                <li>Cliquez sur le bouton Afficher les fichiers.</li>
                <li>
                  Cliquez sur l'en-tête de colonne Nom pour trier tous les
                  fichiers dans l'ordre alphabétique.
                </li>
                <li>
                  Sélectionnez le ou les cookies comprenant le nom «Learns » et
                  supprimez-les.
                </li>
                <li>
                  Fermez la fenêtre qui contient la liste des fichiers, puis
                  cliquez deux fois sur OK.
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                2/ si vous utilisez le navigateur Firefox
              </h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Allez dans le menu Outils du navigateur puis sélectionnez le
                  menu Options.
                </li>
                <li>
                  Dans la fenêtre qui s'affiche, choisissez « Vie privée et
                  sécurité » et cliquez sur » Gérer les données ».
                </li>
                <li>
                  Repérez les fichiers qui contiennent le nom « Learns »
                  Sélectionnez-les et supprimez-les.
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                3/ si vous utilisez le navigateur Safari
              </h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Dans votre navigateur, choisissez le menu Édition &gt;
                  Préférences.
                </li>
                <li>Cliquez sur Sécurité.</li>
                <li>Cliquez sur Afficher les cookies.</li>
                <li>
                  Sélectionnez les cookies qui contiennent le nom « Learns » et
                  cliquez sur Effacer ou sur Tout effacer.
                </li>
                <li>Après avoir supprimé les cookies, cliquez sur Terminé.</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                4/ si vous utilisez le navigateur Google Chrome
              </h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Cliquez sur l'icône du menu Outils.</li>
                <li>Sélectionnez Options.</li>
                <li>
                  Cliquez sur l'onglet Options avancées et accédez à la section
                  « Confidentialité ».
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Charte de protection des données */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-[#8cc6e9] mb-4">
            CHARTE LEARNS SUR LA PROTECTION DES DONNEES PERSONNELLES
          </h2>
          <div className="space-y-6 text-gray-700">
            <p>
              Soucieux de protéger la vie privée de ses clients, LEARNS s'engage
              dans la protection des données personnelles.
            </p>
            <p>
              La présente Charte a pour objet de rappeler nos principes et nos
              actions visant au respect de la réglementation applicable en
              matière de protection des données à caractère personnel.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                1- Nos principes en matière de traitement des données
                personnelles
              </h3>
              <p>
                En application du Règlement (UE) 2016/679 du 27 avril 2016
                relatif à la protection des personnes physiques à l'égard des
                traitements de données à caractère personnel, les traitements de
                vos données personnelles effectués par LEARNS s'appuient sur les
                principes fondamentaux suivants :
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Les traitements sont licites, loyaux et transparents</li>
                <li>
                  Les finalités de chaque traitement sont déterminées,
                  explicites et légitimes
                </li>
                <li>
                  Les données collectées sont proportionnelles à la finalité du
                  traitement
                </li>
                <li>
                  Les données collectées font l'objet de mesures de sécurité
                  organisationnelles et techniques
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                2- Nature des données collectées
              </h3>
              <p>
                Par donnée à caractère personnel on entend toute information se
                rapportant à une personne identifiée ou identifiable, notamment
                par référence à des identifiants tels qu'un nom, un numéro
                d'identification, des données de localisation, un identifiant en
                ligne, un ou plusieurs éléments spécifiques propres à l'identité
                physique, physiologique, génétique, psychique, économique,
                culturelle ou sociale ainsi qu'à tout autre renseignement que
                nos clients décident de nous communiquer.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                3- Finalités de la collecte et du traitement des données
                personnelles
              </h3>
              <p>
                Les données collectées font l'objet d'un traitement par LEARNS
                pour les finalités suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  L'exécution de l'action de formation professionnelle des
                  salariés
                </li>
                <li>
                  La réalisation d'études marketing et de statistiques internes
                </li>
                <li>L'envoi d'offres commerciales (si non opposé)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                4- Destinataires des données personnelles
              </h3>
              <p>Les destinataires des données personnelles sont :</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Les services internes LEARNS en charge de la gestion de la
                  formation
                </li>
                <li>
                  Les sous-traitants en charge d'une prestation liée à
                  l'exécution de l'action de formation
                </li>
                <li>
                  Les organismes publics ou non, exclusivement pour répondre à
                  nos obligations légales
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                5- Durée de conservation des données
              </h3>
              <p>
                Les données personnelles collectées et traitées par LEARNS pour
                l'exécution d'une prestation de formation sont conservées
                pendant la durée strictement nécessaire à la gestion de la
                formation. Elles font ensuite l'objet d'un archivage jusqu'à
                l'expiration de la durée de prescription légale applicable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                6- Mesures de sécurité
              </h3>
              <p>
                LEARNS prend des mesures techniques et organisationnelles pour
                interdire l'accès non autorisé ou la divulgation de vos données
                :
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  L'accès à nos locaux et à nos plates-formes informatiques sont
                  sécurisés
                </li>
                <li>
                  L'accès, le partage, et le transfert de données sont sécurisés
                </li>
                <li>
                  Nos collaborateurs sont sensibilisés aux exigences de
                  confidentialité
                </li>
                <li>Un délégué à la protection des données (DPO) est nommé</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                7- Droits
              </h3>
              <p>
                Conformément à la règlementation en vigueur, vous disposez d'un
                droit d'accès et de rectification de vos données, ainsi que de
                celui d'en demander l'effacement, de vous opposer à leur
                traitement et d'en obtenir la limitation ou la portabilité dans
                la mesure où cela est applicable.
              </p>
              <p className="mt-4">
                Pour exercer vos droits, vous pouvez contacter notre DPO à
                l'adresse suivante :<br />
                DPO, 17 rue Wauthier 78100 Saint Germain en Laye
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
