import { Injectable } from '@angular/core';
import { ProjetModel } from '../../Models/projet.model';

@Injectable()
export class ProjetsService {
  public listProjets: ProjetModel[];

  constructor() {
    this.listProjets = [
      {
        name: 'As de la coloc',
        date: new Date(2019, 9),
        company: 'As creation',
        url: 'https://www.app.asdelacoloc.fr',
        gitLink: 'https://github.com/tuvetula/AsDeLaColocation',
        description:
          `Application web destinée à la gestion d’annonces immobilières.<br><br>
          Ce projet a été réalisé lors de mon stage de fin de formation à l&#39;Adrar.<br><br>
          Maquettage, conception de la base données, développement de la partie front-end et back-end. Déploiement
          du projet.<br><br>
          Utilisation de la librairie 'puppeteer' pour le développement d'un outil de diffusion automatique.`,
        imagePath: [
          '../../../../../assets/Pictures/IllustrationProjets/AsDeLaColoc/AsDeLaColoc.png',
          '../../../../../assets/Pictures/IllustrationProjets/AsDeLaColoc/AsDeLaColoc1.png',
          '../../../../../assets/Pictures/IllustrationProjets/AsDeLaColoc/AsDeLaColoc2.png',
          '../../../../../assets/Pictures/IllustrationProjets/AsDeLaColoc/AsDeLaColoc3.png',
        ],
        langagesFrontEnd: ['Html', 'Css', 'Javascript', 'Bootstrap','Puppeteer'],
        langagesBackEnd: ['Php', 'Sql'],
        documentationUrl:
          '../../assets/Pdf/MemoireAsDeLaColoc.pdf'
      },
      {
        name: 'Cours Js',
        date: new Date(2020, 4),
        company: 'Projet personnel',
        url: 'https://coursjs-e9340.web.app/',
        gitLink: 'https://github.com/tuvetula/CoursJs',
        description: `Développement d’un site web regroupant les différents cours suivis afin de me
        créer un support technique de référence.<br><br>
        Les objectifs : familiarisation avec Angular, Firebase pour l'authentification et le stockage de données.<br><br>
        Enrichissement de la base par de nouvelles fonctionnalités et informations.`,
        imagePath: [
          '../../../../../assets/Pictures/IllustrationProjets/CoursJs/CoursJs1.png',
          '../../../../../assets/Pictures/IllustrationProjets/CoursJs/CoursJs2.png',
          '../../../../../assets/Pictures/IllustrationProjets/CoursJs/CoursJs3.png',
          '../../../../../assets/Pictures/IllustrationProjets/CoursJs/CoursJs4.png',
          '../../../../../assets/Pictures/IllustrationProjets/CoursJs/CoursJs5.png',
        ],
        langagesFrontEnd: ['Html', 'Css', 'Bootstrap', 'Javascript', 'Angular'],
        langagesBackEnd: [
          'Firebase database',
          'Firebase storage',
          'Firebase authentication',
        ],
      },
      {
        name: 'Morpion',
        date: new Date(2019, 6),
        company: 'Projet personnel',
        url: 'https://morpion-js-tuvetula.web.app/',
        gitLink: 'https://github.com/tuvetula/Jeux/tree/master/Morpion',
        description:
          `Conception et développement d'un jeu.<br><br>
          Projet réalisé en autonomie suite à ma première formation Javascript.`,
        imagePath: [
          '../../../../../assets/Pictures/IllustrationProjets/Morpion/morpion.PNG',
        ],
        langagesFrontEnd: ['Html', 'Css', 'Javascript'],
        langagesBackEnd: null,
      },
      {
        name: 'Blog Laravel',
        date: new Date(2020, 1),
        company: 'ApFormation',
        url: null,
        gitLink: 'https://github.com/tuvetula/BlogLaravel',
        description:
          `Construction et mise en place d'un blog.<br><br>
          Projet réalisé durant une formation Laravel de 8 jours chez ApFormation.`,
        imagePath: [
          '../../../../../assets/Pictures/IllustrationProjets/BlogLaravel/LaravelBlog.png',
          '../../../../../assets/Pictures/IllustrationProjets/BlogLaravel/LaravelBlog1.png',
          '../../../../../assets/Pictures/IllustrationProjets/BlogLaravel/LaravelBlog2.png',
        ],
        langagesFrontEnd: ['Html', 'Css', 'Bootstrap'],
        langagesBackEnd: ['Php', 'Laravel'],
      },
    ];
  }
}
