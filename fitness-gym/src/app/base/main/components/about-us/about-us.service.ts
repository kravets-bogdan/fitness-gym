// * Base
import { Injectable } from '@angular/core';

// * Types

interface IItem {
  id: number;
  src: string;
  alt: string;
  title: string;
}

@Injectable()
export class AboutUsService {
  readonly sliderList: IItem[] = [
    {
      id: 1,
      src: '../../../../../assets/images/about-us.png',
      alt: 'photo',
      title: 'gym',
    },
    {
      id: 2,
      src: '../../../../../assets/images/about-us.png',
      alt: 'photo',
      title: 'gym',
    },
    {
      id: 3,
      src: '../../../../../assets/images/about-us.png',
      alt: 'photo',
      title: 'gym',
    },
    {
      id: 4,
      src: '../../../../../assets/images/about-us.png',
      alt: 'photo',
      title: 'gym',
    },
    {
      id: 5,
      src: '../../../../../assets/images/about-us.png',
      alt: 'photo',
      title: 'gym',
    },
  ];
}
