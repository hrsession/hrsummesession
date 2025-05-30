import type {
  DaySectionProps,
  ThemeIconFunction,
  SpeakerIconFunction,
} from "../types";
import { formatDate, getDayOfWeek } from "../utils/dateUtils";
import { WorkshopRow } from "./WorkshopRow";
import { ThemeIcon } from "./ThemeIcon";
import { SpeakerIcon } from "./SpeakerIcon";

const getThemeIconFunction: ThemeIconFunction = (theme: string) => {
  return <ThemeIcon theme={theme} />;
};

const getSpeakerIconFunction: SpeakerIconFunction = () => {
  return <SpeakerIcon />;
};

export const DaySection: React.FC<DaySectionProps> = ({
  day,
  workshops,
  isExpanded,
  isDaySelected,
  selectedAfternoonCount,
  requiredCount,
  longWorkshopSelected,
  onToggleExpansion,
  onDaySelection,
  onAfternoonWorkshopSelection,
  isAfternoonWorkshopSelected,
}) => {
  const firstWorkshop = workshops[0];
  const morningWorkshops = workshops.filter(
    (w) => w.horaires.startsWith("9") || w.horaires.startsWith("11")
  );
  const afternoonWorkshops = workshops.filter(
    (w) => w.horaires.startsWith("14") || w.horaires.startsWith("16")
  );

  const canReserveDay = selectedAfternoonCount >= requiredCount;

  return (
    <div
      className={`border-2 ${
        day === "jour2" ? "border-secondary" : "border-primary"
      } rounded-xl shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden`}
    >
      <div
        className={`${
          day === "jour2"
            ? "bg-gradient-to-r from-secondary to-secondary-light"
            : "bg-gradient-to-r from-primary to-primary-light"
        } text-white p-4 flex items-center justify-between`}
      >
        <div
          className="flex items-center cursor-pointer flex-1"
          onClick={() => onToggleExpansion(day)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
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
          <h4 className="text-xl font-bold">
            {getDayOfWeek(firstWorkshop.date)} {formatDate(firstWorkshop.date)}
          </h4>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-sm bg-white bg-opacity-20 px-2 py-1 rounded">
            {selectedAfternoonCount}/{requiredCount} après-midi
            {longWorkshopSelected && " (atelier long)"}
          </div>

          <button
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center ${
              isDaySelected
                ? "bg-white text-primary hover:bg-gray-100"
                : canReserveDay
                ? "bg-white bg-opacity-20 text-white hover:bg-white hover:bg-opacity-30 border border-white border-opacity-30"
                : "bg-gray-500 bg-opacity-50 text-gray-300 cursor-not-allowed"
            }`}
            onClick={() => {
              if (canReserveDay) {
                onDaySelection(day);
              }
            }}
            disabled={!canReserveDay && !isDaySelected}
          >
            {isDaySelected ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Journée sélectionnée
              </>
            ) : canReserveDay ? (
              "Réserver cette journée"
            ) : (
              `Choisissez ${requiredCount} ${
                requiredCount > 1 ? "ateliers" : "atelier"
              }`
            )}
          </button>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transition-transform duration-300 cursor-pointer ${
              isExpanded ? "transform rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => onToggleExpansion(day)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {isExpanded ? (
        <div
          className="p-4 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')] overflow-x-auto"
          style={{ scrollbarWidth: "thin" }}
        >
          {/* Section Activités du matin */}
          {morningWorkshops.length > 0 && (
            <div className="mb-6">
              <h4 className="font-bold text-primary mb-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
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
                Activités du matin (incluses automatiquement)
              </h4>
              <table className="w-full border-collapse min-w-full mb-6">
                <thead>
                  <tr className="bg-blue-50 text-primary">
                    <th className="py-3 px-4 text-left border-b border-blue-100 font-bold">
                      Horaire
                    </th>
                    <th className="py-3 px-4 text-left border-b border-blue-100 font-bold">
                      Activité
                    </th>
                    <th className="py-3 px-4 text-left border-b border-blue-100 font-bold">
                      Intervenant(e)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {morningWorkshops.map((workshop) => (
                    <tr
                      key={workshop.id}
                      className={`border-b border-blue-50 bg-green-50 ${
                        workshop.highlighted ? "bg-opacity-75" : ""
                      }`}
                    >
                      <td className="py-4 px-4 font-semibold text-primary flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1 text-secondary"
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
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <span
                            className={`${
                              workshop.highlighted
                                ? "bg-secondary"
                                : "bg-primary"
                            } text-white p-1 rounded-full mr-2`}
                          >
                            {getThemeIconFunction(workshop.theme)}
                          </span>
                          <span>
                            <span className="font-semibold">
                              {workshop.titre}
                            </span>
                            {workshop.format && (
                              <span className="ml-2 bg-secondary text-white text-xs px-2 py-1 rounded-full">
                                {workshop.format}
                              </span>
                            )}
                            <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                              Inclus
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <span
                            className={`${
                              workshop.highlighted
                                ? "bg-secondary"
                                : "bg-primary"
                            } text-white p-1 rounded-full mr-2`}
                          >
                            {getSpeakerIconFunction()}
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
          )}

          {/* Section Activités de l'après-midi */}
          {afternoonWorkshops.length > 0 && (
            <div>
              <h4 className="font-bold text-primary mb-3 flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
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
                  Activités de l'après-midi (choisissez-en {requiredCount})
                  {longWorkshopSelected && " - Atelier long sélectionné"}
                </div>
                <span
                  className={`text-sm px-3 py-1 rounded-full ${
                    selectedAfternoonCount >= requiredCount
                      ? "bg-green-100 text-green-800"
                      : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {selectedAfternoonCount}/{requiredCount} sélectionnée
                  {requiredCount > 1 ? "s" : ""}
                </span>
              </h4>
              <table className="w-full border-collapse min-w-full">
                <thead>
                  <tr className="bg-orange-50 text-primary">
                    <th className="py-3 px-4 text-left border-b border-orange-100 font-bold">
                      Sélection
                    </th>
                    <th className="py-3 px-4 text-left border-b border-orange-100 font-bold">
                      Horaire
                    </th>
                    <th className="py-3 px-4 text-left border-b border-orange-100 font-bold">
                      Activité
                    </th>
                    <th className="py-3 px-4 text-left border-b border-orange-100 font-bold">
                      Intervenant(e)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {afternoonWorkshops.map((workshop) => {
                    const isSelected = isAfternoonWorkshopSelected(
                      day,
                      workshop.id
                    );
                    const isLongWorkshop = workshop.titre.includes(
                      "Le RH est il un psy ?"
                    );

                    let canSelect = false;
                    if (isSelected) {
                      canSelect = true;
                    } else if (longWorkshopSelected && !isLongWorkshop) {
                      canSelect = false;
                    } else if (!longWorkshopSelected && isLongWorkshop) {
                      canSelect = selectedAfternoonCount === 0;
                    } else if (!longWorkshopSelected && !isLongWorkshop) {
                      canSelect = selectedAfternoonCount < 2;
                    }

                    return (
                      <WorkshopRow
                        key={workshop.id}
                        workshop={workshop}
                        isSelected={isSelected}
                        canSelect={canSelect}
                        isLongWorkshop={isLongWorkshop}
                        onSelect={() =>
                          onAfternoonWorkshopSelection(day, workshop.id)
                        }
                        getThemeIcon={getThemeIconFunction}
                        getSpeakerIcon={getSpeakerIconFunction}
                      />
                    );
                  })}
                </tbody>
              </table>

              {!isDaySelected && (
                <div className="mt-4 p-3 rounded-lg bg-blue-50 border-l-4 border-primary">
                  <p className="text-primary text-sm flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
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
                    {selectedAfternoonCount < requiredCount
                      ? `Veuillez sélectionner ${
                          requiredCount - selectedAfternoonCount
                        } activité(s) de l'après-midi supplémentaire(s) avant de pouvoir réserver cette journée.${
                          day === "jour2"
                            ? " (Note: l'atelier \"Le RH est il un psy ?\" dure 3h30 et occupe tout l'après-midi)"
                            : ""
                        }`
                      : "Parfait ! Vous pouvez maintenant réserver cette journée complète."}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div
          className="p-4 text-center text-gray-500 py-10 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')] cursor-pointer hover:bg-gray-50 transition-colors duration-200"
          onClick={() => onToggleExpansion(day)}
        >
          <p className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
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
            Cliquez pour voir et sélectionner les ateliers
          </p>
        </div>
      )}
    </div>
  );
};
