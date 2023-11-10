import { Fragment, useState } from 'react';
import { OffersType } from '../types/offers-types';
import PlaceCard from './place-card/place-card';
import Map from './map/map';
import { CITIES } from '../utils/const';
// import { useContext } from 'react';
// import HandleHover from '../components/hover-context';
// import { useHover } from '../components/hover-context';


type PlaceCardListProps = {
    placesCount: number;
    offers: OffersType[];
  }

function PlaceCardList({offers,placesCount}:PlaceCardListProps){

  const [hoveredOfferId, setHoveredOfferId] = useState <
  OffersType['id'] | null
  > (null);

  function handleCardHover(offerId:OffersType['id']|null){
    setHoveredOfferId(offerId);
  }

  const activeCity = CITIES.Amsterdam;
  // const handleCardHover = useContext(HoverHandlerContext);
  // const handleCardHover = useHover();
  // console.log(handleCardHover)

  return (
    <Fragment>

      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesCount} places to stay in {activeCity}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
              Popular
                <svg className="places__sorting-arrow" width={7} height={4}>
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex={0}
                >
                  Popular
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: low to high
                </li>
                <li className="places__option" tabIndex={0}>
                  Price: high to low
                </li>
                <li className="places__option" tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              {offers.map((offer) => (
                <PlaceCard
                  key ={offer.id}
                  offer= {offer}
                  onCardHover = {handleCardHover}
                />

              ))}
            </div>

          </section>
          <div className="cities__right-section">
            <Map
              block='cities'
              key ={hoveredOfferId}
              offers = {offers}
              currentCityId = {hoveredOfferId}
            />
          </div>
        </div>
      </div>

    </Fragment>

  );
}
export default PlaceCardList;
