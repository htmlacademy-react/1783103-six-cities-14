import { useAppDispatch, useAppSelector } from '../hooks';
import { SortOptions } from '../utils/const';
import { getSortedOffers, getSortingOption } from '../store/actions';
import { OffersType } from '../types/offers-types';
import { useState } from 'react';

const SortOptionsArray = Object.values(SortOptions);

function SortComponent() {

  const currentActiveSortOption = useAppSelector((state) => state.sortingOption);
  let sortedOffers = useAppSelector ((state) => state.sortedOffers);

  const dispatch = useAppDispatch();

  const sortingOffers = (activeSortOption:SortOptions) => {

    dispatch (getSortingOption(activeSortOption));
    switch (activeSortOption) {
      case SortOptions.PriceUp:
        sortedOffers = sortedOffers.toSorted ((OfferA:OffersType,OfferB:OffersType) => (OfferA.price - OfferB.price));
        break;
      case SortOptions.PriceDown:
        sortedOffers = sortedOffers.toSorted ((OfferA:OffersType,OfferB:OffersType) => (OfferB.price - OfferA.price));
        break;
      case SortOptions.ByRating:
        sortedOffers = sortedOffers.toSorted((OfferA:OffersType,OfferB:OffersType) => (OfferA.rating - OfferB.rating));
        break;
      default:
        sortedOffers.toSorted ((OfferA:OffersType,OfferB:OffersType) => (OfferB.price - OfferA.price));
    }
    dispatch (getSortedOffers(sortedOffers));
    return sortedOffers;

  };


  const [isOpened, setIsOpened] = useState(false);
  function handleClick() {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  }
  //Need to add close on esc button;


  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick = {handleClick}>
        {currentActiveSortOption}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened && 'places__options--opened'}`}>
        {SortOptionsArray.map((activeSortOption) => (
          <li key = {activeSortOption}
            className={`places__option
                ${activeSortOption === currentActiveSortOption ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => {
              sortingOffers(activeSortOption);
              handleClick();
            }}
          >
            {activeSortOption}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortComponent;
