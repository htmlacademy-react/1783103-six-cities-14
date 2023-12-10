import { OffersType } from '../../types/offers-types';
import { State } from '../../types/state';
import { CITIES, NameSpace, SortOptions } from '../../utils/const';

export const getOffers = (state: State): OffersType[] => state[NameSpace.Cities].offers;
export const getOffersLoadingStatus = (state: State): boolean => state[NameSpace.Cities].areOffersLoading;
export const getFilteredOffers = (state: State): OffersType[] => state[NameSpace.Cities].filteredOffers;
export const getSortingOption = (state: State): SortOptions => state[NameSpace.Cities].sortingOption;
export const getSortedOffers = (state: State): OffersType[] => state[NameSpace.Cities].sortedOffers;
export const getActiveCity = (state: State): CITIES => state[NameSpace.Cities].activeCity;
export const getFavoriteOffers = (state: State): OffersType[] => state[NameSpace.Cities].favorites;
