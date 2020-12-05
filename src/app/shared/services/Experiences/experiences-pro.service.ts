import { Injectable } from '@angular/core';
import { ExperienceModel } from '../../Models/list-experiences.model';

@Injectable()
export class ExperiencesProService {
  public listExperiences: ExperienceModel[];

  constructor() {
    this.listExperiences = [
      {
        name: 'Développeur web',
        company: 'Eurécia',
        city: 'Castanet Tolosan',
        country: 'France',
        startDate: new Date(2020,10),
        endDate: new Date(2021,3),
        description: ['Développement des évolutions et maintenance sur le CRM interne (Laravel, Javascript, html/css)' ]
      },
      {
        name: 'Stage concepteur développeur Web',
        company: 'As creation',
        city: 'Saint-orens-de-gameville',
        country: 'France',
        startDate: new Date(2019, 7),
        endDate: new Date(2019, 9),
        description: ['Conception et développement d\'une application web front-end et back-end en html/css, javascript, php.', 'Développement d\'un outil de diffusion automatique d\'annonces avec la librairie puppeteer (javascript)']
      },
      {
        name: 'Technicien itinérant de maintenance monétique',
        company: 'Verifone',
        city: 'Midi-pyrénées',
        country: 'France',
        startDate: new Date(2011,0),
        endDate: new Date(2018,10),
        description: ['Maintenance sur site de Terminaux de Paiements Electroniques.','Déploiement et mise en réseau des solutions de paiement + formation utilisateurs.','Paramétrage et formation clients sur logiciel Turbo (transfert de flux bancaires)']
      },
      {
        name: 'Technicien maintenance et réseau informatique',
        company: 'Chausson matériaux',
        city: 'Fenouillet',
        country: 'France',
        startDate: new Date(2008,4),
        endDate: new Date(2009,5),
        description: ['Assistance aux utilisateurs par téléphone.','Réparation ordinateurs.','Assistance à la gestion du parc.']
      }
    ];
  }
}
