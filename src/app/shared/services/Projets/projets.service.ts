import { Injectable } from '@angular/core';
import { ProjetModel } from '../../Models/list-projets.model';

@Injectable()
export class ProjetsService {
  public listProjets: ProjetModel[];

  constructor() {
    this.listProjets = [
      {
        name: 'As de la coloc',
        date: new Date(2019, 10),
        company: 'As creation',
        url: 'https://www.app.asdelacoloc.fr',
        gitLink: 'https://github.com/tuvetula/AsDeLaColocation',
        description:
          "Application web permettant aux propriétaires de biens immobiliers souhaitant les proposer au marché de la colocation de centraliser leurs annonces. Ils pourront bénéficier ensuite d'un système de diffusion automatique sur les différents passerelles spécialisées.",
        imagePath: ['../../../../../assets/Pictures/IllustrationProjets/AsDeLaColoc/AsDeLaColoc.PNG'],
        langagesFrontEnd: ['Html', 'Css', 'Javascript', 'Bootstrap'],
        langagesBackEnd: ['Php', 'Sql'],
        documentationPath:
          '../../../../../assets/Pdf/Memoire_de_stage_AsDeLaColoc.pdf',
      },
      {
        name: 'Cours Js',
        date: new Date(2020, 4),
        company: 'Projet personnel',
        url: 'https://coursjs-e9340.web.app/',
        gitLink: "https://github.com/tuvetula/CoursJs",
        description:
          "Site regroupant les différents cours que j'ai suivi via la plateforme 'Dyma.fr' me permettant de me familiariser avec Angular et de me créer un support auquel me référencer.",
        imagePath: ['../../../../../assets/Pictures/IllustrationProjets/CoursJs/CoursJs.PNG'],
        langagesFrontEnd: ['Html', 'Css', 'Bootstrap', 'Javascript', 'Angular'],
        langagesBackEnd: [
          'Firebase database',
          'Firebase storage',
          'Firebase authentication',
        ],
        documentationPath: null,
      },
      {
        name: 'Morpion',
        date: new Date(2019, 6),
        company: 'Projet personnel',
        url: 'https://morpion-js-tuvetula.web.app/',
        gitLink: "https://github.com/tuvetula/Jeux/tree/master/Morpion",
        description:
          "Projet réalisé en autonomie suite à mes premiers cours Javascript suivis lors de ma formation à l'Adrar.",
        imagePath: [
          '../../../../../assets/Pictures/IllustrationProjets/Morpion/morpion.PNG',
        ],
        langagesFrontEnd: ['Html', 'Css', 'Javascript'],
        langagesBackEnd: null,
        documentationPath: null,
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
        langagesFrontEnd: ['php', 'Laravel'],
        langagesBackEnd: ['Laravel'],
        documentationPath: null,
      },
    ];
  }
}
