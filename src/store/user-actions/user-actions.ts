import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../utils/const';
import { UserProcess } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-api-actions';
import { setUser } from '../actions';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userName: undefined,
  hasError: false,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase (checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase (checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.hasError = true;
      })
      .addCase (loginAction. fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase (loginAction. rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.hasError = true;
      })
      .addCase (logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase (setUser, (state,action) => {
        state.userName = action.payload;
      });
  }
});
