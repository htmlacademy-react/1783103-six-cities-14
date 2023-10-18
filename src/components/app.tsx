import MainPage from '../pages/mainPage/main-page';

type AppMainPageProps = {
    placesCount: number;
  }

function App({placesCount}:AppMainPageProps): JSX.Element {
  return (
    <MainPage placesCount = {placesCount} />
  );
}

export default App;
