import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
import { ScreenSizeService } from '../../services/utilities/screen-size.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scroll-up-button',
  templateUrl: './scroll-up-button.component.html',
  styleUrls: ['./scroll-up-button.component.css'],
})
export class ScrollUpButtonComponent implements OnInit {
  private amountScrolled: number = 300;
  private footerHeight: number;
  private padding: number;
  public buttonBottom: string;

  private screenSize: number;
  private screenSizeSubscription: Subscription;
  public classToApply: {
    fadeIn: boolean;
    fadeOut: boolean;
  };
  @ViewChild('scrollButton') scrollButton: ElementRef;

  constructor(private screenSizeService: ScreenSizeService) {}

  ngOnInit(): void {}
  @HostListener('window:scroll') onWindowScroll(e: any) {
    if (window.scrollY > this.amountScrolled) {
      //On subscribe au screenSize si ce n'est pas deja fait
      if (!this.screenSizeSubscription || this.screenSizeSubscription.closed) {
        this.screenSizeSubscription = this.screenSizeService.windowInnerWidth.subscribe(
          (value) => {
            if (value !== this.screenSize) {
              this.screenSize = value;
              if (value < 600) {
                this.footerHeight = 86;
                this.padding = 12;
              } else if (value >= 600 && value < 960) {
                this.footerHeight = 54;
                this.padding = 16;
              } else {
                this.footerHeight = 54;
                this.padding = 24;
              }
            }
          }
        );
      }
      //On applique classe fadeIn
      if (
        !this.classToApply ||
        (!this.classToApply.fadeIn && this.classToApply.fadeOut)
      ) {
        this.applyClass(true, false);
      }
      //On calcule la valeur de bottom pour le scrollButton
      const bodyHeight: number = document.body.scrollHeight; //2500
      const windowHeight = window.innerHeight; //580
      const scrollY = Math.ceil(window.scrollY); //1900
      if (windowHeight + scrollY >= bodyHeight - this.footerHeight - (this.padding - 12)) {
        this.buttonBottom =
          this.footerHeight +
          this.padding -
          (bodyHeight - (windowHeight + scrollY)) +
          'px';
      } else {
        this.buttonBottom = '12px';
      }
    } else if (window.scrollY < this.amountScrolled) {
      //On unsubscribe au screenSize
      if (this.screenSizeSubscription && !this.screenSizeSubscription.closed) {
        this.screenSizeSubscription.unsubscribe();
      }
      if (
        this.classToApply &&
        this.classToApply.fadeIn &&
        !this.classToApply.fadeOut
      ) {
        this.applyClass(false, true);
      }
    }
  }

  public scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private applyClass(fadeInValue: boolean, fadeOutValue: boolean): void {
    this.classToApply = {
      fadeIn: fadeInValue,
      fadeOut: fadeOutValue,
    };
  }
}
