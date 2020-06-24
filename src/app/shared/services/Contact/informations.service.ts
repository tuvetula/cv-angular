import { Injectable } from '@angular/core';
import { InformationsModel } from '../../Models/informations.model';

@Injectable({
  providedIn: 'root'
})
export class InformationsService {
  public listInformations: InformationsModel;

  constructor() {
    this.listInformations = {
      address: {
        street: "62, route de saint-ybars",
        line1: "Lieu-dit Lamourère",
        zipcode: "31190",
        city: "Esperce",
        country: "France"
      },
      phoneNumber: "06 03 91 86 13",
      mail: "romain.marcant@gmail.com",
      linkedIn: "https://www.linkedin.com/in/romain-marcant/",
      dateOfBirth: new Date(1982,5,17),
      nbOfChildrens: 2,

    }
   }
}
