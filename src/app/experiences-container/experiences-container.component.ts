import { Component, OnInit } from '@angular/core';
import { ExperiencesProService } from '../shared/services/Experiences/experiences-pro.service';
import { ExperienceModel } from '../shared/Models/list-experiences.model';

@Component({
  selector: 'app-experiences-container',
  templateUrl: './experiences-container.component.html',
  styleUrls: ['./experiences-container.component.css'],
  providers: [ExperiencesProService]
})
export class ExperiencesContainerComponent implements OnInit {
  public listExperiences: ExperienceModel[];

  constructor(
    private experiencesProService: ExperiencesProService
  ) { }

  ngOnInit(): void {
    this.listExperiences = this.experiencesProService.listExperiences;
  }

}
