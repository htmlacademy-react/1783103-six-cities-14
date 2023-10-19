import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { SETTINGS } from './utils/const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placesCount = {SETTINGS.PlacesCount}
    />
  </React.StrictMode>
);
