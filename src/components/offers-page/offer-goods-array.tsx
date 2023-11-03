import {OffersType} from '../../types/offers-types';

type OfferGoodsArrayProps = {
    currentOffer: OffersType;
  }

function OfferGoodsArray({ currentOffer: { id, goods: offerGoods } }:OfferGoodsArrayProps){

  return(
    <ul className="offer__inside-list">
      {offerGoods.map((offerGood) => (
        <li key = {id} className="offer__inside-item">{offerGood}</li>
      ))}
    </ul>
  );
}

export default OfferGoodsArray;
