import MainPage from '../pages/mainPage/main-page';
import Login from '../pages/login/login';
import Favorites from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import NotFound from '../pages/not-found-page/not-found-page';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../utils/const';
import {HelmetProvider} from 'react-helmet-async';
import PrivateRoute from './private-route/private-route';
import { useAppSelector } from '../hooks';
import LoadingScreen from '../pages/loading-screen/loading-page';
import HistoryRouter from './history-route/history-route';
import browserHistory from '../browser-history';

function App() {

  const offersAll = useAppSelector((state) => state.offers);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const areOffersLoading = useAppSelector((state) => state.areOffersLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || areOffersLoading) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history ={browserHistory}>
        <Routes>
          <Route
            path = {AppRoute.Root}
            element = {<MainPage />}
          />
          <Route
            path = {AppRoute.Login}
            element = {
              <Login/>
            }
          />
          <Route
            path = {AppRoute.Favorites}
            element = {
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <Favorites offers = {offersAll}/>
              </PrivateRoute>
            }
          />
          <Route
            path = {AppRoute.Offer}
            element = {<Offer />} //reviews = {reviews}
          />
          <Route
            path = '*'
            element = {<NotFound/>}
          />
        </Routes>
      </HistoryRouter>

    </HelmetProvider>
  );
}

export default App;
