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
        icone: "../../../../../assets/Pictures/Logos/Navbar/home32.svg"
      },
      {
        name: "Formations",
        url: "/Formations",
        icone: "../../../../../assets/Pictures/Logos/Navbar/formations32.svg"
      },
      {
        name: "Expériences professionnelles",
        url: "/Experiences-professionnelles",
        icone: "../../../../../assets/Pictures/Logos/Navbar/experiences32.svg"
      },
      {
        name: "Projets",
        url: "/Projets",
        icone: "../../../../../assets/Pictures/Logos/Navbar/projets32.svg"
      },
      {
        name: "Compétences",
        url: "/Competences",
        icone: "../../../../../assets/Pictures/Logos/Navbar/competences32.svg"
      },
      {
        name: "Loisirs",
        url: "/Loisirs",
        icone: "../../../../../assets/Pictures/Logos/Navbar/loisirs32.svg"
      },
      {
        name: "Contact",
        url:"/Contact",
        icone: "../../../../../assets/Pictures/Logos/Navbar/contact32.svg"
      }
    ]
  }
}
