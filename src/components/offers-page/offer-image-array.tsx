import {OffersType} from '../../types/offers-types';

type OfferImageArrayProps = {
  currentOffer: OffersType;
}

function OfferImageArray({currentOffer: {images : offerImages}}:OfferImageArrayProps) {

  return(
    <>
      {offerImages.slice(0,6).map((offerImage) => (
        <div key = {offerImage} className = "offer__image-wrapper">
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
