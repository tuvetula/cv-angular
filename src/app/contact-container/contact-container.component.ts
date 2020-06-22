import { Component, OnInit } from '@angular/core';
import { MenuSelectedNameService } from '../shared/services/Observables/menu-selected-name.service';

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.css']
})
export class ContactContainerComponent implements OnInit {
  private nameSection: string = "Contact";
  constructor(
    private menuSelectedNameService: MenuSelectedNameService
  ) { }

  ngOnInit(): void {
    this.menuSelectedNameService.menuSelectedName.next(this.nameSection);
  }

}
