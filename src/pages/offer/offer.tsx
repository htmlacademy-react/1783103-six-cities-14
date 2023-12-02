import { Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {OffersType } from '../../types/offers-types';
import { OffersHost } from '../../types/offers-types';
import OfferImageArray from '../../components/offers-page/offer-image-array';
import OfferGoodsArray from '../../components/offers-page/offer-goods-array';
import { AppRoute } from '../../utils/const';
import ReviewsSection from '../../components/offers-page/review-section';
import Map from '../../components/map/map';
import { useEffect, useState } from 'react';
import PlaceCardList from '../../components/place-card/place-card-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchNearbyOffers, fetchTheOffer } from '../../store/api-actions';
import PageHeader from '../../components/main-page/header/header';


function Offer(){

  const [hoveredOfferId, setHoveredOfferId] = useState <
  OffersType['id'] | null
  > (null);
  function handleCardHover(offerId:OffersType['id']|null){
    setHoveredOfferId(offerId);
  }

  const {offerId} = useParams();

  const dispatch = useAppDispatch();

  useEffect (() => {
    if (offerId !== undefined) {
      dispatch(fetchTheOffer(offerId));
      dispatch (fetchNearbyOffers(offerId));
    }
  },[dispatch,offerId]);

  const currentOffer = useAppSelector ((state) => state.offer);
  const nearByOffers = useAppSelector ((state) => state.nearbyOffers);
  // fix the issue with navigating to the notfound page first
  // const {areOffersLoading} = useAppSelector((state) => state)
  // console.log( areOffersLoading)
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

      <PageHeader/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <OfferImageArray
                currentOffer={currentOffer}
              />
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

                <OfferGoodsArray
                  currentOffer = {currentOffer}
                />
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
              <ReviewsSection/>
            </div>
          </div>
          <Map
            offers= {nearByOffers}
            block="offer"
            key ={hoveredOfferId}
            currentCityId = {hoveredOfferId}
          />

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
          Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <PlaceCardList
                offers= {nearByOffers}
                onCardHover = {handleCardHover}
                size = 'small'
              />

            </div>
          </section>
        </div>
      </main>
    </div>

  );
}

export default Offer;
