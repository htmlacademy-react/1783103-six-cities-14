import {createAction} from '@reduxjs/toolkit';
import { CITIES, SortOptions } from '../utils/const';
import { OffersType } from '../types/offers-types';

export const displayOffers = createAction('cities/displayOffers');

export const setActiveCity = createAction <CITIES>('cities/changeCities');

export const setActiveSortOption = createAction <SortOptions>('cities/setActiveSortOption');

export const findTheOffer = createAction <OffersType['id']> ('cities/findTheOffer');

export const getFavoriteOffers = createAction <void>('cities/getFavoriteOffers');

export const getNearbyOffers = createAction <OffersType['id']> ('cities/getNearbyOffers');

export const getSortedOffers = createAction <OffersType[]> ('cities/getSortedOffers');

export const getSortingOption = createAction <SortOptions>('cities/getSortingOption');

export const getReviews = createAction ('cities/getReviews');
