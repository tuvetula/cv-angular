import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from "@angular/core";

@Component({
  selector: "app-scroll-up-button",
  templateUrl: "./scroll-up-button.component.html",
  styleUrls: ["./scroll-up-button.component.css"],
})
export class ScrollUpButtonComponent implements OnInit {
  public classToApply: {
    fadeIn: boolean,
    fadeOut: boolean
  };
  private amountScrolled: number = 300;
  @ViewChild("scrollButton") scrollButton: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  @HostListener("window:scroll") onWindowScroll(e: any) {
    if (window.scrollY > this.amountScrolled) {
      if(!this.classToApply || (!this.classToApply.fadeIn && this.classToApply.fadeOut)){
        this.applyClass(true, false);
      }
    } else if (window.scrollY < this.amountScrolled) {
      if(this.classToApply && (this.classToApply.fadeIn && !this.classToApply.fadeOut)){
        this.applyClass(false,true);
      }
    }
  }

  public scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  private applyClass(fadeInValue: boolean , fadeOutValue: boolean): void {
    this.classToApply = {
      fadeIn: fadeInValue,
      fadeOut: fadeOutValue
    }
  }
}
