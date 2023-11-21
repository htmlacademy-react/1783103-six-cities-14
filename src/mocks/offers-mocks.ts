import { OffersType } from '../types/offers-types';
import { CITIES } from '../utils/const';

const AVATAR_URL = 'https://i.pravatar.cc/128';
const IMAGE_URL = 'https://picsum.photos/200';


export const offers: OffersType[] = [
  {
  //* Amsterdam object//
    bedrooms: 7,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
      },
      name: CITIES.Amsterdam
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
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
    id: crypto.randomUUID(),
    images: [
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    maxAdults: 4,
    previewImage: 'img/1.png',
    price: 20,
    rating: 3.3,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment'
  },


  //* Brussels object//
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 10
      },
      name: CITIES.Amsterdam
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels.',
    goods: [
      'Heating',
      'Wi-Fi',
      'Washing machine',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
      'Fridge',
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: crypto.randomUUID(),
      isPro: true,
      name: 'Angelina'
    },
    id: crypto.randomUUID(),
    images: [
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/1.png',
    price: 120,
    rating: 4,
    title: 'Not so beautiful & not really a luxurious house at mediocre location',
    type: 'House'
  },


  //* Cologne object//
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 10
      },
      name: CITIES.Cologne
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Cologne.',
    goods: [
      'Heating',
      'Fridge',
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: crypto.randomUUID(),
      isPro: true,
      name: 'Angelina'
    },
    id: crypto.randomUUID(),
    images: [
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/1.png',
    price: 420,
    rating: 2.8,
    title: 'Beautiful & luxurious studio at a squatted house',
    type: 'Room'
  },


  //* Paris object//
  {
    bedrooms: 3,
    city: {
      location: {
        latitude:52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 10
      },
      name: CITIES.Paris
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.',
    goods: [
      'Heating',
      'Wi-Fi',
      'Towels',
      'Heating',
      'Coffee machine',
      'Kitchen',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: crypto.randomUUID(),
      isPro: true,
      name: 'Angelina'
    },
    id: crypto.randomUUID(),
    images: [
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`,
      `${IMAGE_URL}?rnd=${Math.random()}`
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude:52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/1.png',
    price: 220,
    rating: 1.8,
    title: 'pretty good apartment',
    type: 'Hotel'
  }
];
