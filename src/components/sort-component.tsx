import { useAppDispatch, useAppSelector } from '../hooks';
import { SortOptions } from '../utils/const';
import { getSortedOffers, getSortingOption } from '../store/actions';
import { OffersType } from '../types/offers-types';
import { useState } from 'react';
// import { sortByPriceDown, sortByPriceUp, sortByRating } from '../utils/sort';


// const sort = {

//   [SortOptions.Popular]:(offers) => offers,
//   [SortOptions.PriceUp]:(offers) => offers.toSorted(sortByPriceUp),
//   [SortOptions.PriceDown]:(offers) => offers.toSorted(sortByPriceDown),
//   [SortOptions.ByRating]:(offers) => offers.toSorted(sortByRating),

// };

// function sortByPriceUp(OfferA:OffersType, OfferB:OffersType) {

//   return OfferA.price - OfferB.price;
// };

// function sortByPriceDown(OfferA:OffersType, OfferB:OffersType) {

//     return OfferB.price - OfferA.price;

//   }

//   function sortByRating(OfferA:OffersType, OfferB:OffersType) {

//     return OfferB.rating - OfferA.rating;
//   }

const SortOptionsArray = Object.values(SortOptions);

// type SortComponentProps = {
//     currentActiveSortOption:SortOptions;
//     offers: OffersType[];
// }


// const sortingOffers (offers:OffersType[],activeSortOption:SortOptions){
// // debugger
//   switch (activeSortOption) {
//     case SortOptions.PriceUp:
//       return offers.toSorted ((OfferA:OffersType,OfferB:OffersType) => (OfferA.price - OfferB.price));
//     case SortOptions.PriceDown:
//       return offers.toSorted ((OfferA:OffersType,OfferB:OffersType) => (OfferB.price - OfferA.price));
//     case SortOptions.ByRating:
//       return offers.toSorted ((OfferA:OffersType,OfferB:OffersType) => (OfferA.rating - OfferB.rating));
//     default:
//       return offers;
//   }
// }


function SortComponent() {

  const currentActiveSortOption = useAppSelector((state) => state.sortingOption);
  const sortedOffers = useAppSelector ((state) => state.sortedOffers);
  const offersByCity = useAppSelector((state) => state.filteredOffers);
  const dispatch = useAppDispatch();

  const sortingOffers = (activeSortOption:SortOptions) => {
    dispatch (getSortingOption(activeSortOption));
    switch (activeSortOption) {
      case SortOptions.PriceUp:
        return offersByCity.toSorted ((OfferA:OffersType,OfferB:OffersType) => (OfferA.price - OfferB.price));
      case SortOptions.PriceDown:
        return offersByCity.toSorted ((OfferA:OffersType,OfferB:OffersType) => (OfferB.price - OfferA.price));
      case SortOptions.ByRating:
        return offersByCity.toSorted ((OfferA:OffersType,OfferB:OffersType) => (OfferA.rating - OfferB.rating));
      default:
        offersByCity.toSorted ((OfferA:OffersType,OfferB:OffersType) => (OfferB.price - OfferA.price));
    }
    dispatch (getSortedOffers(sortedOffers));
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
