import { OffersType } from '../../types/offers-types';
import { ReviewType } from '../../types/reviews-types';
import { State } from '../../types/state';
import { NameSpace } from '../../utils/const';

export const getTheOffer = (state: State): OffersType => state[NameSpace.Offers].offer;
export const getTheOfferLoadingStatus = (state: State): boolean => state[NameSpace.Offers].areOffersLoading;
export const getNearbyOffers = (state:State): OffersType[] => state[NameSpace.Offers].nearByOffers;
export const getReviews = (state: State): ReviewType[] => state[NameSpace.Offers].reviews;
export const postReview = (state:State):ReviewType[] => state[NameSpace.Offers].reviews;
