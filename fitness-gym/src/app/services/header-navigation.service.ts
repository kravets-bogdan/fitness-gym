// * Base
import { Injectable } from '@angular/core';

// * RxJS
import { Subject } from 'rxjs';

// * Types
import { IItem, NavigationRouteType } from 'src/app/types/navigation.types';

@Injectable({
  providedIn: 'root',
})
export default class HeaderNavigationService {
  readonly list: IItem[] = [
    {
      name: 'header.navigation.about-us',
      route: NavigationRouteType.ABOUT,
    },
    {
      name: 'header.navigation.service',
      route: NavigationRouteType.SERVICE,
    },
    {
      name: 'header.navigation.coaches',
      route: NavigationRouteType.COACHES,
    },
    {
      name: 'header.navigation.prices',
      route: NavigationRouteType.PRICES,
    },
    {
      name: 'header.navigation.contacts',
      route: NavigationRouteType.CONTACTS,
    },
  ];

  readonly anchorNavigationSubject = new Subject<NavigationRouteType>();
}
