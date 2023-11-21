export const SETTINGS = {
  PlacesCount: 312
};

export enum AppRoute {
    Root = '/',
    Login = '/login',
    Favorites = '/favorites',
    Offer = '/offer/:offerIdParams',
    NotFound = '/NotFound'

}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }

export enum CITIES {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum SortOptions {
  Popular = 'Popular',
  PriceUp ='Price: low to high',
  PriceDown ='Price: high to low',
  ByRating = 'Top rated first'
}


