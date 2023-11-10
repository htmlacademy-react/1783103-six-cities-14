import Logo from '../../components/logo/logo';
import { Navigate, useParams } from 'react-router-dom';
import PlaceCard from '../../components/place-card/place-card';
import { Helmet } from 'react-helmet-async';
import {OffersType } from '../../types/offers-types';
import { OffersHost } from '../../types/offers-types';
import OfferImageArray from '../../components/offers-page/offer-image-array';
import OfferGoodsArray from '../../components/offers-page/offer-goods-array';
import { AppRoute } from '../../utils/const';
import ReviewsSection from '../../components/offers-page/review-section';
import { ReviewType } from '../../types/reviews-types';
import Map from '../../components/map/map';
import { useState } from 'react';

type OfferPageProps = {
  offers: OffersType[];
  reviews: ReviewType[];
}


function Offer({offers,reviews}:OfferPageProps){

  const {offerIdParams} = useParams();

  const [hoveredOfferId, setHoveredOfferId] = useState <
  OffersType['id'] | null
  > (null);

  function handleCardHover(offerId:OffersType['id']|null){
    setHoveredOfferId(offerId);
  }

  const currentOffer = offers.find((item) => item.id === offerIdParams);

  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound}/>;
  }

  const totalRating = 5;
  const rate = `${Math.round ((totalRating - currentOffer.rating) / totalRating * 100) }%`;
  const ratingValue = `${Math.round ((totalRating - currentOffer.rating)) }`;

  const hostInfo:OffersHost = currentOffer.host;

  function prorNot() {
    if (hostInfo.isPro === true) {
      return 'Pro';
    } else {
      return 'Not even close to being a pro';
    }
  }


  return(
    <div className="page">
      <Helmet>
        <title>6 cities. Offers</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {OfferImageArray({currentOffer})}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.description}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${rate}`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{ratingValue}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{currentOffer.type}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
              Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What`&#39;`s inside</h2>
                {OfferGoodsArray({currentOffer})}
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src= {hostInfo.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{hostInfo.name}</span>
                  <span className="offer__user-status">{prorNot()}</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <ReviewsSection
                reviews = {reviews}
              />
            </div>
          </div>
          <Map
            block="offer"
            key ={hoveredOfferId}
            offers = {offers}
            currentCityId = {hoveredOfferId}
          />

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
          Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {offers.map((offer) => (
                <PlaceCard
                  key ={offer.id}
                  offer= {offer}
                  size = 'big'
                  onCardHover = {handleCardHover}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>

  );
}

export default Offer;
