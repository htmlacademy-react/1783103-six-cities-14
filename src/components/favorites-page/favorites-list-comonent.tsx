import { useMemo } from 'react';
import { OffersType } from '../../types/offers-types';
import { CITIES } from '../../utils/const';
import PlaceCardList from '../place-card/place-card-list';

type FavoritesListComponentProps = {
  offers:OffersType[];
  favoritesCity:CITIES;
}

function FavoritesListComponent({offers,favoritesCity}:FavoritesListComponentProps) {


  const offersByCity = useMemo(()=>offers.filter((item)=> item.city?.name === favoritesCity),[offers,favoritesCity]);

  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{favoritesCity}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">

        <PlaceCardList
          offers = {offersByCity}
          size = 'small'
        />

      </div>

    </li>
  );
}

export default FavoritesListComponent;
