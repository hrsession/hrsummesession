export type BookingCalendarProps = {
  selectedDays: string[];
  isAfternoonWorkshopSelected: (day: string, workshop: string) => boolean;
  handleDaySelection: (day: string) => void;
  handleAfternoonWorkshopSelection: (day: string, workshop: string) => void;
};
