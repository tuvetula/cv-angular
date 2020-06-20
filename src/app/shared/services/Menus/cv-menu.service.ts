import { Injectable } from '@angular/core';
import { CvMenuModel } from '../../Models/cv-menu.model';

@Injectable({
  providedIn: 'root'
})
export class CvMenuService {
  public cvMenu: CvMenuModel[];

  constructor() { 
    this.cvMenu = [
      {
        name: "Accueil",
        url: "/",
        icone: "../../../../../assets/Pictures/Logos/home32.png"
      },
      {
        name: "Formations",
        url: "/Formations",
        icone: "../../../../../assets/Pictures/Logos/formations32.png"
      },
      {
        name: "Expériences professionnelles",
        url: "/Experiences-professionnelles",
        icone: "../../../../../assets/Pictures/Logos/experiences32.png"
      },
      {
        name: "Projets",
        url: "/Projets",
        icone: "../../../../../assets/Pictures/Logos/projets32.png"
      },
      {
        name: "Compétences",
        url: "/Competences",
        icone: "../../../../../assets/Pictures/Logos/competences32.png"
      },
      {
        name: "Loisirs",
        url: "/Loisirs",
        icone: "../../../../../assets/Pictures/Logos/loisirs32.png"
      }
    ]
  }
}
