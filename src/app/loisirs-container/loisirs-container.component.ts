import { Component, OnInit } from '@angular/core';
import { MenuSelectedNameService } from '../shared/services/Observables/menu-selected-name.service';

@Component({
  selector: 'app-loisirs-container',
  templateUrl: './loisirs-container.component.html',
  styleUrls: ['./loisirs-container.component.css']
})
export class LoisirsContainerComponent implements OnInit {
  private nameSection: string = "Loisirs";
  constructor(
    private menuSelectedNameService: MenuSelectedNameService
  ) { }

  ngOnInit(): void {
    this.menuSelectedNameService.menuSelectedName.next(this.nameSection);
  }

}
