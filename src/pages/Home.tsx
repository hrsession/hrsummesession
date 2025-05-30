import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import SpeakersSection from "../components/SpeakersSection";
import WorkshopCalendar from "../components/WorkshopCalendar/index";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Professionnels RH, venez vous inspirer, vous challenger et préparer votre rentrée 2025.
        Pendant 3 jours assistez à des ateliers, des conférences, des échanges à chaleur ajoutée, au sein du    Châteauform' Learning Lab de la Défense "
        backgroundImage="parasol.webp"
        paragraphEmphasized1="Prendre du recul, monter en compétences et partager entre pairs :"
        paragraph1=" c’est exactement ce que vous réserve le HR Summer Session,"
        paragraphEmphasized2="dans un lieu à chaleur ajoutée"
        paragraph2="pensé pour inspirer, connecter et faire progresser sans pression… mais avec conviction."
        buttonText="Réservez vos sessions"
        buttonLink="/programme"
        date="Du 07 au 09 Juillet"
      />
      <WorkshopCalendar />
      <BenefitsSection />
      <section id="speakers">
        <SpeakersSection />
      </section>
    </>
  );
};

export default Home;
