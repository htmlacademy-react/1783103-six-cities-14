import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/const';
import { fetchNearbyOffers, fetchTheOffer, postReviews } from '../api-api-actions';
import { FetchTheOfferAction } from '../../types/state';
import { getReviews } from '../actions';


const initialState: FetchTheOfferAction = {
  areOffersLoading: false,
  offer: null,
  nearByOffers: [],
  reviews: [],
  review: undefined,
  hasError: false,
};


export const fetchTheOfferAction = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase (fetchTheOffer.pending, (state) => {
        state.areOffersLoading = true;
      })
      .addCase (fetchTheOffer.fulfilled, (state,action) => {
        state.areOffersLoading = false;
        state.offer = action.payload;
      })
      .addCase (fetchNearbyOffers.pending, (state) => {
        state.areOffersLoading = true;
      })
      .addCase (fetchNearbyOffers.fulfilled, (state, action) => {
        state.areOffersLoading = false;
        state.nearByOffers = action.payload;
      })
      .addCase (getReviews, (state,action) => {
        state.reviews = action.payload;
      })
      .addCase (postReviews.pending, (state) => {
        state.areOffersLoading = true;
      })
      .addCase (postReviews.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase (postReviews.rejected, (state) => {
        state.hasError = true;
      });
  }
});
