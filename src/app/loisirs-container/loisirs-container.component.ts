import { Component, OnInit } from '@angular/core';
import { MenuSelectedNameService } from '../shared/services/Observables/menu-selected-name.service';
import { LoisirsService } from '../shared/services/Loisirs/loisirs.service';
import { LoisirModel } from '../shared/Models/loisir.model';

@Component({
  selector: 'app-loisirs-container',
  templateUrl: './loisirs-container.component.html',
  styleUrls: ['./loisirs-container.component.css']
})
export class LoisirsContainerComponent implements OnInit {
  private nameSection: string = "Loisirs";
  public listLoisirs: LoisirModel[];
  constructor(
    private menuSelectedNameService: MenuSelectedNameService,
    private loisirsService: LoisirsService
  ) { }

  ngOnInit(): void {
    this.menuSelectedNameService.menuSelectedName.next(this.nameSection);
    this.listLoisirs = this.loisirsService.listLoisirs;
  }

}
