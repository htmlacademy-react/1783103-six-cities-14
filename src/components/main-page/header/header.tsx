import Logo from './logo';
import Navigation from './navigation';

function PageHeader() {
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <Navigation/>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;
