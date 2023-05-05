// * Base
import { SharedModule } from '../../../../shared/shared.module';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// * Slider
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

// * Service
import { AmentiesService } from './amenties.service';

@Component({
  standalone: true,
  selector: 'app-amenties',
  templateUrl: './amenties.component.html',
  styleUrls: ['./amenties.component.scss'],
  providers: [AmentiesService],
  imports: [CommonModule, CarouselModule, SharedModule],
})
export default class AmentiesComponent {
  // * Injects
  private readonly amentiesService = inject(AmentiesService);
  // * Options for slider
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
        center: true,
        margin: 10,
      },
      768: {
        items: 2,
        center: true,
        margin: 30,
      },
      992: {
        items: 3,
        center: true,
        margin: 50,
      },
    },
  };

  get slidesStore() {
    return this.amentiesService.sliderList;
  }
}
