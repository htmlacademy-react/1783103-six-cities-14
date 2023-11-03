import {OffersType} from '../../types/offers-types';

type OfferImageArrayProps = {
  currentOffer: OffersType;
}

function OfferImageArray({currentOffer: {id,images : offerImages}}:OfferImageArrayProps) {

  return(
    <>
      {offerImages.map((offerImage) => (
        <div key = {id} className = "offer__image-wrapper">
          <img
            className="offer__image"
            src={offerImage}
            alt="Photo studio"
          />
        </div>
      ))}
    </>
  );
}

export default OfferImageArray;
