// * Base
import { Injectable } from '@angular/core';

// * Types

interface IItem {
  currency: string;
  price: string;
  priceText: string;
  textBold: string;
  subText: string;
  listText: {
    1: string;
    2: string;
    3: string;
    4: string;
  };
}

@Injectable()
export class AmentiesService {
  readonly sliderList: IItem[] = [
    {
      currency: 'main.abonements.card.c',
      price: 'main.abonements.card.price',
      priceText: 'main.abonements.card.priceText',
      textBold: 'main.abonements.card.textBold',
      subText: 'main.abonements.card.subText',
      listText: {
        1: 'main.abonements.card.listText.1',
        2: 'main.abonements.card.listText.2',
        3: 'main.abonements.card.listText.3',
        4: 'main.abonements.card.listText.4',
      },
    },
    {
      currency: 'main.abonements.card2.c',
      price: 'main.abonements.card2.price',
      priceText: 'main.abonements.card2.priceText',
      textBold: 'main.abonements.card2.textBold',
      subText: 'main.abonements.card2.subText',
      listText: {
        1: 'main.abonements.card2.listText.1',
        2: 'main.abonements.card2.listText.2',
        3: 'main.abonements.card2.listText.3',
        4: 'main.abonements.card2.listText.4',
      },
    },
    {
      currency: 'main.abonements.card3.c',
      price: 'main.abonements.card3.price',
      priceText: 'main.abonements.card3.priceText',
      textBold: 'main.abonements.card3.textBold',
      subText: 'main.abonements.card3.subText',
      listText: {
        1: 'main.abonements.card3.listText.1',
        2: 'main.abonements.card3.listText.2',
        3: 'main.abonements.card3.listText.3',
        4: 'main.abonements.card3.listText.4',
      },
    },
    {
      currency: 'main.abonements.card4.c',
      price: 'main.abonements.card4.price',
      priceText: 'main.abonements.card4.priceText',
      textBold: 'main.abonements.card4.textBold',
      subText: 'main.abonements.card4.subText',
      listText: {
        1: 'main.abonements.card4.listText.1',
        2: 'main.abonements.card4.listText.2',
        3: 'main.abonements.card4.listText.3',
        4: 'main.abonements.card4.listText.4',
      },
    },
  ];
}
