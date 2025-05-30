import type { Workshop } from "../types";
import { ThemeIcon } from "./ThemeIcon";
import { WorkshopDetails } from "./WorkshopDetails";

interface WorkshopRowProps {
  workshop: Workshop;
  selectedWorkshop: string | null;
  onWorkshopSelect: (id: string | null) => void;
}

export const WorkshopRow: React.FC<WorkshopRowProps> = ({
  workshop,
  selectedWorkshop,
  onWorkshopSelect,
}) => {
  return (
    <tr className="border-b border-blue-50 bg-green-50">
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
            <ThemeIcon theme={workshop.theme} />
          </span>
          <span>
            <span className="font-semibold">
              {workshop.titre || "À venir..."}
            </span>
            <button
              onClick={() =>
                onWorkshopSelect(
                  selectedWorkshop === workshop.id ? null : workshop.id
                )
              }
              className="ml-2 text-primary hover:text-primary-dark transition-colors duration-300"
              title="En savoir plus"
            >
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
            {workshop.format && (
              <span className="ml-2 bg-secondary text-white text-xs px-2 py-1 rounded-full">
                {workshop.format}
              </span>
            )}
            {workshop.titre &&
              workshop.titre !== "" &&
              workshop.titre.includes("Le RH est il un psy ?") && (
                <span className="ml-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                  3h30 - Exclusif
                </span>
              )}
          </span>
        </div>
        {selectedWorkshop === workshop.id && (
          <WorkshopDetails workshop={workshop} />
        )}
      </td>
      <td className="py-3 md:py-4 px-2 md:px-4 text-sm md:text-base">
        <div className="flex items-center">
          <span className="bg-primary text-white p-1 rounded-full mr-2">
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
          </span>
          <span className="font-semibold">{workshop.intervenant}</span>
        </div>
      </td>
    </tr>
  );
};
