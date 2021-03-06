import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ProjetsService } from '../shared/services/Projets/projets.service';
import { ProjetModel } from '../shared/Models/projet.model';
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
  public imagePathToShowInCarousel: string[];
  public showCarousel: boolean;
  @ViewChild('modal') modal: ElementRef;
  @ViewChild('carousel') carousel: ElementRef;

  constructor(
    private menuSelectedNameService: MenuSelectedNameService,
    private projetsService: ProjetsService,
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
    
  }

  public showImagePathModal(imagePath?: string[]): void {
    this.imagePathToShowInCarousel = imagePath;
    this.showCarousel = true;
    this.modal.nativeElement.style.display = 'flex';
  }

  public closeImagePathModal(event: MouseEvent): void {
    if(!this.carousel.nativeElement.contains(event.target)){
      this.modal.nativeElement.style.display = 'none';
      if (this.showCarousel) {
        this.showCarousel = false;
        this.imagePathToShowInCarousel = null;
      }
    }    
  }
}
