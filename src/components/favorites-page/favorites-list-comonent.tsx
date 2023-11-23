import { OffersType } from '../../types/offers-types';
import { CITIES } from '../../utils/const';
import PlaceCardList from '../place-card/place-card-list';

type FavoritesListComponentProps = {
  offers:OffersType[];
  favoritesCity:CITIES;
}

// function get getFavoritesByCity (favorites) {
//   return favorites.reduce<>
// }

function FavoritesListComponent({offers,favoritesCity}:FavoritesListComponentProps) {

  // const currentOffers = useAppSelector((state) => state.offers);
  const offersByCity = offers.filter((item)=> item.city?.name === favoritesCity);


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
