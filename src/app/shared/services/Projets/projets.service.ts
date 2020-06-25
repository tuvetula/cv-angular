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
          `Application web permettant aux propriétaires de biens immobiliers souhaitant les proposer au marché de la colocation, de centraliser leurs annonces et ne plus gérer la publication sur les différentes plateformes spécialisées.<br>
          Ce projet a été réalisé lors de mon stage de fin de formation à l'Adrar.<br>
          J'ai maquetté l'application, conçu et mis en place la base de données, développé la partie front-end et back-end.
          Le projet a été déployé à la fin du stage.<br> J'ai ensuite développé un programme à l'aide de puppeteer permettant de diffuser les annonces enregistrées par les utilisateurs.`,
        imagePath: [
          '../../../../../assets/Pictures/IllustrationProjets/AsDeLaColoc/AsDeLaColoc.png',
          '../../../../../assets/Pictures/IllustrationProjets/AsDeLaColoc/AsDeLaColoc1.png',
          '../../../../../assets/Pictures/IllustrationProjets/AsDeLaColoc/AsDeLaColoc2.png',
          '../../../../../assets/Pictures/IllustrationProjets/AsDeLaColoc/AsDeLaColoc3.png',
        ],
        langagesFrontEnd: ['Html', 'Css', 'Javascript', 'Bootstrap','Puppeteer'],
        langagesBackEnd: ['Php', 'Sql'],
        documentationUrl:
          'MemoireAsDeLaColoc.pdf'
      },
      {
        name: 'Cours Js',
        date: new Date(2020, 4),
        company: 'Projet personnel',
        url: 'https://coursjs-e9340.web.app/',
        gitLink: 'https://github.com/tuvetula/CoursJs',
        description: `Site web regroupant les différents cours que j'ai suivi via la plateforme 'Dyma.fr'. J'ai réalisé ce projet afin de me familiariser avec Angular et d'avoir un support sur lequel me référencer.<br>
        J'ai utilisé les services de Firebase afin de gérer l'authentification et le stockage de données.<br>
        Je continue d'apporter de nouvelles fonctionnalités et d'alimenter ce site au fur et à mesure que j'avance dans mes formations.<br> `,
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
          `Projet réalisé en autonomie suite à mes premiers cours Javascript suivis lors de ma formation à l'Adrar.<br>
          Le jeu fonctionne très bien, cela dit le code n'est pas très "joli" et reflète très bien mes débuts avec Javascript et le développement en général.<br>
          Ce projet a été intéressant pour moi car il m'a fallu réfléchir au mode 1 player et donc programmer la façon de jouer de l'ordinateur.`,
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
          'Projet réalisé durant une formation chez ApFormation. Pendant 8 jours de formation sur Laravel, la construction de ce blog a été le fil rouge.',
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
