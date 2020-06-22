import { Component, OnInit, Input, ViewChild, OnChanges, AfterViewChecked, OnDestroy } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-config',
  templateUrl: './carousel-config.component.html',
  styleUrls: ['./carousel-config.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselConfigComponent implements OnInit {
  @Input() images: string[];

  public paused = false;
  public unpauseOnArrow = false;
  public pauseOnIndicator = false;
  public pauseOnHover = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor(
    private config: NgbCarouselConfig
    ) { 
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit(): void {
    if(this.images && this.images.length < 2 && this.config){
      this.config.showNavigationArrows = false;
      this.config.showNavigationIndicators = false;      
    } else {
      this.config.showNavigationArrows = true;
      this.config.showNavigationIndicators = true;
    }
    
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
