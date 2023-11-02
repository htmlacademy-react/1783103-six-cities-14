export const SETTINGS = {
  PlacesCount: 312
};

export enum AppRoute {
    Root = '/',
    Login = '/login',
    Favorites = '/favorites',
    Offer = '/offer/:offerId',
    NotFound = '/NotFound'

}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }
