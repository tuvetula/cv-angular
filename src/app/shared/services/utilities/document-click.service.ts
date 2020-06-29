import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentClickService {
  public documentClickedTarget: Subject<HTMLElement> = new Subject<HTMLElement>();

  constructor() { }
}
