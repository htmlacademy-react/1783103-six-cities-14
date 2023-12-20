import { Navigate, useParams} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { OffersHost} from '../../types/offers-types';
import OfferImageArray from '../../components/offers-page/offer-image-array';
import OfferGoodsArray from '../../components/offers-page/offer-goods-array';
import { AppRoute } from '../../utils/const';
import ReviewsSection from '../../components/offers-page/review-section';
import Map from '../../components/map/map';
import PlaceCardList from '../../components/place-card/place-card-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import PageHeader from '../../components/main-page/header/header';
import { getNearbyOffers, getTheOffer } from '../../store/offers-action/selectors';
import { fetchNearbyOffers, fetchTheOffer } from '../../store/api-actions';
import Bookmark from '../../components/bookmark';
import { useEffect } from 'react';

function Offer(){

  const dispatch = useAppDispatch();
  const {offerId} = useParams();

  const currentOffer = useAppSelector (getTheOffer);
  const nearByOffers = useAppSelector (getNearbyOffers);
  const displayedNearByOffers = nearByOffers.slice(0,3);
  const displayedOnMapOffers = displayedNearByOffers.concat(currentOffer);


  useEffect (() => {
    if (offerId) {
      dispatch(fetchTheOffer(offerId));
      dispatch (fetchNearbyOffers(offerId));
    }
  },[dispatch,offerId]);

  if (!currentOffer && !null) {
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
                <Bookmark
                  offer ={currentOffer}
                  isFavorite = {currentOffer.isFavorite}
                  size = 'big'
                  bookmarkBlock = 'offer'
                />
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
                  {currentOffer.bedrooms}
                  {currentOffer.bedrooms === 1 ? (
                    ' Bedroom'
                  ) : (
                    ' Bedrooms')}
                </li>
                <li className="offer__feature offer__feature--adults">
              Max {currentOffer.maxAdults}
                  {currentOffer.maxAdults === 1 ? (
                    ' adult'
                  ) : (
                    ' adults')}
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
            offers= {displayedOnMapOffers}
            block="offer"
            key ={currentOffer.id}
            currentCityId = {currentOffer.id}
          />

        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
          Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <PlaceCardList
                offers= {displayedNearByOffers}
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
