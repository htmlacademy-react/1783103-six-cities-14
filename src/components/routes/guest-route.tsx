import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../utils/const';


type GuestRouteProps = {
    authorizationStatus: AuthorizationStatus;
    children: ReactNode;
  }

function GuestRoute({authorizationStatus, children} : GuestRouteProps) {

  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ? children
      : <Navigate to={AppRoute.Root} />
  );
}

export default GuestRoute;
