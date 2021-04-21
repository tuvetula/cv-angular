import { Component, OnInit } from '@angular/core';
import { MenuSelectedNameService } from '../shared/services/Observables/menu-selected-name.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  private nameSection: string = 'Accueil';
  constructor(private menuSelectedNameService: MenuSelectedNameService) {}

  ngOnInit(): void {
    this.menuSelectedNameService.menuSelectedName.next(this.nameSection);
  }
}
