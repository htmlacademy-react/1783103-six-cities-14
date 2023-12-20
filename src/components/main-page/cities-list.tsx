import { CITIES } from '../../utils/const';
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks';

import { setActiveCity } from '../../store/actions';
import { Link } from 'react-router-dom';
import { getActiveCity } from '../../store/cities-action/selectors';

const citiesArray = Object.values(CITIES);

function CitiesList() {

  const currentActiveCity = useAppSelector(getActiveCity);
  const dispatch = useAppDispatch();

  return(
    <>
      {citiesArray.map((city) => (
        <li key = {city} className="locations__item">
          <Link
            className={`locations__item-link tabs__item 
              ${city === currentActiveCity ? 'tabs__item--active' : ''}`}
            to="#"
            onClick={() => dispatch(setActiveCity(city))}
          >
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </>
  );
}

export default CitiesList;
