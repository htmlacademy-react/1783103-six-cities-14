import { CITIES } from '../utils/const';
import { useAppDispatch } from '../hooks';
import { useAppSelector } from '../hooks';

import { setActiveCity } from '../store/actions';

const citiesArray = Object.values(CITIES);

function CitiesList() {

  const currentActiveCity = useAppSelector((state) => state.activeCity);
  const dispatch = useAppDispatch();

  return(
    <>
      {citiesArray.map((city) => (
        <li key = {city} className="locations__item">
          <a
            className={`locations__item-link tabs__item 
              ${city === currentActiveCity ? 'tabs__item--active' : ''}`}
            href="#"
            onClick={() => dispatch(setActiveCity(city))}
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </>
  );
}

export default CitiesList;
