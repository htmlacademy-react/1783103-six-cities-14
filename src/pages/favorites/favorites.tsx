import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import { Helmet } from 'react-helmet-async';
import FavoritesListComponent from '../../components/favorites-page/favorites-list-comonent';
import {useAppSelector } from '../../hooks';
import PageHeader from '../../components/main-page/header/header';
import { getFavoriteOffers } from '../../store/cities-action/selectors';
import FavoritesEmpty from '../../components/favorites-page/favorites-empty';

function Favorites() {

  const favorites = useAppSelector(getFavoriteOffers);

  const favoritesCity = favorites.map((favoriteCity) => (
    favoriteCity.city.name
  ));

  function removeDuplicates() {
    return favoritesCity.filter((item,index) => favoritesCity.indexOf(item) === index);
  }
  const favoritesCities = (removeDuplicates());

  return (

    <div className="page">
      <Helmet>
        <title>6 cities. Favorites</title>
      </Helmet>
      <PageHeader/>
      {favorites.length !== 0 ? (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favoritesCities.map((favoriteCity) => (
                  <FavoritesListComponent
                    key = {favoriteCity}
                    offers= {favorites}
                    favoritesCity= {favoriteCity}
                  />
                ))}

              </ul>
            </section>
          </div>
        </main>
      ) : (
        <FavoritesEmpty/>
      )}
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
