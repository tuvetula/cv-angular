import { Component, OnInit } from '@angular/core';
import { CompetencesService } from '../shared/services/Competences/competences.service';
import { CompetenceModel } from '../shared/Models/list-competences.model';
import { MenuSelectedNameService } from '../shared/services/Observables/menu-selected-name.service';

@Component({
  selector: 'app-competences-container',
  templateUrl: './competences-container.component.html',
  styleUrls: ['./competences-container.component.css'],
  providers: [CompetencesService]
})
export class CompetencesContainerComponent implements OnInit {
  private nameSection = 'Compétences';
  public listCompetences: CompetenceModel[];
  constructor(
    private competencesService: CompetencesService,
    private menuSelectedNameService: MenuSelectedNameService
  ) { }

  ngOnInit(): void {
    this.menuSelectedNameService.menuSelectedName.next(this.nameSection);
    this.listCompetences = this.competencesService.listCompetences.sort(
      (a,b) => {
        if (a.groupName < b.groupName){
          return -1;
        } else if (a.groupName > b.groupName){
          return 1;
        } else {
          return 0;
        }
      }
    );
    this.listCompetences.forEach((element: CompetenceModel) => element.list.sort());
  }
}
