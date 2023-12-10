import { ChangeEvent, Fragment, MouseEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { postReviews } from '../../store/api-api-actions';
import { AuthorizationStatus } from '../../utils/const';


const MIN_COMMENT_LENGTH = 1;
const MAX_COMMENT_LENGTH = 250;

type ReviewsSectionProps = {
  offerId: string;
}

function ReviewForm({offerId}:ReviewsSectionProps){
  const starReviews = {
    1: 'terribly',
    2: 'badly',
    3:'not bad',
    4: 'good',
    5: 'perfect',
  };

  const [rating, setRating ] = useState('');
  const [comment, setComment] = useState('');

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

  const handleSubmitbutton = (evt: MouseEvent <HTMLFormElement>) => {
    evt.preventDefault();
    if (isValid && AuthorizationStatus.Auth){

      const review = {
        comment: comment,
        rating : +rating,
      };
      dispatch (postReviews({offerId:offerId,review:review}));
    }

  };


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
                // ref = {ratingRef}
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
        defaultValue={''}
        onChange = {handleTextAreaChange}
        // ref = {commentRef}
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
          type="submit"
          disabled= {!isValid}
          onClick={() => handleSubmitbutton}
        >
        Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
