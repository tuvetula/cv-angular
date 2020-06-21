import { Component, OnInit } from '@angular/core';
import { ProjetsService } from '../shared/services/Projets/projets.service';
import { ProjetModel } from '../shared/Models/list-projets.model'

@Component({
  selector: 'app-projets-container',
  templateUrl: './projets-container.component.html',
  styleUrls: ['./projets-container.component.css'],
  providers: [ProjetsService]
})
export class ProjetsContainerComponent implements OnInit {
  public listProjets: ProjetModel[];
  constructor(
    private projetsService: ProjetsService
  ) { }

  ngOnInit(): void {
  }

}
