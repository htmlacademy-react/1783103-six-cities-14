import { useAppSelector } from '../hooks';
import { getUserName } from '../store/user-actions/selectors';


function ErrorMessage(): JSX.Element|null {
  const error = useAppSelector(getUserName);
  return (error)
    ? <div className='error-message'>{error}</div>
    : null;
}

export default ErrorMessage;

