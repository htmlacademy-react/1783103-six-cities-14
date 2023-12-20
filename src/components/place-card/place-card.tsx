/* eslint-disable react-refresh/only-export-components */
import { Link, } from 'react-router-dom';
import { AppRoute, } from '../../utils/const';
import { OffersType } from '../../types/offers-types';
import PremiumOrNot from '../main-page/is-premium';
import Bookmark from '../bookmark';
import { memo } from 'react';

type CardImageSize = 'small' |'big';

type PlaceCardProps = {
  offer: OffersType;
  size?: CardImageSize ;
  onCardHover?: (offerId:OffersType['id']|null) => void;
}

const sizeMap:Record<CardImageSize, {width:string;height:string}> = {
  small:{width:'150', height:'110'},
  big: {width:'260', height:'200'}
};


function PlaceCard({offer, onCardHover, size = 'big'}:PlaceCardProps) {

  const {id, price, title, type, previewImage, isFavorite } = offer;

  const totalRating = 5;
  const rate = `${Math.round ((totalRating - offer.rating) / totalRating * 100) }%`;

  function handleMouseEnter(){
    onCardHover?.(id);
  }

  function handleMouseLeave(){
    onCardHover?.(null);
  }

  function replaceOfferParams() {
    return `${AppRoute.Offer.replace(':offerId',id)}`;
  }

  return (

    <article
      key = {id}
      className="cities__card place-card"
      onMouseEnter ={handleMouseEnter}
      onMouseLeave ={handleMouseLeave}
    >

      <PremiumOrNot
        offer = {offer}
      />
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to= {replaceOfferParams()}>
          <img
            className="place-card__image"
            src={previewImage}
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
          <Bookmark
            bookmarkBlock="place-card"
            offer ={offer}
            isFavorite = {isFavorite}
            size = 'small'
          />

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rate}` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to= {replaceOfferParams()}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );

}

export default memo(PlaceCard);
