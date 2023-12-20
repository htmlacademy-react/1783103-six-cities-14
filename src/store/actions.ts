import {createAction} from '@reduxjs/toolkit';
import { AppRoute, CITIES, } from '../utils/const';
import { ReviewType } from '../types/reviews-types';

export const displayOffers = createAction('cities/displayOffers');

export const setActiveCity = createAction <CITIES>('cities/changeCities');

export const getReviews = createAction<ReviewType[]> ('offers/getReviews');

export const setError = createAction <string | null> ('cities/setError');

export const redirectToRoute = createAction<AppRoute>('cities/redirectToRoute');

