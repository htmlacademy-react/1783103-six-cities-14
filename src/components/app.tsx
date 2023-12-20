import MainPage from '../pages/mainPage/main-page';
import Login from '../pages/login/login';
import Favorites from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import NotFound from '../pages/not-found-page/not-found-page';
import { Route, Routes } from 'react-router-dom';
import { AppRoute} from '../utils/const';
import {HelmetProvider} from 'react-helmet-async';
import PrivateRoute from './routes/private-route/private-route';
import { useAppSelector } from '../hooks';
import LoadingScreen from '../pages/loading-screen/loading-page';
import HistoryRouter from './routes/history-route/history-route';
import browserHistory from '../browser-history';
import { getAuthCheckedStatus, getAuthorizationStatus } from '../store/user-actions/selectors';
import { getOffers, getOffersLoadingStatus } from '../store/cities-action/selectors';
import GuestRoute from './routes/guest-route';

function App() {

  const offersAll = useAppSelector(getOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const areOffersLoading = useAppSelector(getOffersLoadingStatus);

  if (!isAuthChecked || areOffersLoading) {
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
            element = {<MainPage offers ={offersAll}/>}
          />
          <Route
            path = {AppRoute.Login}
            element = {
              <GuestRoute
                authorizationStatus={authorizationStatus}
              >
                <Login/>
              </GuestRoute>
            }
          />
          <Route
            path = {AppRoute.Favorites}
            element = {
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <Favorites/>
              </PrivateRoute>
            }
          />
          <Route
            path = {AppRoute.Offer}
            element = {<Offer/>}
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
