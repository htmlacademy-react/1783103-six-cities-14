import Logo from '../../components/logo/logo';

function NotFound(): JSX.Element {
  return (
    <div className="container">
      <div className="header__wrapper">
        <h1> 404 Page not found</h1>
        <div className="header__left">
          <Logo/>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
