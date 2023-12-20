import { ReviewData } from './auth-data-type';

export type ReviewType = {
    comment: string;
    date: string;
    id: string;
    rating: number;
    user: ReviewUserType;
  };

export type ReviewUserType = {
    avatarUrl: string;
    id: string;
    isPro: boolean;
    name: string;
  };

export type ReviewApiThing = {
    offerId:string | undefined;
    review: ReviewData;
}
