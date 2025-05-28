import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import SpeakersSection from "../components/SpeakersSection";
import WorkshopCalendar from "../components/WorkshopCalendar";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Professionnels RH, venez vous inspirer, vous challenger et préparer votre rentrée 2025.
        Pendant 3 jours assistez à des ateliers, des conférences, des échanges à chaleur ajoutée, au sein du    Châteauform' Learning Lab de la Défense "
        backgroundImage="parasol.webp"
        paragraph="Entre réunions, sollicitations quotidiennes, dashboards et KPIs à produire...
        Quand prenez-vous vraiment de la hauteur ?
        L’occasion idéale pour réfléchir, vous outiller et repartir inspiré·e."
        paragraphEmphasized="Et si vous faisiez une pause avant l'été ? ☀️"
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
