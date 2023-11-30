import Logo from '../../components/main-page/logo/logo';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import { Helmet } from 'react-helmet-async';
import FavoritesListComponent from '../../components/favorites-page/favorites-list-comonent';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
// import { getFavoriteOffers } from '../../store/actions';
import { fetchFavorites } from '../../store/api-actions';
import { OffersType } from '../../types/offers-types';

// children: ReactNode; add this type?

type FavoritesProps = {
  offers: OffersType[];
}

function Favorites({offers}: FavoritesProps) {


  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavorites(offers));
  }, [offers,dispatch]);

  const favorites = useAppSelector((state) =>state.favorites);
  // console.log(favorites)
  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Favorites</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                    Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favorites.map((offer) => (
                <FavoritesListComponent
                  key = {offer.id}
                  offers= {favorites}
                  favoritesCity = {offer.city.name}
                />
              ))}

            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
