// import {useState} from 'react';
// import { useAppDispatch } from '.';
// import { changeToFavorites } from '../store/api-actions';

// type ResultUserAnswers = [boolean, (id: string, isFavorite:boolean) => void];

// export const useFavoriteOffers = () : ResultUserAnswers => {
//   const dispatch = useAppDispatch();

//   const [isActive, setIsActive] = useState(false);

//   const handleFavoriteChange = (id:string) => {

//     const isFavorite = !isActive;
//     setIsActive(isFavorite);
//     dispatch(changeToFavorites({id,isFavorite}));
//   };

//   return [isActive, handleFavoriteChange];
// };
