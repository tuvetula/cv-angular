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

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private screenSizeSubscription: Subscription;
  public menu: CvMenuModel[];
  private windowInnerWidth: number;
  @ViewChild('menuElement') menuElement: ElementRef;
  public menuSelectedTitle: Observable<string>;

  constructor(
    private cvMenuService: CvMenuService,
    private screenSizeService: ScreenSizeService,
    private menuSelectedNameService: MenuSelectedNameService
  ) {}

  ngOnInit(): void {
    this.menuSelectedTitle = this.menuSelectedNameService.menuSelectedName;
    this.menu = this.cvMenuService.cvMenu;
    this.screenSizeSubscription = this.screenSizeService.windowInnerWidth.subscribe(
      (value) => (this.windowInnerWidth = value)
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
  }
}
