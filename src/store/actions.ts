import {createAction} from '@reduxjs/toolkit';
import { AppRoute, CITIES, SortOptions } from '../utils/const';
import { OffersType } from '../types/offers-types';
import { ReviewType } from '../types/reviews-types';

export const displayOffers = createAction('cities/displayOffers');

export const setActiveCity = createAction <CITIES>('cities/changeCities');

export const getSortedOffersAction = createAction <OffersType[]> ('cities/getSortedOffers');

export const getSortingOptionAction = createAction <SortOptions>('cities/getSortingOption');

export const getReviews = createAction<ReviewType[]> ('offers/getReviews');

export const setError = createAction <string | null> ('cities/setError');

export const redirectToRoute = createAction<AppRoute>('cities/redirectToRoute');

export const setUser = createAction <string> ('user/userName');
