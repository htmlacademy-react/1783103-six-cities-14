import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../utils/const';

import styles from './not-found-page-style.module.css';

function NotFound() {
  return (
    <div className = {`page ${styles.notFoundPage}`}>
      <Helmet>
        <title>6 cities. 404 Page Not Found</title>
      </Helmet>
      <h1 className = {styles.title}> 404 Page not found</h1>
      <p className = {styles.text}>
          Get back to the {''}
        <Link to = {AppRoute.Root} className = {styles.link}>
            Main page
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
