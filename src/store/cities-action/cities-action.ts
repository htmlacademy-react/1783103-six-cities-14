import {createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES, NameSpace, SortOptions } from '../../utils/const';

import { CitiesAction } from '../../types/state';
import { fetchFavorites, fetchOffersAction,changeToFavorites } from '../api-api-actions';
import { getSortedOffersAction, getSortingOptionAction, setActiveCity } from '../actions';


const initialState: CitiesAction = {
  areOffersLoading: false,
  offers: [],
  activeCity: CITIES.Paris,
  filteredOffers:[],
  sortedOffers:[],
  sortingOption: SortOptions.Popular,
  favorites: [],
  authorizationStatus: AuthorizationStatus.Unknown,

};

export const citiesAction = createSlice({
  name: NameSpace.Cities,
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase (fetchOffersAction.pending, (state) => {
        state.areOffersLoading = true;
      })
      .addCase (fetchOffersAction.fulfilled, (state,action) => {
        state.offers = action.payload;
        state.filteredOffers = state.offers.filter((item)=> item.city?.name === state.activeCity);
        state.sortingOption = SortOptions.Popular;
        state.sortedOffers = action.payload;
        state.areOffersLoading = false;
      })

      .addCase (setActiveCity, (state,action) => {
        state.activeCity = action.payload;
      })
      .addCase (getSortedOffersAction, (state, action) => {
        state.sortedOffers = action.payload;
      })
      .addCase (getSortingOptionAction, (state,action) => {
        state.sortingOption = action.payload;
      })
      .addCase (changeToFavorites.fulfilled, (state,action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        // state.favorites = action.payload;
        state.favorites.push(action.payload);
      })
      .addCase (fetchFavorites.fulfilled, (state,action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        // console.log(action.payload)
        state.favorites = action.payload;
      })
      .addCase (fetchFavorites.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
