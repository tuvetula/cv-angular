import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuSelectedNameService {
  public menuSelectedName: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() { }
}
