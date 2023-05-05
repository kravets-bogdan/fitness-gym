export interface IItem {
  route: NavigationRouteType;
  name: string;
}

export enum NavigationRouteType {
  CONTACTS = 'contacts',
  SERVICE = 'service',
  COACHES = 'coaches',
  PRICES = 'prices',
  ABOUT = 'about',
}
