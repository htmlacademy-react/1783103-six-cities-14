import MainPage from '../pages/mainPage/main-page';
import Login from '../pages/login/login';
import Favorites from '../pages/favorites/favorites';
import Offer from '../pages/offer/offer';
import NotFound from '../pages/not-found-page/not-found-page.tsx';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../utils/const.ts';
import PrivateRoute from './private-route/private-route.tsx';

type AppMainPageProps = {
    placesCount: number;
  }

function App({placesCount}:AppMainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Root}
          element = {<MainPage placesCount = {placesCount} />}
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
              authorizationStatus={AuthorizationStatus.NoAuth}
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
    </BrowserRouter>
  );
}

export default App;
