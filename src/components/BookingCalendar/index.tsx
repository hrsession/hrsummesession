import { useState, useEffect } from "react";
import workshopData from "../../data/workshops.json";
import type { BookingCalendarProps } from "./types";
import type { Workshop } from "../shared/types";
import { DaySection } from "./components/DaySection";

const BookingCalendar: React.FC<BookingCalendarProps> = ({
  selectedDays = [],
  isAfternoonWorkshopSelected = () => false,
  handleDaySelection,
  handleAfternoonWorkshopSelection = () => {},
}) => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [expandedDays, setExpandedDays] = useState<string[]>(["jour1"]);

  useEffect(() => {
    setWorkshops(workshopData);
  }, []);

  const toggleDayExpansion = (day: string) => {
    if (expandedDays.includes(day)) {
      setExpandedDays(expandedDays.filter((d) => d !== day));
    } else {
      setExpandedDays([...expandedDays, day]);
    }
  };

  const workshopsByDay = workshops.reduce((acc, workshop) => {
    if (!acc[workshop.jour]) {
      acc[workshop.jour] = [];
    }
    acc[workshop.jour].push(workshop);
    return acc;
  }, {} as Record<string, Workshop[]>);

  const isLongWorkshopSelected = (day: string) => {
    if (day !== "jour2") return false;

    const selectedWorkshopsForDay =
      workshopsByDay[day]?.filter((w) =>
        isAfternoonWorkshopSelected(day, w.id)
      ) || [];

    return selectedWorkshopsForDay.some((workshop) =>
      workshop.titre.includes("Le RH est il un psy ?")
    );
  };

  const getRequiredWorkshopsCount = (day: string) => {
    return isLongWorkshopSelected(day) ? 1 : 2;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-2 border-primary overflow-hidden">
      <div className="flex items-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 mr-2 text-secondary"
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
        <h3 className="text-2xl font-bold text-primary">Sessions à la carte</h3>
      </div>
      <p className="mb-6 text-gray-600 bg-blue-50 p-4 rounded-lg border-l-4 border-primary">
        Choisissez vos journées et sélectionnez 2 ateliers de l'après-midi par
        jour. Les conférences du matin sont automatiquement incluses.
        <span className="font-semibold text-purple-600">
          {" "}
          Note spéciale:
        </span>{" "}
        L'atelier "Le RH est il un psy ?" du mardi dure 3h30 et occupe tout
        l'après-midi à lui seul.
      </p>

      <div className="space-y-10">
        {Object.keys(workshopsByDay).map((day) => {
          const dayWorkshops = workshopsByDay[day];
          if (!dayWorkshops || dayWorkshops.length === 0) return null;

          const isExpanded = expandedDays.includes(day);
          const isDaySelected = selectedDays.includes(day);
          const selectedAfternoonCount = dayWorkshops.filter((w) =>
            isAfternoonWorkshopSelected(day, w.id)
          ).length;
          const requiredCount = getRequiredWorkshopsCount(day);
          const longWorkshopSelected = isLongWorkshopSelected(day);

          return (
            <DaySection
              key={day}
              day={day}
              workshops={dayWorkshops}
              isExpanded={isExpanded}
              isDaySelected={isDaySelected}
              selectedAfternoonCount={selectedAfternoonCount}
              requiredCount={requiredCount}
              longWorkshopSelected={longWorkshopSelected}
              onToggleExpansion={toggleDayExpansion}
              onDaySelection={handleDaySelection}
              onAfternoonWorkshopSelection={handleAfternoonWorkshopSelection}
              isAfternoonWorkshopSelected={isAfternoonWorkshopSelected}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BookingCalendar;
