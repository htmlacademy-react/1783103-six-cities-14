import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { SETTINGS } from './utils/const';

import { offers } from './mocks/offers-mocks';
import { reviews } from './mocks/review-mocks';

import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        placesCount = {SETTINGS.PlacesCount}
        offers = {offers}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>
);
