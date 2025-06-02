import { useState } from "react";
import { useNavigate } from "react-router-dom";
import workshopData from "../../data/workshops.json";
import type { WorkshopCalendarProps, WorkshopsByDay, Workshop } from "./types";
import { DaySection } from "./components/DaySection";

const WorkshopCalendar: React.FC<WorkshopCalendarProps> = () => {
  const [expandedDays, setExpandedDays] = useState<string[]>(["jour1"]);
  const [selectedWorkshop, setSelectedWorkshop] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleDayExpansion = (day: string) => {
    if (expandedDays.includes(day)) {
      setExpandedDays(expandedDays.filter((d) => d !== day));
    } else {
      setExpandedDays([...expandedDays, day]);
    }
  };

  const workshopsByDay = workshopData.reduce((acc, workshop) => {
    if (!acc[workshop.jour]) {
      acc[workshop.jour] = [];
    }
    acc[workshop.jour].push(workshop);
    return acc;
  }, {} as WorkshopsByDay);

  return (
    <section className="bg-white w-full md:w-11/12 lg:w-3/4 mx-auto rounded-xl shadow-lg my-10 md:my-20 p-4 md:p-6 mb-8 border-2 border-primary overflow-hidden">
      <div className="flex flex-col items-center mb-6">
        <h3 className="w-auto mx-auto text-2xl md:text-3xl lg:text-4xl font-bold text-[#8cc6e9] mb-6 md:mb-11 relative inline-block text-center">
          Votre programme du HR Summer Session
          <div className="absolute -bottom-3 left-0 right-0 h-1 bg-[#FF1C66] rounded-full transform -rotate-1"></div>
        </h3>
        <p className="text-sm md:text-base text-center px-4">
          3 jours pour{" "}
          <span className="font-semibold">
            s'inspirer, apprendre et échanger
          </span>{" "}
          autour des grandes thématiques RH de demain.
        </p>
        <p className="text-sm md:text-base text-center px-4 mt-2">
          ⚠️ Le programme est susceptible d'évoluer. Nous nous réservons le
          droit d'y apporter des modifications… et de vous réserver quelques
          surprises !
        </p>
      </div>
      <article className="space-y-6 md:space-y-10">
        {Object.keys(workshopsByDay).map((day) => {
          const dayWorkshops = workshopsByDay[day];
          if (!dayWorkshops || dayWorkshops.length === 0) return null;

          return (
            <DaySection
              key={day}
              day={day}
              workshops={dayWorkshops as Workshop[]}
              isExpanded={expandedDays.includes(day)}
              selectedWorkshop={selectedWorkshop}
              onToggleExpansion={toggleDayExpansion}
              onWorkshopSelect={setSelectedWorkshop}
            />
          );
        })}
      </article>

      <div className="mt-6 flex justify-center">
        <button
          onClick={() => navigate("/programme")}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors duration-300 flex items-center text-sm md:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 md:h-5 md:w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Je réserve
        </button>
      </div>
    </section>
  );
};

export default WorkshopCalendar;
