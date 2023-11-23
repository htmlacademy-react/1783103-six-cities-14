import { OffersType } from '../types/offers-types';
import { CITIES } from '../utils/const';

const AVATAR_URL = 'https://i.pravatar.cc/128';
const IMAGE_URL = 'https://picsum.photos/200';


export const offers: OffersType[] = [
  {
    //* Amsterdam object//
    id: crypto.randomUUID(),
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    price: 20,
    city: {
      name: CITIES.Amsterdam,
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 10
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 7,
    goods: [
      'Heating',
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: crypto.randomUUID(),
      isPro: false,
      name: 'Chris'
    },
    images: [
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
    ],
    maxAdults: 4,
    previewImage: 'img/1.png',
  },


  //* Brussels object//
  {
    id: crypto.randomUUID(),
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    price: 100,
    city: {
      name: CITIES.Cologne,
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 1,
    goods: [
      'Heating',
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: crypto.randomUUID(),
      isPro: false,
      name: 'Chris'
    },
    images: [
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
    ],
    maxAdults: 4,
    previewImage: 'img/1.png',
  },


  //* Cologne object//
  {
    id: crypto.randomUUID(),
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    price: 2220,
    city: {
      name: CITIES.Amsterdam,
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 7,
    goods: [
      'Heating',
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: crypto.randomUUID(),
      isPro: false,
      name: 'Chris'
    },
    images: [
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
    ],
    maxAdults: 4,
    previewImage: 'img/1.png',
  },


  //* Paris object//
  {
    id: crypto.randomUUID(),
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    price: 22,
    city: {
      name: CITIES.Paris,
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 17,
    goods: [
      'Heating',
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: crypto.randomUUID(),
      isPro: false,
      name: 'Chris'
    },
    images: [
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
    ],
    maxAdults: 4,
    previewImage: 'img/1.png',
  },
];
