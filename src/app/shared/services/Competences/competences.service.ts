import { Injectable } from '@angular/core';
import { CompetenceModel } from '../../Models/list-competences.model';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {
  public listCompetences: CompetenceModel[];
  constructor() {
    this.listCompetences = [
      {
        groupName: 'Frameworks',
        list: [
          'Bootstrap',
          'Laravel',
          'Angular',
          'VueJs'
        ]
      },
      {
        groupName: 'Languages',
        list: [
          'Html5',
          'Css3',
          'Javascript',
          'Php'
          ]
      }
    ];
  }
}
