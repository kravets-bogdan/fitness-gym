// * Base
import { Injectable } from '@angular/core';

// * Types
interface IItem {
  title: string;
  text: string;
  link: string;
  src: string;
  alt: string;
  h2: string;
}

@Injectable()
export class CatalogService {
  readonly list: IItem[] = [
    {
      title: 'main.service.gym',
      text: 'main.service.p',
      link: 'main.service.gym',
      src: '../../../../../assets/images/gallery.png',
      alt: 'main.service.gym',
      h2: 'main.service.gym',
    },
    {
      title: 'main.service.gym',
      text: 'main.service.p',
      link: 'main.service.gym',
      src: '../../../../../assets/images/gallery.png',
      alt: 'main.service.gym',
      h2: 'main.service.gym',
    },
    {
      title: 'main.service.cardio',
      text: 'main.service.p',
      link: 'main.service.cardio',
      src: '../../../../../assets/images/gallery.png',
      alt: 'main.service.cardio',
      h2: 'main.service.cardio',
    },
    {
      title: 'main.service.fitness',
      text: 'main.service.p',
      link: 'main.service.fitness',
      src: '../../../../../assets/images/gallery.png',
      alt: 'main.service.fitness',
      h2: 'main.service.fitness',
    },
    {
      title: 'main.service.group',
      text: 'main.service.p',
      link: 'main.service.group',
      src: '../../../../../assets/images/gallery.png',
      alt: 'main.service.group',
      h2: 'main.service.group',
    },
    {
      title: 'main.service.pilates',
      text: 'main.service.p',
      link: 'main.service.pilates',
      src: '../../../../../assets/images/gallery.png',
      alt: 'main.service.pilates',
      h2: 'main.service.pilates',
    },
  ];
}
