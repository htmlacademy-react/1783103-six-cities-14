
import {State} from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../utils/const';


export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthCheckedStatus = (state: State): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;
export const getUserName = (state:State): string | undefined => state[NameSpace.User].userName;
export const getLoginAction = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getLogoutAction = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getErrorStatus = (state: State): boolean => state[NameSpace.User].hasError;
