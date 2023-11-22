import {createReducer} from '@reduxjs/toolkit';
import { CITIES, SortOptions } from '../utils/const';
import { displayOffers, setActiveCity,
  getFavoriteOffers, getNearbyOffers,getSortedOffers, getSortingOption, getReviews } from './actions';
import { OffersType } from '../types/offers-types';
import { offers } from '../mocks/offers-mocks';
import { reviews } from '../mocks/review-mocks';
import { ReviewType } from '../types/reviews-types';


const initialState : {
  activeCity: CITIES;
  offers: OffersType[];
  filteredOffers:OffersType[];
  offer: OffersType;
  favorites: OffersType[];
  nearbyOffers:OffersType[];
  sortedOffers:OffersType[];
  sortingOption: SortOptions;
  reviews: ReviewType[];

} = {
  activeCity:CITIES.Paris,
  filteredOffers:offers,
  offers,
  offer:offers[0],
  favorites: [],
  nearbyOffers:[],
  sortedOffers:offers,
  sortingOption: SortOptions.PriceDown,
  reviews,

};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase (displayOffers, (state) => {
      state.offers = offers;
      // state.filteredOffers = offers.filter((item)=> item.city?.name === state.activeCity);
      // is it even necessary to have the filteredOffers anymore?
      state.sortingOption = SortOptions.Popular;
    })
    .addCase (setActiveCity, (state,action) => {
      state.activeCity = action.payload;
      state.filteredOffers = offers.filter((item)=> item.city?.name === action.payload);
    })

    .addCase (getFavoriteOffers, (state) => {
      state.favorites = state.offers.filter((offer)=> offer.isFavorite === true);
    })
    .addCase (getNearbyOffers, (state, action) => {
      state.nearbyOffers = state.offers.filter((offer) => offer.id !== action.payload);
    })
    .addCase (getSortedOffers, (state, action) => {
      state.sortedOffers = action.payload;

    })
    .addCase (getSortingOption, (state,action) => {
      state.sortingOption = action.payload;
    })
    .addCase (getReviews, (state) => {
      state.reviews = reviews;
    });

});

export {reducer};
