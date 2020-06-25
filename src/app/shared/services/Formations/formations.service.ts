import { Injectable } from '@angular/core';
import { FormationModel } from '../../Models/formation.model';

@Injectable()
export class FormationsService {
  public listFormations: FormationModel[];
  constructor() {
    this.listFormations = [
      {
        name: "Angular: Construire des applications modernes web et mobile",
        company: 'Dyma',
        city: 'Esperce',
        country: 'France',
        startDate: new Date(2020, 3),
        endDate: new Date(2020,3),
        diplom: 'Certificat de réussite',
        diplomImgUrl: '../../../../../assets/Pictures/Diplomes/DymaAngular.jpg',
        diplomImgUrlThumbnail: '../../../../../assets/Pictures/Diplomes/DymaAngularThumbnail.jpg',
        description: 'Formation en ligne'
      },
      {
        name: "Développez des applications Web avec Angular",
        company: 'Openclassrooms',
        city: 'Esperce',
        country: 'France',
        startDate: new Date(2020,2),
        endDate: new Date(2020,2),
        diplom: "Certificat de réussite",
        diplomImgUrl: '../../../../../assets/Pictures/Diplomes/OpcAngular.jpg',
        diplomImgUrlThumbnail: '../../../../../assets/Pictures/Diplomes/OpcAngularThumbnail.jpg',
        description: 'Formation en ligne'
      },
      {
        name: "Concepteur développeur d'applications",
        company: 'Adrar',
        city: 'Ramonville-Saint-Agne',
        country: 'France',
        startDate: new Date(2019, 4),
        endDate: new Date(2019, 10),
        diplom: 'Titre professionnel de niveau 6 obtenu (bac +3)',
        diplomImgUrl: '../../../../../assets/Pictures/Diplomes/Cda.jpg',
        diplomImgUrlThumbnail: '../../../../../assets/Pictures/Diplomes/CdaThumbnail.jpg',
        description: null,
      },
      {
        name:
          "Technicien Supérieur en Réseaux Informatiques et Télécommunications d'Entreprises",
        company: 'Afpa',
        city: 'Toulouse',
        country: 'France',
        startDate: new Date(2007, 5),
        endDate: new Date(2008, 4),
        diplom: 'Titre professionnel de niveau 5 obtenu (bac +2)',
        diplomImgUrl: '../../../../../assets/Pictures/Diplomes/Tsrite.jpg',
        diplomImgUrlThumbnail: '../../../../../assets/Pictures/Diplomes/TsriteThumbnail.jpg',
        description: null,
      },
    ];
  }
}
