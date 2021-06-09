export interface ExperienceModel {
  name: string;
  company: string;
  city: string;
  country: string;
  startDate: Date;
  endDate: Date|string;
  description: string[];
}
