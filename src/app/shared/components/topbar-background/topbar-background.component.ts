import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from '../../services/utilities/screen-size.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topbar-background',
  templateUrl: './topbar-background.component.html',
  styleUrls: ['./topbar-background.component.css'],
})
export class TopbarBackgroundComponent implements OnInit {
  public networkImgBackground: Observable<string>;

  constructor(private screenSizeService: ScreenSizeService) {}

  ngOnInit(): void {
    this.networkImgBackground = this.screenSizeService.windowInnerWidth.pipe(
      switchMap((windowInnerWidth) => {
        let imgPath: string;
        if (windowInnerWidth < 600) {
          imgPath = '../../../../assets/Pictures/Background/networkMobile.jpg';
        } else if (windowInnerWidth < 960) {
          imgPath =
            '../../../../assets/Pictures/Background/networkTablette.jpg';
        } else if (windowInnerWidth < 1281) {
          imgPath = '../../../../assets/Pictures/Background/network1280.jpg';
        } else {
          imgPath = '../../../../assets/Pictures/Background/network1920.jpg';
        }
        return new Observable<string>(observer => observer.next(imgPath));
      })
    );
  }
}
