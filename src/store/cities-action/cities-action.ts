import {createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, CITIES, NameSpace } from '../../utils/const';

import { CitiesAction } from '../../types/state';

import { setActiveCity } from '../actions';
import { OffersType } from '../../types/offers-types';
import { changeToFavorites, fetchFavorites, fetchOffersAction } from '../api-api-actions';


const initialState: CitiesAction = {
  areOffersLoading: false,
  offers: [],
  activeCity: CITIES.Paris,
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
        state.areOffersLoading = false;
      })
      .addCase (setActiveCity, (state,action) => {
        state.activeCity = action.payload;
      })
      .addCase (changeToFavorites.fulfilled, (state,action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;

        if(action.payload.isFavorite === true){
          state.favorites.push(action.payload);
        } else {
          const removedElement = state.favorites.indexOf(action.payload);
          state.favorites.splice(removedElement,1);
        }
        const updatedOffers:OffersType[] = [];
        state.offers.forEach((item) => {
          if(item.id === action.payload.id) {
            item.isFavorite = action.payload.isFavorite;
          }
          updatedOffers.push(item);

        });
        state.offers = updatedOffers;
      })
      .addCase (fetchFavorites.fulfilled, (state,action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.favorites = action.payload;
      })
      .addCase (fetchFavorites.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
