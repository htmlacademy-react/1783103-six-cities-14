import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../utils/const';
import { ReactNode } from 'react';

type PrivateRouteProps = {
    authorizationStatus: AuthorizationStatus;
    children: ReactNode;
  }

function PrivateRoute({authorizationStatus, children} : PrivateRouteProps) {

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
