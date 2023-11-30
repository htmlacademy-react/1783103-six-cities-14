import {createReducer} from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES, SortOptions } from '../utils/const';
import { setActiveCity,
  getFavoriteOffers, getNearbyOffers,getSortedOffers, getSortingOption, getReviews, loadOffers, requireAuthorization, setError, setLoadingStatus, findTheOffer } from './actions';
import { OffersType } from '../types/offers-types';
import { ReviewType } from '../types/reviews-types';


const initialState : {
  activeCity: CITIES;
  offers: OffersType[];
  filteredOffers:OffersType[];
  offer: OffersType|null;
  favorites: OffersType[];
  nearbyOffers:OffersType[];
  sortedOffers:OffersType[];
  sortingOption: SortOptions;
  reviews: ReviewType[];
  authorizationStatus:string;
  error: string|null;
  areOffersLoading: boolean;

} = {
  activeCity:CITIES.Paris,
  filteredOffers:[],
  offers:[],
  offer: null,
  favorites: [],
  nearbyOffers:[],
  sortedOffers:[],
  sortingOption: SortOptions.PriceDown,
  reviews:[],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  areOffersLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase (loadOffers, (state,action) => {
      state.offers = action.payload;
      state.filteredOffers = state.offers.filter((item)=> item.city?.name === state.activeCity);
      state.sortingOption = SortOptions.Popular;
      state.sortedOffers = action.payload;
    })
    .addCase (setActiveCity, (state,action) => {
      state.activeCity = action.payload;
    })

    .addCase (getFavoriteOffers, (state,action) => {
      state.offers = action.payload;
      state.favorites = action.payload;
      // state.favorites = state.offers.filter((offer)=> offer.isFavorite === true);
    })
    .addCase (getNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase (getSortedOffers, (state, action) => {
      state.sortedOffers = action.payload;

    })
    .addCase (getSortingOption, (state,action) => {
      state.sortingOption = action.payload;
    })
    .addCase (getReviews, (state,action) => {
      state.reviews = action.payload;
    })

    .addCase (findTheOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase (requireAuthorization, (state,action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase (setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase (setLoadingStatus,(state,action) => {
      state.areOffersLoading = action.payload;
    });

});

export {reducer};


