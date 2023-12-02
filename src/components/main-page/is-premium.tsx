import { OffersType } from '../../types/offers-types';

type PremiumProps = {
    offer: OffersType;
}

function PremiumOrNot({offer}:PremiumProps) {
  if (offer.isPremium === true) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  } else {
    return '';
  }
}

export default PremiumOrNot;
