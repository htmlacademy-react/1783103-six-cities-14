import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import SortComponent from '../../components/main-page/sort-component';
import {OffersType} from '../../types/offers-types';
import PlaceCardList from '../../components/place-card/place-card-list';
import CitiesList from '../../components/main-page/cities-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Map from '../../components/map/map';
import { useState,useEffect} from 'react';
import { displayOffers } from '../../store/actions';
import { logoutAction } from '../../store/api-actions';


function MainPage() {


  const [hoveredOfferId, setHoveredOfferId] = useState <
  OffersType['id'] | null
  > (null);

  function handleCardHover(offerId:OffersType['id']|null){
    setHoveredOfferId(offerId);
  }

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(displayOffers());
  }, [dispatch]);

  const sortedOffers = useAppSelector((state) =>state.sortedOffers);
  const offersActiveCity = useAppSelector((state) =>state.activeCity);
  const offersByCity = sortedOffers.filter((item)=> item.city?.name === offersActiveCity);


  const placesCount = offersByCity.length;

  // if (placesCount === 0) {
  //   console.log ('Need to add "Если предложения отсутствуют, то в списке отображается надпись «No places to stay available», а вместо карты отображается статичное изображение. См. пример соответствующей страницы макета."') ;
  // }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                    Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    className="header__nav-link"
                    onClick={(evt) => {
                      evt.preventDefault();
                      dispatch(logoutAction());
                    }}
                    to='/'
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CitiesList/>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in {offersActiveCity}</b>
              <SortComponent/>

              <PlaceCardList
                offers = {offersByCity}
                onCardHover = {handleCardHover}
                size = 'big'
              />
            </section>
            <div className="cities__right-section">
              <Map
                block='cities'
                key ={hoveredOfferId}
                currentCityId = {hoveredOfferId}
                offers = {offersByCity}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;

