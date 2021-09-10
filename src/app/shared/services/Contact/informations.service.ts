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
        street: '110, avenue de Toulouse',
        line1: null,
        zipcode: '31750',
        city: 'Escalquens',
        country: 'France'
      },
      phoneNumber: '06 03 91 86 13',
      mail: 'romain.marcant@gmail.com',
      linkedIn: 'https://www.linkedin.com/in/romain-marcant/',
      github: 'https://github.com/tuvetula',
      cv: '../../assets/Pdf/cv_Marcant_Romain.pdf',
      dateOfBirth: new Date(1982,5,17),
      nbOfChildrens: 2,

    }
   }
}
