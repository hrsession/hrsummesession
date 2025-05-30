export interface Workshop {
  id: string;
  intervenant: string;
  theme: string;
  highlighted: boolean;
  atelier: string;
  titre?: string;
  "dot-1"?: string;
  "dot-2"?: string;
  "dot-3"?: string;
  date: string;
  jour: string;
  horaires: string;
  format?: string;
}

export interface WorkshopsByDay {
  [key: string]: Workshop[];
}

export interface BookingFormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  entreprise: string;
  fonction: string;
  paiement: string;
  acceptConditions: boolean;
}

export type AfternoonWorkshopSelections = {
  [day: string]: string[];
};

export type WorkshopDay = {
  id: string;
  date: string;
  title: string;
  bgColor: string;
  price: number;
  morningWorkshops: Workshop[];
  afternoonWorkshops: AfternoonWorkshop[];
};

export type AfternoonWorkshop = Workshop & {
  id: string;
  workshopId: string;
};
