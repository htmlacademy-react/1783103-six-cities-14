import {store} from '../store/index.js';
import { AuthorizationStatus, CITIES, SortOptions } from '../utils/const.js';
import { OffersType } from './offers-types.js';
import { ReviewType } from './reviews-types.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
    userName: string | undefined;
    hasError: boolean;
  };

export type CitiesAction = {
    offers: OffersType[];
    areOffersLoading: boolean;
    activeCity: CITIES;
    filteredOffers:OffersType[];
    sortedOffers:OffersType[];
    sortingOption: SortOptions;
    favorites: OffersType[];
    authorizationStatus: AuthorizationStatus;
  };

export type FetchTheOfferAction = {
    offer: OffersType | null;
    areOffersLoading: boolean;
    nearByOffers: OffersType[];
    reviews: ReviewType[];
    review: ReviewType | undefined;
}

