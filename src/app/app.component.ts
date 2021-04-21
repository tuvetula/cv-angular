import { Component, HostListener } from '@angular/core';
import { ScreenSizeService } from './shared/services/utilities/screen-size.service';
import { DocumentClickService } from './shared/services/utilities/document-click.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private screenSizeService: ScreenSizeService,
    private documentClickService: DocumentClickService
  ){}

  @HostListener('window:resize', ['$event'])
  windowResize(event: { target: { innerWidth: number; }; }): void {
    this.screenSizeService.windowInnerWidth.next(event.target.innerWidth);
  }
  @HostListener('document:click', ['$event'])
  documentClick(event: any): void {
    this.documentClickService.documentClickedTarget.next(event.target);
  }
}
