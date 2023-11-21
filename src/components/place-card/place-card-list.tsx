import { OffersType } from '../../types/offers-types';
import PlaceCard from './place-card';

type PlaceCardListProps = {
    offers: OffersType[];
    onCardHover?: (offerId:OffersType['id']|null) => void;
    size: 'big' | 'small';
  }

function PlaceCardList({offers,onCardHover,size}:PlaceCardListProps){

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key ={offer.id}
          offer= {offer}
          onCardHover = {onCardHover}
          size = {size}
        />
      ))}
    </div>

  );
}
export default PlaceCardList;
