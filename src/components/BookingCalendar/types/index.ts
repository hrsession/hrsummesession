import type {
  Workshop,
  ThemeIconFunction,
  SpeakerIconFunction,
} from "../../shared/types";

export interface BookingCalendarProps {
  selectedDays: string[];
  isAfternoonWorkshopSelected: (day: string, workshop: string) => boolean;
  handleDaySelection: (day: string) => void;
  handleAfternoonWorkshopSelection: (day: string, workshop: string) => void;
}

export interface WorkshopsByDay {
  [key: string]: Workshop[];
}

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
  getThemeIcon: ThemeIconFunction;
  getSpeakerIcon: SpeakerIconFunction;
}
