import {OffersType} from '../../types/offers-types';

type OfferGoodsArrayProps = {
    currentOffer: OffersType;
  }

function OfferGoodsArray(props:OfferGoodsArrayProps): JSX.Element {
  const {currentOffer} = props;
  const offerGoods = currentOffer.goods;

  return(
    <>
      {offerGoods.map((offerGood) => (
        <li key = {currentOffer.id} className="offer__inside-item">{offerGood}</li>
      ))}
    </>
  );
}

export default OfferGoodsArray;
