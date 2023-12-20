import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch,State } from '../types/state';
import { AxiosInstance } from 'axios';
import { OffersType } from '../types/offers-types';
import { APIRoute, AppRoute, TIMEOUT_SHOW_ERROR } from '../utils/const';
import {getReviews,redirectToRoute, setError } from './actions';
import { AuthData} from '../types/auth-data-type';
import { UserData } from '../types/user-data-types';
import { dropToken, saveToken } from '../services/token';
import { store } from '.';
import { ReviewApiThing, ReviewType } from '../types/reviews-types';


export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >(
    'user/checkAuth',
    async (_arg, {extra: api}) => {
      await api.get (APIRoute.Login);
    },
  );


export const fetchOffersAction = createAsyncThunk <OffersType[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
    }
  >(
    'offers/fetchOffers',
    async (_arg, {extra:api }) => {
      const {data} = await api.get <OffersType[]> (APIRoute.offers);
      return data;
    },
  );

export const fetchTheOffer = createAsyncThunk <OffersType,OffersType['id'] , {
    dispatch: AppDispatch;
    state: State;
    extra:AxiosInstance;
    }
  >(
    'offer/fetchOffer',
    async (offerId, {extra:api}) => {
      const {data} = await api.get <OffersType> (`${APIRoute.offers}/${offerId}`);
      return data;
    },
  );


export const fetchNearbyOffers = createAsyncThunk <OffersType[],OffersType['id'] , {
    dispatch: AppDispatch;
    state: State;
    extra:AxiosInstance;
    }
  >(
    'offer/fetchNearbyOffers',
    async (offerId, {extra:api}) => {
      const {data} = await api.get <OffersType[]> (`${APIRoute.offers}/${offerId}${APIRoute.NearbyOffers}`);
      return data;
    },
  );

export const fetchReviews = createAsyncThunk<void, OffersType['id'],{
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}
>(
  '/offer/reviews',
  async (offerId,{dispatch,extra:api}) => {
    const{data} = await api.get <ReviewType[]>(`${APIRoute.Reviews}/${offerId}`);
    dispatch(getReviews(data));
  }
);

export const postReviews = createAsyncThunk<ReviewType, ReviewApiThing,{
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}
>(
  '/offer/postReview',
  async (object,{extra:api}) => {
    const {offerId,review} = object;
    const {data} = await api.post <ReviewType>(`${APIRoute.Reviews}/${offerId}`,review);
    return data;
  }
);

export const changeToFavorites = createAsyncThunk<OffersType, OffersType,{
    dispatch: AppDispatch;
    state:State;
    extra:AxiosInstance;
}
>(
  'offers/changeToFavorites',
  async({id,isFavorite}, {extra:api}) => {
    const{data} = await api.post <OffersType>(
      `${APIRoute.Favorites}/${id}/${Number(isFavorite)}`
    );
    return data;
  }
);

export const fetchFavorites = createAsyncThunk<OffersType[], OffersType[], {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >(
    'favorite/fetchFavorites',
    async (_arg, {extra: api}) => {
      const {data} = await api.get <OffersType[]> (APIRoute.Favorites);
      return data;
    },
  );

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >(
    'user/login',
    async ({login: email, password}, {dispatch, extra: api}) => {
      const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(token);
      dispatch(redirectToRoute(AppRoute.Root));
    },
  );

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >(
    'user/logout',
    async (_arg, {extra: api}) => {
      await api.delete(APIRoute.Logout);
      dropToken();
    },
  );

export const clearErrorAction = createAsyncThunk (
  'cities/setError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

