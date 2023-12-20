import {OffersType} from '../../types/offers-types';

type OfferGoodsArrayProps = {
    currentOffer: OffersType;
  }

function OfferGoodsArray({ currentOffer: {goods: offerGoods } }:OfferGoodsArrayProps){

  return(
    <ul className="offer__inside-list">
      {offerGoods.map((offerGood) => (
        <li key = {offerGood} className="offer__inside-item">{offerGood}</li>
      ))}
    </ul>
  );
}

export default OfferGoodsArray;
