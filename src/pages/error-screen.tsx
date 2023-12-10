import { useAppDispatch } from '../hooks';
import { checkAuthAction } from '../store/api-actions';


function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <p className="error__text">Не удалось войти в профиль</p>
      <button
        onClick={() => {
          dispatch(checkAuthAction());
        }}
        className="replay replay--error"
        type="button"
      >
        Попробовать ещё раз
      </button>
    </>
  );
}

export default ErrorScreen;
