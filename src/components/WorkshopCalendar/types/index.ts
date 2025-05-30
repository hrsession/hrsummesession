export interface Workshop {
  id: string;
  jour: string;
  date: string;
  horaires: string;
  theme: string;
  titre: string;
  intervenant: string;
  format?: string;
  "dot-1"?: string;
  "dot-2"?: string;
  "dot-3"?: string;
}

export interface WorkshopCalendarProps {
  selectedDays?: string[];
  isAfternoonWorkshopSelected?: (day: string, workshop: string) => boolean;
  handleDaySelection?: (day: string) => void;
  handleAfternoonWorkshopSelection?: (day: string, workshop: string) => void;
}

export interface WorkshopsByDay {
  [key: string]: Workshop[];
}
