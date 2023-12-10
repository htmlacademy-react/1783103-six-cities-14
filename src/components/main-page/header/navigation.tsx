import { Link } from 'react-router-dom';
import { AppRoute } from '../../../utils/const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { logoutAction } from '../../../store/api-actions';
import { getFavoriteOffers } from '../../../store/cities-action/selectors';
import { getUserName } from '../../../store/user-actions/selectors';


function Navigation () {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(getUserName);
  const favorites = useAppSelector(getFavoriteOffers);
  const numberOfFavorites = favorites.length;
  return(
    <nav className="header__nav">
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
    </nav>
  );
}

export default Navigation;
