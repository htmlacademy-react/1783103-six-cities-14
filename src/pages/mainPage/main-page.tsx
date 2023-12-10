import SortComponent from '../../components/main-page/sort-component';
import {OffersType} from '../../types/offers-types';
import PlaceCardList from '../../components/place-card/place-card-list';
import CitiesList from '../../components/main-page/cities-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Map from '../../components/map/map';
import { useState,useEffect} from 'react';
import { displayOffers } from '../../store/actions';
import PageHeader from '../../components/main-page/header/header';
import { getActiveCity, getSortedOffers } from '../../store/cities-action/selectors';


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

  const sortedOffers = useAppSelector(getSortedOffers);
  const offersActiveCity = useAppSelector(getActiveCity);
  const offersByCity = sortedOffers.filter((item)=> item.city?.name === offersActiveCity);


  const placesCount = offersByCity.length;

  // if (placesCount === 0) {
  //   console.log ('Need to add "Если предложения отсутствуют, то в списке отображается надпись «No places to stay available», а вместо карты отображается статичное изображение. См. пример соответствующей страницы макета."') ;
  // }


  return (
    <div className="page page--gray page--main">
      <PageHeader/>

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

