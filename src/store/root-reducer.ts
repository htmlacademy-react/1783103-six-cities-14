import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../utils/const';
import { fetchTheOfferAction } from './offers-action/offers-actions';
import { citiesAction } from './cities-action/cities-action';
import { userProcess } from './user-actions/user-actions';

export const rootReducer = combineReducers({
  [NameSpace.Cities]: citiesAction.reducer,
  [NameSpace.Offers]: fetchTheOfferAction.reducer,
  [NameSpace.User]: userProcess.reducer,
});

