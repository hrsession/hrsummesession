import { useState } from "react";
import BookingGuide from "../components/BookingGuide";
import BookingCalendar from "../components/BookingCalendar";
import NetworkingEvent from "../components/NetworkingEvent";
import BookingForm from "../components/BookingForm";
import HeroSection from "../components/HeroSection";

const Program: React.FC = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [afternoonWorkshops, setAfternoonWorkshops] = useState<{
    [key: string]: string[];
  }>({
    jour1: [],
    jour2: [],
    jour3: [],
  });

  const handleDaySelection = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
      setAfternoonWorkshops({
        ...afternoonWorkshops,
        [day]: [],
      });
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleAfternoonWorkshopSelection = (day: string, workshop: string) => {
    const currentSelections = afternoonWorkshops[day] || [];

    if (currentSelections.includes(workshop)) {
      setAfternoonWorkshops({
        ...afternoonWorkshops,
        [day]: currentSelections.filter((w) => w !== workshop),
      });
    } else if (currentSelections.length < 2) {
      setAfternoonWorkshops({
        ...afternoonWorkshops,
        [day]: [...currentSelections, workshop],
      });
    }
  };

  const isAfternoonWorkshopSelected = (day: string, workshop: string) => {
    return afternoonWorkshops[day]?.includes(workshop) || false;
  };

  const calculateTotal = () => {
    if (selectedDays.length === 3) {
      return 500;
    }
    return selectedDays.length * 200;
  };

  return (
    <>
      <HeroSection
        title="Découvrez le programme et réservez vos ateliers dès maintenant!"
        paragraph1="Apprendre, prendre du recul et aussi partager (ou travailler pour ne pas cumuler du retard), c'est ce que nous vous proposons pour ce HR Summer Session qui se déroule dans"
        paragraph2="un lieu à chaleur ajoutée."
        paragraphEmphasized1=""
        paragraphEmphasized2=""
        backgroundImage="program/hero-program.webp"
        buttonText="Réservez vos sessions"
        buttonLink="/#bookingGuide"
        date="Places limitées"
        scrollToId="bookingGuide"
      />
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div id="bookingGuide" className="text-center mb-16">
            <h2 className="w-auto mx-auto text-2xl md:text-3xl lg:text-4xl font-bold text-[#8cc6e9] mb-6 md:mb-11 relative inline-block text-center">
              Programme et Réservation
              <div className="absolute -bottom-3 left-0 right-0 h-1 bg-[#FF1C66] rounded-full transform -rotate-1"></div>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez notre programme d'ateliers dédié aux professionnels RH.
            </p>
          </div>
          <BookingGuide />

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-3/4">
              <BookingCalendar
                selectedDays={selectedDays}
                isAfternoonWorkshopSelected={isAfternoonWorkshopSelected}
                handleDaySelection={handleDaySelection}
                handleAfternoonWorkshopSelection={
                  handleAfternoonWorkshopSelection
                }
              />

              <NetworkingEvent />
            </div>

            <div className="w-full lg:w-1/4">
              <BookingForm
                selectedDays={selectedDays}
                afternoonWorkshops={afternoonWorkshops}
                calculateTotal={calculateTotal}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Program;
