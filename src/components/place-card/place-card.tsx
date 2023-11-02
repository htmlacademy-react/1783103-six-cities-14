import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import { OffersType } from '../../types/offers-types';

type CardImageSize = 'small' |'big';

type PlaceCardProps = {
  offer: OffersType;
  size?: CardImageSize ;

}

const sizeMap:Record<CardImageSize, {width:string;height:string}> = {
  small:{width:'150', height:'110'},
  big: {width:'260', height:'200'}
};


function PlaceCard(props:PlaceCardProps):JSX.Element {

  const {offer, onCardHover, size = 'big'} = props;
  const totalRating = 5;


  const rate = `${Math.round ((totalRating - offer.rating) / totalRating * 100) }%`;

  function premiumOrNot() {
    if (offer.isPremium === true) {
      return 'Premium';
    } else {
      return 'NOTPremium';
    }
  }
  // const [isActive, setIsActive] = useState();
  // const {isPremium, id, images, price, isFavorite, rating, title, type } = offer;
  const {id, price, title, type } = offer;

  function handleMouseEnter(){
    onCardHover?.(id);
  }

  function handleMouseLeave(){
    onCardHover?.(null);
  }

  return (

    <article
      key = {id}
      className="cities__card place-card"
      onMouseEnter ={handleMouseEnter}
      onMouseLeave ={handleMouseLeave}
    >

      <div className="place-card__mark">
        <span>{premiumOrNot()}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to= {`${AppRoute.Offer.replace(':offerId',id)}`}>
          <img
            className="place-card__image"
            src="img/apartment-01.jpg"
            alt={title}
            {...sizeMap[size]}
          />
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rate}` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to= {`${AppRoute.Offer.replace(':offerId',id)}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );

}

export default PlaceCard;
