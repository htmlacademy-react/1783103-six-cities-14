import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../utils/const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchFavorites, logoutAction} from '../../../store/api-actions';
import { getFavoriteOffers } from '../../../store/cities-action/selectors';
import { getAuthorizationStatus } from '../../../store/user-actions/selectors';
import { useEffect, useState } from 'react';

function Navigation () {
  const dispatch = useAppDispatch();

  const [userEmail, setUserEmail] = useState<string | []>([]);

  useEffect(() => {
    const userName =  JSON.parse(localStorage.getItem('userEmail'));
    if(userEmail){
      setUserEmail(userName);
    }
  },[]);

  const favorites = useAppSelector(getFavoriteOffers);

  useEffect(() => {
    dispatch(fetchFavorites(favorites));
  }, []);

  const numberOfFavorites = favorites.length;
  const currentAuthorizationStatus = useAppSelector(getAuthorizationStatus);

  return(
    <nav className="header__nav">
      {currentAuthorizationStatus === AuthorizationStatus.Auth ? (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Favorites}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">
                {userEmail}
              </span>
              <span className="header__favorite-count">{numberOfFavorites}</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link
              className="header__nav-link"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
              to='/'
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="header__nav-list">

          <li className="header__nav-item">
            <Link
              className="header__nav-link"
              to={AppRoute.Login}
            >
              <span className="header__signout">Sign in</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
