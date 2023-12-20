import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReviews } from '../../store/api-actions';
import ReviewForm from './review-form';
import { useEffect } from 'react';
import { getReviews } from '../../store/offers-action/selectors';
import { getAuthorizationStatus } from '../../store/user-actions/selectors';
import { AuthorizationStatus, DATE_FORMAT } from '../../utils/const';
import dayjs from 'dayjs';


function ReviewsSection(){
  const {offerId} = useParams();
  const dispatch = useAppDispatch();
  const currentAuthorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect (() => {
    if (offerId) {
      dispatch(fetchReviews(offerId));
    }
  },[dispatch,offerId]);

  const reviews = useAppSelector(getReviews);

  function formatDate(item:string){
    return dayjs(item).format(DATE_FORMAT);
  }

  return(

    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
      Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      {reviews.map((review) => (
        <ul key = {review.id} className="reviews__list">
          <li className="reviews__item">

            <div key = {review.user.id} className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={review.user.avatarUrl}
                  width={54}
                  height={54}
                  alt = {review.user.avatarUrl}
                />
              </div>
              <span className="reviews__user-name">{review.user.name}</span>
            </div>

            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: '80%' }} />
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {review.comment}
              </p>
              <time className="reviews__time" dateTime={formatDate(review.date)}>
                {formatDate(review.date)}
              </time>
            </div>
          </li>
        </ul>
      ))}
      {currentAuthorizationStatus === AuthorizationStatus.Auth ? (
        <ReviewForm
          offerId= {offerId}
        />
      ) : (
        null
      )}

    </section>
  );
}

export default ReviewsSection;

