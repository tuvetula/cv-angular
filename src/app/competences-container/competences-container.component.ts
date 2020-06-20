import { Component, OnInit } from '@angular/core';
import { CompetencesService } from '../shared/services/Competences/competences.service';
import { CompetenceModel } from '../shared/Models/list-competences.model';

@Component({
  selector: 'app-competences-container',
  templateUrl: './competences-container.component.html',
  styleUrls: ['./competences-container.component.css'],
  providers: [CompetencesService]
})
export class CompetencesContainerComponent implements OnInit {
  public listCompetences: CompetenceModel[];
  constructor(
    private competencesService: CompetencesService
  ) { }

  ngOnInit(): void {
    this.listCompetences = this.competencesService.listCompetences.sort(
      (a,b) => {
        if(a.note < b.note){
          return 1;
        } else if (a.note > b.note){
          return -1;
        } else {
          return 0;
        }
      }
    );
  }

}
