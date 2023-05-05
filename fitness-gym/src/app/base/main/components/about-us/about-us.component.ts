// * Base
import { SharedModule } from '../../../../shared/shared.module';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// * Slider
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

// * Service
import { AboutUsService } from './about-us.service';

@Component({
  standalone: true,
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  providers: [AboutUsService],
  imports: [CommonModule, CarouselModule, SharedModule],
})
export default class AboutUsComponent {
  // * Injects
  private readonly aboutUsService = inject(AboutUsService);
  // * Local
  protected showText: boolean = false;
  // * Options for slider
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    lazyLoad: true,
    slideTransition: 'linear',
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };

  get slidesStore() {
    return this.aboutUsService.sliderList;
  }
}
