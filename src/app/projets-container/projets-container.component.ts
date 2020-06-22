import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProjetsService } from '../shared/services/Projets/projets.service';
import { ProjetModel } from '../shared/Models/list-projets.model';
import { MenuSelectedNameService } from '../shared/services/Observables/menu-selected-name.service';

@Component({
  selector: 'app-projets-container',
  templateUrl: './projets-container.component.html',
  styleUrls: ['./projets-container.component.css'],
  providers: [ProjetsService],
})
export class ProjetsContainerComponent implements OnInit {
  private nameSection: string = 'Projets';
  public listProjets: ProjetModel[];
  @ViewChild('modal') modal: ElementRef;

  public imagePathToShowInCarousel: string[];
  public showCarousel: boolean;

  constructor(
    private menuSelectedNameService: MenuSelectedNameService,
    private projetsService: ProjetsService
  ) {}

  ngOnInit(): void {
    this.menuSelectedNameService.menuSelectedName.next(this.nameSection);
    this.listProjets = this.projetsService.listProjets.sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      } else if (a.date < b.date) {
        return 1;
      } else {
        return 0;
      }
    });
    this.showCarousel = false;
  }

  public showImagePathModal(imagePath: string[]): void {
    this.imagePathToShowInCarousel = imagePath;
    this.showCarousel = true;
    this.modal.nativeElement.style.display = 'block';
  }

  public closeImagePathModal(): void {
    this.showCarousel = false;
    this.modal.nativeElement.style.display = 'none';
  }
}
