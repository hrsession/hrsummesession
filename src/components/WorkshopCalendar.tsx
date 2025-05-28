import React from "react";
import { useState } from "react";
import workshopData from "../data/workshops.json";
import type { Workshop } from "../types";
import { useNavigate } from "react-router-dom";

export interface WorkshopCalendarProps {
  selectedDays?: string[];
  isAfternoonWorkshopSelected?: (day: string, workshop: string) => boolean;
  handleDaySelection?: (day: string) => void;
  handleAfternoonWorkshopSelection?: (day: string, workshop: string) => void;
}

export interface WorkshopsByDay {
  [key: string]: Workshop[];
}

const WorkshopCalendar: React.FC<WorkshopCalendarProps> = () => {
  const [expandedDays, setExpandedDays] = useState<string[]>(["jour1"]);
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
  }, {} as Record<string, any[]>);

  const getMorningWorkshops = (day: string) => {
    return (
      workshopsByDay[day]?.filter(
        (w: Workshop) =>
          w.horaires.startsWith("9") || w.horaires.startsWith("11")
      ) || []
    );
  };

  const getAfternoonWorkshops = (day: string) => {
    return (
      workshopsByDay[day]?.filter(
        (w: Workshop) =>
          w.horaires.startsWith("14") || w.horaires.startsWith("16")
      ) || []
    );
  };

  const getLunchBreakWorkshops = (day: string) => {
    return (
      workshopsByDay[day]?.filter(
        (w: Workshop) =>
          w.horaires.startsWith("12") || w.horaires.startsWith("13")
      ) || []
    );
  };

  const getThemeIcon = (theme: string) => {
    switch (theme) {
      case "Rémunération":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "RH stratège":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        );
      case "Prospectives RH":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        );
      case "IA RH":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
      case "Dialogue Social":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        );
      case "Recrutement":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        );
      case "QVT":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        );
      case "Data RH":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        );
      case "Soft Skills":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        );
      case "Droit de la formation":
      case "Droit du travail":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        );
      case "Gestion des talents":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        );
      case "Process Comedy":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
    }
  };

  const getSpeakerIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    );
  };

  const formatDate = (date: string) => {
    const [day] = date.split("-");
    return `${day} juillet 2025`;
  };

  const getDayOfWeek = (date: string) => {
    const [day] = date.split("-");
    const dateObj = new Date(`2025-07-${day}`);
    const days = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];
    return days[dateObj.getDay()];
  };

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

          const firstWorkshop = dayWorkshops[0];
          const isExpanded = expandedDays.includes(day);
          const morningWorkshops = getMorningWorkshops(day);
          const afternoonWorkshops = getAfternoonWorkshops(day);

          return (
            <div
              key={day}
              className={`border-2 ${
                day === "jour2" ? "border-secondary" : "border-primary"
              } rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden`}
            >
              <div
                className={`${
                  day === "jour2"
                    ? "bg-gradient-to-r from-secondary to-secondary-light"
                    : "bg-gradient-to-r from-primary to-primary-light"
                } text-white p-3 md:p-4 flex items-center justify-between`}
              >
                <div
                  className="flex items-center cursor-pointer flex-1"
                  onClick={() => toggleDayExpansion(day)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6 mr-2"
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
                  <h4 className="text-lg md:text-xl font-bold">
                    {getDayOfWeek(firstWorkshop.date)}{" "}
                    {formatDate(firstWorkshop.date)}
                  </h4>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 cursor-pointer ${
                    isExpanded ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => toggleDayExpansion(day)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {isExpanded ? (
                <div
                  className="p-3 md:p-4 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')] overflow-x-auto"
                  style={{ scrollbarWidth: "thin" }}
                >
                  {morningWorkshops.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-bold text-primary mb-3 flex items-center text-base md:text-lg">
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
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        Conférences du matin
                      </h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse min-w-[800px] mb-6">
                          <thead>
                            <tr className="bg-blue-50 text-primary">
                              <th className="py-2 md:py-3 px-2 md:px-4 text-left border-b border-blue-100 font-bold w-1/4 text-sm md:text-base">
                                Horaire
                              </th>
                              <th className="py-2 md:py-3 px-2 md:px-4 text-left border-b border-blue-100 font-bold w-1/2 text-sm md:text-base">
                                Conférences
                              </th>
                              <th className="py-2 md:py-3 px-2 md:px-4 text-left border-b border-blue-100 font-bold w-1/4 text-sm md:text-base">
                                Intervenant(e)
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {morningWorkshops.map((workshop: Workshop) => (
                              <tr
                                key={workshop.id}
                                className="border-b border-blue-50 bg-green-50"
                              >
                                <td className="py-3 md:py-4 px-2 md:px-4 font-semibold text-primary flex items-center text-sm md:text-base">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 md:h-5 md:w-5 mr-1 text-secondary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  {workshop.horaires}
                                </td>
                                <td className="py-3 md:py-4 px-2 md:px-4 text-sm md:text-base">
                                  <div className="flex items-center">
                                    <span className="bg-primary text-white p-1 rounded-full mr-2">
                                      {getThemeIcon(workshop.theme)}
                                    </span>
                                    <span>
                                      <span className="font-semibold">
                                        {workshop.atelier}
                                      </span>
                                      {workshop.format && (
                                        <span className="ml-2 bg-secondary text-white text-xs px-2 py-1 rounded-full">
                                          {workshop.format}
                                        </span>
                                      )}
                                    </span>
                                  </div>
                                </td>
                                <td className="py-3 md:py-4 px-2 md:px-4 text-sm md:text-base">
                                  <div className="flex items-center">
                                    <span className="bg-primary text-white p-1 rounded-full mr-2">
                                      {getSpeakerIcon()}
                                    </span>
                                    <span className="font-semibold">
                                      {workshop.intervenant}
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Section Pause déjeuner */}
                  {day === "jour3" &&
                    getLunchBreakWorkshops(day).length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-bold text-primary mb-3 flex items-center text-base md:text-lg">
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
                              d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                            />
                          </svg>
                          Pause déjeuner
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse min-w-[800px] mb-6">
                            <thead>
                              <tr className="bg-yellow-50 text-primary">
                                <th className="py-2 md:py-3 px-2 md:px-4 text-left border-b border-yellow-100 font-bold w-1/4 text-sm md:text-base">
                                  Horaire
                                </th>
                                <th className="py-2 md:py-3 px-2 md:px-4 text-left border-b border-yellow-100 font-bold w-1/2 text-sm md:text-base">
                                  Questions/réponses
                                </th>
                                <th className="py-2 md:py-3 px-2 md:px-4 text-left border-b border-yellow-100 font-bold w-1/4 text-sm md:text-base">
                                  Intervenant(e)
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {getLunchBreakWorkshops(day).map(
                                (workshop: Workshop) => (
                                  <tr
                                    key={workshop.id}
                                    className="border-b border-yellow-50 hover:bg-yellow-50"
                                  >
                                    <td className="py-3 md:py-4 px-2 md:px-4 font-semibold text-primary text-sm md:text-base">
                                      <div className="flex items-center">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-4 w-4 md:h-5 md:w-5 mr-1 text-secondary"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                          />
                                        </svg>
                                        {workshop.horaires}
                                      </div>
                                    </td>
                                    <td className="py-3 md:py-4 px-2 md:px-4 text-sm md:text-base">
                                      <div className="flex items-center">
                                        <span className="bg-primary text-white p-1 rounded-full mr-2">
                                          {getThemeIcon(workshop.theme)}
                                        </span>
                                        <span>
                                          <span className="font-semibold">
                                            {workshop.atelier}
                                          </span>
                                          {workshop.format && (
                                            <span className="ml-2 bg-secondary text-white text-xs px-2 py-1 rounded-full">
                                              {workshop.format}
                                            </span>
                                          )}
                                        </span>
                                      </div>
                                    </td>
                                    <td className="py-3 md:py-4 px-2 md:px-4 text-sm md:text-base">
                                      <div className="flex items-center">
                                        <span className="bg-primary text-white p-1 rounded-full mr-2">
                                          {getSpeakerIcon()}
                                        </span>
                                        <span className="font-semibold">
                                          {workshop.intervenant}
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  {afternoonWorkshops.length > 0 && (
                    <div>
                      <h4 className="font-bold text-primary mb-3 flex items-center text-base md:text-lg">
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
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        </svg>
                        Ateliers de l'après-midi
                      </h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse min-w-[800px]">
                          <thead>
                            <tr className="bg-orange-50 text-primary">
                              <th className="py-2 md:py-3 px-2 md:px-4 text-left border-b border-orange-100 font-bold w-1/4 text-sm md:text-base">
                                Horaire
                              </th>
                              <th className="py-2 md:py-3 px-2 md:px-4 text-left border-b border-orange-100 font-bold w-1/2 text-sm md:text-base">
                                Ateliers
                              </th>
                              <th className="py-2 md:py-3 px-2 md:px-4 text-left border-b border-orange-100 font-bold w-1/4 text-sm md:text-base">
                                Intervenant(e)
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {afternoonWorkshops.map((workshop: Workshop) => (
                              <tr
                                key={workshop.id}
                                className="border-b border-orange-50 hover:bg-orange-50"
                              >
                                <td className="py-3 md:py-4 px-2 md:px-4 font-semibold text-primary text-sm md:text-base">
                                  <div className="flex items-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4 md:h-5 md:w-5 mr-1 text-secondary"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                    {workshop.horaires}
                                  </div>
                                </td>
                                <td className="py-3 md:py-4 px-2 md:px-4 text-sm md:text-base">
                                  <div className="flex items-center">
                                    <span className="bg-primary text-white p-1 rounded-full mr-2">
                                      {getThemeIcon(workshop.theme)}
                                    </span>
                                    <span>
                                      <span className="font-semibold">
                                        {workshop.atelier}
                                      </span>
                                      {workshop.format && (
                                        <span className="ml-2 bg-secondary text-white text-xs px-2 py-1 rounded-full">
                                          {workshop.format}
                                        </span>
                                      )}
                                      {workshop.atelier.includes(
                                        "Le RH est il un psy ?"
                                      ) && (
                                        <span className="ml-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                                          3h30 - Exclusif
                                        </span>
                                      )}
                                    </span>
                                  </div>
                                </td>
                                <td className="py-3 md:py-4 px-2 md:px-4 text-sm md:text-base">
                                  <div className="flex items-center">
                                    <span className="bg-primary text-white p-1 rounded-full mr-2">
                                      {getSpeakerIcon()}
                                    </span>
                                    <span className="font-semibold">
                                      {workshop.intervenant}
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

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
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500 py-6 md:py-10 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')]">
                  <p className="flex items-center justify-center text-sm md:text-base">
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
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Cliquez pour voir le programme détaillé
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default WorkshopCalendar;
