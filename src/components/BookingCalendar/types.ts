import type { Workshop } from "../../types";

export interface DaySectionProps {
  day: string;
  workshops: Workshop[];
  isExpanded: boolean;
  isDaySelected: boolean;
  selectedAfternoonCount: number;
  requiredCount: number;
  longWorkshopSelected: boolean;
  onToggleExpansion: (day: string) => void;
  onDaySelection: (day: string) => void;
  onAfternoonWorkshopSelection: (day: string, workshopId: string) => void;
  isAfternoonWorkshopSelected: (day: string, workshopId: string) => boolean;
}

export interface WorkshopRowProps {
  workshop: Workshop;
  isSelected: boolean;
  canSelect: boolean;
  isLongWorkshop: boolean;
  onSelect: () => void;
  getThemeIcon: (theme: string) => JSX.Element;
  getSpeakerIcon: () => JSX.Element;
}

export type ThemeIconFunction = (theme: string) => JSX.Element;
export type SpeakerIconFunction = () => JSX.Element;
