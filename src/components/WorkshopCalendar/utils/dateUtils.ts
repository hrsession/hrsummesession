export const formatDate = (date: string): string => {
  const [day] = date.split("-");
  return `${day} juillet 2025`;
};

export const getDayOfWeek = (date: string): string => {
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
