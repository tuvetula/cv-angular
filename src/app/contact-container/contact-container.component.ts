import { Component, OnInit } from '@angular/core';
import { InformationsModel } from '../shared/Models/informations.model';
import { MenuSelectedNameService } from '../shared/services/Observables/menu-selected-name.service';
import { InformationsService } from '../shared/services/Contact/informations.service';

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.css']
})
export class ContactContainerComponent implements OnInit {
  private nameSection = 'Contact';
  public informations: InformationsModel;

  constructor(
    private menuSelectedNameService: MenuSelectedNameService,
    private informationsService: InformationsService,
  ) { }

  ngOnInit(): void {
    this.menuSelectedNameService.menuSelectedName.next(this.nameSection);
    this.informations = this.informationsService.listInformations;
  }
}
