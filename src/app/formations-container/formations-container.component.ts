import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormationsService } from '../shared/services/Formations/formations.service';
import { FormationModel } from '../shared/Models/list-formations.model';
import { MenuSelectedNameService } from '../shared/services/Observables/menu-selected-name.service';

@Component({
  selector: 'app-formations-container',
  templateUrl: './formations-container.component.html',
  styleUrls: ['./formations-container.component.css'],
  providers: [FormationsService],
})
export class FormationsContainerComponent implements OnInit {
  private nameSection: string = 'Formations';
  public listFormations: FormationModel[];

  @ViewChild('modal') modal: ElementRef;
  @ViewChild('modalImg') modalImg: ElementRef;

  constructor(
    private menuSelectedNameService: MenuSelectedNameService,
    private formationsService: FormationsService
  ) {}

  ngOnInit(): void {
    this.menuSelectedNameService.menuSelectedName.next(this.nameSection);
    this.listFormations = this.formationsService.listFormations;
  }

  public showDiplomModal(diplomImgUrl: string): void {
    this.modal.nativeElement.style.display = 'block';
    this.modalImg.nativeElement.src = diplomImgUrl;
  }
  public closeDiplomModal(): void {
    this.modal.nativeElement.style.display = 'none';
  }
}
