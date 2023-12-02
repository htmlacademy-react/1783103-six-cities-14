import {createAction} from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus, CITIES, SortOptions } from '../utils/const';
import { OffersType } from '../types/offers-types';
import { ReviewType } from '../types/reviews-types';

export const displayOffers = createAction('cities/displayOffers');

export const setActiveCity = createAction <CITIES>('cities/changeCities');

export const setActiveSortOption = createAction <SortOptions>('cities/setActiveSortOption');

export const getFavoriteOffers = createAction <OffersType[]>('cities/getFavoriteOffers');

export const getNearbyOffers = createAction <OffersType[]> ('cities/getNearbyOffers');

export const getSortedOffers = createAction <OffersType[]> ('cities/getSortedOffers');

export const getSortingOption = createAction <SortOptions>('cities/getSortingOption');

export const getReviews = createAction<ReviewType[]> ('cities/getReviews');

export const loadOffers = createAction <OffersType[]> ('cities/loadOffers');

export const findTheOffer = createAction <OffersType> ('cities/findTheOffer');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction <string | null> ('cities/setError');

export const setLoadingStatus = createAction<boolean> ('cities/setLoadingStatus');

export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');

export const setUser = createAction <string> ('user/userName');

