import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ProjetsService } from '../shared/services/Projets/projets.service';
import { ProjetModel } from '../shared/Models/projet.model';
import { MenuSelectedNameService } from '../shared/services/Observables/menu-selected-name.service';
import { GetPdfService } from '../shared/services/Firebase/get-pdf.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { take } from 'rxjs/operators';
import { ScreenSizeService } from '../shared/services/utilities/screen-size.service';

@Component({
  selector: 'app-projets-container',
  templateUrl: './projets-container.component.html',
  styleUrls: ['./projets-container.component.css'],
  providers: [ProjetsService],
})
export class ProjetsContainerComponent implements OnInit {

  private nameSection: string = 'Projets';
  public listProjets: ProjetModel[];
  @ViewChild('modal') modal: ElementRef;

  public imagePathToShowInCarousel: string[];
  public showCarousel: boolean;

  public showPdf: boolean;
  public pdfSrc: SafeResourceUrl;


  constructor(
    private menuSelectedNameService: MenuSelectedNameService,
    private projetsService: ProjetsService,
    private getPdfService: GetPdfService,
    private domSanitizerService: DomSanitizer,
    private screenSizeService: ScreenSizeService
  ) {}

  ngOnInit(): void {
    this.menuSelectedNameService.menuSelectedName.next(this.nameSection);
    this.listProjets = this.projetsService.listProjets.sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      } else if (a.date < b.date) {
        return 1;
      } else {
        return 0;
      }
    });
    
  }

  public showImagePathModal(imagePath?: string[]): void {
    this.imagePathToShowInCarousel = imagePath;
    this.showCarousel = true;
    this.modal.nativeElement.style.display = 'block';
  }

  public showPdfModal(name: string): void {
    this.getPdfService.getDownloadUrlPdf(name).pipe(take(1)).subscribe(
      value => {
        if(window.innerWidth < 600){
          this.pdfSrc = this.domSanitizerService.bypassSecurityTrustResourceUrl(value+'#zoom=33');
        } else if (window.innerWidth < 960){
          this.pdfSrc = this.domSanitizerService.bypassSecurityTrustResourceUrl(value+'#zoom=35');
        } else {
          this.pdfSrc = this.domSanitizerService.bypassSecurityTrustResourceUrl(value+'#zoom=40');
        }
      },
      err => console.log(err),
      () => {
        this.showCarousel = false;
        this.showPdf = true;
        this.modal.nativeElement.style.display = 'block';
      }
    );
  }

  public closeImagePathModal(): void {
    this.modal.nativeElement.style.display = 'none';
    if (this.showCarousel) {
      this.showCarousel = false;
      this.imagePathToShowInCarousel = null;
    }
    if (this.showPdf) {
      this.showPdf = false;
      this.pdfSrc = null;
    }
    
  }
}
