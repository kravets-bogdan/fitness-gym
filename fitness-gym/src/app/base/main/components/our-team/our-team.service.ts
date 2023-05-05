// * Base
import { Injectable } from '@angular/core';

// * Types
interface IItem {
  boldtext: string;
  subtext: string;
  title: string;
  text: string;
  src: string;
  alt: string;
}

@Injectable()
export class OurTeamService {
  readonly list: IItem[] = [
    {
      boldtext: 'main.team.title',
      subtext: 'main.team.level',
      text: 'main.team.p',
      src: '../../../../../assets/images/team_1.png',
      title: 'main.team.title',
      alt: 'main.team.title',
    },
    {
      boldtext: 'main.team.title1',
      subtext: 'main.team.level',
      text: 'main.team.p',
      src: '../../../../../assets/images/team_2.png',
      title: 'main.team.title1',
      alt: 'main.team.title1',
    },
    {
      boldtext: 'main.team.title2',
      subtext: 'main.team.level',
      text: 'main.team.p',
      src: '../../../../../assets/images/team_3.png',
      title: 'main.team.title2',
      alt: 'main.team.title2',
    },
    {
      boldtext: 'main.team.title',
      subtext: 'main.team.level',
      text: 'main.team.p',
      src: '../../../../../assets/images/team_4.png',
      title: 'main.team.title',
      alt: 'main.team.title',
    },
    {
      boldtext: 'main.team.title1',
      subtext: 'main.team.level',
      text: 'main.team.p',
      src: '../../../../../assets/images/team_5.png',
      title: 'main.team.title1',
      alt: 'main.team.title1',
    },
    {
      boldtext: 'main.team.title2',
      subtext: 'main.team.level',
      text: 'main.team.p',
      src: '../../../../../assets/images/team_6.png',
      title: 'main.team.title2',
      alt: 'main.team.title2',
    },
  ];
}
