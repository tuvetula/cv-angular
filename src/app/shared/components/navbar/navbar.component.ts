import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { CvMenuService } from '../../services/Menus/cv-menu.service';
import { CvMenuModel } from '../../Models/cv-menu.model';
import { ScreenSizeService } from '../../services/utilities/screen-size.service';
import { Subscription, Observable } from 'rxjs';
import { MenuSelectedNameService } from '../../services/Observables/menu-selected-name.service';
import { DocumentClickService } from '../../services/utilities/document-click.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private screenSizeSubscription: Subscription;
  private documentClickSubscription: Subscription;
  public menu: CvMenuModel[];
  public menuSelectedTitle: Observable<string>;
  private windowInnerWidth: number;
  @ViewChild('menuElement') menuElement: ElementRef;
  @ViewChild('burgerMenuButton') burgerMenuButton: ElementRef;

  constructor(
    private cvMenuService: CvMenuService,
    private screenSizeService: ScreenSizeService,
    private menuSelectedNameService: MenuSelectedNameService,
    private documentClickService: DocumentClickService
  ) {}

  ngOnInit(): void {
    this.menuSelectedTitle = this.menuSelectedNameService.menuSelectedName;
    this.menu = this.cvMenuService.cvMenu;
    this.screenSizeSubscription = this.screenSizeService.windowInnerWidth.subscribe(
      (value) => {
        this.windowInnerWidth = value;
        //Si window.innerWidth inférieur à 960px alors on souscrit au document.click
        if (this.windowInnerWidth < 960) {
          if (
            !this.documentClickSubscription ||
            this.documentClickSubscription.closed
          ) {
            this.documentClickSubscription = this.documentClickService.documentClickedTarget.subscribe(
              (element) => {
                if (
                  this.menuElement.nativeElement.style.display === 'block' &&
                  element !== this.menuElement.nativeElement &&
                  element !== this.burgerMenuButton.nativeElement &&
                  !this.menuElement.nativeElement.contains(element)
                ) {
                  this.displayMenuElement();
                }
              }
            );
          }
        } else {
          if (
            this.documentClickSubscription &&
            !this.documentClickSubscription.closed
          ) {
            this.documentClickSubscription.unsubscribe();
          }
        }
      }
    );
  }

  public displayMenuElement(): void {
    if (this.windowInnerWidth < 960) {
      if (this.menuElement.nativeElement.style.display === 'none') {
        this.menuElement.nativeElement.style.display = 'block';
        setTimeout(
          () => this.menuElement.nativeElement.classList.add('show'),
          1
        );
      } else {
        this.menuElement.nativeElement.classList.remove('show');
        setTimeout(
          () => (this.menuElement.nativeElement.style.display = 'none'),
          400
        );
      }
    }
  }

  ngOnDestroy(): void {
    this.screenSizeSubscription.unsubscribe();
    this.documentClickSubscription.unsubscribe();
  }
}
