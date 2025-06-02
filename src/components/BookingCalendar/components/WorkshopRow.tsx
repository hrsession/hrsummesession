import type { WorkshopRowProps } from "../types";

export const WorkshopRow: React.FC<WorkshopRowProps> = ({
  workshop,
  isSelected,
  canSelect,
  isLongWorkshop,
  onSelect,
  getThemeIcon,
  getSpeakerIcon,
}) => {
  return (
    <tr
      className={`border-b border-orange-50 transition-colors duration-150 cursor-pointer ${
        isSelected
          ? "bg-blue-100"
          : canSelect
          ? "hover:bg-orange-50"
          : "bg-gray-50 opacity-60"
      } ${workshop.highlighted ? "bg-opacity-75" : ""}`}
      onClick={onSelect}
    >
      <td className="py-4 px-4 text-center">
        <span
          className={`flex-shrink-0 w-6 h-6 border rounded flex items-center justify-center cursor-pointer ${
            isSelected
              ? "bg-primary border-primary text-white"
              : canSelect
              ? "border-gray-400 hover:border-primary"
              : "border-gray-300 bg-gray-100 cursor-not-allowed"
          }`}
        >
          {isSelected && "✓"}
        </span>
      </td>
      <td className="py-4 px-4 font-semibold text-primary">
        <div className="flex items-center">
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
        </div>
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center">
          <span
            className={`${
              workshop.highlighted ? "bg-secondary" : "bg-primary"
            } text-white p-1 rounded-full mr-2`}
          >
            {getThemeIcon(workshop.theme)}
          </span>
          <span>
            <span className="font-semibold">{workshop.titre}</span>
            {workshop.format && (
              <span className="ml-2 bg-secondary text-white text-xs px-2 py-1 rounded-full">
                {workshop.format}
              </span>
            )}
            {isLongWorkshop && (
              <span className="ml-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                3h00 - Exclusif
              </span>
            )}
            {isSelected && (
              <span className="ml-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                Sélectionné
              </span>
            )}
          </span>
        </div>
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center">
          <span
            className={`${
              workshop.highlighted ? "bg-secondary" : "bg-primary"
            } text-white p-1 rounded-full mr-2`}
          >
            {getSpeakerIcon()}
          </span>
          <span className="font-semibold">{workshop.intervenant}</span>
        </div>
      </td>
    </tr>
  );
};
