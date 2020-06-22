import { Component, OnInit } from '@angular/core';
import { ExperiencesProService } from '../shared/services/Experiences/experiences-pro.service';
import { ExperienceModel } from '../shared/Models/list-experiences.model';
import { MenuSelectedNameService } from '../shared/services/Observables/menu-selected-name.service';

@Component({
  selector: 'app-experiences-container',
  templateUrl: './experiences-container.component.html',
  styleUrls: ['./experiences-container.component.css'],
  providers: [ExperiencesProService],
})
export class ExperiencesContainerComponent implements OnInit {
  public listExperiences: ExperienceModel[];
  private nameSection: string = 'Expériences professionnelles';

  constructor(
    private menuSelectedNameService: MenuSelectedNameService,
    private experiencesProService: ExperiencesProService
  ) {}

  ngOnInit(): void {
    this.menuSelectedNameService.menuSelectedName.next(this.nameSection);
    this.listExperiences = this.experiencesProService.listExperiences;
  }
}
