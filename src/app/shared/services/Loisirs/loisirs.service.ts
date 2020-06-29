import { Injectable } from '@angular/core';
import { LoisirModel } from '../../Models/loisir.model';

@Injectable({
  providedIn: 'root'
})
export class LoisirsService {
  public listLoisirs: LoisirModel[];

  constructor() { 
    this.listLoisirs = [
      {
        name: "Football",
        imgPath: "../../../../../assets/Pictures/Logos/Loisirs/football32.svg",
        description: `Je pratique hebdomadairement le football à 7.<br>
        Le football est un sport complet et une source de bien-être. Il me permet de développer mon endurance et
        mon esprit d&#39;équipe.`
      },
      {
        name: "Peinture",
        imgPath: "../../../../../assets/Pictures/Logos/Loisirs/paint32.svg",
        description: `J&#39;aime peindre des toiles à l&#39;aide de bombes de peinture et Posca. Cela laisse place à ma créativité et nécessite de la concentration.`
      },
      {
        name: "Théâtre",
        imgPath: "../../../../../assets/Pictures/Logos/Loisirs/theatre32.svg",
        description: `J'apprécie aller au théatre mais aussi pratiquer. L’exercice devant un public me permet de prendre confiance en moi et d’acquérir de l’assurance dans la
        prise de parole.`
      }
    ]
  }
}
