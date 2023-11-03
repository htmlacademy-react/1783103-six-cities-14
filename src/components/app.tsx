import MainPage from '../pages/mainPage/main-page';
import Login from '../pages/login/login';
import Favorites from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import NotFound from '../pages/not-found-page/not-found-page';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../utils/const';
import {HelmetProvider} from 'react-helmet-async';
import PrivateRoute from './private-route/private-route';
import { OffersType } from '../types/offers-types';
import { ReviewType } from '../types/reviews-types'; 

type AppMainPageProps = {
    placesCount: number;
    offers: OffersType[];
    reviews: ReviewType[];
  }

function App({placesCount,offers,reviews}:AppMainPageProps) {


  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path = {AppRoute.Root}
            element = {<MainPage placesCount = {placesCount} offers = {offers} />}
          />
          <Route
            path = {AppRoute.Login}
            element = {
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <Login/>
              </PrivateRoute>
            }
          />
          <Route
            path = {AppRoute.Favorites}
            element = {
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <Favorites offers = {offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path = {AppRoute.Offer}
            element = {<Offer offers = {offers} reviews = {reviews} />}
          />
          <Route
            path = '*'
            element = {<NotFound/>}
          />
        </Routes>
      </BrowserRouter>

    </HelmetProvider>
  );
}

export default App;
