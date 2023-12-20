import { ChangeEvent, Fragment, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReviews } from '../../store/api-actions';
import { AuthorizationStatus } from '../../utils/const';
import { getErrorStatus } from '../../store/user-actions/selectors';
import ErrorScreen from '../../pages/error-screen';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;


type ReviewsSectionProps = {
  offerId: string | undefined;
}
function ReviewForm({offerId}:ReviewsSectionProps){
  const starReviews = {
    1: 'terribly',
    2: 'badly',
    3:'not bad',
    4: 'good',
    5: 'perfect',
  };

  // const commentRef = useRef<HTMLInputElement | null>(null);

  const [rating, setRating ] = useState('');
  const [comment, setComment] = useState('');
  const [isReviewSending, setIsReviewSending] = useState(false);

  const isValid =
    comment.length >= MIN_COMMENT_LENGTH &&
    comment.length <= MAX_COMMENT_LENGTH &&
    rating !== '';

  function handleTextAreaChange(evt:ChangeEvent<HTMLTextAreaElement>){
    setComment(evt.target.value);
  }
  function handleInputChange(evt:ChangeEvent<HTMLInputElement>){
    setRating(evt.target.value);
  }
  const dispatch = useAppDispatch();


  function handleSubmitbutton () {

    if (isValid && AuthorizationStatus.Auth){
      setIsReviewSending(true);
      const review = {
        comment: comment,
        rating : +rating,
      };
      dispatch (postReviews({offerId:offerId,review:review}));
      setComment('');
      setRating('');
    }
    setIsReviewSending(false);
  }

  const hasError = useAppSelector(getErrorStatus);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
    Your review
      </label>

      <div className="reviews__rating-form form__rating">
        {Object.entries(starReviews)
          .reverse()
          .map(([starReview,title]) => (
            <Fragment key = {starReview}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={starReview}
                id={`${starReview}-stars`}
                type="radio"
                checked = {rating === starReview}
                onChange = {handleInputChange}
                disabled = {isReviewSending}

              />
              <label
                htmlFor={`${starReview}-stars`}
                className="reviews__rating-label form__rating-label"
                title ={title}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>

          ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleTextAreaChange}

      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
        your stay with at least{' '}
          <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="button"
          disabled= {!isValid || isReviewSending}
          onClick={() => handleSubmitbutton()}
          { ...hasError ? (
            <ErrorScreen/>
          ) : (
            null
          )
          }
        >
        Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
