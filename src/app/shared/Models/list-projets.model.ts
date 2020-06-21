export interface ProjetModel {
  name: string;
  date: Date;
  company?: string;
  url?: string;
  gitLink: string;
  description: string;
  imagePath: string[];
  langagesFrontEnd: string[];
  langagesBackEnd: string[]
  documentationPath: string;
}
