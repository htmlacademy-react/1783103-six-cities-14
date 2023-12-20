import { useNavigate } from 'react-router-dom';
import { OffersType } from '../types/offers-types';
import { AppRoute, AuthorizationStatus } from '../utils/const';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeToFavorites } from '../store/api-actions';
import { getAuthorizationStatus } from '../store/user-actions/selectors';
import { useState } from 'react';

type BookmarkIconSize = 'small' |'big';

type BookmarkProps = {
    offer:OffersType;
    size?: BookmarkIconSize ;
    bookmarkBlock : string;
    isFavorite: boolean;

}

const sizeMap:Record<BookmarkIconSize, {width:string;height:string}> = {
  small:{width:'18', height:'19'},
  big: {width:'31', height:'33'}
};

function Bookmark ({offer,isFavorite, size = 'big', bookmarkBlock}: BookmarkProps) {
  const currentAuthorizationStatus = useAppSelector(getAuthorizationStatus);

  const [isActive, setIsActive] = useState(isFavorite);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();


  const handleFavoriteChange = () => {
    if (currentAuthorizationStatus === AuthorizationStatus.NoAuth){
      return navigate(AppRoute.Login);
    }
    isFavorite = !isActive;
    setIsActive(isFavorite);

    dispatch(changeToFavorites({...offer, isFavorite: !offer.isFavorite}));

  };

  return (

    <button
      onClick = {() =>{
        handleFavoriteChange();
      }}
      className= {isFavorite || isActive ? `${bookmarkBlock}__bookmark-button--active button` : `button ${bookmarkBlock}__bookmark-button `}
      type="button"

    >
      <svg
        className={`${bookmarkBlock}__bookmark-icon`}
        {...sizeMap[size]}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default Bookmark;
