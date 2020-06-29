import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { ContactFormModel } from '../../Models/contact-form.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private firestore: AngularFirestore) {}

  public contactRegister(formValues: ContactFormModel): Promise<any> {
    formValues.created_at = new Date();
    return new Promise<DocumentReference>((resolve, reject) => {
      this.firestore
        .collection('contacts')
        .add(formValues)
        .then((value) => resolve(value))
        .catch((error) => reject(error));
    });
  }
}
