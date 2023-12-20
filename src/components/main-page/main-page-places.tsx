import { useEffect, useState } from 'react';
import { useAppDispatch, } from '../../hooks';
import { OffersType } from '../../types/offers-types';
import PlaceCardList from '../place-card/place-card-list';
import SortComponent from './sort-component';
import { displayOffers } from '../../store/actions';
import { CITIES } from '../../utils/const';
import Map from '../map/map';

type MainPagePlacesProps = {
    placesCount:number;
    offersActiveCity:CITIES;
    offersByCity:OffersType[];

}

function MainPagePlaces ({placesCount,offersByCity,offersActiveCity}:MainPagePlacesProps) {


  const [hoveredOfferId, setHoveredOfferId] = useState <
  OffersType['id'] | null
  > (null);

  function handleCardHover(offerId:OffersType['id']|null){
    setHoveredOfferId(offerId);
  }

  const [sortedOffers, setSortedOffers] = useState <OffersType[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(displayOffers());
  }, [dispatch,offersActiveCity]);

  useEffect(() =>
    setSortedOffers (offersByCity)
  ,[offersByCity]);

  // const sortedOffers = useMemo(
  //   () => setSortedOffers(offersByCity)
  //   ,[offersByCity]);

  return(
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesCount} places to stay in {offersActiveCity}</b>
        <SortComponent
          sortedOffers = {sortedOffers}
          setSortedOffers = {setSortedOffers}
          defaultOffers = {offersByCity}
        />

        <PlaceCardList
          offers = {sortedOffers}
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
  );
}

export default MainPagePlaces;
