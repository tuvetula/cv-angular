import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, BehaviorSubject, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetPdfService {
  constructor(
    private afFirestorage: AngularFireStorage,
  ) { }

  public getDownloadUrlPdf(name:string): Observable<any>{
    return this.afFirestorage.ref('Pdf/'+ name).getDownloadURL();
  }
}