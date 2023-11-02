import {OffersType} from '../../types/offers-types';

type OfferImageArrayProps = {
  currentOffer: OffersType;
}

function OfferImageArray(props:OfferImageArrayProps): JSX.Element {
  const {currentOffer} = props;
  const offerImages = currentOffer.images;

  return(
    <>
      {offerImages.map((offerImage) => (
        <div key = {currentOffer.id} className = "offer__image-wrapper">
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
