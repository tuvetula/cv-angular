import { Component, OnInit } from '@angular/core';
import { InformationsService } from '../../services/Contact/informations.service';
import { InformationsModel } from '../../Models/informations.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public informations: InformationsModel;
  constructor(
    private informationsService: InformationsService
  ) { }

  ngOnInit(): void {
    this.informations = this.informationsService.listInformations;
  }

}
