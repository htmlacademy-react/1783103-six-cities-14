import { CITIES } from '../utils/const';

export type OffersCityLocation = {
    latitude: number;
    longitude: number;
    zoom: number;
  };

export type OffersCity = {
    location: OffersCityLocation;
    name: CITIES;
  };

export type OffersHost = {
    avatarUrl: string;
    id: string;
    isPro: boolean;
    name: string;
}


export type OffersType = {
    bedrooms: number;
    city: OffersCity;
    description: string;
    goods: string[];
    host: OffersHost;
    id: string;
    images: string[];
    isFavorite: boolean;
    isPremium: boolean;
    location: OffersCityLocation;
    maxAdults: number;
    previewImage: string;
    price: number;
    rating: number;
    title: string;
    type: string;
  };
