import { ReviewType } from '../../mocks/review-mocks';
import ReviewForm from './review-form';

type ReviewSectionProps = {
    reviews: ReviewType[];
}

function ReviewsSection(props:ReviewSectionProps): JSX.Element {
  const{reviews} = props;


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
              <time className="reviews__time" dateTime={review.date}>
                {review.date}
              </time>
            </div>
          </li>
        </ul>
      ))}
      <ReviewForm/>
    </section>
  );
}

export default ReviewsSection;

