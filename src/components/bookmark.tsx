import { useNavigate } from 'react-router-dom';
import { OffersType } from '../types/offers-types';
import { AppRoute, AuthorizationStatus } from '../utils/const';
import { useAppDispatch } from '../hooks';
import { changeToFavorites } from '../store/api-actions';

type BookmarkIconSize = 'small' |'big';

type BookmarkProps = {
    offer:OffersType;
    size?: BookmarkIconSize ;
    bookmarkBlock : string;
}

const sizeMap:Record<BookmarkIconSize, {width:string;height:string}> = {
  small:{width:'18', height:'19'},
  big: {width:'31', height:'33'}
};

function Bookmark ({offer, size = 'big', bookmarkBlock}: BookmarkProps) {

  const {isFavorite } = offer;

  // const [isActive, handleFavoriteChange] = useFavoriteOffers();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleFavoriteChange = () => {
    if (!AuthorizationStatus.Auth){
      return navigate(AppRoute.Login);
    } else {
      dispatch (changeToFavorites({...offer, isFavorite: !offer.isFavorite}));
    }

  };

  return (

    <button
      onClick = {handleFavoriteChange}
      className= {isFavorite ? `${bookmarkBlock}__bookmark-button--active button` : `button ${bookmarkBlock}__bookmark-button `}
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
