import { Injectable } from '@angular/core';
import { CompetenceModel } from '../../Models/list-competences.model';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {
  public listCompetences: CompetenceModel[]
  constructor() { 
    this.listCompetences = [
      {
        name: 'Html5',
        note: 60
      },
      {
        name: 'Css3',
        note: 60
      },
      {
        name: 'Javascript',
        note: 80
      },
      {
        name: 'Php',
        note: 60,
      },
      {
        name: 'Sql',
        note: 40
      },
      {
        name: 'Angular',
        note: 80
      },
      {
        name: 'Laravel',
        note: 50
      },
      {
        name: 'Bootstrap',
        note: 60
      }
    ]
  }
}
