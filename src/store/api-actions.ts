import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch,State } from '../types/state';
import { AxiosInstance } from 'axios';
import { OffersType } from '../types/offers-types';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../utils/const';
import { findTheOffer, getFavoriteOffers, getNearbyOffers, getReviews, loadOffers, redirectToRoute, requireAuthorization, setError, setLoadingStatus, setUser } from './actions';
import { AuthData } from '../types/auth-data-type';
import { UserData } from '../types/user-data-types';
import { dropToken, saveToken } from '../services/token';
import { store } from '.';
import { ReviewType } from '../types/reviews-types';


export const fetchOffersAction = createAsyncThunk <void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
    }
  >(
    'offers/fetchOffers',
    async (_arg, {dispatch, extra:api }) => {

      dispatch(setLoadingStatus(true));
      const {data} = await api.get <OffersType[]> (APIRoute.offers);
      dispatch(setLoadingStatus(false));
      dispatch(loadOffers(data));//store in global store
    },
  );

// add action for displaying  a single offer by id

export const fetchTheOffer = createAsyncThunk <void,OffersType['id'] , {
    dispatch: AppDispatch;
    state: State;
    extra:AxiosInstance;
    }
  >(
    'offer/fetchOffer',
    async (offerId, {dispatch,extra:api}) => {

      const {data} = await api.get <OffersType> (`${APIRoute.offers}/${offerId}`);

      dispatch(findTheOffer(data));
    },
  );

// add action for dispalying nearby offers

export const fetchNearbyOffers = createAsyncThunk <void,OffersType['id'] , {
    dispatch: AppDispatch;
    state: State;
    extra:AxiosInstance;
    }
  >(
    'offer/fetchNearbyOffers',
    async (offerId, {dispatch,extra:api}) => {

      const {data} = await api.get <OffersType[]> (`${APIRoute.offers}/${offerId}${APIRoute.NearbyOffers}`);
      dispatch(getNearbyOffers(data));
    },
  );


// add action for dispalying existing reviews

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

// add action to post reviews

// Gotta fix the Favorites page,
//as the favorite offers are not being sent to the server just yet
export const changeToFavorites = createAsyncThunk<void, OffersType['id'],{

    dispatch: AppDispatch;
    state:State;
    extra:AxiosInstance;
}
>(
  'offers/changeToFavorites',

  async(offerId, {dispatch, extra:api}) => {
    const{data} = await api.post <OffersType[]>(`${APIRoute.offers}/${offerId}/${status}`);
    dispatch (getFavoriteOffers(data));
  }
);

export const fetchFavorites = createAsyncThunk<void, OffersType[], {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >(
    'favorite/fetchFavorites',
    async (_arg, {dispatch, extra: api}) => {
      try{
        const {data} = await api.get <OffersType[]> (APIRoute.Favorites);
        dispatch(getFavoriteOffers(data));
        // dispatch (requireAuthorization(AuthorizationStatus.Auth));
      } catch {
        dispatch (requireAuthorization(AuthorizationStatus.NoAuth));
      }
    },
  );

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
  >(
    'user/checkAuth',
    async (_arg, {dispatch, extra: api}) => {
      try {
        await api.get (APIRoute.Login);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      } catch {
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      }
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
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUser(email));
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
    async (_arg, {dispatch, extra: api}) => {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
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

