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
  highlighted: boolean;
  isSpecialLunch?: boolean;
}

export type ThemeIconFunction = (theme: string) => JSX.Element;
export type SpeakerIconFunction = () => JSX.Element;
