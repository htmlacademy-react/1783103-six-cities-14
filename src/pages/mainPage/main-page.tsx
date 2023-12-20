import {OffersType} from '../../types/offers-types';
import CitiesList from '../../components/main-page/cities-list';
import { useAppSelector } from '../../hooks';
import { useMemo} from 'react';
import PageHeader from '../../components/main-page/header/header';
import { getActiveCity } from '../../store/cities-action/selectors';
import MainPagePlaces from '../../components/main-page/main-page-places';
import MainPageNoPlaces from '../../components/main-page/main-page-empty';

type MainPageProps = {
  offers: OffersType[];
}

function MainPage({offers}: MainPageProps) {

  const offersActiveCity = useAppSelector(getActiveCity);
  const offersByCity = useMemo(() => offers.filter((item)=> item.city?.name === offersActiveCity),[offers, offersActiveCity]);
  const placesCount = offersByCity.length;
  // const placesCount = 0;

  return (
    <div className="page page--gray page--main">
      <PageHeader/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CitiesList/>
            </ul>
          </section>
        </div>
        <div className="cities">
          {placesCount ? (
            <MainPagePlaces
              placesCount = {placesCount}
              offersActiveCity = {offersActiveCity}
              offersByCity={offersByCity}
            />
          ) : (
            <MainPageNoPlaces
              offersActiveCity = {offersActiveCity}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default MainPage;

