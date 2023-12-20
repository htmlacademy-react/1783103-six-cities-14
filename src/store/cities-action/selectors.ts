import { OffersType } from '../../types/offers-types';
import { State } from '../../types/state';
import { CITIES, NameSpace, } from '../../utils/const';

export const getOffers = (state: State): OffersType[] => state[NameSpace.Cities].offers;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Cities].areOffersLoading;
export const getActiveCity = (state: State): CITIES => state[NameSpace.Cities].activeCity;
export const getFavoriteOffers = (state: State): OffersType[] => state[NameSpace.Cities].favorites;
