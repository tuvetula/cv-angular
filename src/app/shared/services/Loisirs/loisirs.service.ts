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
        description: "Je pratique le football à 7 via la <a class='linkService' href='https://www.fsgt31.fr/les-commissions/10-football-a-7.html' target='_blank'>fsgt31</a>. Avec des amis, nous avons une équipe inscrite et la pratique se déroule à raison d'un match par semaine selon un calendrier fourni.<br> Le football est un sport complet et une source de bien-être. Il me permet de développer mon endurance et mon esprit d'équipe."
      },
      {
        name: "Peinture",
        imgPath: "../../../../../assets/Pictures/Logos/Loisirs/paint32.svg",
        description: "Lors de mon temps libre, j'aime peindre des toiles à l'aide de bombes de peinture et posca. Cela me permets de travailler ma concentration et ma créativité..."
      },
      {
        name: "Théâtre",
        imgPath: "../../../../../assets/Pictures/Logos/Loisirs/theatre32.svg",
        description: "J'aime beaucoup le théatre et j'en ai pratiqué pendant deux ans. Avec l'arrivée des enfants, il m'a fallu arrêter mais je compte bien reprendre lorsqu'ils seront plus grands. Le théâtre me permet de m'évader en entrant dans la peau d'une autre personne..."
      }
    ]
  }
}
