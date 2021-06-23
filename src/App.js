import {Fragment} from 'react';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import MainComponent from './components/MainComponent/MainComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {
  return (
    <Fragment>
      <HeaderComponent />
      <MainComponent />
      <FooterComponent />
    </Fragment>
  );
}

export default App;
